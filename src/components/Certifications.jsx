import React from "react";
import javascriptCertificate from "../assets/JavaScriptC.jpeg";
import mysqlCertificate from "../assets/Mysqlc.jpeg";
import nodeCertificate from "../assets/NodeCT.jpeg";
import reactCertificate from "../assets/ReactC.jpeg";

const certifications = [
  {
    name: "MySQL",
    image: mysqlCertificate,
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=QCYYQUJMKU",
  },
  {
    name: "JavaScript",
    image: javascriptCertificate,
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=ZFJDPJQKEU",
  },
  {
    name: "Node.js",
    image: nodeCertificate,
    link: "https://certificates.ccbp.in/intensive/node-js?id=NXUZVYIMLO",
  },
  {
    name: "React.js",
    image: reactCertificate,
    link: "https://certificates.ccbp.in/intensive/react-js?id=LGPCXASNFP",
  },
];

const Certifications = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#f5e8c6] px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Certifications
      </h2>
      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, idx) => (
          <article
            key={idx}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={cert.image}
              alt={`${cert.name} certificate`}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-1 flex-col items-center justify-between gap-4 p-5 text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {cert.name} Certificate
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
              >
                View Certificate
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
