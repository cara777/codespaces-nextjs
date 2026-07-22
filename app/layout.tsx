import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "계성ON",
  description: "AI 공모전 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}