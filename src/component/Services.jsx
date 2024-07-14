import React from 'react'
import imgprogramer from "../image/programer.jpg"


function Services() {
  return (
    <div className=' flex flex-col justify-center sm:flex-row   sm:w-5/6 p-5'>

       <div className='w-full'> 
            <img src="./img_pg.jpg" alt="what i do " className=' sm:w-full sm:h-[550px]  rounded'/>
          </div>

        <div className='w-full'>
           <h1 className='text-center text-3xl text-gray-100 px-4 font-medium '>What i can do </h1> 
            <div className=' '>
    <h2 className=' py-2  text-gray-400 rounded-lg md:rounded-lg text-xl mx-5 m-2'>
      <span className='text-gray-200 text-2xl'>Front-end : </span>
      Front-end: I develop the front end of websites using HTML, CSS, React.js, Next.js, 
       Tailwind, and Bootstrap, ensuring responsive design and a seamless user experience.
    </h2>
    <h2 className=' py-2  text-gray-400 rounded-lg md:rounded-lg text-xl mx-5 m-2'>
      <span className='text-gray-200 text-2xl'>Back-end : </span>
      I excel at creating robust APIs and managing databases with technologies like Node.js, Express.js,
        MongoDB, SQL, and Firebase, ensuring efficient data handling and server-side functionality.
    </h2>
    <h2 className=' py-2  text-gray-400 rounded-lg md:rounded-lg text-xl mx-5 m-2'>
      <span className='text-gray-200 text-2xl'>Programming Languages : </span>
      I develop software solutions using JavaScript, TypeScript, Java, C, C++, PHP, and Kotlin,
       leveraging each language's strengths to build efficient and scalable applications.
    </h2>
    <h2 className='py-2  text-gray-400 rounded-lg md:rounded-lg text-xl mx-5 m-2'>
      <span className='text-gray-200 text-2xl'>Android Development : </span>
      I create Android applications using Java and Kotlin, focusing on
       delivering high-performance and user-friendly mobile experiences.
    </h2>
                 </div>
        </div>
        
    </div>
  )
}

export default Services
