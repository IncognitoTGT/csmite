import type { Metadata } from "next";
import { Providers } from "@/providers";
import { Rubik, Inconsolata } from "next/font/google";
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
    images: "/fwsmasher.jpeg",
  },
  other: {
    "darkreader-lock": "",
  },
};
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});
const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const linkIconClasses = "md:h-5 md:w-5 w-6 h-6 mr-2 inline";
  const links: {
    href: string;
    text: string;
    icon: React.ReactNode;
  }[] = [
    {
      href: "/",
      text: "Home",
      icon: <Home className={linkIconClasses} />,
    },
    {
      href: "/writeup",
      text: "The Writeup",
      icon: <NotebookPen className={linkIconClasses} />,
    },
    {
      href: "/smiting",
      text: "Smiting",
      icon: <Strikethrough className={linkIconClasses} />,
    },
    {
      href: "/download",
      text: "Download",
      icon: <Download className={linkIconClasses} />,
    },
    {
      href: "faq",
      text: "FAQ",
      icon: <HelpCircle className={linkIconClasses} />,
    },
  ];
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${rubik.variable} ${inconsolata.variable} bg-base selection:bg-surface2/60 overflow-scroll`}
      >
        <Providers>
          <ThemeSwitch />
          <nav className="fixed top-0 p-5 bg-mantle/40 backdrop-blur-3xl w-full md:w-64  md:h-screen justify-end flex-grow">
            <div className="font-mono font-bold text-text text-3xl pb-4 text-center">
              Cryptosmite
            </div>
            <div className="flex flex-col text-blue font-sans font-medium text-xl md:flex-grow md:justify-end flex-grow-0 justify-between -mt-3">
              <div className="flex flex-row md:flex-col justify-center">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="my-4 outline-none text-blue mx-2 text-center hover:text-mauve"
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="md:ml-64 md:mt-0 mt-48 ">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
