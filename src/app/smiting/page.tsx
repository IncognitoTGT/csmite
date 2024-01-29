import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavBar from "@/app/NavBar";
export default function SmiteOne() {
  return (
    <>
      <NavBar />
      <main
        className={`min-h-screen flex-col justify-between p-5 mx-auto overflow-y-auto bg-base`}
      >
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Step 1 - [replace]
        </div>
        <div className="flex text-lg text-text font-sans leading-relaxed justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
          <div className="flex-col">Placeholder - replace</div>
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
