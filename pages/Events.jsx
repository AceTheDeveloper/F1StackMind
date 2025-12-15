import React from 'react'

function Events() {
  return (
    <section id="events" className="bg-neutral-950 text-white py-24 px-4">
  <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Upcoming Events</h2>
    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
      From workshops to hackathons — stay up-to-date with F1StackMind’s exciting lineup of tech-powered
      events.
    </p>
  </div>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

    <div className="bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
      data-aos="fade-up" data-aos-delay="100">
      <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">May 7, 2025</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">Innovex Indonesia</h3>
      <p className="text-neutral-400 mb-6">
        A premier innovation summit highlighting the future of intelligent systems. Explore cutting-edge AI
        integration, witness live demos, and gain insights from industry experts driving the next wave of
        technological breakthroughs.
      </p>
    </div>

    <div className="bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
      data-aos="fade-up" data-aos-delay="200">
      <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest">September 17, 2025</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">1st Iloilo Provincial Hackathon</h3>
      <p className="text-neutral-400 mb-6">
        A groundbreaking provincial hackathon where students from across Iloilo will team up to solve
        real-world challenges. Collaborate with professional mentors, pitch your ideas, and showcase your
        skills in a high-energy, competitive environment.
      </p>
    </div>

    <div className="bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300"
      data-aos="fade-up" data-aos-delay="300">
      <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">September 28, 2025</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">ASEAN Google Partnership</h3>
      <p className="text-neutral-400 mb-6">
        An exciting collaboration with Google to inspire future innovators. Experience the "Hour of Code"
        movement across ASEAN, learn from Google experts, and discover how technology can empower
        communities at scale.
      </p>
    </div>

  </div>
</section>
  )
}

export default Events