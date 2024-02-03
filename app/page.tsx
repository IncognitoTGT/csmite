import NavBar from "./NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className={`flex-col justify-between p-5 mx-auto  bg-base`}>
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          So, what exactly is Cryptosmite again?
        </div>
        <div className="flex text-lg text-text font-sans  leading-loose justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
          <div className="flex-col">
            &nbsp;There has been many attempts to halt unenrollment, (through
            Google Security Chip updates, and chrome updates) but we (FWSmasher)
            have found a way past that. Unfortunately however, the patch will
            arrive in v120.
            <div className="text-xl font-bold mt-5">
              AT ALL COSTS, avoid updating to 120 and caub.
            </div>
            If you want to unenroll at a later date, and are above v120, you
            won&apos;t be able to. Here are some ways to prepare for this new
            unenrollment method:{" "}
            <a
              className="text-blue hover:text-mauve hover:underline"
              href="https://www.youtube.com/watch?v=9L9qWoDa420"
            >
              CAUB (video)
            </a>
            <br />
            1. Some consequences of updating to 120 would include, a possible
            powerwash, and downgrading getting blocked.
            <br />
            Downgrade to 112 for best results. We have tested on 118, and while
            it has achieved full unenrollment, this exploit could also achieve
            temproary unenrollment as well, which has better results in 112 or
            below.
            <br />
            2. That&apos;s it, have fun. This exploit will be released after
            Google pays us with VRP.
            <br />
            Some features this exploit offers:
            <ul className="list-decimal list-inside">
              <li>
                You can re enroll without going through oobe, bypassing sign in
                registration
              </li>
              <li>You can unenroll completely</li>
              <li>You can still have devmode blocked and be unenrolled.</li>
            </ul>
            If you have any questions about caub or this new unenrollment
            exploit, please dm me or catakang.
            <br />
            This has been tested on dedede, octopus, and grunt, so it should
            work on latest firmware (even on v120, however unenrollment
            shouldn&nbsp;t work)
            <div className="text-2xl font-sans font-bold text-mauve">
              More info
            </div>
            <ul className="list-none list-inside">
              <li>A. There is a possibility your system will powerwash</li>
              <li>B. V112 will help you re enroll much more easily</li>
              <li>
                C. You can re enroll without much trouble because of how this
                exploit works. You should be able to login to your school
                account and enroll without having to sign in with a teacher
                account.
              </li>
            </ul>
            <div className="text-2xl font-sans font-bold text-mauve">
              Credits
            </div>
            I (MunyDev) have pioneered the exploit, and Catakang, kxtz,
            Fallenmoon8080, Melitha, and Jimmy, have all tested the exploit.
            <br />
            The frontend website code was written by tg.t and kxtz.
          </div>
        </div>
      </main>
    </>
  );
}
