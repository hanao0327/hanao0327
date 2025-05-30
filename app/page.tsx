import Image from "next/image";

export default function Home() {
  return (
    <div className="-min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <header className="h-22 w-screen fixed top-0 left-0 bg-green-500 py-4 z-10 mb-8">
       <h1 className="text-2xl">どみとｒｙ</h1>
      </header>
      <main className="text-center">
        <p className="mb-4 text-lg">
         noriyukihaunnkodesu
        </p>
      </main>
      <footer className="mt-12 text-gray-500">
      </footer>
    </div>
  );
}