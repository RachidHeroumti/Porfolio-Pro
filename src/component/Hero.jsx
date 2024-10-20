import React, { useState, useEffect } from 'react';
import imgP from '../image/img1.png';
import { FiDownload } from "react-icons/fi";

function Hero() {
  const [displayedText, setDisplayedText] = useState(''); // Initialize empty string
  const fullText = "I'm Rachid";

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      // Start the animation
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => fullText.slice(0, index + 1)); // Append the next character
          index++;
        } else {
          clearInterval(timer); // Stop when the full text has been displayed

          // Restart the effect after 5 seconds
          setTimeout(() => {
            setDisplayedText(''); // Reset the displayed text
            index = 0; // Reset index
            typeText(); // Start the animation again
          }, 5000); // 5 seconds delay after the typing is complete
        }
      }, 100); // Adjust the speed of the typing effect here (100ms per character)
    };

    typeText(); // Start the typing effect on mount

    return () => clearInterval(); // Clean up when the component unmounts
  }, []); // Empty dependency array since fullText is static

  return (
    <div className=' container flex items-center  bg-customDark h-[700px]  flex-col md:flex-row md:justify-between py-12 font-poppins ' id='home'>
      <div className='text-white sm:p-5 text-2xl space-y-5 w-full'>
        <h1 className='text-[60px] text-gray-200  font-medium text-center h-20 '>
          <span className='text-[20px] text-sky-500 font-normal leading-10'>Hi,</span><br />
          {displayedText}
        </h1>
        <h2 className='text-[20px] leading-8 py-2 font-normal tracking-wide'>
          A passionate <span className='font-bold text-sky-500'>Full Stack Software Developer</span> 🚀 having an experience of
          building applications with JavaScript /Java/ Reactjs / Nodejs / Spring-Boot /NextJs /SQl and some other cool libraries and frameworks.
        </h2>

        <div className='flex justify-center items-center text-white p-5 space-x-3'>
          <a href='https://www.linkedin.com/in/rachid-heroumti-817787243/'>
            <img src='/linkedin.png' alt='LinkedIn' className='w-[45px] h-[45px]' />
          </a>
          <a href='https://github.com/RachidHeroumti' target='_blank'>
            <img src='/github.png' alt='GitHub' className='w-[45px] h-[45px] bg-white rounded-full object-cover' />
          </a>
          <a href='mailto:rachidheroumti0@gmail.com' target='_blank'>
            <img src='/mail.png' alt='Email' className='w-[45px] h-[45px]' />
          </a>
          <a href=''>
            <img src='/whatsapp.png' alt='WhatsApp' className='w-[45px] h-[45px]' />
          </a>
          <a href='' target='_blank' className='bg-blue-600 rounded-full'>
            <img src='/fecebook.png' alt='Facebook' className='w-[45px] h-[45px]' />
          </a>
        </div>

        <div className='flex justify-center items-center space-x-2'>
          <a href="/assets/ResumeHero.pdf" download="ResumeHero.pdf" className='flex space-x-1 bg-sky-500 rounded-md p-2 text-white hover:opacity-70 hover:shadow-md shadow-sky-600 items-center'>
            <button>Download Resume</button>
            <FiDownload size={30} className='text-sky-50' />
          </a>
        </div>
      </div>

      <div className='w-full m-auto flex justify-center'>
        <img className='hidden sm:flex object-cover bg-transparent rounded-full h-[450px] w-[450px] bg-customDark p-5' src={imgP} alt='' />
      </div>
    </div>
  );
}

export default Hero;
