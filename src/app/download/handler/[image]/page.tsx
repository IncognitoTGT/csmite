import NavBar from "@/app/NavBar";
export default function Handler({ params }: { params: { image: string } }) {
  return (
    <>
      <NavBar />
      <main
        className={`min-h-screen flex-col justify-between p-5 mx-auto  bg-base`}
      >
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          Download Mirror
        </div>
        <div className="flex text-lg text-text font-sans leading-loose justify-center w-[1000px] items-center mt-6 pb-5 mx-auto">
          <div className="flex-col text-center">
            Pick a download mirror to download from:
            <div className="text-xl font-semibold mt-5">
              <a
                className="text-blue hover:text-mauve"
                href={"https://mirror1/bin/" + params.image}
              >
                Mirror 1
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
