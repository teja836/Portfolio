import React from 'react';

const certifications = [
  {
    name: 'View Static Website Certificate',
    link: 'https://certificates.ccbp.in/intensive/static-website?id=TKIFROIIRF',
  },
  {
    name: 'Responsive Certificate',
    link: 'https://certificates.ccbp.in/intensive/responsive-website?id=TGDHAIJQIA',
  },
  {
    name: 'Python Certificate',
    link: 'https://certificates.ccbp.in/intensive/programming-foundations?id=LECEXOSUIQ',
  },
  {
    name: 'MySQL Certificate',
    link: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=QCYYQUJMKU',
  },
  {
    name: 'Dynamic Web JavaScript Certificate',
    link: 'https://certificates.ccbp.in/intensive/dynamic-web-application?id=ZFJDPJQKEU',
  },
  {
    name: 'Responsive Flexbox Certificate',
    link: 'https://certificates.ccbp.in/intensive/flexbox?id=WIGIBOSMSS',
  },
  {
    name: 'Node.js Certificate',
    link: 'https://certificates.ccbp.in/intensive/node-js?id=NXUZVYIMLO',
  },
  {
    name: 'React.js Certificate',
    link: 'https://certificates.ccbp.in/intensive/react-js?id=LGPCXASNFP',
  },
];

const Certifications = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Certifications</h2>
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-3xl flex flex-col gap-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between bg-gray-800 rounded-lg p-4">
            <span className="text-lg text-yellow-300 font-semibold mb-2 md:mb-0 text-center w-full md:w-auto">{cert.name}</span>
            <div className="flex justify-center w-full md:w-auto md:block">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 px-0 py-0.5 text-[9px] md:w-auto md:px-3 md:py-1 md:text-xs bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors text-center"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
