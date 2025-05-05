import React from "react";
import {
  Code,
  Layout,
  Database,
  Settings,
  Smartphone,
  Shield,
  Cloud,
  GitBranch,
  Package,
  Globe,
  Server,
  Zap,
  FileText,
  Cpu,
  Terminal,
} from "lucide-react"; // Replace with your preferred icons

const skills = [
  {
    title: "HTML5",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    description: "Semantic and accessible markup for web pages.",
  },
  {
    title: "CSS3",
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    description: "Styling with Flexbox, Grid, and responsive design.",
  },
  {
    title: "JavaScript",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    description: "ES6+ JavaScript for interactive UI and logic.",
  },
  {
    title: "TypeScript",
    icon: <Terminal className="w-8 h-8 text-sky-500" />,
    description: "Typed JavaScript for scalable applications.",
  },
  {
    title: "React.js",
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    description: "Component-based front-end framework.",
  },
  {
    title: "Next.js",
    icon: <Globe className="w-8 h-8 text-black" />,
    description: "React framework with SSR and routing.",
  },
  {
    title: "Tailwind CSS",
    icon: <Settings className="w-8 h-8 text-teal-400" />,
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    title: "Git & GitHub",
    icon: <GitBranch className="w-8 h-8 text-orange-500" />,
    description: "Version control and collaboration with Git.",
  },
  {
    title: "Responsive Design",
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    description: "Mobile-first and responsive layout practices.",
  },
  {
    title: "APIs",
    icon: <Package className="w-8 h-8 text-green-500" />,
    description: "REST & JSON APIs integration in frontend apps.",
  },
  {
    title: "Node.js",
    icon: <Cpu className="w-8 h-8 text-lime-500" />,
    description: "Back-end JavaScript runtime for APIs and tools.",
  },
  {
    title: "Express.js",
    icon: <Server className="w-8 h-8 text-gray-700" />,
    description: "Minimal web framework for Node.js.",
  },
  {
    title: "MongoDB",
    icon: <Database className="w-8 h-8 text-green-600" />,
    description: "NoSQL database for flexible document storage.",
  },
  {
    title: "Firebase",
    icon: <Cloud className="w-8 h-8 text-yellow-500" />,
    description: "BaaS platform with auth, database, hosting.",
  },
  {
    title: "Security",
    icon: <Shield className="w-8 h-8 text-red-500" />,
    description: "Best practices: auth, HTTPS, input validation.",
  },
];

export default function Skills() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12  text-[white]">
      {/* Updated heading with underline styling */}
      <h1 className="font-Marcellus text-4xl md:text-[48px] font-bold tracking-wider leading-[44px] md:leading-[56px] uppercase break-words underline underline-offset-4 decoration-2">
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
        {skills.map((item, index) => (
          <div
            key={index}
            className="group hover:scale-110 p-6 border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">{item.icon}</div>
            <h3 className="font-Marcellus text-lg font-semibold  text-[#ffffffb4] mb-1 group-hover:text-[#ffffff]">
              {item.title}
            </h3>
            <p className="font-PlayfairDisplayBold text-sm  text-[#ffffff83] group-hover:text-[#ffffffb4]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
