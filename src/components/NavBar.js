import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function NavBar() {
  const [showShadow, setShowShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowShadow(scrollTop > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-9 flex items-center justify-between fixed bg-white ${
        showShadow ? "shadow-[-21.213px_21.213px_30px_0px_#9e9e9e4d]" : ""
      }`}
    >
      <div className="hidden lg:flex">
      <button
        className="flex-col justify-center items-center right-5 absolute"
        onClick={handleClick}
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      </div>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="absolute right-0 font-medium text-xs uppercase">
          <MotionLink
            href="/"
            className="px-2"
            whileHover={{
              color: "#8490ff",
            }}
          >
            Home
          </MotionLink>
          <MotionLink
            href="/about"
            className="px-2"
            whileHover={{
              color: "#8490ff",
            }}
          >
            About
          </MotionLink>
          <MotionLink
            href="/portfolio"
            className="px-2"
            whileHover={{
              color: "#8490ff",
            }}
          >
            Portfolio
          </MotionLink>
          <MotionLink
            href="media/Hani_Yousfi_Resume.pdf"
            target="_blank"
            className="px-2 py-0.5 mr-32 ml-3 text-light_purple border-1 border-solid border-light_purple rounded-full"
            whileHover={{
              backgroundColor: "#8490ff",
              color: "#fff",
            }}
          >
            Resume
          </MotionLink>
        </nav>
      </div>
      <div className="absolute left-0">
        <Logo />
      </div>
    </header>
  );
}
