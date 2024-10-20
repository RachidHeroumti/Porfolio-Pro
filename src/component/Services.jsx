import React from 'react';
import imgprogramer from "../image/programer.jpg";

function Services() {
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row sm:w-5/6 p-5'>
      <div className='w-full'>
        <img 
          src={imgprogramer} 
          alt="what I do" 
          className='sm:w-full sm:h-[550px] rounded shadow-lg transition-transform transform hover:scale-105' 
        />
      </div>

      <div className='w-full flex flex-col items-center'>
        <h1 className='text-center text-3xl text-gray-100 px-4 font-medium mb-5'>What I Can Do</h1>
        <div className='space-y-4'>
          <h2 className='py-4 text-gray-400 rounded-lg text-xl mx-5 duration-500 transition-transform transform hover:-translate-y-1  shadow-md'>
            <span className='text-gray-200 text-2xl'>Front-end: </span>
            I develop the front end of websites using HTML, CSS, React.js, Next.js, 
            Tailwind, and Bootstrap, ensuring responsive design and a seamless user experience.
          </h2>
          <h2 className='py-4 text-gray-400 rounded-lg text-xl mx-5 duration-500  transition-transform transform hover:-translate-y-1  shadow-md'>
            <span className='text-gray-200 text-2xl'>Back-end: </span>
            I excel at creating robust APIs and managing databases with technologies like Node.js, Express.js,
            MongoDB, SQL, and Firebase, ensuring efficient data handling and server-side functionality.
          </h2>
          <h2 className='py-4 text-gray-400 rounded-lg text-xl mx-5  duration-500 transition-transform transform hover:-translate-y-1  shadow-md'>
            <span className='text-gray-200 text-2xl'>Programming Languages: </span>
            I develop software solutions using JavaScript, TypeScript, Java, C, C++, PHP, and Kotlin,
            leveraging each language's strengths to build efficient and scalable applications.
          </h2>
          <h2 className='py-4 text-gray-400 rounded-lg text-xl mx-5 duration-500  transition-transform transform hover:-translate-y-1  shadow-md'>
            <span className='text-gray-200 text-2xl'>Android Development: </span>
            I create Android applications using Java and Kotlin, focusing on
            delivering high-performance and user-friendly mobile experiences.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Services;
