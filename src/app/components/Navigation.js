import React from "react";

const Navigation = () => {
  return (
    <div className="flex flex-col h-screen border-r border-gray-300">
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-0 m-0">
          <li className="py-4 px-6 border-b border-gray-300">
            <a href="/" className="text-gray-800 hover:text-black">Home</a>
          </li>
          <li className="py-4 px-6 border-b border-gray-300">
            <a href="/flash-cards" className="text-gray-800 hover:text-black">Flash Cards</a>
          </li>
          <li className="py-4 px-6 border-b border-gray-300">
            <a href="/predicted-papers" className="text-gray-800 hover:text-black">Predicted Papers</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
