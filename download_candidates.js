// Temporary helper: download jw.org candidate images for visual verification.
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT = path.join('temp', 'img');

const images = {
  // Bible Character Cards (verified 200 earlier)
  char_joseph: 'https://cms-imgp.jw-cdn.org/img/p/502012428/univ/art/502012428_univ_sqr_xl.jpg',
  char_david: 'https://cms-imgp.jw-cdn.org/img/p/502012432/univ/art/502012432_univ_sqr_xl.jpg',
  char_abraham: 'https://cms-imgp.jw-cdn.org/img/p/502012398/univ/art/502012398_univ_sqr_xl.jpg',
  char_ruth: 'https://cms-imgp.jw-cdn.org/img/p/502012396/univ/art/502012396_univ_sqr_xl.jpg',
  char_esther: 'https://cms-imgp.jw-cdn.org/img/p/502012397/univ/art/502012397_univ_sqr_xl.jpg',
  char_moses: 'https://cms-imgp.jw-cdn.org/img/p/502012438/univ/art/502012438_univ_sqr_xl.jpg',
  char_daniel: 'https://cms-imgp.jw-cdn.org/img/p/502012395/univ/art/502012395_univ_sqr_xl.jpg',
  char_samuel: 'https://cms-imgp.jw-cdn.org/img/p/502012431/univ/art/502012431_univ_sqr_xl.jpg',
  char_peter: 'https://cms-imgp.jw-cdn.org/img/p/502012424/univ/art/502012424_univ_sqr_xl.jpg',
  char_paul: 'https://cms-imgp.jw-cdn.org/img/p/502012436/univ/art/502012436_univ_sqr_xl.jpg',
  // Story / article candidates for nature, animals, devotional themes
  creation: 'https://cms-imgp.jw-cdn.org/img/p/1101978053/univ/art/1101978053_univ_lsr_lg.jpg',
  garden: 'https://cms-imgp.jw-cdn.org/img/p/1101978054/univ/art/1101978054_univ_lsr_lg.jpg',
  flood: 'https://cms-imgp.jw-cdn.org/img/p/1101978062/univ/art/1101978062_univ_lsr_lg.jpg',
  rainbow: 'https://cms-imgp.jw-cdn.org/img/p/1101978064/univ/art/1101978064_univ_lsr_lg.jpg',
  noah_ill: 'https://cms-imgp.jw-cdn.org/img/p/502016257/univ/art/502016257_univ_lsr_lg.jpg',
  david_king: 'https://cms-imgp.jw-cdn.org/img/p/1101978112/univ/art/1101978112_univ_lsr_lg.jpg',
  ruth_story: 'https://cms-imgp.jw-cdn.org/img/p/1101978105/univ/art/1101978105_univ_lsr_lg.jpg',
  lions: 'https://cms-imgp.jw-cdn.org/img/p/1101978135/univ/art/1101978135_univ_lsr_lg.jpg',
  samson: 'https://cms-imgp.jw-cdn.org/img/p/1101978108/univ/art/1101978108_univ_lsr_lg.jpg',
  jonah: 'https://cms-imgp.jw-cdn.org/img/p/1101978125/univ/art/1101978125_univ_lsr_lg.jpg',
  star: 'https://cms-imgp.jw-cdn.org/img/p/1101978143/univ/art/1101978143_univ_lsr_lg.jpg',
  paradise: 'https://cms-imgp.jw-cdn.org/img/p/1101978174/univ/art/1101978174_univ_lsr_lg.jpg',
  shipwreck: 'https://cms-imgp.jw-cdn.org/img/p/1101978170/univ/art/1101978170_univ_lsr_lg.jpg',
  sermon: 'https://cms-imgp.jw-cdn.org/img/p/1101978148/univ/art/1101978148_univ_lsr_lg.jpg',
  samaritan: 'https://cms-imgp.jw-cdn.org/img/p/1101978147/univ/art/1101978147_univ_lsr_lg.jpg',
  balaam: 'https://cms-imgp.jw-cdn.org/img/p/1101978096/univ/art/1101978096_univ_lsr_lg.jpg',
  joshua: 'https://cms-imgp.jw-cdn.org/img/p/1101978092/univ/art/1101978092_univ_lsr_lg.jpg',
  sun_stands: 'https://cms-imgp.jw-cdn.org/img/p/1101978103/univ/art/1101978103_univ_lsr_lg.jpg',
  elijah: 'https://cms-imgp.jw-cdn.org/img/p/1101978123/univ/art/1101978123_univ_lsr_lg.jpg',
  mountolives: 'https://cms-imgp.jw-cdn.org/img/p/1101978155/univ/art/1101978155_univ_lsr_lg.jpg',
  job: 'https://cms-imgp.jw-cdn.org/img/p/1101978079/univ/art/1101978079_univ_lsr_lg.jpg',
  wt_patience2017: 'https://cms-imgp.jw-cdn.org/img/p/2017521/univ/art/2017521_univ_sqr_xl.jpg',
  wt_patient2023: 'https://cms-imgp.jw-cdn.org/img/p/2023527/univ/art/2023527_univ_sqr_xl.jpg',
};

function download(name, url) {
  return new Promise((resolve) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode !== 200) {
          console.log(name, 'FAIL', res.statusCode);
          res.resume();
          resolve(false);
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          fs.writeFileSync(path.join(OUT, name + '.jpg'), Buffer.concat(chunks));
          console.log(name, 'OK');
          resolve(true);
        });
      })
      .on('error', (e) => {
        console.log(name, 'ERR', e.message);
        resolve(false);
      });
  });
}

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  const entries = Object.entries(images);
  let i = 0;
  async function worker() {
    while (i < entries.length) {
      const [name, url] = entries[i++];
      await download(name, url);
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  console.log('done');
}

main();
