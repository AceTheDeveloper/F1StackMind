import React from 'react'

function MV() {
  return (
    <section id="mission-vision" className="bg-neutral-900 text-white py-24 px-4">
            <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Mission & Vision</h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    We’re not just about code — we're about cultivating minds, empowering innovation, and shaping the
                    future of tech.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                <div className="bg-neutral-800 p-8 rounded-2xl border border-indigo-500/30 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                    data-aos="fade-up" data-aos-delay="100">
                    <div className="mb-4">
                        <span
                            className="inline-block px-4 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-sm font-semibold tracking-wide">
                            🚀 Mission
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Empowering Tech-Driven Futures</h3>
                    <p className="text-neutral-400 leading-relaxed">
                        F1StackMind is dedicated to developing and nurturing students' technical competencies through collaborative learning and practical application. 
                        The organization provides opportunities for students to enhance their skills in programming, game development, artificial intelligence, microcontrollers, and cybersecurity. It encourages
                        innovation, problem-solving, and critical thinking through projects, workshops, and community engagements, while promoting a culture of knowledge-sharing and peer mentorship within and beyond the institution.
                    </p>
                </div>

                <div className="bg-neutral-800 p-8 rounded-2xl border border-pink-500/30 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                    data-aos="fade-up" data-aos-delay="200">
                    <div className="mb-4">
                        <span
                            className="inline-block px-4 py-1 rounded-full bg-pink-600/20 text-pink-300 text-sm font-semibold tracking-wide">
                            🌌 Vision
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Shaping Tomorrow’s Innovators</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      F1StackMind envisions a community of technologically proficient and innovative students who excel in programming, game development, artificial intelligence, microcontrollers, and cybersecurity. The
                      organization aspires to be a catalyst for knowledge-sharing, creativity, and leadership, fostering future-ready individuals who contribute meaningfully to society and the advancement of technology.
                    </p>
                </div>
            </div>
        </section>
  )
}

export default MV