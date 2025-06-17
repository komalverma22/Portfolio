import React, { useState } from 'react'
import Heading from './Heading'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiRedux, SiTailwindcss, SiHtml5, SiCss3,
  SiGit, SiGithub, SiGraphql, SiDocker,
  SiFirebase, SiVercel, SiJest, SiTestinglibrary, SiWebpack, SiVite,
  SiAwsamplify // instead of SiAmazon
} from 'react-icons/si';
// import { FaExchangeAlt } from 'react-icons/fa'; // from FontAwesome


const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skillsData = {
    row1: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" }
    ],
    row2: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      // { name: "REST API", icon: SiRest, color: "#FF5733" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      // { name: "AWS", icon: SiAmazonaws, color: "#232F3E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Vite", icon: SiVite, color: "#646CFF" }
    ]
  }

  return (
    <div className='mt-10 '>
      <div className='flex flex-col mb-8'>
        <Heading name="SKILLS & TECHNOLOGIES"/>
        {/* <h1 className='text-3xl md:text-4xl font-bold text-center relative'>
          Skills & Technologies
          <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--primary-color)]'></span>
        </h1> */}
      </div>

      <div 
        className='relative overflow-hidden backdrop-blur-sm py-4'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First Row - Moving Right */}
        <div className={`flex ${isHovered ? 'pause-animation' : 'animate-scroll-right'}`}>
          <div className='flex gap-5 px-4 animate-scroll whitespace-nowrap'>
            {[...skillsData.row1, ...skillsData.row1].map((skill, index) => (
              <div 
                key={index} 
                className='flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded border-[0.2px] border-[var(--border-color)] hover:bg-zinc-700/50 transition-all duration-000 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-color)]/10 '
              >
                <skill.icon 
                  size={20} 
                  style={{ color: skill.color }} 
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className='text-white/80'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className={`flex ${isHovered ? 'pause-animation' : 'animate-scroll-left'} mt-4`}>
          <div className='flex gap-8 px-4 animate-scroll whitespace-nowrap'>
            {[...skillsData.row2, ...skillsData.row2].map((skill, index) => (
              <div 
                key={index} 
                className='flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded border-[0.2px] border-[var(--border-color)] hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-color)]/10'
              >
                <skill.icon 
                  size={20} 
                  style={{ color: skill.color }} 
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className='text-white/80'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
