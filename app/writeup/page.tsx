import NavBar from "../NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className={`flex-col justify-between p-5 mx-auto  bg-base`}>
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          The way Cryptosmite works
        </div>
        <p className="flex text-lg text-text font-sans justify-center items-center mt-6 ">
          {/* Insert writeup here */}
          Writeup is pasted here, please replace
        </p>
      </main>
    </>
  );
}
