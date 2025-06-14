import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="group relative overflow-hidden  border-[var(--primary-color)]/30   transition-all duration-600 hover:scale-[1.0] hover:animate-glow ">
      {/* Project Image Container */}
      <div className="relative h-76 w-full overflow-hidden rounded-sm">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-800 group-hover:scale-108"
        />

        {/* Overlay for Project Info and Buttons */}
        <div className="absolute inset-0 bg-black/93 opacity-0 group-hover:opacity-100 transition-all duration-1500 ease-in-out flex flex-col justify-center items-start px-6 pt-16">
          <div className="flex justify-between items-center w-full mb-4 transition-all duration-1500 ease-in-out transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-200">
            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>
            <div className="flex gap-4">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300"
                >
                  <ExternalLink size={24} />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-300 mb-6 text-md text-left transition-all duration-1500 ease-in-out transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-400">{description}</p>
          
          <div className="flex gap-4 justify-start w-full transition-all duration-1500 ease-in-out transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-600">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 bg-black/80 text-white rounded-sm font-medium transition-all duration-200 shadow-md border border-white/20 hover:scale-[1.02] hover:shadow-lg hover:bg-white/90 hover:text-black/80 "
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Technologies (always visible below the image) */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 text-xs rounded-md bg-[var(--primary-color)]/10 text-[var(--primary-color)] border-[0.2px] border-[var(--primary-color)]/20 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard; 