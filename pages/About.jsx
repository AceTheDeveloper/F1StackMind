import React from 'react'
import mainPic from '../src/assets/img/mainpic.png'

function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white py-24 px-4 relative overflow-hidden" data-aos="fade-up">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">

                <div className="relative" data-aos="fade-right" data-aos-delay="100">
                    <img src={mainPic} alt="About F1StackMind"
                        className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-lg shadow-white/10" />
                    <div
                        className="absolute -inset-2 bg-linear-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 blur-2xl rounded-full">
                    </div>
                </div>

                <div className="text-center md:text-left" data-aos="fade-left" data-aos-delay="200">
                    <div className="mb-4 inline-flex items-center gap-2 px-4 py-1 border border-indigo-500/40 rounded-full bg-indigo-500/10 text-sm tracking-wide text-indigo-300 uppercase"
                        data-aos="fade-up" data-aos-delay="300">
                        <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 1-4.21 19.21A10 10 0 0 1 12 2z"></path>
                        </svg>
                        About Us
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight mb-6" data-aos="fade-up"
                        data-aos-delay="400">
                        Meet the Minds Behind the Stack
                    </h2>

                    <p className="text-lg text-neutral-400 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="500">
                        F1StackMind is more than just a tech org — it's a bold movement. We're a crew of developers,
                        designers, and innovators working together to push tech boundaries through learning,
                        collaboration, and community impact.
                    </p>

                    <p className="text-lg text-neutral-400 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                        Whether you're into front-end magic, AI wizardry, or full-stack sorcery — this is your place to
                        thrive, grow, and break barriers.
                    </p>
                </div>
            </div>

            <div
                className="absolute top-0 right-0 w-80 h-80 bg-linear-to-br from-indigo-600/20 via-pink-600/10 to-transparent rounded-full blur-3xl pointer-events-none z-0">
            </div>
        </section>
  )
}

export default About