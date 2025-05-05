"use client";
import React from "react";
import {
  Code,
  MonitorSmartphone,
  Brush,
  ShieldCheck,
  Database,
  Rocket,
  Server,
  Smartphone,
  Settings2,
} from "lucide-react";

const services = [
  {
    icon: <Code className="text-blue-500" size={36} />,
    title: "Web Development",
    info: "Building responsive, fast, and modern web applications tailored to client needs.",
  },
  {
    icon: <Brush className="text-pink-500" size={36} />,
    title: "UI/UX Design",
    info: "Designing intuitive and attractive user interfaces and experiences for web and mobile.",
  },
  {
    icon: <MonitorSmartphone className="text-green-500" size={36} />,
    title: "Responsive Design",
    info: "Ensuring websites look great and function seamlessly on all devices.",
  },
  {
    icon: <ShieldCheck className="text-purple-500" size={36} />,
    title: "Security",
    info: "Implementing best practices to keep your applications secure and protected.",
  },
  {
    icon: <Database className="text-yellow-500" size={36} />,
    title: "Database Management",
    info: "Designing and optimizing databases for high performance and reliability.",
  },
  {
    icon: <Rocket className="text-red-500" size={36} />,
    title: "Performance Optimization",
    info: "Improving site speed, load times, and efficiency through performance tuning.",
  },
  {
    icon: <Server className="text-teal-500" size={36} />,
    title: "Backend Development",
    info: "Creating robust server-side logic, APIs, and integrations.",
  },
  {
    icon: <Smartphone className="text-indigo-500" size={36} />,
    title: "Mobile Development",
    info: "Developing mobile-first applications with a seamless user experience.",
  },
  {
    icon: <Settings2 className="text-orange-500" size={36} />,
    title: "Maintenance & Support",
    info: "Ongoing support and updates to keep your application running smoothly.",
  },
];

export default function Services() {
  return (
    <div className="max-w-screen-lg min-h-screen mx-auto px-4 py-16 mt-20 lg:mt-36">
      <h1 className="text-white mb-10 font-Marcellus text-4xl md:text-[48px] font-bold tracking-wider leading-[44px] md:leading-[56px] uppercase break-words underline underline-offset-4 decoration-2">
        Services
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 hover:scale-110 border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>

            <h3 className="font-Marcellus text-lg font-semibold  text-[#ffffffb4] mb-1 group-hover:text-[#ffffff]">
              {service.title}
            </h3>
            <p className="font-PlayfairDisplayBold text-sm  text-[#ffffff83] group-hover:text-[#ffffffb4]">
              {service.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
