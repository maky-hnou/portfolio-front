import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FloatingMessage() {
  const [showFlowers, setShowFlowers] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [flowersClicked, setFlowersClicked] = useState(false);

  const handleFlowerClick = () => {
    if (!flowersClicked) {
      setFlowersClicked(true);
      setShowFlowers(false);
      setTimeout(() => {
        setShowMessage(true);
      }, 800); // Wait for flower fade out
    }
  };

  return (
    <div className="flex justify-center items-center py-24 px-4 mt-16">
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
              {/* White tulip PNG with floating animation */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: 0
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFlowerClick}
                className="cursor-pointer select-none hover:drop-shadow-lg transition-all duration-300"
              >
                <Image
                  src="/media/white_tulip.png"
                  alt="White tulip"
                  width={80}
                  height={80}
                  className="md:w-24 md:h-24"
                />
              </motion.div>
              
              {/* Red rose PNG with floating animation */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFlowerClick}
                className="cursor-pointer select-none hover:drop-shadow-lg transition-all duration-300"
              >
                <Image
                  src="/media/red_rose.png"
                  alt="Red rose"
                  width={80}
                  height={80}
                  className="md:w-24 md:h-24"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.p
                animate={{ 
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: 'easeInOut'
                }}
                className="text-center text-lg md:text-xl text-gray-600 font-medium italic max-w-md leading-relaxed"
              >
                May your day bloom as brightly as these two flowers—petal by petal, joy unfolding from sunrise to
                starlight—so every hour feels like a gentle celebration, every laugh adds another splash of color to
                the bouquet of memories you’re gathering, and every wish you make tonight drifts upward like the
                sweetest perfume, carrying all our happiest birthday hopes straight to you.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}