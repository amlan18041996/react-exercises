import React from "react";
import { NavLink } from "react-router-dom";

const FloatedHeader = ({ links }) => {
  return (
    <header className="z-[999] relative">
      <nav className="flex justify-center fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-base font-semibold text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, index) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.path}
            >
              <NavLink
                key={index}
                to={link.path}
                aria-current="page"
                className={({ isActive }) =>
                  `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 ${
                    isActive
                      ? "bg-blue-700 md:bg-transparent text-white md:text-blue-700"
                      : "hover:bg-gray-100 md:hover:bg-transparent text-gray-900 md:hover:text-blue-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default FloatedHeader;
