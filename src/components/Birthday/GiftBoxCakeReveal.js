import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Cake from "./Cake";

const GiftBoxCakeReveal = ({ autoReveal = true, revealDelay = 2000 }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hideBox, setHideBox] = useState(false);

  useEffect(() => {
    if (autoReveal) {
      const timer = setTimeout(() => {
        handleBoxOpen();
      }, revealDelay);
      
      return () => clearTimeout(timer);
    }
  }, [autoReveal, revealDelay]);

  const handleBoxOpen = () => {
    setIsOpened(true);
    setShowConfetti(true);
    
    // Hide confetti after animation
    setTimeout(() => {
      setShowConfetti(false);
    }, 1500);

    // Hide the box completely after cake appears
    setTimeout(() => {
      setHideBox(true);
    }, 1200); // Hide box after cake animation completes
  };

  const handleCandleBlowOut = () => {
    // Create particle effect for blowing out candles
    console.log("Candles blown out! 🎉");
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Gift Box */}
      <AnimatePresence>
        {!hideBox && (
          <motion.div
            className="relative cursor-pointer"
            onClick={() => !isOpened && handleBoxOpen()}
            whileHover={!isOpened ? { scale: 1.05 } : {}}
            whileTap={!isOpened ? { scale: 0.95 } : {}}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              y: -50
            }}
            transition={{ 
              exit: { duration: 0.6, ease: "easeIn" }
            }}
          >
        <svg
          width="220"
          height="200"
          viewBox="0 0 220 200"
          className="drop-shadow-lg"
        >
          {/* Box Shadow */}
          <ellipse
            cx="110"
            cy="185"
            rx="90"
            ry="10"
            fill="#000000"
            className="opacity-20"
          />

          {/* Gift Box Base */}
          <motion.rect
            x="30"
            y="80"
            width="160"
            height="100"
            fill="#FF6B6B"
            rx="8"
            initial={{ scale: 1 }}
            animate={{
              scale: isOpened ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Box Pattern */}
          <motion.rect
            x="30"
            y="100"
            width="160"
            height="4"
            fill="#FF4444"
          />
          <motion.rect
            x="30"
            y="120"
            width="160"
            height="4"
            fill="#FF4444"
          />
          <motion.rect
            x="30"
            y="140"
            width="160"
            height="4"
            fill="#FF4444"
          />

          {/* Vertical Ribbon */}
          <motion.rect
            x="100"
            y="80"
            width="20"
            height="100"
            fill="#FFD700"
            animate={{
              opacity: isOpened ? [1, 0.5, 0] : 1,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Horizontal Ribbon */}
          <motion.rect
            x="30"
            y="120"
            width="160"
            height="20"
            fill="#FFD700"
            animate={{
              opacity: isOpened ? [1, 0.5, 0] : 1,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Gift Box Lid */}
          <motion.rect
            x="25"
            y="70"
            width="170"
            height="25"
            fill="#FF8E8E"
            rx="8"
            animate={{
              y: isOpened ? [70, 60, 30] : 70,
              rotateX: isOpened ? [0, -10, -45] : 0,
              transformOrigin: "50% 100%",
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{ transformOrigin: "50% 95px" }}
          />

          {/* Lid Pattern */}
          <motion.rect
            x="25"
            y="75"
            width="170"
            height="3"
            fill="#FF6B6B"
            animate={{
              y: isOpened ? [75, 65, 35] : 75,
              rotateX: isOpened ? [0, -10, -45] : 0,
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{ transformOrigin: "50% 95px" }}
          />

          {/* Bow on Top */}
          <motion.g
            animate={{
              y: isOpened ? [0, -10, -40] : 0,
              rotateX: isOpened ? [0, -10, -45] : 0,
              scale: isOpened ? [1, 1.1, 0.8] : 1,
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{ transformOrigin: "110px 82px" }}
          >
            {/* Bow Left */}
            <ellipse
              cx="95"
              cy="82"
              rx="15"
              ry="8"
              fill="#FFA500"
              transform="rotate(-20 95 82)"
            />
            {/* Bow Right */}
            <ellipse
              cx="125"
              cy="82"
              rx="15"
              ry="8"
              fill="#FFA500"
              transform="rotate(20 125 82)"
            />
            {/* Bow Center */}
            <rect
              x="105"
              y="77"
              width="10"
              height="10"
              fill="#FF8C00"
              rx="2"
            />
          </motion.g>
        </svg>

        {/* Click instruction for closed box */}
        {!autoReveal && !isOpened && (
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-600 font-light">
              Click to open! 🎁
            </p>
          </motion.div>
        )}
      </motion.div>
        )}
      </AnimatePresence>

      {/* Cake Reveal */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="absolute"
            style={{ top: "40px" }}
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            <CakeComponent 
              onCandleBlowOut={handleCandleBlowOut}
              isVisible={isOpened}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti Burst Effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#FF6B6B', '#FFD700', '#4ECDC4', '#45B7D1', '#FF69B4', '#98FB98'][i % 6],
                  left: '50%',
                  top: '50%',
                }}
                initial={{
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: [0, 1, 0.5],
                  x: (Math.cos(i * 18 * Math.PI / 180) * (50 + Math.random() * 50)),
                  y: (Math.sin(i * 18 * Math.PI / 180) * (50 + Math.random() * 50)),
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftBoxCakeReveal;