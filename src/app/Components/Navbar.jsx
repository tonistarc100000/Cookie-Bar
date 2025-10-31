"use client";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Popular", "Trending", "Local", "Categories"];

  return (
    <nav className="bg-amber-400 text-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center transition-all duration-200">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800 tracking-wide transition-all duration-200 hover:text-4xl">
          Cookie Bar
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-red-700 transition-all duration-300 text-2xl  hover:text-4xl"
            >
              {link}
            </li>
          ))}

          {/* Search Bar */}
          <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full focus-within:ring-2 ring-amber-400">
            <Search className="w-4 h-4 text-gray-400 mr-2 transition-all duration-200 hover:w-6 hover:h-6" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-2xl text-gray-200 placeholder-gray-400 w-32 md:w-40 h-8 hover:h-10 hover:w-48 transition-all duration-300 ease-in-out"
            />
          </div>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-3">
          {links.map((link, i) => (
            <div
              key={i}
              className="cursor-pointer hover:text-amber-400 transition-colors duration-300"
            >
              {link}
            </div>
          ))}

          {/* Mobile Search Bar */}
          <div className="flex items-center bg-gray-900 px-3 py-2 rounded-md mt-2">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-200 placeholder-gray-400 w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
