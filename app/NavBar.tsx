import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import {
  Home,
  NotebookPen,
  Strikethrough,
  Download,
  HelpCircle,
} from "lucide-react";
export default function NavBar() {
  return (
    <>
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
          <Link href="/writeup" className="mx-4 hover:text-mauve outline-none">
            <NotebookPen className="h-5 w-5 mr-2 inline" />
            The Writeup
          </Link>
          <Link href="/smiting" className="mx-4 hover:text-mauve outline-none">
            <Strikethrough className="h-5 w-5 mr-2 inline" />
            Smiting
          </Link>
          <Link href="/download" className="mx-4 hover:text-mauve outline-none">
            <Download className="h-5 w-5 mr-2 inline" />
            Download
          </Link>
          <Link href="faq" className="mx-4 hover:text-mauve outline-none">
            <HelpCircle className="h-5 w-5 mr-2 inline" />
            FAQ
          </Link>
        </div>
      </nav>
    </>
  );
}
