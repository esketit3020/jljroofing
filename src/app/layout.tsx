import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "JLJ Roofing Melbourne | Roof Restorations, Repairs & Replacements",
  description: "JLJ Roofing provides roof restorations, roof repairs, emergency repairs and replacements across metropolitan Melbourne. Enquire about your roof or call 0423 850 602.",
  icons: { icon: "/favicon.svg" },
  robots: { index: false, follow: false },
  openGraph: { title: "JLJ Roofing Melbourne", description: "Your roof. Looked after. Your home. Protected.", locale: "en_AU", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
