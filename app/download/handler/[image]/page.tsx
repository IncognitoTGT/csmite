import Flag from "./flag";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
// Mirrors
// ALL MIRROR LINKS MUST END WITH A `/`
export default function Handler({ params }: { params: { image: string } }) {
  const mirrors: {
    flag: React.ReactNode;
    name: string;
    link: URL;
  }[] = [
    {
      flag: <Flag name="US" />,
      name: "FWSmasher US Mirror (svh)",
      link: new URL("https://dl.example.com/"),
    },
    {
      flag: <Flag name="FI" />,
      name: "FWSmasher FI Mirror (svh)",
      link: new URL("https://dl.test.com/"),
    },
    {
      flag: <Flag name="US" />,
      name: "IncognitoTGT US-EAST Mirror (tg.t)",
      link: new URL("https://csmite.incognitotgt.me/"),
    },
  ];
  return (
    <>
      <main className="flex-col p-5 mx-auto bg-base">
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Download Mirror
        </div>
        <div className="flex text-lg text-subtext1 font-sans justify-center items-center italic">
          Want to host a mirror? Press&nbsp;
          <a className="text-blue underline underline-offset-1 inline">here</a>
          &nbsp;to view more information
        </div>
        <div className="flex text-lg text-text font-sans leading-loose justify-center items-center mt-6 pb-5 mx-auto">
          <div className="flex-col text-center mb-10">
            Pick a download mirror to download from:
            {mirrors.map((mirror) => (
              <div className="text-xl font-semibold mt-5" key={mirror.name}>
                <a
                  className="text-blue underline"
                  href={mirror.link + params.image}
                >
                  {mirror.flag} {mirror.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <footer className="flex flex-row font-sans justify-center text-2xl text-mauve items-center bottom-5">
          <Link
            href="/smiting/step2"
            className="underline underline-offset-2 outline-none"
          >
            Continue smiting your device
          </Link>
          <ChevronRight className="h-10 w-10 text-text" />
        </footer>
      </main>
    </>
  );
}
