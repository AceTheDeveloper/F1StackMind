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
                        To cultivate a culture of excellence in Artificial Intelligence, Cybersecurity, and Game Development by promoting altruism and
                        enhancing computing education through comprehensive initiatives that empower students with essential skills, foster, community growth, and produce skilled professionals - ethical hackers and penetration testers - who will lead as next generation of cyber warriors
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
                        To become a leading gub in Cybersecurity, Artificial Intelligence, and Game Development. We aim to address various challenges related to security protocols, data scalablity, big data, and diverse computing solutions. Through exemplary bootcamps, training sessions, and webinars, we are commited to equipping our community with the knowledge and skills necessary to navigate and solve pressing issues in these critical fields
                    </p>
                </div>
            </div>
        </section>
  )
}

export default MV