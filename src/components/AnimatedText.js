import React from "react";
import { motion } from "framer-motion";
import TextSpan from "./TextSpan";

export default function AnimatedText({ text, className = "" }) {
  return (
    <h3 className={className}>
      {text.split("").map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
        );
      })}
    </h3>
  );
}
