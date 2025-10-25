import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-sans">Introduction</h4>
      <h2 className="text-center text-5xl font-sans">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center jutsify-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1 max-w-2xl">
          <p className="mb-10 font-mono text-center lg:text-left">
            ผมเป็นนักพัฒนา Frontend ที่มีประสบการณ์ยาวนานกว่าทศวรรษ
            ตลอดอาชีพการงานของผม
            ผมได้รับเกียรติให้ร่วมงานกับองค์กรที่มีชื่อเสียงมากมาย
            ซึ่งมีส่วนสำคัญต่อความสำเร็จและการเติบโตขององค์กรเหล่านั้น
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 dark:border-gray-600 
                 rounded-xl p-6 cursor-pointer
                 transition-all duration-500 ease-out
                 hover:-translate-y-1
                 hover:border-r-black hover:border-b-black 
                 dark:hover:border-r-white dark:hover:border-b-white
                 hover:border-r-3 hover:border-b-3"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-7 mt-3 mx-auto dark:invert"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-gray-200">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-white text-sm">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-800 dark:text-gray-200 font-sans text-center">
            เครื่องมือที่ใช้
          </h4>

          <ul className="flex items-center justify-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                 border border-gray-400 dark:border-gray-600 
                 rounded-lg cursor-pointer 
                 transition-all duration-300 
                 hover:-translate-y-1
                 hover:border-r-black hover:border-b-black 
                 dark:hover:border-r-white dark:hover:border-b-white
                 hover:border-r-2 hover:border-b-2"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
