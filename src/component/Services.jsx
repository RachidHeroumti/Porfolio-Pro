import React from 'react';
import imgprogramer from "../image/programer.jpg";

function Services() {
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row w-full sm:w-5/6 gap-4 p-4'>
      {/* Image Section */}
      <div className='w-full sm:w-1/2'>
        <img 
          src={imgprogramer} 
          alt="What I Do" 
          className='w-full h-auto md:h-[500px] rounded-lg shadow-lg' 
        />
      </div>

      {/* Content Section */}
      <div className='w-full sm:w-1/2 flex flex-col'>
        <h1 className='text-center text-3xl text-gray-100 font-medium mb-6'>
          What I Can Do
        </h1>

        {/* Skills List */}
        <div className='space-y-2'>
          {/* Front-end */}
          <div className='bg-gray-800 p-4 rounded-lg transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg'>
            <span className='text-gray-200 text-xl font-semibold'>Front-end: </span>
            <p className='text-gray-400 mt-2'>
              I develop the front end of websites using HTML, CSS, React.js, Next.js, 
              Tailwind, and Bootstrap, ensuring responsive design and a seamless user experience.
            </p>
          </div>

          {/* Back-end */}
          <div className='bg-gray-800 p-4 rounded-lg transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg'>
            <span className='text-gray-200 text-xl font-semibold'>Back-end: </span>
            <p className='text-gray-400 mt-2'>
              I excel at creating robust APIs and managing databases with technologies like Node.js, Express.js,
              MongoDB, SQL, and Firebase, ensuring efficient data handling and server-side functionality.
            </p>
          </div>

          {/* Programming Languages */}
          <div className='bg-gray-800 p-4 rounded-lg transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg'>
            <span className='text-gray-200 text-xl font-semibold'>Programming Languages: </span>
            <p className='text-gray-400 mt-2'>
              I develop software solutions using JavaScript, TypeScript, Java, C, C++, PHP, and Kotlin,
              leveraging each language's strengths to build efficient and scalable applications.
            </p>
          </div>

          {/* Android Development */}
          <div className='bg-gray-800 p-4 rounded-lg transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg'>
            <span className='text-gray-200 text-xl font-semibold'>Android Development: </span>
            <p className='text-gray-400 mt-2'>
              I create Android applications using Java and Kotlin, focusing on
              delivering high-performance and user-friendly mobile experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;