import React from 'react'
import nicole from "../src/assets/img/lampa.png"
import doc from "../src/assets/img/Doc.jpg"
import akil from "../src/assets/img/Akil.jpg"

function Advisers() {
  return (
    <section id="adviser" className="bg-neutral-900 text-white py-24 px-4">
  <div className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Meet the Advisers</h2>
    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
      Guiding F1StackMind with vision, mentorship, and expertise.
    </p>
  </div>

  <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
    
    <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 shadow-lg text-center hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
      <img src={nicole} alt="Nicole Lampa"
        className="rounded-full object-cover border-4 border-white/10 shadow-md mx-auto mb-6" style={{ height: "225px", width: "225px" }} />
      <h3 className="text-xl font-bold">Nicole Lampa</h3>
      <p className="text-indigo-400 text-sm mb-3">Faculty Adviser</p>
      <p className="text-neutral-300 text-sm leading-relaxed">
        Nicole specializes in fostering innovation and academic growth in IT students. 
        With years of mentoring experience, she provides guidance on projects, research, 
        and professional development.
      </p>
    </div>


    <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 shadow-lg text-center hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
      <img src={doc} alt="Melene Akil"
        className="rounded-full object-cover border-4 border-white/10 shadow-md mx-auto mb-6" style={{ height: "225px", width: "225px" }} />
      <h3 className="text-xl font-bold">Doc. Arnold Fuentes</h3>
      <p className="text-indigo-400 text-sm mb-3">Founder & Chief Adviser</p>
      <p className="text-neutral-300 text-sm leading-relaxed">
        Doc. Arnold is the visionary behind F1StackMind. With deep expertise in IT and education, 
        he mentors students in leadership, creative problem-solving, and cutting-edge technologies. 
        His mission is to empower the next generation of tech innovators.
      </p>
    </div>

    <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 shadow-lg text-center hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
      <img src={akil} alt="Melene Akil"
        className="rounded-full object-cover border-4 border-white/10 shadow-md mx-auto mb-6" style={{ height: "225px", width: "225px" }} />
      <h3 className="text-xl font-bold">Melene Akil</h3>
      <p className="text-indigo-400 text-sm mb-3">Faculty Adviser</p>
      <p className="text-neutral-300 text-sm leading-relaxed">
        Melene focuses on teamwork, critical thinking, and technical excellence. 
        She plays a key role in mentoring students on collaborative projects and 
        guiding them toward success in the IT field.
      </p>
    </div>

  </div>
</section>
  )
}

export default Advisers