import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/image.jpeg";
import Reveal from "./Reveal";

const Aboutme = () => {
  return (
    <section className="flex min-h-[70vh] w-full flex-col-reverse items-center gap-10 bg-[#f5e8c6] px-8 py-16 md:flex-row md:px-20">
      <Reveal className="flex flex-1 items-center" direction="right">
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#9b7627]">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Hi, I&apos;m a Full-stack Web Developer with AI
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg">
            I build responsive, user-friendly web applications with modern
            technologies. I also use AI to create smarter and more efficient
            digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="/SaiTeja_FullStack_Developer_Resume%20(15).pdf"
              download="SaiTeja_FullStack_Developer_Resume.pdf"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700"
            >
              View My Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal
        className="flex flex-1 flex-col items-center justify-center"
        direction="left"
        delay={0.15}
      >
        <Motion.img
          src={profilePic}
          alt="Arepalli Saiteja"
          className="h-48 w-48 rounded-full border-4 border-white/70 object-cover shadow-xl md:h-72 md:w-72"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <h2 className="mt-5 text-2xl font-bold text-gray-900">
          Arepalli Saiteja
        </h2>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/teja836"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-3xl text-gray-800 transition-colors duration-300 hover:text-[#9b7627]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saiteja-arepalli/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-3xl text-gray-800 transition-colors duration-300 hover:text-[#9b7627]"
          >
            <FaLinkedin />
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Aboutme;
