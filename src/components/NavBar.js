import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function NavBar() {
  const [showShadow, setShowShadow] = useState(false);

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
      <div className="absolute left-0">
        <Logo />
      </div>
    </header>
  );
}
