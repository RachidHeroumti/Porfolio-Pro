import React from 'react';
import { BiCodeBlock } from "react-icons/bi";
import { TbDatabaseStar, TbDeviceMobileCode } from "react-icons/tb";
import { FaDev } from "react-icons/fa";
import ProgressBar from '@ramonak/react-progress-bar'; // Example progress bar package

function Skills() {
  const skills = [
    {
      title: 'Client Side',
      icon: <BiCodeBlock size={50} className=" text-sky-500" />,
      items: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind/Bootstrap', level: 85 },
        { name: 'JavaScript/TypeScript', level: 80 },
        { name: 'ReactJS', level: 75 },
        { name: 'NextJS', level: 70 }
      ]
    },
    {
      title: 'Server Side',
      icon: <FaDev size={50} className="text-sky-500" />,
      items: [
        { name: 'NodeJS/Express', level: 85 },
        { name: 'PHP', level: 50 },
        { name: 'Spring Boot', level: 65 },
        { name: 'NextJS', level: 75 }
      ]
    },
    {
      title: 'Database',
      icon: <TbDatabaseStar size={50} className="text-sky-500" />,
      items: [
        { name: 'SQL/MySQL', level: 70 },
        { name: 'Oracle DB', level: 70 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 65 }
      ]
    },
    {
      title: 'Mobile',
      icon: <TbDeviceMobileCode size={50} className="text-sky-500" />,
      items: [
        { name: 'Android Studio', level: 60 },
        { name: 'Kotlin', level: 60 },
        { name: 'Java', level: 60 }
      ]
    },
    {
      title: 'Other Tools',
      icon: <BiCodeBlock size={50} className="text-sky-500" />,
      items: [
        { name: 'Git & GitHub', level: 55 },
        { name: 'Docker', level: 50 },
        { name: 'Figma', level: 40 },
        { name: 'CI/CD & DevOps (Learning)', level: 30 }
      ]
    }
  ];

  return (
    <div className="w-5/6 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-white p-5">My <span className="text-sky-500">Skills</span></h1>
      </div>
      <div className="grid gap-10 p-5 lg:grid-cols-3 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div
          key={index}
          className="shadow-lg rounded-lg flex flex-col border border-sky-500 text-gray-300 
            hover:shadow-2xl  transition-transform duration-300 
            transform hover:-translate-y-1"
        >
            <div className="h-[150px] flex justify-center items-center">
              {skill.icon}
            </div>
            <div className="h-full space-y-3 p-4">
              <h1 className="text-2xl text-center text-gray-100 font-semibold">{skill.title}</h1>
              {skill.items.map((item, i) => (
                <div key={i} className="space-y-1 ">
                  <h1 className="text-lg"><span className="text-gray-400 px-2">{">>"}</span>{item.name}</h1>
                  <ProgressBar
                    completed={item.level}
                    bgColor="#38bdf8"
                    baseBgColor="#1e293b"
                    labelAlignment="outside"
                    labelColor="#fff"
                    height="10px"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
