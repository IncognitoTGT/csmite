import NavBar from "./NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <main
        className={`min-h-screen flex-col justify-between p-5 mx-auto  bg-base`}
      >
        <div className="flex text-3xl text-mauve font-bold font-mono justify-center items-center ">
          So, what exactly is Cryptosmite again?
        </div>
        <p className="flex text-lg text-text font-sans justify-center items-center mt-6 ">
          Quick Summary goes here
        </p>
      </main>
    </>
  );
}
