import React, { useState } from "react";
import { FaCheck, FaSearch, FaHeart, FaLock, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative text-white py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <FaCheck className="text-black text-4xl hover:text-green-600" />
      </div>

      {/* Center Section */}
      <div className="hidden md:flex justify-center w-full space-x-8">
        <a
          href="#home"
          className="hover:text-gray-700 text-black text-2xl font-semibold"
        >
          New
        </a>
        <a
          href="#shoegallery"
          className="hover:text-gray-700 text-black text-2xl font-semibold"
        >
          Man
        </a>
        <a
          href="#listheading"
          className="hover:text-gray-700 text-black text-2xl font-semibold"
        >
          Woman
        </a>
        <a
          href="#footer"
          className="hover:text-gray-700 text-black text-2xl font-semibold"
        >
          Jordan
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="hidden md:flex items-center bg-gray-700 px-3 py-1 rounded-md">
          <FaSearch className="text-gray-400 hover:text-red-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white placeholder-gray-400 pl-2"
          />
        </div>
        {/* Icons */}
        <FaHeart className="text-4xl cursor-pointer hidden md:block text-red-400 hover:text-blue-500" />
        <FaLock className="text-4xl cursor-pointer hidden md:block text-red-400  hover:text-blue-500" />
        {/* Hamburger Menu */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="text-3xl text-red-800" /> // Show the cross icon when the menu is open
          ) : (
            <FaBars className="text-3xl text-red-800" /> // Show the hamburger icon when the menu is closed
          )}
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-500 text-white flex flex-col items-start p-4 space-y-4 z-10">
          <a href="#home"
            className="hover:text-gray-300 text-black text-2xl font-semibold">
           New
           </a>
            <a href="#shoegallery"
            className="hover:text-gray-300 text-black text-2xl font-semibold">
            Man
          </a>
            
          <a  href="#listheading"
            className="hover:text-gray-300 text-black text-2xl font-semibold">
          Woman
          </a>
           
          <a href="#footer"
            className="hover:text-gray-300 text-black text-2xl font-semibold">
            Jordan
          </a>
            
          {/* Search Input */}
          <div className="flex items-center bg-gray-700 px-3 py-1 rounded-md w-full">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white placeholder-gray-400 pl-2 w-full"
            />
          </div>
          {/* Icons */}
          <div className="flex gap-4">
            <FaHeart className="text-4xl cursor-pointer text-red-500" />
            <FaLock className="text-4xl cursor-pointer text-red-500" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
