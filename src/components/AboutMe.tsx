import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="max-w-screen-lg min-h-screen mx-auto px-5 text-white">
      {/* Updated heading with underline styling */}
      <h1 className="font-Marcellus text-4xl md:text-[48px] font-bold tracking-wider leading-[44px] md:leading-[56px] uppercase break-words underline underline-offset-4 decoration-2">
        About Me
      </h1>

      {/* Developer introduction content */}
      <ul className="list-disc px-5">
        <li>
          <p className="font-PlayfairDisplayBold text-[17px] md:text-xl font-bold tracking-[0.07rem] pt-3.5">
            Hi, I'm <span className="custom-underline-2">Abdul Basit</span> — a
            dedicated Front-End Developer with over 2 years of experience
            building responsive, accessible, and high-performing web interfaces.
            I specialize in React, Tailwind CSS, and JavaScript.
          </p>
        </li>
        <li>
          <p className="font-PlayfairDisplayBold text-[17px] md:text-xl font-bold tracking-[0.07rem] pt-3.5">
            Over the past 2+ years, I’ve worked on various projects — both
            independently and as part of teams — where I enhanced my expertise
            in UI/UX design, component architecture, and state management. I'm
            passionate about crafting clean, scalable code.
          </p>
        </li>
        <li>
          <p className="font-PlayfairDisplayBold text-[17px] md:text-xl font-bold tracking-[0.07rem] pt-3.5">
            I'm proficient with Git, collaborative development workflows, and
            agile methodologies. I love working in team settings to build
            reliable and visually engaging user experiences.
          </p>
        </li>
        <li>
          <p className="font-PlayfairDisplayBold text-[17px] md:text-xl font-bold tracking-[0.07rem] pt-3.5">
            Looking ahead, my goal is to grow into a full-stack role,
            strengthening my backend skills while continuing to create front-end
            solutions that delight users and drive results.
          </p>
        </li>
      </ul>

      {/* Learn more button */}
      <button className="w-full md:w-52 px-4 py-2 mt-10 text-sm font-medium border border-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 text-white transition-colors flex items-center justify-center gap-2">
        Learn More <FaArrowRight className="text-base" />
      </button>
    </div>
  );
}
