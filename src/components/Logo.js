import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
export default function Logo() {
  return (
    <div className="flex items-start justify-start mt-2">
      <MotionLink
        href="/"
        className="w-max ml-8 px-2 flex text-light_purple items-start justify-start text-2xl border-2 border-solid border-light_purple rounded-full"
        whileHover={{
          scale: 1.2,
          backgroundColor: "#8490ff",
          color: "#fff",
        }}
      >
        H.Yousfi
      </MotionLink>
    </div>
  );
}
