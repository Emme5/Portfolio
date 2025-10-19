import { assets } from "@/assets/assets";
import { MoveRight, Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-light">
        Hi I'M Mark suma
        <Image src={assets.hand_icon} alt="profile-pic" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-sans">
        Frontend Web Developer Based In Thailand
      </h1>
      <p className="max-w-2xl mx-auto font-sans">
        I am a frontend developer from Samutsakhon, Thailand with 1 year of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="w-max flex items-center justify-center gap-2 
               text-gray-700 dark:text-gray-200 
               border border-gray-700 dark:border-gray-200 
               rounded-full px-10 py-3 mx-auto 
               hover:shadow-[2px_2px_0_#000] dark:hover:shadow-[2px_2px_0_#fff] 
               duration-500 group"
        >
          contact me
          <MoveRight className="transform transition duration-300 group-hover:-rotate-45" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="w-max flex items-center justify-center gap-2 
               text-gray-700
               border border-gray-700
               rounded-full px-14 py-3 mx-auto 
               duration-500 bg-white group"
        >
          My Resume
          <Download className="transform transition duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </div>
  );
};

export default Header;
