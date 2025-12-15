import React from 'react'

function Header() {
  return (
        <header
        className="sticky top-0 z-50 px-8 py-4 md:px-10 md:py-6 backdrop-blur-lg bg-neutral-900/70 border-b border-neutral-800">

        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#" className="font-bold tracking-widest text-white hover:text-neutral-300 transition  md:text-3xl">
                F1StackMind
            </a>


            <button id="menu-btn" className="block md:hidden text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            <nav id="nav-menu" className="absolute top-18 left-0 w-full bg-neutral-900/95 border-t border-neutral-800 px-6 py-4 
           md:static md:flex md:items-center md:space-x-8 md:w-auto md:bg-transparent md:border-none md:p-0
           transition-all duration-300 ease-in-out transform origin-top 
           scale-y-0 opacity-0 invisible md:opacity-100 md:scale-y-100 md:visible md:transform-none">

                <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                    <li><a href="#home" className="text-lg text-neutral-300 hover:text-white transition">Home</a></li>
                    <li><a href="#about" className="text-lg text-neutral-300 hover:text-white transition">About Us</a></li>
                    <li><a href="#mission-vision" className="text-lg text-neutral-300 hover:text-white transition">Mission &
                            Vision</a>
                    </li>
                    <li><a href="#events" className="text-lg text-neutral-300 hover:text-white transition">Events</a></li>
                    <li><a href="#adviser" className="text-lg text-neutral-300 hover:text-white transition">Advisers & Officers</a></li>
                    <li className="md:hidden">
                        <a href="#joinUs"
                            className="block w-full text-center px-6 py-2 text-lg font-semibold border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                            Join Us
                        </a>
                    </li>
                </ul>
            </nav>

            <a href="#joinUs"
                className="text-white hidden md:inline-block ml-6 px-6 py-2 text-lg font-semibold border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                Join Us
            </a>
        </div>
    </header>
  )
}

export default Header