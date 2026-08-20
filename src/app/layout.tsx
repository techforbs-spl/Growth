import type { Metadata } from "next";
import "@fontsource/rubik-one/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Growth Inc. — Marketing at a human pace",
  description:
    "The Growth Inc. is a performance marketing partner for mid-market B2B companies. AI SEO, paid search, paid social and website development, measured against pipeline — not clicks.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
