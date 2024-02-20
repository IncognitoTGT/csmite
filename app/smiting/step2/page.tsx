import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SmiteTwo() {
  return (
    <>
      <main className="flex-col p-5 mx-auto bg-base">
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Step 2 - do something
        </div>
        <div className="flex text-lg text-text font-sans leading-relaxed justify-center items-center mt-6 pb-5 mx-auto">
          <div className="flex-col">hai uwu</div>
        </div>
        <footer className="flex flex-row font-sans justify-center text-2xl text-mauve items-center bottom-5">
          <ChevronLeft className="h-10 w-10 text-text" />
          <Link
            href="/smiting"
            className="underline underline-offset-2  outline-none"
          >
            Previous
          </Link>
          <div className="mx-5">|</div>
          <Link
            href="/smiting/step3"
            className="underline underline-offset-2  outline-none"
          >
            Next
          </Link>
          <ChevronRight className="h-10 w-10 text-text" />
        </footer>
      </main>
    </>
  );
}
