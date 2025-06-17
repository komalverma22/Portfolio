import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="project-card group relative overflow-hidden border-[var(--border-color)] transition-all duration-600 mt-4 hover:scale-[1.0] hover:animate-glow ">
      {/* Project Image Container */}
      <div className="relative mb-4 h-62 sm:h-76 md:h-64 lg:h-76 w-full overflow-hidden rounded-sm ">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-800 group-hover:scale-108 "
          loading="lazy"
          decoding="async"
        />

        {/* Overlay for Project Info and Buttons */}
        <div className="absolute inset-0  bg-black/89 opacity-0 group-hover:opacity-100 transition-all duration-1500 ease-in-out flex flex-col justify-center items-start px-4 sm:px-6 pt-12 sm:pt-16 ">
          <div className="flex justify-between items-center w-full mb-3 sm:mb-4 transition-all duration-1500 ease-in-out transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-200 ">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight">
              {title}
            </h3>
            <div className="flex gap-2 sm:gap-4">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300"
                >
                  <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-300 mb-4 sm:mb-6 text-md sm:text-lg text-left transition-all duration-1500 ease-in-out transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-400 leading-relaxed">
            {description}
          </p>
          
          <div className="flex gap-3 sm:gap-4 justify-start w-full transition-all duration-1500 ease-in-out transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-600">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-1 bg-black/80 text-white rounded-sm font-medium transition-all duration-200 shadow-md border border-white/20 hover:scale-[1.02] hover:shadow-lg hover:bg-white/90 hover:text-black/80 text-sm sm:text-base"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Technologies (always visible below the image) */}
      <div className="flex flex-wrap gap-2  sm:mt-4 justify-center px-2 sm:px-0">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs rounded-md bg-[var(--primary-color)]/10 text-[var(--primary-color)] border-[0.2px] border-[var(--border-color)] cursor-default "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard; 