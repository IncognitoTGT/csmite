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
          <li className="hover:underline">
            <Link href="/writeup">The Writeup</Link>
          </li>
          <li className="hover:underline">
            <Link href="/smiting">Smiting</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitch />
      <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center mt-6 mx-1/2">
        Download Images
      </div>
      <div className="flex text-lg text-text font-sans justify-center items-center w-[1000px] flex-col mx-auto mt-6 mx-1/2">
        Here, you will find the Cryptosmite images for your Chromebook. These
        images are the name of your BOARD, not the codename of your device.
        <br />
        <input
          type="text"
          className="border-2 border-mauve rounded-md p-2 mt-2 bg-surface0 focus:outline-none"
          placeholder="Search for your board"
        />
      </div>
    </main>
  );
}
