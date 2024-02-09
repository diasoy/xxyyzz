/* eslint-disable react/prop-types */
import { useState } from "react";

const Navbar = ({ setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full top-0 bg-zinc-900">
        {/* MOBILE MENU */}
        <div className="flex items-center justify-between px-10 py-5 md:hidden">
          <div>
            <a
              href="/"
              className="font-semibold text-white text-xl hover:text-green-600"
            >
              diasnorman.
            </a>
          </div>
          <div>
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-white hover:text-green-600 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div
            className={
              isOpen
                ? "absolute flex flex-col justify-center items-center gap-4 w-full bg-zinc-900 px-10 py-5 text-white md:hidden"
                : "hidden"
            }
          >
            <a href="/about" className="hover:text-green-600">
              About
            </a>
            <a href="/project-experience" className="hover:text-green-600">
              Project
            </a>
            <a href="/article" className="hover:text-green-600">
              Article
            </a>
            <a href="/contact" className="hover:text-green-600">
              Contact
            </a>
            <button
              className="bg-green-600 rounded-md hover:bg-green-800 px-3 py-1"
              onClick={setTheme}
            >
              Change Theme
            </button>
          </div>
        </div>

        {/* WEB MENU */}
        <div className="hidden md:flex justify-between items-center gap-4 w-full px-12 py-8 lg:px-32 xl:px-52 text-white">
          <div>
            <a
              href="/"
              className="text-2xl font-semibold text-white hover:text-green-600"
            >
              diasnorman.
            </a>
          </div>

          <div className="flex gap-1">
            <a href="/about" className="hover:bg-green-800 px-3 py-1">
              About
            </a>
            <a
              href="/project-experience"
              className="hover:bg-green-800 px-3 py-1"
            >
              Project
            </a>
            <a href="/article" className="hover:bg-green-800 px-3 py-1">
              Article
            </a>
            <a href="/contact" className="hover:bg-green-800 px-3 py-1">
              Contact
            </a>
          </div>
          <button
            className="bg-green-600 rounded-md hover:bg-green-800 px-3 py-1"
            onClick={setTheme}
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
