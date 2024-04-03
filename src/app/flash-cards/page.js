import Navigation from ".././components/Navigation";

export default function FlashCards() {
  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/flash-cards" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
        <div>
          <div className="text-xl text-gray-500 font-bold">Topic Name</div>
          <div className="text-sm text-gray-500">Subject (0000)</div>
        </div>
        <div className="w-full bg-gray-200 rounded-md p-12">
          <div className="text-gray-600 underline">View Solution</div>{" "}
          {/*eye icon*/}
        </div>
        <div className="flex w-full justify-between">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            I can do this question. {/*tick icon*/}
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            My answer is incorrect. {/*x icon*/}
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Skip {/*arrow right icon*/}
          </button>
        </div>
      </div>
    </main>
  );
}
