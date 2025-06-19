import React, { useState } from 'react';
import { 
  AiOutlineMenu, 
  AiOutlineClose,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail
} from 'react-icons/ai';
import { 
  FiDownload,
  FiHome,
  FiUser,
  FiCode,
  FiMail
} from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsFileEarmarkPerson } from 'react-icons/bs';

const NavLink = ({ href, icon: Icon, children, onClick, mobile }) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center gap-2 group transition-colors duration-300 ${
      mobile 
        ? 'text-gray-200 hover:text-white py-3 px-4 rounded-lg hover:bg-gray-800 w-full'
        : 'text-gray-400 hover:text-cyan-400 relative'
    }`}
  >
    {Icon && <Icon className={mobile ? "text-lg flex-shrink-0" : "hidden lg:inline text-sm"} />}
    <span className="whitespace-nowrap">{children}</span>
    {!mobile && (
      <span className="absolute left-0 bottom-0 w-full h-px bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    )}
  </a>
);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "#home", text: "Home", icon: FiHome },
    { href: "#projects", text: "Projects", icon: FiCode },
    { href: "#about", text: "About", icon: FiUser },
    { href: "#contact", text: "Contact", icon: FiMail },
  ];

  const socialLinks = [
    { href: "https://linkedin.com", icon: AiFillLinkedin, label: "LinkedIn" },
    { href: "https://github.com/RachidHeroumti", icon: AiFillGithub, label: "GitHub" },
    { href: "mailto:rachidheroumti0@gmail.com", icon: AiOutlineMail, label: "Email" },
    { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
    { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50 px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <a href="#home" className="flex items-center group">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-1 justify-center max-w-2xl">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              <NavLink href={item.href}>
                {item.text}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center flex-shrink-0">
          <a
            href="/resume.pdf"
            download="Rachid_Heroumti_Resume.pdf"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 px-3 lg:px-4 rounded-lg transition-colors duration-300 text-sm lg:text-base"
          >
            <BsFileEarmarkPerson className="flex-shrink-0" />
            <span className="hidden lg:inline">Resume</span>
            <span className="lg:hidden">CV</span>
            <FiDownload size={14} className="flex-shrink-0" />
          </a>
        </div>

        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors p-2 flex-shrink-0"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </nav>

      <div className={`fixed inset-0 z-40 transform transition-all duration-300 ease-in-out h-screen ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="absolute inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-gray-900/95 backdrop-blur-lg border-l border-gray-800 shadow-xl">
          <div className="flex flex-col h-full p-4 sm:p-6">
            <div className="flex justify-end mb-6 sm:mb-8">
              <button
                className="text-gray-400 hover:text-white transition-colors p-2"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col space-y-2 sm:space-y-4">
              {navItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  icon={item.icon}
                  onClick={closeMenu}
                  mobile
                >
                  {item.text}
                </NavLink>
              ))}

              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download="Rachid_Heroumti_Resume.pdf"
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 w-full justify-center"
                  onClick={closeMenu}
                >
                  <BsFileEarmarkPerson className="flex-shrink-0" />
                  <span>Download Resume</span>
                  <FiDownload size={14} className="flex-shrink-0" />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <div className="grid grid-cols-5 gap-4 justify-items-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={closeMenu}
        />
      )}
    </>
  );
}

export default NavBar;