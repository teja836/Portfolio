import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.open(`mailto:tejaarepalli6@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section className="w-full py-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-2xl flex flex-col gap-6">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[120px]"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 transition-colors"
        >
          Contact with me
        </button>
      </form>
    </section>
  );
};

export default Contact;
