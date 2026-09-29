import React from "react";
import OfficerCard from "../components/OfficerCard";
import CIO from '../src/assets/officers-2627/mj.jpg'
// import placeholder from '../src/assets/img/placeholder.jpg'
import ken from '../src/assets/officers-2627/ken.jpg'
import maverick from '../src/assets/officers-2627/ako.jpg'

// Executive Officers
import jaden from '../src/assets/officers-2627/ochida.JPG'
import operio from '../src/assets/officers-2627/operio.jpg'

// Operation Officers
import kiana from '../src/assets/officers-2627/kiana.jpg'
import capalla from '../src/assets/officers-2627/capalla.jpg'

// Project Managers
import gab from '../src/assets/officers-2627/gab.jpg'
import echalar from '../src/assets/officers-2627/echalar.jpg'
import luegi from '../src/assets/officers-2627/luegi.jpg'

const leader_officers = [
  {img : ken, name : 'Ken Raymond Reyes', position : 'Lead Operations Officer'},
  {img : maverick, name : 'Maverick Barrientos', position : 'Lead Technologist Officer'},
];

const executive_officers = [
  {img: jaden, name:'Jaden Ochida', position : 'Secretary'},
  {img: operio, name:'Shanelle Operio', position : 'Assistant Secretary'},
  {img: capalla, name:'Shanel Capalla', position : 'Treasurer'},
]

const operation_officers = [
  {img: kiana, name: "Kiana Francisco", position: 'Operations Officer'},
  {img: capalla, name: "Shanel Capalla", position: 'Operations Officer'},
]

const project_managers = [
  {img : luegi, name : 'Luegi Rivera', position : 'Web Development Project Manager'},
  {img : echalar, name : 'Marc Cedric Echalar', position : 'Cyber Security Project Manager'},
  {img : gab, name : 'Rud Gabriel Baoy', position : 'Game Development Project Manager'},
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
                name="Mary Joy Cabanas"
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

        <div className="px-4">
          <p className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-semibold">
            Operation Officers
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {operation_officers.map((o, index) => (
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