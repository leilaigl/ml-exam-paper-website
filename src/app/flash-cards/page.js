import Navigation from ".././components/Navigation";
import { Eye } from "../components/Icons";

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
          <div className="text-gray-600 underline inline-flex items-center gap-2">
            View Solution
            <Eye />
            {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#545F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z" stroke="#545F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
          </div>
        </div>
        <div className="flex w-full justify-between">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 inline-flex items-center gap-2">
            I can do this question. <Tick Icon/>
            {<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#596F6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 inline-flex items-center gap-2">
            My answer is incorrect. <X icon/>
            {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#545F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 inline-flex items-center gap-2">
            Skip <Arrow Right/>
            {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9L16 12M16 12L13 15M16 12L8 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#545F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
          </button>
        </div>
      </div>
    </main>
  );
}
