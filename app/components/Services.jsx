import { serviceData } from "@/assets/assets";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-sans">What I offer?</h4>
      <h2 className="text-center text-5xl font-sans">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-sans">
        I am a frontend developer from thailand, USA with 10 year of experience
        in multiple companies like Microsoft, Tesla and Apple
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 dark:border-gray-600 
                 rounded-lg px-8 py-12 cursor-pointer 
                 transition-all duration-500 ease-out
                 hover:-translate-y-1
                 hover:bg-blue-50 dark:hover:bg-gray-800
                 hover:border-r-3 hover:border-b-3
                 hover:border-r-black hover:border-b-black
                 dark:hover:border-r-white dark:hover:border-b-white"
          >
            <Image src={icon} alt="icon" className="w-10 dark:invert" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-600 dark:text-blue-400 hover:underline dark:invert"
            >
              Read more <ChevronRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
