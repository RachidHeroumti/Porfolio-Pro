import React, { useState, useEffect } from 'react';
import imgP from '../image/img1.png';
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import { FiDownload } from "react-icons/fi";


function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = ", I'm Rachid";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust the speed of the animation here (100ms per letter)

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className='flex items-center bg-customDark h-[90%] sm:p-20 flex-col md:flex-row md:justify-between py-12' id='home'>
      <div className='text-gray-50 p-2 sm:p-5 text-2xl space-y-5 w-full'>
        <h1 className='text-3xl sm:text-5xl text-gray-200 py-4 font-bold'>
          Hi{displayedText}
        </h1>
        <h2 className='text-xl sm:text-3xl py-2 font-medium'>
          A passionate <span className=' font-bold text-sky-500'>Full Stack Software Developer</span>  🚀 having an experience of
          building  applications with JavaScript /Java/ Reactjs / Nodejs / Spring-Boot /NextJs /SQl and some other cool libraries and frameworks.
        </h2>

        <div className=''>
        <div className='flex justify-center items-center text-white p-5 space-x-3' >
       
       <a href='https://www.linkedin.com/in/rachid-heroumti-817787243/'>
         <img src='/linkedin.png' alt='LinkedIn' className='w-[45px] h-[45px]' />
       </a>
       <a href='https://github.com/RachidHeroumti' target='_blank'>
         <img src='/github.png' alt='GitHub' className='w-[45px] h-[45px] bg-white rounded-full object-cover' />
       </a>
      
       <a href='mailto:rachidheroumti0@gmail.com' target='_blank' className=''>
         <img src='/mail.png' alt='Email' className='w-[45px] h-[45px]' />
         
       </a>
    
       <a href=''>
         <img src='/whatsapp.png' alt='WhatsApp' className='w-[45px] h-[45px]' />
       </a>
       <a href='' target='_blank' className='bg-blue-600 rounded-full'>
         <img src='/fecebook.png' alt='Facebook' className='w-[45px] h-[45px]' />
       </a>
        </div>
        <div className=' flex justify-center items-center space-x-2'>
        
  <a href="/assets/ResumeHero.pdf" download="ResumeHero.pdf" className='flex  space-x-1 bg-sky-500 rounded-md p-2
     text-white hover:opacity-70 hover:shadow-md shadow-sky-600 items-center' >
    <button className=' '>
      Download Resume
    </button>
    <FiDownload size={30} className=' text-sky-50 '>
    </FiDownload>
  </a>

        
        </div>
        </div>
        
        
      </div>
      <div className='w-full m-auto flex justify-center'>
        {<img className='hidden sm:flex object-cover bg-transparent rounded-full h-[450px] w-[450px] bg-customDark p-5'
          src={imgP} alt='' />
        }
      </div>
    </div>
  );
}

export default Hero;
