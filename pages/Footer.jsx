import React from 'react'

function Footer() {
  return (
      <footer className="bg-neutral-950 text-white px-6 py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

                <div>
                    <h3 className="text-2xl font-bold mb-2">F1StackMind</h3>
                    <p className="text-neutral-400">
                        Empowering innovation, building communities, and shaping the future of tech — together.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-neutral-400">
                        <li><a href="#home" className="hover:text-white transition">Home</a></li>
                        <li><a href="#about" className="hover:text-white transition">About</a></li>
                        <li><a href="#mission-vision" className="hover:text-white transition">Mission & Vision</a></li>
                        <li><a href="#events" className="hover:text-white transition">Events</a></li>
                        <li><a href="#adviser" className="hover:text-white transition">Advisers & Officers</a></li>

                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
                    <p className="text-neutral-400 mb-2">📧 f1stackmind@domain.com</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <a href="#" className="text-neutral-400 hover:text-white transition">
                            <i className="fab fa-facebook fa-lg"></i>
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-white transition">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-white transition">
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-white transition">
                            <i className="fab fa-github fa-lg"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-10 text-center text-neutral-500 text-sm border-t border-neutral-700 pt-6">
                &copy; 2025 F1StackMind. All rights reserved.
            </div>
        </footer>
  )
}

export default Footer