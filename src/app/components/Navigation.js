"use client";
import React from "react";
import { Right, Cards, Menu, Home } from "./Icons";

const Navigation = ({ activePage }) => {
  return (
    <div className="flex flex-col w-64 border-r-2 border-[#9ba5b7]">
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li
            className={`py-3 px-6 mx-2 my-6 ${
              activePage === "/"
                ? "bg-blue-500 rounded-lg text-white font-medium"
                : "text-[#9ba5b7] hover:text-black"
            }`}
          >
            <a href="/">
              <div className="flex flex-row justify-between items-end">
                <div className="flex gap-x-2">
                  <Home color={`${
              activePage === "/"
                ? "#FFFFFF"
                : "#545F71"
            }`}/> Home
                </div>
                <div><Right /></div>
              </div>
            </a>
          </li>
          <li
            className={`py-3 px-6 mx-2 my-6 ${
              activePage === "/flash-cards"
                ? "bg-blue-500 rounded-lg text-white font-medium"
                : "text-[#9ba5b7] hover:text-black"
            }`}
          >
            <a href="/flash-cards">
              <div className="flex flex-row justify-between items-end">
                <div className="flex gap-x-2">
                  <Cards color={`${
              activePage === "/flash-cards"
                ? "#FFFFFF"
                : "#545F71"
            }`}/> Flash Cards
                </div>
                <div><Right /></div>
              </div>
            </a>
          </li>
          <li
            className={`py-3 px-6 mx-2 my-6 ${
              activePage === "/predicted-papers"
                ? "bg-blue-500 rounded-lg text-white font-medium"
                : "text-[#9ba5b7] hover:text-black"
            }`}
          >
            <a href="/predicted-papers">
              <div className="flex flex-row justify-between items-end">
                <div className="flex gap-x-2">
                  <Menu color={`${
              activePage === "/predicted-papers"
                ? "#FFFFFF"
                : "#545F71"
            }`}/> Predicted Papers
                </div>
                <div><Right /></div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
