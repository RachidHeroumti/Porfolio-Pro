import React from 'react';
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";

function NavBar() {
  return (
    <div className='w-full px-[36px] text-gray-50 flex justify-between items-center bg-customDark h-20 shadow  fixed top-0 right-0 z-50 text-[16px] font-poppins font-normal'>
      <div className='hidden sm:flex'>
      <a href="#home" className="flex items-center">
   <img src='./logo.png 'alt='logo' className='w-[150px]  object-cover'/>
</a>

      </div>
      <div className='flex justify-between sm:w-1/4 me-[20px]'>
        <NavLink href='#home'>Home</NavLink>
        <NavLink href='#project'>Projects</NavLink>
        <NavLink href='#about'>About</NavLink>
        <NavLink href='#contact'>Contact</NavLink>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className='relative text-white group '
    >
      {children}
      <span
        className='absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'
      />
    </a>
  );
}

export default NavBar;
