import React from 'react';
import { BiCodeAlt } from "react-icons/bi";
import { TbDatabase, TbDeviceMobile } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiExpress, SiPhp, SiMysql, SiMongodb, 
  SiFirebase, SiGit, SiDocker, SiReactrouter, SiVuedotjs
} from "react-icons/si";

const SkillCategory = ({ title, icon, children }) => (
  <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gray-700 rounded-lg text-cyan-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-5">
        {children}
      </div>
    </div>
  </div>
);

const SkillItem = ({ name, level, icon, description }) => (
  <div className="group">
    <div className="flex items-start gap-4">
      <div className="mt-1 text-lg text-gray-400 group-hover:text-cyan-400 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-300 font-medium">{name}</span>
          <span className="text-sm text-cyan-400">{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
        {description && (
          <p className="mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
        )}
      </div>
    </div>
  </div>
);

function Skills() {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <BiCodeAlt size={24} />,
      skills: [
        { name: "HTML5 & CSS3", level: 90, icon: <><SiHtml5 className="text-orange-500" /> <SiCss3 className="text-blue-500" /></>, description: "Semantic markup and responsive styling" },
        { name: "JavaScript/TypeScript", level: 85, icon: <><SiJavascript className="text-yellow-400" /> <SiTypescript className="text-blue-400" /></>, description: "Modern ES6+ features and type safety" },
        { name: "React & Vue", level: 80, icon: <><SiReact className="text-cyan-500" /> <SiVuedotjs className="text-green-500" /></>, description: "Component-based architecture" },
        { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss className="text-cyan-400" />, description: "Utility-first CSS framework" },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer size={20} />,
      skills: [
        { name: "Node.js & Express", level: 80, icon: <><SiNodedotjs className="text-green-500" /> <SiExpress className="text-gray-300" /></>, description: "RESTful API development" },
        { name: "PHP/Laravel", level: 60, icon: <SiPhp className="text-purple-500" />, description: "Server-side scripting" },
      ]
    },
    {
      title: "Database & Storage",
      icon: <TbDatabase size={24} />,
      skills: [
        { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-500" />, description: "NoSQL document database" },
        { name: "MySQL", level: 65, icon: <SiMysql className="text-blue-500" />, description: "Relational database management" },
        { name: "Firebase", level: 70, icon: <SiFirebase className="text-yellow-500" />, description: "Realtime database & auth" },
      ]
    },
    {
      title: "Mobile Development",
      icon: <TbDeviceMobile size={24} />,
      skills: [
        { name: "React Native", level: 70, icon: <SiReact className="text-cyan-500" />, description: "Cross-platform mobile apps" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FiTool size={20} />,
      skills: [
        { name: "Git & Version Control", level: 85, icon: <SiGit className="text-orange-500" />, description: "Collaborative development" },
        { name: "Docker", level: 60, icon: <SiDocker className="text-blue-500" />, description: "Containerization" },
      ]
    }
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My toolkit for building exceptional digital experiences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              icon={category.icon}
            >
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  description={skill.description}
                />
              ))}
            </SkillCategory>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;