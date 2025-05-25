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
      className="group relative rounded-3xl overflow-hidden bg-gray-800/40 backdrop-blur-xl border border-gray-600/20 transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] focus-within:ring-2 focus-within:ring-cyan-400/50"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="article"
      aria-labelledby={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* Enhanced Image Section */}
      <div className="relative h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-125"
          src={imageUrl}
          alt={`${title} project preview`}
          loading="lazy"
          decoding="async"
        />
        
        {/* Improved gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Enhanced status badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold text-cyan-100 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full backdrop-blur-md shadow-lg animate-pulse">
            ✨ Featured
          </div>
        )}
        
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10 transition-all duration-700" />
      </div>

      {/* Enhanced Content Section */}
      <div className="p-7 relative z-10 space-y-4">
        <h2 
          id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-400 leading-tight"
        >
          {title}
        </h2>
        
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        {/* Improved button section */}
        <div className="flex gap-3 pt-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 active:scale-[0.98]"
            aria-label={`View live demo of ${title}`}
          >
            <span>Live Demo</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-400/40 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 active:scale-[0.98]"
            aria-label={`View source code for ${title}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="hidden sm:inline">Code</span>
          </a>
        </div>
      </div>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10 blur-xl" />
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

function AllProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Memoized handlers for better performance
  const handleProjectHover = useCallback((projectTitle) => {
    setHoveredProject(projectTitle);
  }, []);

  const handleProjectLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"
      id="projects"
      aria-label="My Projects"
    >
      {/* Enhanced Header Section */}
      <header className="relative mb-16 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          My{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              Projects
            </span>
            {/* Subtle glow effect */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-50">
              Projects
            </span>
          </span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover my portfolio of innovative solutions—where cutting-edge technology meets exceptional user experience.
        </p>
        
        {/* Decorative line */}
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
      </header>

      {/* Enhanced Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto px-6 w-full">
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

      {/* Optional: Add a subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
    </section>
  );
}

export default AllProjects;