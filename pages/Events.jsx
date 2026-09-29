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
      <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">October 9, 2026</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">Reed Elsevier Hackathon</h3>
      <p className="text-neutral-400 mb-6">
        A one-day, team-based startup hackathon focused on building innovative AI solutions. Participants will have the opportunity to use AWS technologies, collaborate with their team, and compete for recognition and prizes.
      </p>
    </div>

    <div className="bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
      data-aos="fade-up" data-aos-delay="200">
      <span className="text-pink-400 font-semibold text-sm uppercase tracking-widest">October 9, 2026</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">Reed Elsevier Tech Talk</h3>
      <p className="text-neutral-400 mb-6">
        An engaging tech talk exploring artificial intelligence, its applications, and its growing role in technology, with an opportunity for participants to interact and ask questions.
      </p>
    </div>

    <div className="bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300"
      data-aos="fade-up" data-aos-delay="300">
      <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">October 15, 2026</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">PHINMA UI CITE Week Hackathon</h3>
      <p className="text-neutral-400 mb-6">
        A team-based hackathon where BSIT students tackle randomly assigned topics using any technology, including AI. Participants will collaborate, solve problems under pressure, and present their solutions for judging.
      </p>
    </div>

  </div>
</section>
  )
}

export default Events