import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import shoppingImage from "../assets/shoping.jpeg";
import jobyImage from "../assets/joby.jpeg";
import wikiImage from "../assets/wiki.jpeg";
import moneyImage from "../assets/money.jpeg";
import iplImage from "../assets/ipl.jpeg";
import car from "../assets/car.jpeg";
import dubai from "../assets/dubai.jpg";

const PROJECTS = [
  {
    title: "Car Garage",
    description:
      "A full-stack, admin-controlled car service management system that enables garage owners to create job cards, manage vehicle service details, track service status, and generate bills using React.js, Node.js, Express.js, and REST APIs.",
    image: car,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "REST API", "MySQL"],
    view: "https://example.com",
    code: "https://github.com/teja836/Car_Garage",
  },
  {
    title: "Dubai Tourism",
    description:
      "A React-based tourism web application that lets users explore destinations, view trip packages, enter booking details, and confirm travel plans with a responsive UI and client-side routing.",
    image: dubai,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "REST API", "MySQL"],
    view: "https://example.com",
    code: "https://github.com/teja836/Dubai_Tourism",
  },
  {
    title: "E-commerce Application",
    description:
      "A complete shopping experience with product listings, cart management, and user authentication.",
    image: shoppingImage,
    technologies: ["React", "CSS", "Authentication"],
    view: "https://trndzcp.ccbp.tech/login",
    code: "https://github.com/teja836/Nxt-Trendz---Cart-Features",
  },
  {
    title: "Job Search Application",
    description:
      "A responsive job platform where users can browse, filter, search, and explore jobs that match their preferences.",
    image: jobyImage,
    technologies: ["React", "CSS", "REST API"],
    view: "https://jobbycp.ccbp.tech/login",
    code: "https://github.com/teja836/Jobby-App",
  },
  {
    title: "Wikipedia Search",
    description:
      "A fast Wikipedia search interface that retrieves and presents live results from the Wikipedia API.",
    image: wikiImage,
    technologies: ["React", "Wikipedia API"],
    view: "https://wikisearchgoo.ccbp.tech/",
    code: "https://github.com/teja836/wikipedia-web-search",
  },
  {
    title: "Money Manager",
    description:
      "A simple finance dashboard for tracking income, expenses, balances, and everyday financial activity.",
    image: moneyImage,
    technologies: ["React", "CSS", "State Management"],
    view: "https://moneycb.ccbp.tech/",
    code: "https://github.com/teja836/Money-Manager",
  },
  {
    title: "IPL Dashboard",
    description:
      "An engaging dashboard that fetches and displays team-wise IPL statistics and recent match information.",
    image: iplImage,
    technologies: ["React", "REST API", "Dashboard"],
    view: "https://iplbord.ccbp.tech/",
    code: "https://github.com/teja836/IPL-Dashboard-App",
  },
];

const Projects = () => {
  return (
    <section className="w-full border-t border-black/10 bg-[#f5e8c6] px-8 py-20 md:px-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#9b7627]">
            Selected work
          </p>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-700">
            A collection of responsive applications built to turn practical
            ideas into clean and useful digital experiences.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 0.1}>
              <article className="group flex h-full overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex w-full flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-gray-700">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#9b7627]/25 bg-[#f5e8c6] px-3 py-1 text-xs font-bold text-[#765719]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-3">
                      <a
                        href={project.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Live Demo
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-900 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                      >
                        <FaGithub /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
