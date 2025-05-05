"use client";
import Link from "next/link";
import * as React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

function NotFoundPage() {
  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.currentTarget.style.transform = "none";
  };
  return (
    <main className="flex overflow-hidden fixed top-0 left-0 flex-col justify-center items-center p-0 w-screen h-screen min-h-screen text-center text-white bg-black">
      <section className="w-full max-w-[1200px] max-sm:max-w-[600px]">
        <h1
          className="mb-10 font-extrabold transition-transform cursor-pointer duration-[0.3s] ease-[ease] text-[192px] max-sm:text-6xl"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Oops! 404
        </h1>
        <p className="mb-20 text-4xl leading-relaxed text-white text-opacity-70 max-sm:text-base">
          Looks like you&apos;ve ventured into uncharted territory. The page
          you&apos;re looking for seems to have gone on vacation!
        </p>
        <Link
          className="inline-flex overflow-hidden relative gap-2.5 justify-center items-center px-8 py-4 text-base font-medium text-black no-underline bg-violet-400 rounded-lg ease-[cubic-bezier(0.37,0.01,0,0.98)] transition-all duration-300 shadow-2xl"
          href="/"
        >
          <FaLongArrowAltLeft className="w-10" />
          <span className="transition-opacity duration-[0.3s] group-hover:opacity-0 group-hover:w-0 group-hover:absolute">
            Return to Homepage
          </span>
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
