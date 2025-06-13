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
        : 'text-gray-400 hover:text-cyan-400'
    }`}
  >
    {Icon && <Icon className={mobile ? "text-lg" : "hidden md:inline"} />}
    <span>{children}</span>
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
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50 px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center group">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              <NavLink href={item.href}>
                {item.text}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/resume.pdf"
            download="Rachid_Heroumti_Resume.pdf"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <BsFileEarmarkPerson />
            <span>Resume</span>
            <FiDownload size={14} />
          </a>
        </div>

        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="absolute inset-y-0 right-0 w-72 bg-gray-900/95 backdrop-blur-lg border-l border-gray-800 shadow-xl">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col space-y-4">
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

              <a
                href="/resume.pdf"
                download="Rachid_Heroumti_Resume.pdf"
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 mt-4"
                onClick={closeMenu}
              >
                <BsFileEarmarkPerson />
                <span>Resume</span>
                <FiDownload size={14} />
              </a>
            </div>

            <div className="flex justify-center space-x-4 pt-8 border-t border-gray-800">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
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