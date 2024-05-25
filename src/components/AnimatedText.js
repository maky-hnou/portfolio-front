import React from "react";
import { motion } from "framer-motion";
import TextSpan from "./TextSpan";

export default function AnimatedText({ text, className = "" }) {
  const renderText = () => {
    return text.split("").map((letter, index) => (
      <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
    ));
  };

  return <h3 className={className}>{renderText()}</h3>;
}
