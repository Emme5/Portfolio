import { workData } from "@/assets/assets";
import { MousePointer2, MoveRight, CirclePlus } from "lucide-react";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-sans">My Portfolio</h4>
      <h2 className="text-center text-5xl font-sans">My Lastest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-sans">
        Welcome to my web development portfolio! Here you can explore projects
        I’ve built while learning and growing as a frontend developer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white dark:bg-gray-900 
                   w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                   py-3 px-5 flex items-center justify-between 
                   transition-all duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div
                className="border rounded-full 
                     border-black dark:border-white 
                     w-9 aspect-square flex items-center justify-center 
                     shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] 
                     group-hover:bg-lime-300 dark:group-hover:bg-amber-500 
                     transition"
              >
                <MousePointer2 />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 border border-gray-700 dark:border-gray-200 rounded-full px-10 py-3 mx-auto my-20 hover:shadow-[2px_2px_0_#000] duration-500 group"
      >
        Show more{" "}
        <MoveRight
          className="w-5 h-5 transform transition-transform duration-300 
               group-hover:hidden"
        />
        <CirclePlus
          className="w-5 h-5 hidden transform transition-transform duration-300 
               group-hover:block group-hover:translate-x-1 group-hover:rotate-12"
        />
      </a>
    </div>
  );
};

export default Work;
