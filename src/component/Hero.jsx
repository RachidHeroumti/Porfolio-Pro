import React, { useState, useEffect } from 'react';
import imgP from '../image/img1.png';
import { RiTodoLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFacebook } from 'react-icons/fa';

function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "I'm Rachid";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

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
          }, 3000);
        }
      }, 150);

      return () => clearInterval(timer);
    };

    typeText();

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 font-sans"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <div className="space-y-4">
            <p className="text-lg text-cyan-400 font-medium">Hi there,</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {displayedText}
                <span className={`inline-block w-1 h-8 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              A passionate <span className="text-cyan-400 font-medium">Full Stack Developer</span> specializing in modern web technologies. I build efficient, scalable applications with <span className="text-cyan-400">React, Node.js, and Laravel</span>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-3 flex-wrap ">
            {[
              { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/rachid-heroumti-817787243/" },
              { icon: <FaGithub size={20} />, href: "https://github.com/RachidHeroumti" },
              { icon: <FaEnvelope size={20} />, href: "mailto:rachidheroumti0@gmail.com" },
              { icon: <FaWhatsapp size={20} />, href: "https://wa.me/212616421373" },
              { icon: <FaFacebook size={20} />, href: "https://facebook.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-300 text-white transition-all duration-200"
                aria-label={`${social.icon.type.displayName} link`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300"
            >
              <RiTodoLine size={18} />
              View Projects
            </a>
          </div>
        </div>

        {/* Profile Image - Hidden on mobile */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="relative w-fit mx-auto">
            <img
              className="h-80 w-80 object-cover rounded-full border-4 border-gray-700 shadow-xl hover:border-cyan-400 transition-all duration-500"
              src={imgP}
              alt="Rachid Heroumti"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-cyan-400/30 transition-all duration-500" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 hover:opacity-20 blur-md transition-opacity duration-500 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;