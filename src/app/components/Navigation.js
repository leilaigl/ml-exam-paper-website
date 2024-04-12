"use client";
import React from "react";
import { Home,Cards,Menu,Right } from "./Icons";
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
            <a href="/"><Home/> Home <Right /></a>
          </li>
          <li
            className={`py-3 px-6 mx-2 my-6 ${
              activePage === "/flash-cards"
                ? "bg-blue-500 rounded-lg text-white font-medium"
                : "text-[#9ba5b7] hover:text-black"
            }`}
          >
            <a href="/flash-cards">
              <Cards/> Flash Cards <Right />
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
              <Menu/> Predicted Papers <Right />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Navigation;
