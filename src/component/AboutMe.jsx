import React from 'react';

function AboutMe() {
  return (
    <div 
      className="w-full py-20 text-white font-poppins text-[15px]" 
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
            A glimpse into my journey as a Full Stack Developer—driven by clarity, curiosity, and clean code.
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
              <strong className="text-cyan-400">Your product doesn’t need “just a developer.”</strong> It needs someone who understands business, speed, and clean architecture.
            </p>
            <p className="leading-relaxed text-gray-300">
              I’m Rachid Heroumti — a developer who builds scalable, modern web & mobile applications using <span className="font-semibold text-cyan-400">Node.js, Laravel, React, and Next.js</span>. I don’t just ship code — I ship outcomes.
            </p>
            <p className="leading-relaxed text-gray-300">
              From real-time dashboards to full-featured e-commerce systems, I transform complex ideas into intuitive digital experiences. I focus on performance, clarity, and end-user value — not buzzwords.
            </p>
            <p className="leading-relaxed text-gray-300">
              I work globally from <span className="font-semibold text-cyan-400">Morocco</span>, but I build like I’m on your team — fast, collaborative, and always in sync with your goals.
            </p>
            <p className="leading-relaxed text-gray-300">
              If you need someone who thinks like a product owner, codes like an engineer, and communicates like a human — let’s build something worth launching.
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
