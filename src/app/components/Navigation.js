"use client";
import React from "react";

const Navigation = ({ activePage }) => {
  return (
    <div className="flex flex-col h-screen border-r-2 border-[#9ba5b7]">
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li
            className={`py-3 px-6 mx-2 my-6 ${
              activePage === "/"
                ? "bg-blue-500 rounded-lg text-white font-medium"
                : "text-[#9ba5b7] hover:text-black"
            }`}
          >
            <a href="/"><Home/> Home {/*right icon*/}</a>
            {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="#545F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
          </li>
          <li
            className={`py-3 px-6 mx-2 my-6 ${
              activePage === "/flash-cards"
                ? "bg-blue-500 rounded-lg text-white font-medium"
                : "text-[#9ba5b7] hover:text-black"
            }`}
          >
            <a href="/flash-cards">
              <Cards/> Flash Cards {/*right icon*/}
              {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="#545F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
            </a>
          </li>
          <li
            className={`py-3 px-6 mx-2 my-6 ${
              activePage === "/predicted-papers"
                ? "bg-blue-500 rounded-lg text-white font-medium"
                : "text-[#9ba5b7] hover:text-black"
            }`}
          >
            <a
              href="/predicted-papers"
            >
              <Menu/> Predicted Papers <Right Icon/>
              {<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4.16659L13.3333 9.99992L7.5 15.8333" stroke="#9BA5B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
              {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="#545F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Navigation;
