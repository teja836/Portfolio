import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_pobgtwi", "template_mbf5tqe", form.current, {
        publicKey: "pRU1M1j2nKuBCAQzT",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          console.error("Email sending error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="w-full py-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-2xl flex flex-col gap-6"
      >
        <label className="text-yellow-400 font-semibold">Name</label>
        <input
          type="text"
          name="title"
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your name"
          required
        />
        <label className="text-yellow-400 font-semibold">Email</label>
        <input
          type="email"
          name="name"
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your email"
          required
        />
        <label className="text-yellow-400 font-semibold">Message</label>
        <textarea
          name="message"
          className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[120px]"
          placeholder="Enter your message"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 transition-colors cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
