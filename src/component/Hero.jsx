import React from 'react'
import imgP from "../image/img1.png"
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai"
import { BsLinkedin } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { MdOutlineEmail } from 'react-icons/md'


function Hero() {
  return (
    <div className=' flex items-center bg-customDark h-[90%]  sm:p-20 flex-col md:flex-row  md:justify-between py-12 ' id='home'>
    <div className='text-gray-50 sm:p-5 text-2xl space-y-5 w-full'>
      <h1 className='text-5xl text-gray-200 py-4  font-bold '>Hi ,I'am Rachid</h1>
      <h2 className='text-3xl py-2 font-medium '>A passionate Full Stack Software Developer 🚀 having an experience of
         building Web and Mobile applications with JavaScript
         / Reactjs / Nodejs /Java/Kotlin and some other cool libraries and frameworks.</h2>

         <div className='flex justify-center items-center text-white p-5 space-x-3' id='contact'>
          <a href='' target="_blank" className=' bg-blue-600 rounded-full'>
             <img src='/fecebook.png' alt='Facebook' className='w-[45px] h-[45px]' />
          </a>

          <a href='https://www.linkedin.com/in/rachid-heroumti-817787243/'>
             <img src='/linkedin.png' alt='Facebook' className='w-[45px] h-[45px]' /></a>

          <a href=''>
              <img src='/whatsapp.png' alt='Facebook' className='w-[45px] h-[45px]' /></a>

          <a href='mailto:rachidheroumti0@gmail.com' target="_blank"> 
              <img src='/mail.png' alt='Facebook' className='w-[45px] h-[45px]' /></a>
         <a href='https://github.com/RachidHeroumti' target="_blank"> 
              <img src='/github.png' alt='Facebook' className='w-[45px] h-[45px] bg-white rounded-full object-cover' /></a>
        </div>

    </div>
    <div className='w-full m-auto flex justify-center'>
    {<img className=' hidden sm:flex object-cover bg-transparent rounded-full h-[450px] w-[450px] bg-customDark  p-5 '
      src={imgP} alt='' />
     }
    </div>
  
  </div>
  )
}

export default Hero
