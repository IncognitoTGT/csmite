import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <ThemeSwitch />
      <nav className="sticky top-0 z-50 w-full flex flex-row p-5 mx-auto overflow-y-auto bg-base">
        <div className="left-1 font-mono font-bold text-text text-4xl">
          Cryptosmite
        </div>
        <div className="flex flex-row flex-grow justify-end text-blue font-sans font-medium translate-y-2 text-xl">
          <Link href="/" className="mx-4 hover:text-sky">
            Home
          </Link>
          <Link href="/writeup" className="mx-4 hover:text-sky">
            The Writeup
          </Link>
          <Link href="/smiting" className="mx-4 hover:text-sky">
            Smiting
          </Link>
          <Link href="/download" className="mx-4 hover:text-sky">
            Download
          </Link>
        </div>
      </nav>
    </>
  );
}
