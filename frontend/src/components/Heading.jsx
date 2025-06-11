import React from 'react'

const Heading = ({name}) => {
  return (
    <div>
       {/* <h1 className='text-2xl font-semibold mb-2  font-["Montserrat"] text-[var(--primary-color)] '>{name}</h1> */}
       <h2 className='uppercase tracking-[0.2em] text-[var(--primary-color)]  font-bold text-2xl '>
       {name}
        </h2>
    </div>
  )
}

export default Heading
