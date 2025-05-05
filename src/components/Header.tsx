import React from "react";
import { Typewriter } from "./Typewriter";
import CircularSkillsImage from "./CircularSkillsImage";

export default function Header() {
  return (
    <main className="max-w-screen-lg min-h-screen lg:min-h-[800px] relative px-4 sm:px-6 pt-16 lg:pt-24  pb-16 mx-auto my-0 bg-[#ffffff00]">
      {/* protfolio image  */}
      <CircularSkillsImage />

      <div className="flex flex-col mt-10 md:mt-0 z-40">
        {/* <!-- type-writer --> */}
        <div className="font-Marcellus w-full md:max-w-[65%] -mt-28 md:-mt-0 z-50">
          <Typewriter />
        </div>
        {/* content  */}
        <p className="font-PlayfairDisplayBold mb-8 sm:mb-10 text-lg sm:text-xl leading-snug max-w-[600px] text-[#ffffffd2] z-50">
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. It&apos;s built for high-performance teams to create, build and
          ship with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-4 py-2 text-sm font-medium rounded-sm bg-[#ffffff77] text-zinc-950 hover:bg-neutral-300 transition-colors">
            Get started
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-sm border border-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 text-white transition-colors">
            View demo
          </button>
        </div>
      </div>
    </main>
  );
}
