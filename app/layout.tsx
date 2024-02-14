import type { Metadata } from "next";
import { Providers } from "@/providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
export const metadata: Metadata = {
  title: "Cryptosmite",
  description: "A new way to unenroll Chromebooks",
  metadataBase: new URL("https://fw.asyncsmasher.com"),
  openGraph: {
    title: "Cryptosmite",
    description: "A new way to unenroll Chromebooks",
    type: "website",
    url: "https://fw.asyncsmasher.com",
    images: "/icon.jpeg",
  },
  other: {
    "darkreader-lock": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-base selection:bg-surface2/60 overflow-scroll`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
