import Link from "next/link";
import ThemeSwitch from "@/app/themeSwitch";
export default function NotFound() {
  return (
    <main
      className={`min-h-screen flex-col justify-between p-5 mx-auto overflow-y-auto bg-base`}
    >
      <nav className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold font-mono text-text mt-6">
          Cryptosmite
        </h1>
        <ul className="flex list-none mt-6 text-blue text-3xl font-sans font-extrabold right-1 flex-row space-x-5">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/writeup">The Writeup</Link>
          </li>
          <li className="hover:underline">
            <Link href="/smiting">Smiting</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitch />
      <div className="flex text-5xl text-mauve font-bold font-mono m-6 justify-center items-center">
        404
      </div>
      <p className="flex text-2xl text-text font-sans justify-center items-center mt-6 mx-1/2">
        Page not found
      </p>
    </main>
  );
}
