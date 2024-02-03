import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavBar from "@/NavBar";
export default function SmiteOne() {
  return (
    <>
      <NavBar />
      <main className={`flex-col justify-between p-5 mx-auto  bg-base`}>
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Step 1 - Find your board name
        </div>
        <div className="flex text-lg text-text font-sans leading-relaxed justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
          <div className="flex-col">
            &nbsp;First, you need to get your Chromebook&apos;s board number.
            Note that this is NOT the codename of your device. To find your
            board, go to chrome://version, and next to &quot;Platform&quot;, in
            the end of that line, you should see your board name. After you got
            your board name,{" "}
            <Link href="/download" className="text-blue hover:text-mauve">
              download
            </Link>{" "}
            the image for your board, and proceed to the next step.
            <Image
              src="/images/boardname.png"
              width={1000}
              height={500}
              className="mt-2"
              alt="Board name"
            />
          </div>
        </div>
        <footer className="flex flex-row font-sans justify-center text-2xl text-mauve items-center bottom-5">
          <Link href="/smiting/step2" className="hover:underline">
            Next
          </Link>
          <ChevronRight className="h-10 w-10" />
        </footer>
      </main>
    </>
  );
}
