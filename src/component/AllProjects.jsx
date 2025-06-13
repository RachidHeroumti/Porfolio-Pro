import React, { useState, useCallback, memo } from "react";
import { projects } from "../utils/data/Projects";

const ProjectCard = memo(({
  title,
  description,
  imageUrl,
  demoLink,
  repoLink,
  isHovered,
  onHover,
  onLeave,
  isFeatured = false,
}) => {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-cyan-500/30"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="article"
      aria-labelledby={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* Optimized Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          src={imageUrl}
          alt={`${title} project preview`}
          loading="lazy"
          decoding="async"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-cyan-50 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full shadow-md">
            ✨ Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h2 
          id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
        >
          {title}
        </h2>
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-2 pt-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-1.5"
            aria-label={`View live demo of ${title}`}
          >
            <span>Demo</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 border border-gray-600 hover:border-cyan-400/60 text-cyan-400 text-sm font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-1.5 hover:bg-cyan-400/10"
            aria-label={`View source code for ${title}`}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Code</span>
          </a>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

function AllProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = useCallback((projectTitle) => {
    setHoveredProject(projectTitle);
  }, []);

  const handleProjectLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center py-16 bg-gradient-to-b from-gray-900 to-gray-800"
      id="projects"
      aria-label="My Projects"
    >
      {/* Refined Header */}
      <header className="mb-14 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
        </h1>
        
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Crafting digital experiences with clean code and thoughtful design
        </p>
        
        <div className="mt-6 w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
      </header>

      {/* Enhanced Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
            isFeatured={project.isnew}
            isHovered={hoveredProject === project.title}
            onHover={() => handleProjectHover(project.title)}
            onLeave={handleProjectLeave}
          />
        ))}
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:20px_20px]" />
    </section>
  );
}

export default AllProjects;