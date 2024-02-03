import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavBar from "@/NavBar";
export default function SmiteTwo() {
  return (
    <>
      <NavBar />
      <main className={`flex-col justify-between p-5 mx-auto  bg-base`}>
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Step 2 - do something
        </div>
        <div className="flex text-lg text-text font-sans leading-relaxed justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
          <div className="flex-col">hai uwu</div>
        </div>
        <footer className="flex flex-row font-sans justify-center text-2xl text-mauve items-center bottom-5">
          <ChevronLeft className="h-10 w-10" />
          <Link href="/smiting" className="hover:underline">
            Previous
          </Link>
          <div className="mx-5">|</div>
          <Link href="/smiting/step3" className="hover:underline">
            Next
          </Link>
          <ChevronRight className="h-10 w-10" />
        </footer>
      </main>
    </>
  );
}
