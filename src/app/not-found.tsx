import NavBar from "./NavBar";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen p-5 mx-auto bg-base overflow-y-auto flex flex-col justify-center items-center">
        <div className="flex text-5xl text-mauve font-bold font-mono justify-center items-center">
          404
        </div>
        <p className="flex text-2xl text-text font-sans justify-center items-center mt-6">
          Page not found
        </p>
      </main>
    </>
  );
}
