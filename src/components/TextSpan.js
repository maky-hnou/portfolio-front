import React, { useState, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function TextSpan({ children }) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = useCallback(() => {
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
        //duration: 1,
        times: [0, 0.8, 1],
        //times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    });
    setIsPlaying(true);
  }, [controls]);

  const handleMouseOver = () => {
    if (!isPlaying) rubberBand();
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={handleMouseOver}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
}
