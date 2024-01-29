import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import { Home, NotebookPen, Strikethrough, Download } from "lucide-react";
export default function NavBar() {
  return (
    <>
      <ThemeSwitch />
      <nav className="sticky top-0 z-50 w-full flex flex-row p-5 mx-auto bg-base/40 backdrop-blur-3xl">
        <div className="left-1 font-mono font-bold text-text text-4xl">
          Cryptosmite
        </div>
        <div className="flex flex-row flex-grow justify-end items-center text-blue font-sans font-medium translate-y-2 text-xl -mr-2">
          <Link href="/" className="mx-4 hover:text-mauve">
            <Home className="h-5 w-5 mr-2 inline" />
            Home
          </Link>
          <Link href="/writeup" className="mx-4 hover:text-mauve">
            <NotebookPen className="h-5 w-5 mr-2 inline" />
            The Writeup
          </Link>
          <Link href="/smiting" className="mx-4 hover:text-mauve">
            <Strikethrough className="h-5 w-5 mr-2 inline" />
            Smiting
          </Link>
          <Link href="/download" className="mx-4 hover:text-mauve">
            <Download className="h-5 w-5 mr-2 inline" />
            Download
          </Link>
        </div>
      </nav>
    </>
  );
}
