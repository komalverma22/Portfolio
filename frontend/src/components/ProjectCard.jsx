import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="relative group mt-6">
      {/* Animated white border with multiple layers */}
      <div className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
        {/* Primary rotating border */}
        <div className="absolute inset-0 rounded-xl">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/80 to-transparent animate-spin-slow"></div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-white/60 to-transparent animate-spin-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-l from-transparent via-white/40 to-transparent animate-spin-slow" style={{animationDelay: '2s'}}></div>
        </div>
        {/* Outer glow */}
      
      </div>
      
      {/* Main card */}
      <div className="relative backdrop-blur-xl bg-zinc-900/95 rounded-xl border border-zinc-800/60 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-white/5 group-hover:shadow-2xl overflow-hidden">
        
        {/* Subtle inner glow */}
      
        
        {/* Content container */}
        <div className="relative">
          {/* Project Image Container */}
          <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-t-lg bg-zinc-800/50">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-center transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
              loading="lazy"
              decoding="async"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent "></div>

            {/* Hover overlay with enhanced animations */}
            <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center  p-8  backdrop-blur-sm">
              <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out space-y-4">
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {title}
                  </h3>
                
                </div>
                
                <p className="text-gray-300  text-sm sm:text-base leading-relaxed max-w-xs">
                  {description}
                </p>
                
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 text-black rounded-lg font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:shadow-white/20 group/btn"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
          </div>
          <div className="p-6 flex flex-col h-64">
            {/* Title and Links */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1 pr-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-1 group-hover:text-white/90 transition-colors duration-300">
                  {title}
                </h3>
                <div className="h-[1px] w-8 bg-gradient-to-r from-white/30 to-transparent transition-all duration-500 group-hover:w-16 group-hover:from-white/60"></div>
              </div>
              
              <div className="flex gap-3">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800/50 text-gray-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 border border-zinc-700/30 hover:border-zinc-600/50"
                  >
                    <Github size={18} />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800/50 text-gray-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 border border-zinc-700/30 hover:border-zinc-600/50"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            {/* <p className="text-gray-400 text-md leading-relaxed  group-hover:text-gray-300 transition-colors duration-300 flex-grow">
              {description}
            </p> */}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-zinc-800/60 text-gray-300 border border-zinc-700/40 hover:border-white/30 hover:text-white hover:bg-zinc-700/60 transition-all duration-300 cursor-default backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

export default ProjectCard;