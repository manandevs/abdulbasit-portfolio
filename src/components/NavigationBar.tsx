"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navigationItems = [
  "About Me",
  "Skills",
  "Projects",
  "Services",
  "Contact",
];

export const NavigationBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-screen-lg mx-auto font-Marcellus relative z-[100] border-b border-neutral-200 text-white px-4 sm:px-6 md:px-8 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto py-4 ">
        {/* Logo & Hamburger */}
        <Link
          href="#"
          className="text-2xl font-semibold text-white cursor-pointer flex flex-col items-center justify-center"
        >
          <div className="w-[150px] h-[35px] flex items-center justify-center overflow-hidden">
            <Image
              src={"/svg/logo.svg"}
              alt="logo"
              width={150}
              height={30}
              className="overflow-hidden"
            />
          </div>
          <Image
            src={"/svg/logo-bottom.svg"}
            alt="logo"
            width={30}
            height={15}
            className="mr-3.5"
          />
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item}
              href={`#/${item}`}
              className="nav-items group relative px-1 block text-sm font-medium text-white hover:text-gray-200 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          <button className="px-4 py-2 text-sm font-medium rounded-sm bg-[#ffffff77] text-zinc-950 hover:bg-neutral-300 transition-colors">
            Get started
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-sm border border-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 text-white transition-colors">
            View demo
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-4">
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href={`#/${item}`}
                onClick={() => setMenuOpen(false)}
                className="relative text-sm font-medium text-white hover:text-gray-200 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <button className="w-full px-4 py-2 text-sm font-medium rounded-sm bg-neutral-200 text-zinc-950 hover:bg-neutral-300 transition-colors cursor-pointer">
                Get started
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium rounded-sm border border-neutral-400 text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer">
                View demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
