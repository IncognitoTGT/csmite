import type { Metadata } from "next";
import { Providers } from "@/providers";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import {
  Home,
  NotebookPen,
  Strikethrough,
  Download,
  HelpCircle,
} from "lucide-react";
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
        <Providers>
          <ThemeSwitch />
          <nav className="sticky top-0 w-full flex flex-row p-5 pb-8 mx-auto bg-base/40 backdrop-blur-3xl">
            <div className="absolute left-5 font-mono font-bold text-text text-4xl top-3">
              Cryptosmite
            </div>
            <div className="flex flex-row flex-grow justify-center items-center text-blue font-sans font-medium text-xl">
              <Link href="/" className="mx-4 hover:text-mauve outline-none">
                <Home className="h-5 w-5 mr-2 inline" />
                Home
              </Link>
              <Link
                href="/writeup"
                className="mx-4 hover:text-mauve outline-none"
              >
                <NotebookPen className="h-5 w-5 mr-2 inline" />
                The Writeup
              </Link>
              <Link
                href="/smiting"
                className="mx-4 hover:text-mauve outline-none"
              >
                <Strikethrough className="h-5 w-5 mr-2 inline" />
                Smiting
              </Link>
              <Link
                href="/download"
                className="mx-4 hover:text-mauve outline-none"
              >
                <Download className="h-5 w-5 mr-2 inline" />
                Download
              </Link>
              <Link href="faq" className="mx-4 hover:text-mauve outline-none">
                <HelpCircle className="h-5 w-5 mr-2 inline" />
                FAQ
              </Link>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
