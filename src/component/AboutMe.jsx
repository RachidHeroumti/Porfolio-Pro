import React from 'react';

function AboutMe() {
  return (
    <div className=" container bg-customDark mb-20 text-white font-normal font-poppins text-[15px] flex flex-col justify-center w-full" id='about'>
     

      <div className=' md:flex justify-between space-x-2 '>

     <div className=' md:w-1/2'>
     <h2 className="text-3xl font-bold mb-6  pb-2">About Me</h2>
      <p className="  leading-relaxed">
        I am a passionate Full Stack Developer with a strong foundation in Computer Science. I recently graduated from 
        <span className="font-semibold"> Ibn Zohr University</span> with a Bachelor in Computer Science.
      </p>
      <p className="mt-4 leading-relaxed">
        My interest in programming stems from a fascination with building things and solving problems. I am based in 
        <span className="font-semibold"> Morocco</span> and have a strong proficiency in HTML, CSS, and JavaScript (particularly React and Next.js). I am also experienced with back-end frameworks such as Node.js and Spring Boot. My projects are centered around creating responsive and intuitive applications with meaningful user experiences.
      </p>
      <p className=" mt-4  leading-relaxed">
        In addition to coding, I actively explore new technologies, contribute to open-source projects, and further my knowledge through online courses and workshops. 
      </p>
      <p className=" mt-4  leading-relaxed">
        Feel free to explore my portfolio and GitHub to learn more about my recent projects. I look forward to connecting and collaborating on innovative solutions!
      </p>
     </div>

      <div className="">
        <h3 className="text-2xl font-bold mb-2 text-center  pb-2">Education</h3>
        <div className="text-center">
          <p className="font-semibold">Ibn Zohr University</p>
          <p>Bachelor in Computer Science, <span className="italic">2024</span></p>
          <p className="mt-1">Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering</p>
        </div>
      </div>

      <div className="">
        <h3 className="text-2xl font-bold mb-2 text-center  pb-2">Languages</h3>
        <div className="text-center">
          <p>Arabic, French, English, Amazigh</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;
