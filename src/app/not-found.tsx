import NavBar from "./NavBar";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main
        className={`min-h-screen flex-col justify-between p-5 mx-auto overflow-y-auto bg-base`}
      >
        <div className="flex text-5xl text-mauve font-bold font-mono m-6 justify-center items-center">
          404
        </div>
        <p className="flex text-2xl text-text font-sans justify-center items-center mt-6 mx-1/2">
          Page not found
        </p>
      </main>
    </>
  );
}
