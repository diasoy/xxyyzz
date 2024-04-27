/* eslint-disable react/prop-types */
import { Link as ScrollLink } from "react-scroll";
import { Moon, SunDim } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed w-full top-0 left-0 right-0">
        <div className="bg-green-800 dark:bg-zinc-900">
          <div>
            <div className="flex items-center justify-between px-10 py-5 md:hidden">
              <div>
                <ScrollLink
                  to="profile"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="hover:cursor-pointer font-semibold text-white text-xl hover:text-green-600"
                >
                  diasnorman.
                </ScrollLink>
              </div>
              <div>
                <button className="focus:outline-none" onClick={toggleMenu}>
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
          </div>

          <div>
            <div
              className={
                isOpen
                  ? "absolute left-0 right-0 flex flex-col bg-green-800 dark:bg-zinc-900 gap-4 justify-center items-center py-5 text-white md:hidden"
                  : "hidden"
              }
            >
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="hover:text-zinc-950 cursor-pointer dark:hover:text-green-600"
              >
                Activity
              </ScrollLink>
              <ScrollLink
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="hover:text-zinc-950 cursor-pointer dark:hover:text-green-600"
              >
                Project
              </ScrollLink>
              <Link
                to="/article"
                className="hover:text-zinc-950 cursor-pointer dark:hover:text-green-600"
              >
                Article
              </Link>

              <div className="hover:cursor-pointer">
                {theme === "dark" ? (
                  <Moon size={24} onClick={toggleTheme} />
                ) : (
                  <SunDim size={24} onClick={toggleTheme} />
                )}
              </div>
            </div>
          </div>

          {/* WEB MENU */}
          <div className="hidden md:flex justify-between items-center gap-4 w-full px-12 py-8 lg:px-32 xl:px-52 text-white">
            <div>
              <ScrollLink
                to="profile"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="hover:cursor-pointer font-semibold text-white text-xl lg:text-2xl hover:text-green-600"
              >
                diasnorman.
              </ScrollLink>
            </div>

            <div className="flex gap-1">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="hover:cursor-pointer hover:bg-zinc-50 hover:text-green-700 dark:hover:text-white hover:transition-all hover:ease-in-out dark:hover:bg-green-800 px-3 py-1"
              >
                Activity
              </ScrollLink>
              <ScrollLink
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className="hover:cursor-pointer hover:bg-zinc-50 hover:text-green-700 dark:hover:text-white hover:transition-all hover:ease-in-out dark:hover:bg-green-800 px-3 py-1"
              >
                Project
              </ScrollLink>
              <Link
                to="/article"
                className="hover:bg-zinc-50 hover:text-green-700 dark:hover:text-white hover:transition-all hover:ease-in-out dark:hover:bg-green-800 px-3 py-1"
              >
                Article
              </Link>
            </div>
            <div className="hover:cursor-pointer">
              {theme === "dark" ? (
                <Moon size={32} onClick={toggleTheme} />
              ) : (
                <SunDim size={32} onClick={toggleTheme} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
