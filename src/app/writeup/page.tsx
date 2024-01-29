import NavBar from "../NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <main
        className={`min-h-screen flex-col justify-between p-5 mx-auto overflow-y-auto bg-base`}
      >
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center mx-1/2">
          The way Cryptosmite works
        </div>
        <p className="flex text-lg text-text font-sans justify-center items-center mt-6 mx-1/2">
          {/* Insert writeup here */}
          Writeup is pasted here, please replace
        </p>
      </main>
    </>
  );
}
