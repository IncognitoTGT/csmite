import type { Metadata } from "next";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cryptosmite",
  description: "uwtestu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} scrollbar-thin scrollbar-track-base hover:scrollbar-thumb-surface1 scrollbar-thumb-surface0 scrollbar-rounded scrollbar-thumb-rounded-full`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
