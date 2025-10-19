"use client";

import { assets } from "@/assets/assets";
import { MoveUpRight, PanelLeftClose, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Bg-color" className="w-2" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/60 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="">
          <Image
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
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
          <Button
            variant="outline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-125">
              {!mounted ? "🌙" : theme === "dark" ? "☀️" : "🌙"}
            </span>
          </Button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-extrabold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-white/50"
          >
            Contact
            <MoveUpRight size={20} />
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            className="block md:hidden ml-3 p-2 h-10 w-10"
            onClick={() => setIsOpen(true)}
          >
            <PanelLeftClose />
          </Button>
        </div>

        {/* ----- Mobile Menu ------- */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-900 transition-transform duration-500
          ${isOpen ? "translate-x-0 right-0" : "translate-x-full right-0"}`}
        >
          {/* Close Button */}
          <div
            className="absolute right-6 top-6"
            onClick={() => setIsOpen(false)}
          >
            <X size={38} />
          </div>

          <li>
            <a
              className="font-sans text-gray-900 dark:text-gray-200"
              onClick={() => setIsOpen(false)}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-sans "
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
