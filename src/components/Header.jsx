import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav className="bg-transparent absolute top-0 left-0 w-full border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started
            </a>
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
              isSidebarOpen ? "block" : "hidden"
            } fixed top-0 right-0 z-40 h-full w-64 bg-white shadow-lg lg:hidden`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold text-gray-700">Menu</span>
              <button
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
            </div>
            <ul className="flex flex-col mt-4 p-4 space-y-4 font-medium">
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-row space-x-8 mt-0">
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700">
                  Contact
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
