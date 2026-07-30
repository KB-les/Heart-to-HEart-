import type { Metadata } from "next";
import "./globals.css";
import { SoundProvider } from "@/context/SoundContext";
import { PeerProvider } from "@/context/PeerContext";
import { BackgroundParticles } from "@/components/ui/BackgroundParticles";

export const metadata: Metadata = {
  title: "Heart to Heart - Growing closer to Jehovah together",
  description:
    "A peaceful interactive family worship application designed for Karabelo and Yolanda to enjoy meaningful Bible discussions together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-cream-50 text-forest-900 antialiased font-sans overflow-x-hidden selection:bg-gold-300 selection:text-forest-900">
        <PeerProvider>
          <SoundProvider>
            <BackgroundParticles />
            <main className="relative z-10 min-h-screen flex flex-col justify-between">
              {children}
            </main>
          </SoundProvider>
        </PeerProvider>
      </body>
    </html>
  );
}
