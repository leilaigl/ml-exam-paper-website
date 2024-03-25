import Navigation from ".././components/Navigation";

export default function FlashCards() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <div className="flex-grow flex flex-col justify-end">
        <div className="flex-1 max-w-5xl w-full items-center justify-between text-sm lg:flex"></div>
        <div className="flex justify-center bg-gray-200 py-6 px-8 rounded-lg">
          {/* Rectangular div above the buttons */}
          <p>rectangular div</p>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          {/* Buttons moved to the bottom of the page */}
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            My answer is incorrect
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            I can do this question
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Skip
          </button>
        </div>
      </div>
      <div className="fixed left-0 top-0 h-full z-50">
        {/* Assuming Navigation is positioned absolutely */}
        <Navigation />
      </div>
    </main>
  );
}