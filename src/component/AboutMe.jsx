import React from 'react';

function AboutMe() {
  return (
    <div className=" bg-customDark text-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" id='about'>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className=" text-base">
        I am a passionate Full Stack Developer with a strong foundation in Computer Science. I recently graduated from <span className="font-semibold">Ibn Zohr University</span> with a Bachelor of Science in Computer Science.
      </p>
      <p className="text-base mt-4">
        My interest in programming stems from a fascination with building things and solving problems. I am based in <span className="font-semibold">Morroco</span> and have a strong proficiency in HTML, CSS, and JavaScript (particularly React and Next.js). I am also experienced with back-end frameworks such as Node.js and Spring Boot. My projects are centered around creating responsive and intuitive applications with meaningful user experiences.
      </p>
      <p className=" text-base mt-4">
        In addition to coding, I actively explore new technologies, contribute to open-source projects, and further my knowledge through online courses and workshops. 
      </p>
      <p className="text-base mt-4">
        Feel free to explore my portfolio and GitHub to learn more about my recent projects. I look forward to connecting and collaborating on innovative solutions!
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Education</h3>
        <div className="">
          <p><span className="font-semibold">Ibn Zohr University</span>, Bachelor  in Computer Science, <span className="italic">2024</span></p>
          <p>Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Languages</h3>
        <div className="">
          <p>Arabic, French, English, Amazigh</p>
        </div>
      </div>
    </div>
  );
}



export default AboutMe;
