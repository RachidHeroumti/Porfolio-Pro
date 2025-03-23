import React, { useState, useEffect } from 'react';
import imgP from '../image/img1.png';
import { FiDownload } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "I'm Rachid";

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setDisplayedText('');
            index = 0;
            typeText();
          }, 5000);
        }
      }, 100);

      return () => clearInterval(timer); // Cleanup on unmount or re-run
    };

    typeText();

    return () => clearInterval(); // Cleanup on component unmount
  }, []);

  return (
    <div 
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 flex items-center justify-center py-20 font-poppins" 
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-white space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-200 leading-tight">
            <span className="text-xl text-cyan-400 font-normal">Hi,</span><br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                {displayedText}
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform scale-x-100 transition-transform duration-500" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A passionate <span className="font-bold text-cyan-400">Full Stack Developer</span> 🚀<br />
            I craft powerful applications with <span className="text-cyan-400">JavaScript, Java, React, Node.js, Spring Boot, Next.js, and SQL</span>, 
            blending creativity with cutting-edge tech.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="https://www.linkedin.com/in/rachid-heroumti-817787243/" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800/30 rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/RachidHeroumti" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800/30 rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="mailto:rachidheroumti0@gmail.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800/30 rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300">
              <FaEnvelope size={24} />
            </a>
            <a href="https://wa.me/212616421373" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800/30 rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800/30 rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300">
              <FaFacebook size={24} />
            </a>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center lg:justify-start">
            <a 
              href="/assets/ResumeHero.pdf" 
              download="Rachid_Heroumti_Resume.pdf" 
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-full
                         hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span>Download Resume</span>
              <FiDownload size={20} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="group relative">
            <img 
              className="h-[350px] md:h-[450px] w-[350px] md:w-[450px] object-cover rounded-full 
                        transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
              src={imgP} 
              alt="Rachid Heroumti" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;