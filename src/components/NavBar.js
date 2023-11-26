import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function NavBar() {
  return (
    <header className="w-full py-8 flex items-center justify-between mt-2">
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
          className="px-5 mr-32"
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
