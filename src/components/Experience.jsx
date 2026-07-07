import React from "react";
import { FaAward, FaCheck, FaGraduationCap } from "react-icons/fa";
import javascriptCertificate from "../assets/JavaScriptC.jpeg";
import mysqlCertificate from "../assets/Mysqlc.jpeg";
import nodeCertificate from "../assets/NodeCT.jpeg";
import reactCertificate from "../assets/ReactC.jpeg";
import Reveal from "./Reveal";

const highlights = [
  "Completed an intensive Full Stack Development training program.",
  "Gained expertise in HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js, and Python.",
  "Built multiple full-stack projects integrating front-end and back-end technologies.",
  "Worked with SQL databases (SQLite) for data storage and retrieval.",
  "Used Git for version control and collaborative development.",
];

const certificateImages = [
  { title: "MySQL Certificate", src: mysqlCertificate },
  { title: "JavaScript Certificate", src: javascriptCertificate },
  { title: "Node.js Certificate", src: nodeCertificate },
  { title: "React.js Certificate", src: reactCertificate },
];

const Experience = () => {
  return (
    <section className="w-full border-t border-black/10 bg-[#f5e8c6] px-8 py-20 md:px-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#9b7627]">
            My learning journey
          </p>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Experience
          </h2>
        </Reveal>

        <Reveal
          className="mt-12"
          direction="right"
          delay={0.1}
        >
          <article className="rounded-3xl border border-black/10 bg-white/55 p-7 shadow-lg backdrop-blur-sm md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xl text-white">
                <FaGraduationCap aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Full-stack Training Program
                </h3>
                <p className="mt-2 font-semibold text-[#8a6821]">
                  Professional Training in Full Stack Development — NxtWave
                </p>
              </div>
            </div>
            <span className="w-fit shrink-0 rounded-full border border-[#9b7627]/30 bg-[#f5e8c6] px-4 py-2 text-sm font-bold text-gray-800">
              Jun 2024 – Feb 2025
            </span>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9b7627] text-[10px] text-white">
                  <FaCheck aria-hidden="true" />
                </span>
                <span className="leading-7">{highlight}</span>
              </li>
            ))}
          </ul>
          </article>
        </Reveal>

        <Reveal className="mt-14 flex items-center justify-center gap-3">
          <FaAward className="text-2xl text-[#9b7627]" aria-hidden="true" />
          <h3 className="text-3xl font-bold text-gray-900">Certificates</h3>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificateImages.map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * 0.1}>
              <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white/55 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {certificate.src ? (
                <img
                  src={certificate.src}
                  alt={certificate.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center p-5 text-center text-gray-500">
                  <div>
                    <FaAward className="mx-auto mb-3 text-3xl text-[#b48a32]" />
                    <span className="text-sm font-semibold">
                      Add {certificate.title} image
                    </span>
                  </div>
                </div>
              )}
              <figcaption className="border-t border-black/10 px-4 py-3 text-center font-semibold text-gray-800">
                {certificate.title}
              </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
