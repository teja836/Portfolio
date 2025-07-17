import React, { useEffect, useState } from 'react';

const texts = ["I'm a web developer", "I'm a frontend developer"];

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
    <section className="min-h-[60vh] w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col justify-center py-12">
      <span className="max-w-2xl text-2xl md:text-3xl text-yellow-300 font-mono h-12 pl-8 md:pl-20 text-left">
        {displayedText}
        <span className="border-r-2 border-yellow-300 animate-pulse ml-1"></span>
      </span>
    </section>
  );
};

export default Aboutme;
