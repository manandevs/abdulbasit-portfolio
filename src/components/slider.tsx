import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link'; // assuming you're using Next.js
import { ExternalLink } from 'lucide-react';

// Sample projects array (you can pass this as a prop too)
const projects = [
  {
    title: 'Project One',
    description: 'This is the first project.',
    image: '/images/project1.jpg',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project Two',
    description: 'This is the second project.',
    image: '/images/project2.jpg',
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];

export default function Slider() {
  return (
    <Swiper
      pagination={{ type: 'fraction' }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div
            className={`relative w-[70%] h-[350px] border border-[#6b6b6ba1] bg-cover bg-center overflow-hidden rounded-2xl group ${
              index % 2 === 0 ? 'ml-0' : 'ml-auto'
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
