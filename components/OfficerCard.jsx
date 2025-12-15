import React from 'react'

function OfficerCard({img, name, position}) {
  return (
    <div className='flex items-center gap-4 bg-neutral-900 rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-neutral-800 sm:w-full md:w-77.5 '>
      {/* image */}
      <div className='shrink-0'>
        <img 
          src={img} 
          alt={name} 
          className='h-16 w-16 rounded-full object-cover border-2 border-neutral-700 ring-2 ring-neutral-800'
        />
      </div>
      
      {/* Name and Position */}
      <div className='flex-1'>
        <p className='font-semibold text-white text-lg tracking-tight'>{name}</p>
        <p className='text-neutral-400 text-sm mt-1'>{position}</p>
      </div>
    </div>
  )
}

export default OfficerCard