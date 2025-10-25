import { assets } from "@/assets/assets";
import { MoveUpRight, PanelLeftClose, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [isScroll, setIsScroll] = useState(false);
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
        <Image src={assets.header_bg_color} alt="Bg-color" />
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
            className="hidden md:block transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="block md:hidden ml-3 p-2 h-10 w-10"
              >
                <PanelLeftClose />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align ="end"
              side="bottom"
              className="w-64 bg-rose-50 dark:bg-gray-900"
            >
              <DropdownMenuItem asChild>
                <a href="#top" className="w-full font-sans py-4">
                  Home
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#about" className="w-full font-sans py-4">
                  About me
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#services" className="w-full font-sans py-4 ">
                  Services
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#work" className="w-full font-sans py-4">
                  My Work
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" className="w-full font-sans py-4">
                  Contact me
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Button
                  variant="outline"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full flex items-center justify-center gap-2 py-2 mt-2 border border-gray-500 dark:border-white/50"
                >
                  {!mounted
                    ? "🌙"
                    : theme === "dark"
                    ? "☀️ Light Mode"
                    : "🌙 Dark Mode"}
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
