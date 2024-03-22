import Navigation from ".././components/Navigation";

export default function FlashCards() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed left-0 top-0 h-full z-50">
        <Navigation />
      </div>
      <div className="flex space-x-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Red Button
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Green Button
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          Grey Button
        </button>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex"></div>
    </main>
  );
}
