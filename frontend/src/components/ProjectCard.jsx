import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border-[0.2px] border-[var(--primary-color)]/30 bg-zinc-900/90 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-zinc-800/90 hover:scale-[1.02] hover:animate-glow">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900/90 rounded-full hover:bg-zinc-800 transition-all duration-300 hover:scale-110 animate-pop"
            >
              <Github size={20} className="text-white" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900/90 rounded-full hover:bg-zinc-800 transition-all duration-300 hover:scale-110 animate-pop"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="stagger-children">
        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
          {title}
          <Sparkles size={16} className="text-[var(--primary-color)] animate-sparkle" />
        </h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)] border-[0.2px] border-[var(--primary-color)]/20 hover:scale-105 transition-transform duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 