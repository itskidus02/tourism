import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Button } from "./ui/button";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // or 'center' or 'end'
        inline: 'nearest' // or 'start' or 'end'
      });
    }
  };
  

  return (
    <header>
      <nav className="bg-transparent  absolute top-0 left-0 w-full border-gray-200 px-4 lg:px-6 py-2.5 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 md:h-10 lg:h-16 " alt="Logo" />
          </a>
          <div className="flex items-center gap-3 lg:order-2">
            <Button
              href="#"
              className="bg-transparent ring-1 ring-white text-white hover:text-slate-900 hover:bg-white transition-all duration-300"
            >
              Log in
            </Button>
            <Button
              href="#"
              className="hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Get started
            </Button>
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isSidebarOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isSidebarOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg lg:hidden transform transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold text-gray-700">Menu</span>
              <Button
                onClick={toggleSidebar}
                className=""
              >
                Cancel
              </Button>
            </div>
            <ul className="flex flex-col mt-4 p-4 space-y-4 font-medium">
            <li>
                <a href="#" className="">
                  Things to do
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Ceremonies
                </a>
              </li>
              <li>
                <a href="#" className=" ">
                  Destination
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div
            className="hidden text-white lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-row space-x-8 mt-0">
              
              <li>
                <a href="#todo" onClick={handleSmoothScroll} className="text-white hover:text-slate-300 transition-all duration-300">
                  Things to do
                </a>
              </li>
              <li>
                <a href="#ceremony" onClick={handleSmoothScroll} className="text-white hover:text-slate-300 transition-all duration-300">
                  Ceremonies
                </a>
              </li>
              <li>
                <a href="#destination" onClick={handleSmoothScroll} className="text-white hover:text-slate-300 transition-all duration-300">
                  Destination
                </a>
              </li>
              <li>
                <a href="#newsletter" onClick={handleSmoothScroll} className="text-white hover:text-slate-300 transition-all duration-300">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
