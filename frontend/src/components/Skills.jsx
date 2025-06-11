import React from 'react'
import Heading from './Heading'

const Skills = () => {
  const skillsRow1 = [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js", 
    "MongoDB", "PostgreSQL", "Redux", "TailwindCSS", "HTML5", "CSS3"
  ]

  const skillsRow2 = [
    "Git", "GitHub", "REST API", "GraphQL", "Docker", "AWS", 
    "Firebase", "Vercel", "Jest", "React Testing Library", "Webpack", "Vite"
  ]

  return (
    <div className='mt-8'>
      <div className='flex flex-col  mb-8'>
        <Heading name="SKILLS & TECHNOLOGIES"/>
        {/* <h1 className='text-3xl md:text-4xl font-bold text-center relative'>
          Skills & Technologies
          <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--primary-color)]'></span>
        </h1> */}
      </div>

      <div className='relative overflow-hidden   backdrop-blur-sm '>
        {/* First Row - Moving Right */}
        <div className='flex animate-scroll-right'>
          <div className='flex gap-8 px-4 animate-scroll whitespace-nowrap'>
            {[...skillsRow1, ...skillsRow1].map((skill, index) => (
              <div 
                key={index} 
                className='flex items-center gap-2 bg-zinc-800/50 px-4 py-1 rounded border-[0.2px] border-[var(--primary-color)]/30 hover:bg-zinc-700/50 transition-colors duration-300'
              >
                <span className='text-white/80'>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className='flex animate-scroll-left mt-4'>
          <div className='flex gap-8 px-4 animate-scroll whitespace-nowrap'>
            {[...skillsRow2, ...skillsRow2].map((skill, index) => (
              <div 
                key={index} 
                className='flex items-center gap-2 bg-zinc-800/50 px-4 py-1 rounded border-[0.2px] border-[var(--primary-color)]/30 hover:bg-zinc-700/50 transition-colors duration-300'
              >
                <span className='text-white/80'>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
