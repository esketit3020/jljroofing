import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "JLJ Roofing Melbourne | Roof Restorations, Repairs & Replacements",
  description: "Roof restorations, repairs and replacements across Melbourne. Speak with JLJ Roofing about your roof and request a free quote. Call 0423 850 602.",
  icons: { icon: "/favicon.svg" },
  // This is a proposal website; enable indexing when the business approves its content.
  robots: { index: false, follow: false },
  openGraph: { title: "JLJ Roofing Melbourne", description: "A better roof. A better-protected home.", locale: "en_AU", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
