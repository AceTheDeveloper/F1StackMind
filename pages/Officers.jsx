import React from "react";
import OfficerCard from "../components/OfficerCard";
import CIO from '../src/assets/img/bonnie-removebg-preview.png'
import placeholder from '../src/assets/img/placeholder.jpg'
import arwin from '../src/assets/img/paldo-removebg-preview.png'

// Executive Officers
import rybelle from '../src/assets/img/rybelle-removebg-preview.png'
import alyanah from '../src/assets/img/alyanah.png'
import shanel from '../src/assets/img/Shanel-removebg-preview.png'

// Project Managers
import justin from '../src/assets/img/justine-removebg-preview.png'
import amiel from '../src/assets/img/amiel-removebg-preview.png'
import elgie from '../src/assets/img/Elgie-removebg-preview.png'
import maverick from '../src/assets/img/maverick.png'

const leader_officers = [
  {img : placeholder, name : 'Kristelle Laurente', position : 'Lead Operations Officer'},
  {img : arwin, name : 'Arwin Clyde B. Simondac', position : 'Lead Technologist Officer'},
];

const executive_officers = [
  {img:rybelle, name:'Rybelle V. Ramos', position : 'Secretary'},
  {img:alyanah, name:'Alyanah Dale Estillore', position : 'Assistant Secretary'},
  {img:shanel, name:'Shanel Capalla', position : 'Treasurer'},
]

const project_managers = [
  {img : arwin, name : 'Arwin Clyde B. Simondac', position : 'Systems Development Project Manager'},
  {img : justin, name : 'Justin Dela Vega', position : 'Artificial Intelligence Project Manager'},
  {img : amiel, name : 'Amiel Castro', position : 'Cyber Security Project Manager'},
  {img : elgie, name : 'Elgie Delos Reyes', position : 'Game Development Project Manager'},
  {img : maverick, name : 'Maverick Barrientos', position : 'Micro Controllers/Arduino Project Manager'},
]

function Officers() {
  return (
    <section id="officers" className="bg-neutral-950 px-4 py-12 sm:py-16 md:py-24 text-white">
      <div className="mx-auto mb-12 sm:mb-16 max-w-7xl text-center">
        <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" data-aos="fade-down">
          Meet the Officers
        </h2>
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-neutral-400 px-4" data-aos="fade-up">
          The hierarchy that keeps F1StackMind running smoothly.
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16">
        {/* Lead Officers */}
        <div>
          <p className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-semibold" data-aos="fade-up">
            Lead Officers
          </p>
          <div className="space-y-6">
            {/* CIO */}
            <div className="flex justify-center" data-aos="fade-up">
              <OfficerCard
                img={CIO}
                name="Bonnie Boy Franco III"
                position="Chief Information Officer"
              />
            </div>

            {/* Lead Officers */}
            <div className="flex flex-wrap justify-center gap-6">
              {leader_officers.map((o, index) => (
                <OfficerCard key={index} {...o} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>

        {/* Executives */}
        <div className="px-4">
          <p className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-semibold">
            Executives
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {executive_officers.map((o, index) => (
              <OfficerCard key={index} {...o} delay={index * 150}/>
            ))}
          </div>
        </div>

        {/* Project Managers */}
        <div className="px-4">
          <p className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-semibold">
            Project Managers
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {project_managers.map((o, index) => (
              <OfficerCard key={index} {...o} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Officers