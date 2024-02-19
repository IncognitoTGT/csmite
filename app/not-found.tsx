export default function NotFound() {
  return (
    <>
      <main className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="text-5xl text-red font-bold font-mono text-center">
          404
        </div>
        <p className="text-2xl text-text font-sans mt-6">Page not found</p>
      </main>
    </>
  );
}
