import React from 'react';
import { BiCodeBlock } from "react-icons/bi";
import { TbDatabaseStar, TbDeviceMobileCode } from "react-icons/tb";
import { FaDev, FaJava } from "react-icons/fa"; // Added FaJava for Java
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
         SiNodedotjs, SiExpress, SiPhp, SiSpring, SiMysql, SiOracle, SiMongodb, SiFirebase, 
         SiAndroidstudio, SiKotlin, SiGit, SiDocker, SiFigma, SiReactrouter } from "react-icons/si";
import ProgressBar from '@ramonak/react-progress-bar';

function Skills() {
  const skills = [
    {
      title: 'Frontend Mastery',
      icon: <BiCodeBlock size={60} className="text-cyan-400" />,
      items: [
        { name: 'HTML & CSS', level: 90, desc: 'Pixel-perfect, responsive designs', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'Tailwind & Bootstrap', level: 85, desc: 'Rapid, stylish UI development', icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: 'JavaScript & TypeScript', level: 80, desc: 'Dynamic, type-safe interactivity', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'React.js', level: 75, desc: 'Scalable, modern SPAs', icon: <SiReact className="text-cyan-400" /> },
        { name: 'Next.js', level: 70, desc: 'Server-rendered, SEO-optimized apps', icon: <SiNextdotjs className="text-white" /> }
      ]
    },
    {
      title: 'Backend Expertise',
      icon: <FaDev size={60} className="text-cyan-400" />,
      items: [
        { name: 'Node.js & Express', level: 85, desc: 'Robust, high-performance APIs', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'Next.js API', level: 70, desc: 'Full-stack power in one framework', icon: <SiNextdotjs className="text-white" /> },
        { name: 'PHP', level: 40, desc: 'Lightweight server-side scripting', icon: <SiPhp className="text-blue-600" /> },
        { name: 'Spring Boot', level: 45, desc: 'Enterprise-grade Java solutions', icon: <SiSpring className="text-green-600" /> }
       
      ]
    },
    {
      title: 'Database Wizardry',
      icon: <TbDatabaseStar size={60} className="text-cyan-400" />,
      items: [
        { name: 'MongoDB', level: 80, desc: 'Flexible NoSQL architecture', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Firebase', level: 60, desc: 'Real-time, cloud-powered data', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'SQL & MySQL', level: 35, desc: 'Structured data mastery', icon: <SiMysql className="text-blue-600" /> },
        { name: 'Oracle DB', level: 40, desc: 'Enterprise database solutions', icon: <SiOracle className="text-red-600" /> },
      
      ]
    },
    {
      title: 'Mobile Development',
      icon: <TbDeviceMobileCode size={60} className="text-cyan-400" />,
      items: [
      
        { name: 'Java', level: 60, desc: 'Versatile mobile foundations', icon: <FaJava className="text-red-600" /> }, 
        { name: 'React Native', level: 45, desc: 'Cross-platform mobile apps', icon: <SiReact className="text-cyan-400" /> },
        { name: 'Android Studio', level: 30, desc: 'Native Android app creation', icon: <SiAndroidstudio className="text-green-500" /> },
        { name: 'Kotlin', level: 30, desc: 'Modern, concise mobile coding', icon: <SiKotlin className="text-purple-600" /> },
      ]
    },
    {
      title: 'Dev Tools & Workflow',
      icon: <BiCodeBlock size={60} className="text-cyan-400" />,
      items: [
        { name: 'Git & GitHub', level: 55, desc: 'Version control & collaboration', icon: <SiGit className="text-orange-600" /> },
        { name: 'Docker', level: 50, desc: 'Containerized deployments', icon: <SiDocker className="text-blue-500" /> },
        { name: 'Figma', level: 40, desc: 'UI/UX design prototyping', icon: <SiFigma className="text-purple-500" /> },
        { name: 'CI/CD & DevOps', level: 30, desc: 'Automation in progress', icon: <SiReactrouter className="text-red-500" /> }
      ]
    }
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          My <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Skills
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          A showcase of my technical arsenal—honed through real-world innovation.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-lg border border-gray-700/30 
                       transform transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
          >
            {/* Icon Header */}
            <div className="h-32 flex justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              {skill.icon}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white text-center group-hover:text-cyan-300 transition-colors duration-300">
                {skill.title}
              </h2>
              {skill.items.map((item, i) => (
                <div key={i} className="space-y-2 group/item">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 group-hover/item:text-cyan-400 transition-colors duration-300">
                          {item.name}
                        </span>
                        <span className="text-cyan-400 font-medium">{item.level}%</span>
                      </div>
                      <ProgressBar
                        completed={item.level}
                        bgColor="url(#gradient)"
                        baseBgColor="#1e293b"
                        height="6px"
                        labelAlignment="outside"
                        labelColor="transparent"
                        customLabel=" "
                      />
                      <p className="text-xs text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <svg className="absolute -z-10" width="0" height="0">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;