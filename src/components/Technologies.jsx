import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';

const techs = [
  { icon: <FaHtml5 className="text-orange-500" size={48} />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-500" size={48} />, name: 'CSS' },
  { icon: <SiTailwindcss className="text-cyan-400" size={48} />, name: 'TailwindCSS' },
  { icon: <FaJs className="text-yellow-400" size={48} />, name: 'JavaScript' },
  { icon: <FaReact className="text-blue-400" size={48} />, name: 'React' },
  { icon: <FaNodeJs className="text-green-600" size={48} />, name: 'Node.js' },
  { icon: <SiMongodb className="text-green-700" size={48} />, name: 'MongoDB' },
  { icon: <SiMysql className="text-blue-700" size={48} />, name: 'MySQL' },
];

const Technologies = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Technologies</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {techs.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {tech.icon}
            <span className="mt-2 text-lg text-gray-200 font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
