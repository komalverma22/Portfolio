import React from 'react'

const Heading = ({name}) => {
  return (
    <div className="heading-container">
       {/* <h1 className='text-2xl font-semibold mb-2  font-["Montserrat"] text-[var(--primary-color)] '>{name}</h1> */}
       <h2 className='heading-text uppercase tracking-[0.2em] text-[var(--primary-color)] font-bold text-3xl '>
       {name}
        </h2>
    </div>
  )
}

export default Heading
