import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCode, FaComments, FaPaperPlane } from "react-icons/fa";
import Reveal from "./Reveal";

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "2ed63229-699c-4799-8411-526d708221fb");
    formData.append("subject", "New portfolio contact message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Error. Please try again.");
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResult("Error. Please try again.");
      toast.error("Failed to send message. Please try again later.");
      console.error("Web3Forms sending error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "mt-2 w-full rounded-xl border border-black/15 bg-[#fffaf0]/80 px-4 py-3 text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-[#9b7627] focus:ring-2 focus:ring-[#9b7627]/20";

  return (
    <section className="w-full border-t border-black/10 bg-[#f5e8c6] px-8 py-20 md:px-20">
      <Reveal className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-black/10 bg-white/50 shadow-xl lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between bg-gray-900 p-8 text-white md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d8b765]">
              Get in touch
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="mt-6 leading-8 text-gray-300">
              Have a project, opportunity, or idea in mind? Send me a message
              and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-10 space-y-5 text-gray-200">
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-white/10 p-3 text-[#d8b765]">
                <FaCode />
              </span>
              <span>Open to full-stack development opportunities</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-white/10 p-3 text-[#d8b765]">
                <FaComments />
              </span>
              <span>Available for collaboration and new ideas</span>
            </div>
          </div>
        </div>

        <form onSubmit={sendEmail} className="p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="font-semibold text-gray-800">
              Name
              <input
                type="text"
                name="name"
                className={inputClasses}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label className="font-semibold text-gray-800">
              Email
              <input
                type="email"
                name="email"
                className={inputClasses}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label className="mt-6 block font-semibold text-gray-800">
            Message
            <textarea
              name="message"
              className={`${inputClasses} min-h-40 resize-y`}
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gray-900 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
          {result && (
            <p
              className={`mt-4 text-center text-sm font-semibold ${
                result.startsWith("Success") ? "text-green-700" : "text-red-700"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
};

export default ContactUs;
