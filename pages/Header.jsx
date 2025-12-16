import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/70 px-8 py-4 backdrop-blur-lg md:px-10 md:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-bold tracking-widest text-white transition hover:text-neutral-300 md:text-2xl"
        >
          F1StackMind
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`
            absolute left-0 top-[4.5rem] w-full border-t border-neutral-800 bg-neutral-900/95 px-6 py-4
            transition-all duration-300 ease-in-out
            md:static md:flex md:w-auto md:items-center md:space-x-8 md:border-none md:bg-transparent md:p-0
            ${
              open
                ? "visible scale-y-100 opacity-100"
                : "invisible scale-y-0 opacity-0"
            }
            md:visible md:scale-y-100 md:opacity-100
          `}
        >
          <ul className="flex flex-col space-y-4 uppercase md:flex-row md:space-x-8 md:space-y-0">
            <li>
              <a href="#home" className="text-sm text-neutral-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm text-neutral-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#mission-vision"
                className="text-sm text-neutral-300 hover:text-white"
              >
                Mission & Vision
              </a>
            </li>
            <li>
              <a href="#events" className="text-sm text-neutral-300 hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a
                href="#adviser"
                className="text-sm text-neutral-300 hover:text-white"
              >
                Advisers & Officers
              </a>
            </li>

            {/* Mobile-only CTA */}
            <li className="md:hidden">
              <a
                href="#joinUs"
                className="block w-full rounded-xl border border-white px-6 py-2 text-center text-sm font-semibold transition hover:bg-white hover:text-black"
                onClick={() => setOpen(false)}
              >
                Join Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#joinUs"
          className="ml-6 hidden rounded-xl border border-white px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black md:inline-block"
        >
          Join Us
        </a>
      </div>
    </header>
  );
}

export default Header;
