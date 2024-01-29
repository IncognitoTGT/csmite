"use client";
import Link from "next/link";
import ThemeSwitch from "@/app/themeSwitch";
export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col justify-between p-5 mx-auto overflow-y-auto bg-base`}
    >
      <nav className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold font-mono text-text mt-6">
          Cryptosmite
        </h1>
        <ul className="nav">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="underline text-text">The Writeup</li>
          <li className="hover:underline">
            <Link href="/smiting">Smiting</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitch />
      <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center mt-6 mx-1/2">
        The way Cryptosmite works
      </div>
      <p className="flex text-lg text-text font-sans justify-center items-center mt-6 mx-1/2">
        {/* Insert writeup here */}
        Writeup is pasted here, please replace
      </p>
    </main>
  );
}