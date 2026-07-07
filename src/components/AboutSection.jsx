import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiGithubcopilot,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";
import profilePic from "../assets/image.jpeg";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    title: "Technologies",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
      { name: "Codex", icon: <SiOpenai /> },
    ],
  },
];

const AboutSection = () => {
  return (
    <section className="w-full border-t border-black/10 bg-[#f5e8c6] px-8 py-20 md:px-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal
          className="relative mx-auto w-full max-w-sm"
          direction="right"
        >
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border-2 border-[#b48a32]" />
          <img
            src={profilePic}
            alt="Arepalli Saiteja"
            className="relative aspect-square w-full rounded-2xl object-cover shadow-xl"
          />
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#9b7627]">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            About Me
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 md:text-lg">
            I&apos;m a passionate software developer specializing in MERN-stack
            development with expertise in JavaScript, React, and Node.js. I
            focus on building user-friendly applications and writing clean code.
            I&apos;m passionate about continuous learning and collaboration.
            Check out my portfolio to see my work!
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={0.12 * index}>
                <article className="h-full rounded-2xl border border-black/10 bg-white/55 p-5 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-xl text-[#9b7627]" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                  ))}
                </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
