import React, { useState } from "react";
import { Link, NavLink } from "react-router";
// import { Link } from "react-scroll";
import burgerMenu from "../assets/alignment.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation - hidden on mobile */}
      <div className="fixed top-4 right-4 z-20 hidden md:flex gap-4">
        <nav className="w-auto h-12 bg-black bg-opacity-75 rounded-full px-8 py-4 shadow-lg flex gap-4 items-center justify-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 text-sm font-light px-3"
                : "text-white hover:text-blue-600 text-sm font-light px-3"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 text-sm font-light px-3"
                : "text-white hover:text-blue-600 text-sm font-light px-3"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 text-sm font-light px-3"
                : "text-white hover:text-blue-600 text-sm font-light px-3"
            }
          >
            About
          </NavLink>
          {/* <NavLink
            to="/materials"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 text-sm font-light px-3"
                : "text-white hover:text-blue-600 text-sm font-light px-3"
            }
          >
            Materials
          </NavLink>
          */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 text-sm font-light px-3"
                : "text-white hover:text-blue-600 text-sm font-light px-3"
            }
          >
            Contact
          </NavLink>
          {/* <NavLink
            to="/#faq"
            className={({ isActive }) =>
              isActive
                ? // ? "text-blue-600 text-sm font-light px-3"
                  "text-white hover:text-blue-600 text-sm font-light px-3"
                : "text-white hover:text-blue-600 text-sm font-light px-3"
            }
          >
            FAQ
          </NavLink> */}
          <a
              href="#faq"
              className="text-white hover:text-blue-600 text-sm font-light px-3"
              onClick={toggleMenu}
            >
              FAQ
            </a>
        </nav>

        {/* Quote button - desktop only */}
        <Link to="/contact" className="inline-block">
          <button className="bg-blue-600 w-30 font-josefin text-sm text-white px-12 py-4 rounded-full font-light items-center shadow-md hover:bg-white hover:cursor-pointer hover:text-black hover:font-medium hover:stroke-black">
            Get a Quote
          </button>
        </Link>
      </div>

      {/* Mobile hamburger button - only visible when menu is closed */}
      {!isMenuOpen && (
        <button
          className="fixed top-1 right-4 z-20 md:hidden  bg-opacity-75 rounded-full p-2 text-white"
          onClick={toggleMenu}
        >
          <img src={burgerMenu} className="z-50" alt="" />
          {/* <div className="w-6 h-6 flex flex-col justify-center items-center">
            <div className="w-5 h-0.5 bg-white mb-1.5"></div>
            <div className="w-5 h-0.5 bg-white mb-1.5"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </div> */}
        </button>
      )}

      {/* Mobile Navigation - fullscreen menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 to-black bg-opacity-95 z-40 flex items-center justify-center">
          {/* Close button - explicitly positioned in the top-right corner */}
          <button
            className="absolute top-4 right-4 bg-black bg-opacity-75 rounded-full p-2 text-white z-50"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 flex items-center justify-center font-md  text-2xl">
              X
            </div>
          </button>

          <div className="flex flex-col items-center justify-center gap-8 w-full p-8">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-light"
                  : "text-white hover:text-blue-400 text-xl font-light"
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-light"
                  : "text-white hover:text-blue-400 text-xl font-light"
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            {/* <NavLink
              to="/materials"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-light"
                  : "text-white hover:text-blue-400 text-xl font-light"
              }
              onClick={toggleMenu}
            >
              Materials
            </NavLink> */}
            {/* <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-light"
                  : "text-white hover:text-blue-400 text-xl font-light"
              }
              onClick={toggleMenu}
            >
              Resources
            </NavLink> */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-light"
                  : "text-white hover:text-blue-400 text-xl font-light"
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            {/* <NavLink
              to="/#faq"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-light"
                  : "text-white hover:text-blue-400 text-xl font-light"
              }
              onClick={toggleMenu}
            >
              FAQ
            </NavLink> */}
            <a
              href="#faq"
              className="text-white hover:text-blue-400 text-xl font-light"
              onClick={toggleMenu}
            >
              FAQ
            </a>

            {/* Quote button inside mobile menu */}
            <button className="mt-6 bg-blue-600 w-48 font-josefin text-lg text-white px-8 py-3 rounded-full font-light shadow-md hover:bg-white hover:cursor-pointer hover:text-black hover:font-medium">
              <Link to="/contact" onClick={toggleMenu}>
                Get a Quote
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
