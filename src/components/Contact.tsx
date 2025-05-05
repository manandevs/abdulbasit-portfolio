import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="py-16 px-4 md:px-20 flex flex-col items-center justify-between gap-10 mt-20 md:mt-36">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-8">
        <h1 className="text-white mb-10 font-Marcellus text-4xl md:text-[48px] font-bold tracking-wider leading-[44px] md:leading-[56px] uppercase break-words underline underline-offset-4 decoration-2">
          Contact Me
        </h1>
        <div className="text-sm text-gray-200">
          <div>
            🌐 <strong>Global Network</strong>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-9 md:justify-evenly w-full">
          <Image
            src="/png/contact.png"
            alt="Envelope Illustration"
            width={300}
            height={300}
            className="w-72 h-auto mt-6 hidden md:block"
          />

          <form className="flex-1 space-y-4 w-full max-w-md text-gray-300">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="What's your email?"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400"
            />
            <textarea
              placeholder="Your questions..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold text-lg shadow-md hover:opacity-90 transition cursor-pointer"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
