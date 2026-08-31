import React, { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 z-50 w-full dark:bg-[#F2F1EC] bg-black/40 border-b border-white/10 dark:border-black/10 !p-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <a
          href="#home"
          className="text-2xl font-bold text-white dark:text-black"
        >
          MY PORTFOLIO{" "}
          <span className="text-cyan-400 dark:text-red-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => (
            <a
              href={href}
              key={name}
              className="text-md text-gray-400 dark:text-black transition hover:text-white dark:hover:text-gray-400"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="hidden rounded-md bg-cyan-500 dark:bg-[#1b2fbf] !px-4 !py-2 text-sm font-medium text-white hover:bg-cyan-600 dark:hover:bg-[#1b2fbf] md:block"
          >
            Lets Talk
          </a>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-gray-300 p-2 transition hover:border-cyan-400 dark:border-white/20"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div
          className="md:hidden z-100"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <button className="text-gray-400 focus:outline-none">
            <svg
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="fixed inset-0 z-40 flex h-screen w-full items-center justify-center bg-black/95 backdrop-blur-md md:hidden">
          <div className="flex w-full flex-col items-center gap-4 !px-6 ">
            <h1 className="text-3xl font-bold text-white">Roman Ijaz</h1>
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setShowMenu(false)}
                className="w-full max-w-xs border border-white/10 bg-gray-900 rounded-md !px-4 !py-3 text-center text-xl font-medium text-gray-300 transition hover:bg-white/10 hover:text-cyan-400"
              >
                {name}
              </a>
            ))}

            {/* Mobile Let's Talk */}
            <a
              href="#contact"
              onClick={() => setShowMenu(false)}
              className="!mt-4 w-full max-w-xs rounded-md bg-cyan-500 !px-4 !py-3 text-center text-lg font-medium text-white transition hover:bg-cyan-600"
            >
              Let's Talk
            </a>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-full border border-gray-300 p-2 transition hover:border-cyan-400 dark:border-white/20"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
