import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full top-0 bg-zinc-900">
        {/* MOBILE MENU */}
        <div className="flex justify-between px-10 py-5 md:hidden">
          <div>
            <a href="/" className="font-semibold text-white text-xl">
              diasnorman.
            </a>
          </div>
          <div>
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-white hover:text-zinc-950 "
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
            <a href="">About</a>
            <a href="">Project</a>
            <a href="">Experience</a>
            <a href="">Contact</a>
          </div>
        </div>

        {/* WEB MENU */}
        <div className="hidden md:flex justify-between items-center gap-4 w-full px-32 py-8 text-white">
          <div>
            <a href="/" className="text-2xl font-semibold text-white">
              diasnorman.
            </a>
          </div>
          <div className="flex gap-4">
            <a href="" className="hover:bg-green-800 px-3 py-1">
              About
            </a>
            <a href="" className="hover:bg-green-800 px-3 py-1">
              Project
            </a>
            <a href="" className="hover:bg-green-800 px-3 py-1">
              Experience
            </a>
            <a href="" className="hover:bg-green-800 px-3 py-1">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
