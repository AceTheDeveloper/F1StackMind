import React from "react";
import OfficerCard from "../components/OfficerCard";
import CIO from '../src/assets/img/bonnie.jpg'


const leader_officers = [
  {img : 'sample', name : 'Ken Raymond Reyes', position : 'Lead Operating Orders'},
  {img : 'sample', name : 'Arwin Clyde B. Simondac', position : 'Lead Technologist Officer'},
]

function Officers() {
  return (
    <section id="officers" className="bg-neutral-950 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Meet the Officers
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          The hierarchy that keeps F1StackMind running smoothly.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-7 justify-center">
        
       <OfficerCard img={CIO} name={"Bonnie Boy Franco III"} position={"Chief Information Officer"}/>

       <div className="flex flex-col items-center justify-center gap-7 md:flex-row w-full">
          {leader_officers.map((o, index) => (
            <OfficerCard key={index} img={o.img} name={o.name} position={o.position}/>
          ))}
       </div>

      </div>
    </section>
  );
}

export default Officers;
