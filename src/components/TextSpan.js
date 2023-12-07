import React from "react";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function TextSpan({ children }) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlayin] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.5, 1],
        // duration: 1, // Set the duration in seconds (adjust as needed)
      },
    });
    setIsPlayin(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlayin(false)}
    >
      {children}
    </motion.span>
  );
}
