import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default function TypeWriterAnimatedText({
  text,
  className,
  once = true,
  repeatDelay = 0,
}) {
  const controls = useAnimation();
  const sentences = text.split("."); // Split text into sentences after every dot
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <div className={className} ref={ref}>
      <span className="sr-only">{sentences.join(". ")}</span>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {sentences.map((sentence, index) => (
          <span className="block pb-2 lg:pb-4" key={`sentence-${index}`}>
            {sentence
              .trim()
              .split(" ")
              .map((word, wordIndex, array) => (
                <span className="inline-block" key={`${word}-${wordIndex}`}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={defaultAnimations}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">
                    {wordIndex !== array.length - 1 ? "\u00A0" : ""}
                  </span>
                </span>
              ))}
            {index !== sentences.length - 1 && <span>.</span>}{" "}
            {/* Add dot at the end of every sentence except the last one */}
            <br /> {/* Add new line after every sentence */}
          </span>
        ))}
      </motion.span>
    </div>
  );
}
