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
                    <p className="text-neutral-400 mb-2">📧 f1stackmind@gmail.com</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <a href="https://www.facebook.com/profile.php?id=61581936508793" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-neutral-400 hover:text-indigo-400 transition-colors duration-200">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.93 8.44-9.94z" />
                          </svg>``
                          <p className="fab fa-facebook fa-lg">F1StackMind</p>
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