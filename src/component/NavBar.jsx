import React from 'react'
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai"

function NavBar() {
  return (
  
       <div className='w-full text-gray-50  flex  justify-between bg-customDark 
           p-2 sm:p-4 sm:px-12 fixed top-0 right-0 z-50  text-xl '>
              <div className='hidden sm:flex'>
                <a href='#home' className=' text-2xl font-bold underline decoration-wavy'>R.Herou</a>
              </div>
              <div className=' space-x-1 sm:space-x-3'>
              <a href='#home' className='p-2   hover:text-sky-500 '>Home</a>
              <a href='#project' className='p-2  hover:text-sky-500'>Projects</a>
              <a href='#about' className='p-2  hover:text-sky-500'>About</a>
              <a href='#contact' className='p-2  hover:text-sky-500'>Contact</a>
              </div>
           
          </div>
    
  )
}

export default NavBar
