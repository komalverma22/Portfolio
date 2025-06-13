import React from 'react'
import Hire from "../assets/images/hire-logo.png"
import Logo from './Logo'

const Buttons = () => {
  return (
    <div className='mt-2 flex'>
        <div>
      <button className='group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white/75 px-4 py-1.5 font-["Montserrat"] text-zinc-900 shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg font-medium active:scale-95'>
        <span className='relative flex items-center gap-0.5'>
          Hire Me
          <img 
            src={Hire} 
            alt="Hire" 
            className='h-5 w-5 flex transition-transform duration-300 justify-center text-center align-bottom mb-0.5 brightness-0 hidden md:flex'
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
