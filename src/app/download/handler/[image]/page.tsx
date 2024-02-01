import NavBar from "@/app/NavBar";
import Flag from "./flag";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
// Mirrors
// ALL MIRROR LINKS MUST END WITH A `/`
const mirror1: string = "https://dl.example.com/"; // both are on the correct geolocation, links will not be included until final release.
const mirror2: string = "https://dl.test.com/";
const mirror3: string = "https://csmite.incognitotgt.me/";

export default function Handler({ params }: { params: { image: string } }) {
  return (
    <>
      <NavBar />
      <main className={`flex-col justify-between p-5 mx-auto  bg-base`}>
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Download Mirror
        </div>
        <div className="flex text-lg text-text font-sans leading-loose justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
          <div className="flex-col text-center">
            Pick a download mirror to download from:
            <div className="text-xl font-semibold mt-5">
              <a
                className="text-blue hover:text-mauve"
                href={mirror1 + params.image}
              >
                <Flag name="US" /> FWSmasher US Mirror
              </a>
            </div>
            <div className="text-xl font-semibold mt-5">
              <a
                className="text-blue hover:text-mauve"
                href={mirror2 + params.image}
              >
                <Flag name="DE" /> FWSmasher DE Mirror
              </a>
            </div>
            <div className="text-xl font-semibold mt-5">
              <a
                className="text-blue hover:text-mauve"
                href={mirror3 + params.image}
              >
                <Flag name="US" /> US-East - hosted by tgt
              </a>
            </div>
          </div>
        </div>
        <footer className="flex flex-row font-sans justify-center text-2xl text-mauve items-center bottom-5">
          <Link href="/smiting/step2" className="hover:underline">
            Continue smiting your device
          </Link>
          <ChevronRight className="h-10 w-10" />
        </footer>
      </main>
    </>
  );
}
