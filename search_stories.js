// Temporary helper: harvest jw.org illustration image URLs from Bible story indexes.
const https = require('https');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function main() {
  const indexes = [
    'https://www.jw.org/en/library/books/bible-stories/',
    'https://www.jw.org/en/bible-teachings/children/illustrated-bible-stories/',
  ];

  const storyLinks = new Set();
  for (const idx of indexes) {
    try {
      const html = await fetch(idx);
      const matches = html.match(/href="\/en\/[^"]+"/g) || [];
      for (const m of matches) {
        const path = m.slice(6, -1);
        if (path.includes('/bible-stories/') || path.includes('/illustrated-bible-stories/')) {
          storyLinks.add(path);
        }
      }
    } catch (e) {
      console.error('index failed', idx, e.message);
    }
  }

  const links = Array.from(storyLinks).filter(
    (l) => !l.endsWith('/bible-stories/') && !l.endsWith('/illustrated-bible-stories/')
  );
  console.log('story links:', links.length);

  const results = [];
  let i = 0;
  async function worker() {
    while (i < links.length) {
      const link = links[i++];
      try {
        const html = await fetch('https://www.jw.org' + link);
        const imgMatch = html.match(/https:\/\/cms-imgp\.jw-cdn\.org\/img\/[^"'\s]+?\.jpg/);
        const titleMatch = html.match(/<title>([^<]+)<\/title>/);
        results.push({
          link,
          title: titleMatch ? titleMatch[1].replace(/ \|.*$/, '').trim() : '',
          img: imgMatch ? imgMatch[0] : '',
        });
      } catch (e) {
        results.push({ link, title: '', img: 'ERR ' + e.message });
      }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  results.sort((a, b) => a.link.localeCompare(b.link));
  fs.writeFileSync(
    'jw_story_images.tsv',
    results.map((r) => [r.title, r.img, r.link].join('\t')).join('\n'),
    'utf8'
  );
  console.log('saved jw_story_images.tsv with', results.length, 'rows');
}

main();

