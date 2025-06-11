import React from 'react'
import Hire from "../assets/images/hire-logo.png"
import Logo from './Logo'

const Buttons = () => {
  return (
    <div className='mt-2 flex'>
        <div>
      <button className='group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-[var(--primary-color)] to-[#4a9caa] px-5 py-1.5 font-["Montserrat"] text-black shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg font-medium active:scale-95'>
        <span className='absolute -left-[100%] h-full w-full bg-gradient-to-r from-[#4a9caa] to-[var(--primary-color)] transition-all duration-500 group-hover:left-0'></span>
        <span className='relative flex items-center gap-0.5'>
          Hire Me
          <img 
            src={Hire} 
            alt="Hire" 
            className='h-5 w-5 flex transition-transform duration-300  brightness-0 justify-center text-center align-bottom mb-0.5'
          />
        </span>
      </button>
      </div>
      <div>
      <Logo/>
      </div>
    </div>
  )
}

export default Buttons
