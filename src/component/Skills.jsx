import React from 'react';
import { BiCodeBlock } from "react-icons/bi";
import { TbDatabaseStar, TbDeviceMobileCode } from "react-icons/tb";
import { FaDev, FaJava } from "react-icons/fa";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
         SiNodedotjs, SiExpress, SiPhp, SiSpring, SiMysql, SiOracle, SiMongodb, SiFirebase, 
         SiAndroidstudio, SiKotlin, SiGit, SiDocker, SiFigma, SiReactrouter } from "react-icons/si";

// Circular Progress Component
const CircularProgress = ({ percentage, size = 80 }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1e293b"
          strokeWidth="4"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold text-cyan-400">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

function Skills() {
  const skills = [
    {
      title: 'Frontend Mastery',
      icon: <BiCodeBlock size={60} className="text-cyan-400" />,
      items: [
        { name: 'HTML & CSS /Tailwind & Bootstrap', level: 60, desc: 'Pixel-perfect, responsive designs', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'JavaScript & TypeScript', level: 80, desc: 'Dynamic, type-safe interactivity', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'React.js/Vue js & Next.js', level: 75, desc: 'Scalable, modern SPAs /Server-rendered, SEO-optimized apps', icon: <SiReact className="text-cyan-400" /> },
      ]
    },
    {
      title: 'Backend Expertise',
      icon: <FaDev size={60} className="text-cyan-400" />,
      items: [
        { name: 'Node.js & Express', level: 70, desc: 'Robust, high-performance APIs', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'Laravel/php', level: 40, desc: 'Lightweight server-side scripting', icon: <SiPhp className="text-blue-600" /> },
      ]
    },
    {
      title: 'Database Wizardry',
      icon: <TbDatabaseStar size={60} className="text-cyan-400" />,
      items: [
        { name: 'MongoDB', level: 60, desc: 'Flexible NoSQL architecture', icon: <SiMongodb className="text-green-500" /> },
        { name: 'SQL & MySQL', level: 40, desc: 'Structured data mastery', icon: <SiMysql className="text-blue-600" /> },
        { name: 'Firebase', level: 60, desc: 'Real-time, cloud-powered data', icon: <SiFirebase className="text-yellow-500" /> },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <TbDeviceMobileCode size={60} className="text-cyan-400" />,
      items: [
        { name: 'React Native', level: 50, desc: 'Cross-platform mobile apps', icon: <SiReact className="text-cyan-400" /> },
      ]
    },
    {
      title: 'Dev Tools & Workflow',
      icon: <BiCodeBlock size={60} className="text-cyan-400" />,
      items: [
        { name: 'Git & GitHub', level: 55, desc: 'Version control & collaboration', icon: <SiGit className="text-orange-600" /> },
        { name: 'Docker', level: 40, desc: 'Containerized deployments', icon: <SiDocker className="text-blue-500" /> },
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
            <div className="p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-white text-center group-hover:text-cyan-300 transition-colors duration-300">
                {skill.title}
              </h2>
              {skill.items.map((item, i) => (
                <div key={i} className="group/item">
                  <div className="flex items-center gap-4">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 group-hover/item:text-cyan-400 transition-colors duration-300 text-sm font-medium">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 mb-3">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <CircularProgress percentage={item.level} size={70} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* SVG Gradient Definition */}
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