import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
     
        <div className="flex-grow lg:flex-grow-0">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        {/* Right Buttons for Large Screens */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Button 1</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Button 2</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Button 3</button>
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Button 4</button>
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Button 5</button>
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Button 6</button>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4 space-y-2">
          <div className="flex flex-col w-full space-y-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Button 1</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Button 2</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Button 3</button>
          </div>

          
          <div className="flex flex-col w-full space-y-2">
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Button 4</button>
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Button 5</button>
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Button 6</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
