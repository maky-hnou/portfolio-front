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
    <motion.span whileHover="hover">
      {Array.from(children).map((letter, index) => (
        <motion.span key={index} variants={singleLetterVariant}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Logo() {
  return (
    <div className="flex items-start justify-start">
      <MotionLink
        href="/"
        className="w-max ml-8 px-2 flex text-light_purple items-start justify-start text-4xl font-medium"
        whileHover={{
          scale: 1.2,
        }}
      >
        <TextWithLetterShadow>H.Yousfi</TextWithLetterShadow>
      </MotionLink>
    </div>
  );
}
