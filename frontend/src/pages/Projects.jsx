import React, { useState } from 'react'
import Heading from '../components/Heading'
import ProjectCard from '../components/ProjectCard'
import BookReader from "../assets/images/bookReader.png"
import { ChevronDown, ChevronUp } from 'lucide-react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features a clean design with smooth animations and dark mode.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/komalverma22/Portfolio2",
      liveLink: "#",
      image: BookReader
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "#",
      image: "https://i.pinimg.com/736x/7e/b2/59/7eb25902a8706d9ae8ea78816da60a03.jpg"
    },
   
    // Additional projects that will be shown when "View More" is clicked
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with detailed forecasts and interactive maps.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      githubLink: "#",
      liveLink: "#",
      image: BookReader
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging and group chat features.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#",
      image: BookReader
    },
    {
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support and user authentication.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Auth.js"],
      githubLink: "#",
      liveLink: "#",
      image: BookReader
    }
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <div className='  container mx-auto lg:px-0 mt-[-30px]'>
      <div className="my-4 sm:my-6 opacity-0 animate-slide-up ">
        <Heading name="PROJECTS"/>
      </div>
      <div className="grid   grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6  stagger-children ">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      
      {/* View More/Less Button */}
      <div className="flex justify-center mt-6 sm:mt-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <button
          onClick={() => setShowAll(!showAll)}
          className="group flex items-center gap-2 px-3 py-2   sm:px-6 sm:py-2 rounded-lg bg-zinc-900/90 backdrop-blur-sm border-[0.2px] border-[var(--border-color)] hover:bg-zinc-800/90 transition-all duration-300"
        >
          <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
            {showAll ? 'View Less' : 'View More'}
          </span>
          {showAll ? (
            <ChevronUp 
              size={16} 
              className="sm:w-[18px] sm:h-[18px] text-[var(--primary-color)] transition-transform duration-300 group-hover:-translate-y-0.5" 
            />
          ) : (
            <ChevronDown 
              size={16} 
              className="sm:w-[18px] sm:h-[18px] text-[var(--primary-color)] transition-transform duration-300 group-hover:translate-y-0.5" 
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default Projects
