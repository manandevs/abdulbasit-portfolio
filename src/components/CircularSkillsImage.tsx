'use client';

import Image from 'next/image';

export default function CircularSkillsImage() {
  return (
    <div className="max-w-screen h-[350px] md:h-[500px] relative md:absolute z-10 md:top-16 md:right-0 flex justify-center items-center py-3.5 pb-5">
      <div className="p-7 border-[1.3px] border-[#ffffff3d] rounded-full shadow">
        <div className="p-5 border-[1px] border-[#ffffff7c] rounded-full shadow-sm relative">

          {/* Rotating SVG Icons */}
          <div className="absolute inset-0 animate-spin-slow origin-center z-0">
            <Image
              src="/svg/js.svg"
              alt="JavaScript"
              width={40}
              height={40}
              className="animate-rotate-slow absolute top-12 left-0 translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/svg/html.svg"
              alt="HTML"
              width={40}
              height={40}
              className="animate-rotate-slow absolute top-20 right-12 translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/svg/css.svg"
              alt="CSS"
              width={40}
              height={40}
              className="animate-rotate-slow absolute bottom-20 right-5 translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/svg/next.svg"
              alt="Next.js"
              width={40}
              height={40}
              className="animate-rotate-slow absolute top-56 right-8 translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/svg/sql.svg"
              alt="SQL"
              width={40}
              height={40}
              className="animate-rotate-slow absolute top-30 left-0 translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/svg/react.svg"
              alt="React"
              width={25}
              height={25}
              className="animate-rotate-slow absolute bottom-20 left-7 translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/svg/nodejs.svg"
              alt="Node.js"
              width={40}
              height={40}
              className="animate-rotate-slow absolute bottom-0 left-1/2 translate-x-1/2 -translate-y-1/2 z-10 bg-amber-50 rounded-md"
            />
          </div>

          {/* Central Profile Image */}
          <div className="inline-block border border-[#ffffffbe] rounded-full overflow-hidden aspect-square shadow-sm relative -z-10">
            <Image
              src="/png/abdul.png"
              alt="Abdul Basit"
              width={350}
              height={350}
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] mt-14 grayscale mx-auto"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
