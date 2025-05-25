import React from 'react';
import imgprogramer from "../image/programer.jpg";

function Services() {
  return (
    <div 
      className="w-full py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 flex flex-col items-center"
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          What I <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Can Do
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Turning ideas into reality with cutting-edge development expertise.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 group">
          <img 
            src={imgprogramer} 
            alt="What I Do" 
            className="w-full h-auto md:h-[500px] rounded-2xl shadow-lg object-cover 
                      transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
          />
        </div>

        {/* Services List */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Front-end */}
          <div className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 
                         transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <h2 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              Frontend Development
            </h2>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              Crafting sleek, responsive interfaces with <span className="text-cyan-400">HTML, CSS, React.js, Next.js, Tailwind/bootstrap, and Bootstrap</span>. 
              I prioritize seamless user experiences that look stunning on any device.
            </p>
          </div>

          {/* Back-end */}
          <div className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 
                         transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <h2 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              Backend Development
            </h2>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              Building robust APIs and managing data with <span className="text-cyan-400">Node.js/Express.js,Laravel/php, MongoDB,MySQL, and Firebase</span>. 
              I ensure efficiency and scalability behind the scenes.
            </p>
          </div>

          {/* Programming Languages */}
          <div className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 
                         transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <h2 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              Programming Languages
            </h2>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              Coding versatile solutions using <span className="text-cyan-400">JavaScript, TypeScript, Java, C, C++,and PHP</span>. 
              I leverage each language’s strengths for optimal results.
            </p>
          </div>

          {/* mobile Development */}
          <div className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 
                         transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <h2 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              Mobile Development
            </h2>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              Creating high-performance mobile apps with <span className="text-cyan-400">React native</span>. 
              I focus on delivering intuitive, user-friendly mobile experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;