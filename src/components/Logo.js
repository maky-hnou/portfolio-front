import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const TextWithLetterShadow = ({ children }) => {
  const singleLetterVariant = {
    initial: { textShadow: "none" },
    hover: { textShadow: "0px 5px 8px #8490ff" },
  };

  return (
    <motion.span initial="initial" whileHover="hover">
      {Array.from(children).map((letter, index) => (
        <motion.span key={index} variants={singleLetterVariant}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const logoVariants = {
  hover: { scale: 1.2 },
};

export default function Logo() {
  return (
    <nav className="flex items-start justify-start">
      <MotionLink
        href="/"
        className="ml-10 px-2 flex text-light_purple text-4xl font-medium md:px-0"
        variants={logoVariants}
        whileHover="hover"
      >
        <TextWithLetterShadow>H.Yousfi</TextWithLetterShadow>
      </MotionLink>
    </nav>
  );
}
