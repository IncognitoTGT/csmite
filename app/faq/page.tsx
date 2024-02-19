import Link from "next/link";
export default function FAQ() {
  return (
    <>
      <main className="flex-col justify-between p-5 mx-auto bg-base">
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center">
          FAQ
        </div>
        <div className="flex flex-col text-lg text-text font-sans leading-loose justify-center w-[1000px] items-center mt-6 pb-5 mx-auto space-y-2 text-center">
          <h1 className="text-2xl font-sans font-bold text-mauve">
            I don&apos;t have a flash drive, can you send me one?
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
            Why is my board grayed out?
          </h1>
          You have an ARM device.
          <br />A built in ChromeOS function does not work on ARM, and support
          will take a lot of time.
          <h1 className="text-2xl font-sans font-bold text-mauve">
            I&apos;m a panicking sysadmin
          </h1>
          calm down and don&apos;t worry about this.
          <h1 className="text-2xl font-sans font-bold text-mauve">
            Why is my board not supported?
          </h1>
          There wasn&apos;t a leaked shim for your device. Threaten your
          Chromebook manufacturer (don&apos;t actually do this).
        </div>
      </main>
    </>
  );
}
