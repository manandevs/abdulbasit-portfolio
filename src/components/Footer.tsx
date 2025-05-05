import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaRss,
  FaGooglePlusG,
  FaCircle
} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full font-Marcellus bg-black text-white py-12 px-4 mt-20 md:mt-36">
      <div className="max-w-screen-lg mx-auto">
        <div className="max-w-6xl mx-auto flex justify-between gap-8 text-sm text-white mb-10">
          {/* Logo */}
          <div>
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
          </div>

          {/* Link Columns */}

          <div className="grid grid-cols-2 space-x-10 space-y-2">
            <p className="cursor-pointer">About Me</p>
            <p className="cursor-pointer">Skills</p>
            <p className="cursor-pointer">Projects</p>
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col items-center space-y-4 text-center text-sm text-gray-400">
          <div className="flex gap-5 text-white text-lg">
            <div className="border border-white p-2 rounded-full cursor-pointer hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
              <FaFacebookF />
            </div>
            <div className="border border-white p-2 rounded-full cursor-pointer hover:border-[#aaaeb1] hover:text-[#aaaeb1] transition-colors">
              <IoLogoGithub />
            </div>
            <div className="border border-white p-2 rounded-full cursor-pointer hover:border-[#FFA500] hover:text-[#FFA500] transition-colors">
              <FaRss />
            </div>
            <div className="border border-white p-2 rounded-full cursor-pointer hover:border-[#DB4437] hover:text-[#DB4437] transition-colors">
              <FaGooglePlusG />
            </div>
            <div className="flex justify-center items-center gap-2.5 border border-white p-2 rounded-full cursor-pointer hover:border-gray-400 hover:text-gray-400 transition-colors">
              <FaCircle size={10} />
              <FaCircle size={10} />
            </div>
          </div>
          <p>©Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
