"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThemeSwitch from "@/app/themeSwitch";
export default function Download() {
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
          <li className="underline text-text">Smiting</li>
        </ul>
      </nav>
      <ThemeSwitch />
      <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center mt-6 mx-1/2">
        Step 2 - Download your image
      </div>
      <div className="flex text-lg text-text font-sans leading-relaxed justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
        <div className="flex-col">
          &nbsp;First, you need to get your Chromebook&apos;s board number. Note
          that this is NOT the codename of your device. To find your board, go
          to chrome://version, and next to &quot;Platform&quot;, in the end of
          that line, you should see a funny name. After you got your board name,
          go to the&nbsp;
          <Link className="text-blue hover:underline" href="/download">
            Downloads
          </Link>{" "}
          page and download the image for your board.
          <Image
            src="/images/boardname.png"
            width={1000}
            height={500}
            alt="Board name"
          />
        </div>
      </div>
      <footer className="flex flex-row font-sans justify-center text-2xl text-mauve items-center text-mono bottom-2">
        <ChevronLeft className="h-10 w-10" />
        <Link href="/smiting/step1" className="hover:underline">
          Previous
        </Link>
        <div className="mx-5">|</div>
        <Link href="/smiting/step3" className="hover:underline">
          Next
        </Link>
        <ChevronRight className="h-10 w-10" />
      </footer>
    </main>
  );
}
