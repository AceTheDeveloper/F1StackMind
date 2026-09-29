
import { useState } from "react"

const members = [
  "Leonoras, Al Philip",
  "Villareal, Jan Christian",
  "Castor, Cristel Marian",
  "Figueroa, James Israel",
  "Abuncio, Reymart",
  "Alinsasaguin, Ryne",
  "Alpuerto, Cornelio Jr.",
  "Ataza, Andrea Jane",
  "Balatayo, Kent Shien",
  "Banay, Jean Rose",
  "Lozarita, Charles Anthony",
  "Sevilla, DJ A.",
  "Hermano, Romyjohn",
  "Javellana, Gercel",
  "Papas, Fiona Lynn",
  "Delarmente, Jeith",
  "Castor, Luvie Mae C.",
  "Catalan, Mary Beth",
  "Java, Resha Dominique",
  "Banner, Jeriel",
  "Lambuson, Charles Restan",
  "Prado, Alberto II",
  "Navales, Edrhean",
  "Oresco, Hernan Carl A.",
  "Cabrera, Rutz Cloid James",
  "Deviza, Merjerie Diamond",
  "Diaz, Eljohn",
  "Duayan, Angel A.",
  "Javelosa, John Vincent",
  "Miranda, Jessica Linsay",
  "Jundis, John Christian",
  "Ollosa, Gerlyn Mae",
  "Stephen, Guelos"
];

function MemberCard ({ name }) {
  return (
    <div
      className="flex w-full items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-800/50 p-4 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:w-82.5"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <p className="truncate text-md font-normal tracking-tight text-white">{name}</p>
    </div>
  )
}

function Members () {

  const [search, setSearch] = useState("");

  const filteredMembers = members.filter((member) => 
    member.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-neutral-900 text-white min-h-[calc(100vh-80px)] flex items-center px-6 py-16 md:py-0">
      <div className="items-center justify-center py-16">
        <div>
          <div
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 border border-indigo-500/40 rounded-full bg-indigo-500/10 text-sm tracking-wide text-indigo-300 uppercase"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 1-4.21 19.21A10 10 0 0 1 12 2z"></path>
            </svg>
            NEW INTAKE
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight mb-6" data-aos="fade-up" data-aos-delay="500">
            The Newest Minds Joining the Stack
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="500">
            Every intake adds new builders to the guild. Here's who's been accepted <br />
            into F1StackMind.
          </p>
        </div>

        <input
          type="search"
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3 mb-5 rounded-xl border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 border-neutral-700 bg-neutral-800/50 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none transition-all duration-200"
          data-aos="fade-up"
          data-aos-delay="700"
        />

        <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="800">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <MemberCard key={member} name={member} />
            ))
          ) : (
            <p className="text-neutral-500">No members match your search.</p>
          )}
        </div>
      </div>
    </div>
  )

}

export default Members