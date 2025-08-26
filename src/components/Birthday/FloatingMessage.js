import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const FLOWERS = [
  {
    src: '/media/white_tulip.png',
    alt: 'White tulip',
    yOffset: -8,
    duration: 3,
    delay: 0,
  },
  {
    src: '/media/red_rose.png',
    alt: 'Red rose',
    yOffset: -6,
    duration: 3.5,
    delay: 0.5,
  },
];

const MESSAGE = `May your day bloom as brightly as these two flowers—petal by petal, joy unfolding from sunrise to starlight—so every hour feels like a gentle celebration, every laugh adds another splash of color to the bouquet of memories you’re gathering, and every wish you make tonight drifts upward like the sweetest perfume, carrying all my happiest birthday hopes straight to you.`;

export default function FloatingMessage() {
  const [showFlowers, setShowFlowers] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleFlowerClick = () => {
    setShowFlowers(false);
    setTimeout(() => setShowMessage(true), 800);
  };

  const hideCaret = () => {
    document.querySelector('.Typewriter__cursor')?.remove?.();
  };

  return (
    <div className="flex justify-center items-center py-24 px-4 mt-8">
      <div className="relative h-32 flex items-center justify-center">
        <AnimatePresence>
          {showFlowers && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center space-x-6"
            >
              {FLOWERS.map((flower) => (
                <motion.div
                  key={flower.alt}
                  animate={{
                    y: [0, flower.yOffset, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: flower.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: flower.delay,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFlowerClick}
                  className="cursor-pointer select-none hover:drop-shadow-lg transition-all duration-300"
                >
                  <Image
                    src={flower.src}
                    alt={flower.alt}
                    width={80}
                    height={80}
                    className="md:w-24 h-auto"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="inset-0 flex items-center justify-center"
            >
              <Typewriter
                onInit={(tw) => {
                  tw.typeString(MESSAGE).callFunction(hideCaret).start();
                }}
                options={{
                  delay: 70,
                  cursor: '',
                  wrapperClassName:
                    'block text-center text-lg md:text-xl text-gray-600 font-medium italic max-w-md leading-relaxed',
                  cursorClassName: 'text-gray-600 font-medium',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}