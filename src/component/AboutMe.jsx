import React from 'react';

function AboutMe() {
  return (
    <div 
      className="w-full py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 text-white font-poppins text-[15px]" 
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            About <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Me
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A glimpse into my journey as a Full Stack Developer—driven by curiosity and code.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 items-start">
          {/* Bio Section */}
          <div className="group col-span-2 xl:col-span-2 space-y-6 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30 
                         transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
              My Story
            </h3>
            <p className="leading-relaxed text-gray-300">
              I’m a Full Stack Developer fueled by a passion for crafting innovative solutions. With a Bachelor’s in Computer Science from 
              <span className="font-semibold text-cyan-400"> Ibn Zohr University (2024)</span>, I’ve built a solid foundation in tech, sharpened by real-world projects.
            </p>
            <p className="leading-relaxed text-gray-300">
              Based in <span className="font-semibold text-cyan-400">Morocco</span>, I thrive on turning ideas into reality with tools like React, Next.js, Node.js, and Spring Boot. My focus? Responsive, user-centric applications that make an impact.
            </p>
            <p className="leading-relaxed text-gray-300">
              Beyond coding, I’m a tech explorer—diving into new frameworks, contributing to open-source, and leveling up through courses and workshops. Check out my portfolio and GitHub to see what I’ve been building—I’d love to collaborate on something groundbreaking!
            </p>
          </div>

          {/* Education & Languages */}
          <div className="space-y-8">
            {/* Education */}
            <div className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 
                           transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
              <h3 className="text-2xl font-bold text-white text-center group-hover:text-cyan-300 transition-colors duration-300 mb-4">
                Education
              </h3>
              <div className="text-center space-y-2">
                <p className="font-semibold text-gray-200">Ibn Zohr University</p>
                <p className="text-gray-300">Bachelor’s in Computer Science</p>
                <p className="text-gray-400 italic">Graduated 2024</p>
                <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Key Courses: Data Structures, Algorithms, Web Development, Software Engineering
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 
                           transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
              <h3 className="text-2xl font-bold text-white text-center group-hover:text-cyan-300 transition-colors duration-300 mb-4">
                Languages
              </h3>
              <div className="text-center">
                <p className="text-gray-300">Arabic • French • English • Amazigh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;