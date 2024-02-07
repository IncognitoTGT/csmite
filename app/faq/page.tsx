import NavBar from "@/NavBar";
import Link from "next/link";
export default function FAQ() {
  return (
    <>
      <NavBar />
      <main className="flex-col justify-between p-5 mx-auto bg-base">
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center">
          FAQ
        </div>
        <div className="flex flex-col text-lg text-text font-sans leading-loose justify-center w-[1000px] items-center mt-6 pb-5 mx-auto space-y-2">
          <h1 className="text-2xl font-sans font-bold text-mauve">
            I don&apos;t have a flashdrive, can you send me one?
          </h1>
          no u
          <h1 className="text-2xl font-sans font-bold text-mauve">
            Why is this not out yet?
          </h1>
          It is, that&apos;s why the website is up.
          <h1 className="text-2xl font-sans font-bold text-mauve">
            How to download?
          </h1>
          <Link
            href="/download"
            className="text-blue hover:text-mauve underline underline-offset-2 outline-none"
          >
            Download
          </Link>
          <h1 className="text-2xl font-sans font-bold text-mauve">
            Why are ARM boards not currently supported?
          </h1>
          A built in ChromeOS function does not work on ARM, and support will
          take a lot of time.
          <h1 className="text-2xl font-sans font-bold text-mauve">
            I&apos;m a panicking sysadmin
          </h1>
          calm down and don&apos;t worry about this.
        </div>
      </main>
    </>
  );
}