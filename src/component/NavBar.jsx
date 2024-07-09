import React from 'react'
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai"

function NavBar() {
  return (
  
       <div className='w-full text-gray-50 text-sm flex  items-center bg-customDark 
            p-4 px-12 fixed top-0 right-0 z-50 justify-center space-x-2'>
            <a href='#home' className='p-2   hover:text-gray-300 hover:bg-cyan-900'>Home</a>
            <a href='#project' className='p-2 hover:text-gray-300 hover:bg-cyan-900'>Projects</a>
            <a href='#about' className='p-2 hover:text-gray-300 hover:bg-cyan-900'>About Me</a>
        
          </div>
    
  )
}

export default NavBar
