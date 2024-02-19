import Flag from "./flag";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
interface Image {
  image: string;
}
// Mirrors
// ALL MIRROR LINKS MUST END WITH A `/`
export default function Handler({ params }: { params: Image }) {
  return (
    <>
      <main className={`flex-col justify-between p-5 mx-auto  bg-base`}>
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Download Mirror
        </div>
        <div className="flex text-lg text-subtext1 font-sans justify-center items-center italic">
          Want to host a mirror? Press{" "}
          <a
            className="pl-1 pr-1 text-blue hover:text-mauve underline underline-offset-1"
            href="javascript:alert('hai uwu')"
          >
            here
          </a>{" "}
          to view more information
        </div>
        <div className="flex text-lg text-text font-sans leading-loose justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
          <div className="flex-col text-center">
            Pick a download mirror to download from:
            <div className="text-xl font-semibold mt-5">
              <a
                className="text-blue hover:text-mauve"
                href={"https://dl.example.com/" + params.image}
              >
                <Flag name="US" /> FWSmasher US Mirror (svh)
              </a>
            </div>
            <div className="text-xl font-semibold mt-5">
              <a
                className="text-blue hover:text-mauve"
                href={"https://dl.test.com/" + params.image}
              >
                <Flag name="FI" /> FWSmasher FI Mirror (svh)
              </a>
            </div>
            <div className="text-xl font-semibold mt-5">
              <a
                className="text-blue hover:text-mauve"
                href={"https://csmite.incognitotgt.me/" + params.image}
              >
                <Flag name="US" /> IncognitoTGT US-EAST Mirror (tg.t)
              </a>
            </div>
          </div>
        </div>
        <footer className="flex flex-row font-sans justify-center text-2xl text-mauve items-center bottom-5">
          <Link
            href="/smiting/step2"
            className="underline underline-offset-2 outline-none hover:text-blue"
          >
            Continue smiting your device
          </Link>
          <ChevronRight className="h-10 w-10 text-text" />
        </footer>
      </main>
    </>
  );
}
