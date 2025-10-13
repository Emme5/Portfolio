import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState (false);

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Bg-color" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* Logo */}
        <a href="">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-sans" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-sans" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-sans" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-sans" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-sans" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="icon-change-mode"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-extrabold"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow-icon" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setIsOpen(true)}
          >
            <Image src={assets.menu_black} alt="menu-black" className="w-6" />
          </button>
        </div>

        {/* ----- Mobile Menu ------- */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500
          ${isOpen ? "translate-x-0 right-0" : "translate-x-full right-0"}`}
        >
          {/* Close Button */}
          <div
            className="absolute right-6 top-6"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={assets.close_black}
              alt="close-black"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a
              className="font-sans"
              onClick={() => setIsOpen(false)}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-sans"
              onClick={() => setIsOpen(false)}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="font-sans"
              onClick={() => setIsOpen(false)}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-sans"
              onClick={() => setIsOpen(false)}
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-sans"
              onClick={() => setIsOpen(false)}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
