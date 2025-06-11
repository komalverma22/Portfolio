import React from 'react'
import Profile from "../assets/images/profile-image.jpg"
import Buttons from './Buttons'
import Skills from './Skills'
import Heading from './Heading'
const About = () => {
  return (
    <div className='pt-[82px]'>
      {/* Mobile Image - Only visible on mobile */}
      <div className='md:hidden mb-2 flex justify-center'>
        <img src={Profile} alt="Profile" className='rounded-full w-28 h-28 object-cover' />
      </div>

      <div className='border-[0.2px] border-[var(--primary-color)]/30 backdrop-blur-sm rounded-lg p-5 shadow-lg'>
        {/* <h1 className='text-2xl font-semibold mb-2  font-["Montserrat"] text-[var(--primary-color)] '>About Me.</h1> */}
        <Heading name="About Me"/>
        
        <div className='flex flex-col md:flex-row gap-0'>
          {/* Content Section - full width on mobile, 70% on desktop */}
          <div className='w-full md:w-[76%] space-y-2 text-lg text-white/80'>
            <p>
              Hey! I'm <span className='font-["Geist"] font-medium'>Komal Verma</span>, a full-stack developer with expertise in React, Next.js, Java and TypeScript.
            </p>
            <p>
              I am a skilled and passionate web designer with experience in creating visually appearing and user-friendly websites.
            </p>
            <p>
              I'm a software engineer, product builder, open-source maintainer. I'm very hands-on and love experimenting, and bringing ideas to life through focused, self-driven work.
            </p>
          </div>

          {/* Image Section - hidden on mobile, 30% on desktop */}
          <div className='hidden md:block w-44 h-44'>
            <img src={Profile} alt="Profile" className='rounded-full w-full h-full object-cover' />
          </div>
        </div>
        <Buttons/>
      </div>
      <Skills/>
    </div>
  )
}

export default About
