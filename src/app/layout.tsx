import type { Metadata } from "next";
import { Providers } from './providers'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cryptosmite",
  description: "uwu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" >
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
