import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    image: "/png/projects.png",
    link: "https://your-portfolio-link.com",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS to showcase projects, skills, and personal information. Includes animations, dark mode, and clean UX to create a professional online presence.",
  },
  {
    title: "E-Commerce App",
    image: "/png/projects.png",
    link: "https://your-ecommerce-link.com",
    description:
      "A fully functional e-commerce application with product listing, filtering, cart, and checkout features. Developed using React, Redux, and Stripe API for payments, with Firebase for user authentication.",
  },
  {
    title: "Blog Platform",
    image: "/png/projects.png",
    link: "https://your-blog-link.com",
    description:
      "A minimal blog platform where users can read, write, and manage posts. Features markdown support, responsive UI, and a CMS-like admin dashboard. Built using Next.js, Prisma, and PostgreSQL.",
  },
  {
    title: "Admin Dashboard",
    image: "/png/projects.png",
    link: "https://your-dashboard-link.com",
    description:
      "An analytics dashboard for tracking business KPIs. Includes charts, tables, filters, and responsive design. Built with React, Chart.js, and Tailwind CSS, with mock API integration for data simulation.",
  },
];

export default function Projects() {
  return (
    <div className="max-w-screen-lg min-h-screen mx-auto px-4 py-12 mt-20 lg:mt-36">
      <h1 className="text-white mb-10 font-Marcellus text-4xl md:text-[48px] font-bold tracking-wider leading-[44px] md:leading-[56px] uppercase break-words underline underline-offset-4 decoration-2">
        Projects
      </h1>

      <div className="relative space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-[100%] md:w-[70%] h-[350px] border border-[#6b6b6ba1] bg-cover bg-center overflow-hidden rounded-2xl group ${
              index % 2 === 0 ? "mx-auto md:ml-0" : "mx-auto md:ml-auto"
            }`}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 isolate aspect-video w-full rounded-xl bg-[#e2dede34] shadow-lg ring-1 ring-black/5 group-hover:bg-[#0000006e] opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 bg-[#0000008f] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-200 text-white p-10 py-7 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 font-Marcellus">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base mb-5 max-w-lg leading-relaxed font-PlayfairDisplayBold">
                  {project.description}
                </p>
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 px-6 py-2 flex items-center justify-center gap-2 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition cursor-pointer"
              >
                View Project <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
