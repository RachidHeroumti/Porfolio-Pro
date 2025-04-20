import React, { useState } from 'react';
import { AiFillInstagram, AiFillGithub, AiFillFacebook, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full px-6 lg:px-12 text-gray-50 flex justify-between items-center bg-gradient-to-r from-gray-900/90 via-indigo-950/90 to-gray-900/90 backdrop-blur-lg h-20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] fixed top-0 left-0 z-50 font-sans text-[16px] border-b border-cyan-500/20 transition-all duration-300">
        <div className="flex items-center">
          <a href="#home" className="group flex items-center">
            <img
              src="./logo.png"
              alt="Logo"
              className="w-[120px] md:w-[150px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <AiFillInstagram size={24} />
          </a>
          <a
            href="https://github.com/RachidHeroumti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <AiFillFacebook size={24} />
          </a>
        </div>

        <button className="md:hidden text-gray-200 hover:text-cyan-300 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-900/95 to-indigo-950/95 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-200 hover:text-cyan-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <AiOutlineClose size={32} className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
        </button>
        <div className="flex flex-col items-center pt-16 gap-6 text-gray-200">
          <NavLink href="#home" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink href="#projects" onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink href="#about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink href="#contact" onClick={toggleMenu}>
            Contact
          </NavLink>
          <div className="flex gap-6 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              <AiFillInstagram size={24} />
            </a>
            <a
              href="https://github.com/RachidHeroumti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              <AiFillFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-gray-200 group hover:text-cyan-300 transition-all duration-300"
    >
      {children}
      <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out rounded-full shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
    </a>
  );
}

export default NavBar;