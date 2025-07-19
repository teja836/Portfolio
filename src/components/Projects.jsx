
import React from 'react';
import shoppingImage from '../assets/shoping.jpeg';
import jobyImage from '../assets/joby.jpeg';
import wikiImage from '../assets/wiki.jpeg';
import moneyImage from '../assets/money.jpeg';
import iplImage from '../assets/ipl.jpeg';

const PROJECTS = [
  {
    title: 'E-commerce Application',
    description: 'A fully functional e-commerce website with features like product listing, shoping cart, and user authentication.',
    image: shoppingImage,
    technologies: ['React', 'CSS', 'Authentication'],
    view: 'https://trndzcp.ccbp.tech/login',
    code: 'https://github.com/teja836/Nxt-Trendz---Cart-Features',
  },
  {
    title: 'Job Search Application',
    description: 'Jobby App is a responsive job search platform that allows users to browse, search, and apply for jobs based on their preferences.',
    image: jobyImage,
    technologies: ['React', 'CSS', 'API'],
    view: 'https://jobbycp.ccbp.tech/login',
    code: 'https://github.com/teja836/Jobby-App',
  },
  {
    title: 'Wikipedia Search',
    description: 'WikiSearch App is a responsive React application that allows users to search and view real-time Wikipedia results using the Wikipedia API.',
    image: wikiImage,
    technologies: ['React', 'Wikipedia API'],
    view: 'https://wikisearchgoo.ccbp.tech/',
    code: 'https://github.com/teja836/wikipedia-web-search',
  },
  {
    title: 'Money-Manager',
    description: 'Money Manager App is a responsive React application that helps users track their income and expenses, manage their budget, and monitor their financial activity in real-time.',
    image: moneyImage,
    technologies: ['React', 'CSS'],
    view: 'https://moneycb.ccbp.tech/',
    code: 'https://github.com/teja836/Money-Manager',
  },
  {
    title: 'IPL Dash board',
    description: 'IPL Dashboard App is a responsive React application that displays team-wise IPL statistics by fetching and visualizing data from an API in an engaging dashboard format.',
    image: iplImage,
    technologies: ['React', 'API', 'Dashboard'],
    view: 'https://iplbord.ccbp.tech/',
    code: 'https://github.com/teja836/IPL-Dashboard-App',
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl text-white font-bold">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 flex justify-center items-center">
              <img
                src={project.image}
                width={180}
                height={180}
                alt={project.title}
                className="mb-6 rounded-lg object-cover"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center">
              <h6 className="mb-2 font-semibold text-lg text-yellow-300 text-center lg:text-left">{project.title}</h6>
              <p className="mb-4 text-sm text-neutral-400 text-center lg:text-left">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((technology, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors w-24 text-center"
                >
                  View
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs bg-gray-700 text-white font-semibold rounded hover:bg-gray-600 transition-colors w-24 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
