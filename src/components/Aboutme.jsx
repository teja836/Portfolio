import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import profilePic from '../assets/image.jpeg';


const texts = ["a web developer", "a frontend developer", "MERN stack developer"];

const Aboutme = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="min-h-[60vh] w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col-reverse md:flex-row py-12">
      {/* Text Container: start of screen on large, top on mobile */}
      <div className="flex-1 flex items-start md:items-center justify-start md:justify-start pl-8 md:pl-20 mb-8 md:mb-0">
        <div>
          <span className="text-2xl md:text-3xl text-white font-bold block mb-2">I'm</span>
          <span className="max-w-2xl text-2xl md:text-3xl text-yellow-300 font-mono font-extrabold h-12">
            {displayedText}
            <span className="border-r-2 border-yellow-300 animate-pulse ml-1"></span>
          </span>
          <p className="mt-6 max-w-xl text-base md:text-lg text-gray-300">
            I'm a passionate software developer specializing in Mern-stack development with expertise in JavaScript, React, and Node.js. I focus on building user-friendly applications and writing clean code. I’m passionate about continuous learning and collaboration. Check out my portfolio to see my work!
          </p>
          <a
            href="SaiTeja_Developer (9).pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
      {/* Image Container: end of screen on large, bottom on mobile */}
      <div className="flex-1 flex flex-col items-center justify-center md:items-center md:justify-end md:pr-20">
        <img src={profilePic} alt="Profile" className="rounded-full shadow-lg h-32 w-32 md:h-56 md:w-56 object-cover mx-auto" />
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/teja836" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-3xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saiteja-arepalli/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
