import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Cake from "./Cake";
import giftBoxSvg from "../../../media/gift.svg";

const CustomGiftBoxCakeReveal = ({ autoReveal = true, revealDelay = 2000, onCakeFullyVisible, onGiftBoxClick, onCandlesBlownOut }) => {
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
    if (onCandlesBlownOut) {
      onCandlesBlownOut();
    }
  };

  // Effect to trigger callback when cake is fully visible
  useEffect(() => {
    if (isOpened && onCakeFullyVisible) {
      // Delay matches the cake animation duration (0.8s) + delay (0.3s) = 1.1s total
      const timer = setTimeout(() => {
        onCakeFullyVisible();
      }, 1100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpened, onCakeFullyVisible]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Custom Gift Box */}
      <AnimatePresence>
        {!hideBox && (
          <motion.div
            className="relative cursor-pointer"
            onClick={() => {
              if (!isOpened) {
                handleBoxOpen();
                if (onGiftBoxClick) {
                  onGiftBoxClick();
                }
              }
            }}
            whileHover={!isOpened ? { scale: 1.05 } : {}}
            whileTap={!isOpened ? { scale: 0.95 } : {}}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: isOpened ? [1, 1.1, 1] : 1,
              rotateY: isOpened ? [0, 5, 0] : 0,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              y: -50,
              rotateY: 20
            }}
            transition={{ 
              exit: { duration: 0.6, ease: "easeIn" },
              animate: { duration: 0.8, ease: "easeOut" }
            }}
          >
            {/* Your Custom SVG Gift Box */}
            <div className="relative drop-shadow-2xl">
              <Image
                src={giftBoxSvg}
                alt="Gift Box"
                width={240}
                height={240}
                className="object-contain"
                priority
              />
              
              {/* Animated Opening Overlay Elements */}
              {isOpened && (
                <>
                  {/* Lid Opening Effect - matching the gift.svg lid dimensions */}
                  <motion.div
                    className="absolute bg-gradient-to-b from-red-400 to-red-500 rounded-sm"
                    style={{
                      top: '25%',
                      left: '11.4%',
                      width: '77.3%',
                      height: '13.6%',
                      transformOrigin: 'bottom center'
                    }}
                    initial={{ rotateX: 0, y: 0 }}
                    animate={{
                      rotateX: [0, -20, -75],
                      y: [0, -12, -35],
                      scaleY: [1, 0.9, 0.7]
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Vertical Ribbon Fade Effect */}
                  <motion.div
                    className="absolute bg-white"
                    style={{
                      top: '25%',
                      left: '46.8%',
                      width: '6.4%',
                      height: '59%'
                    }}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.6, 0] }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Horizontal Ribbon Fade Effect */}
                  <motion.div
                    className="absolute bg-white"
                    style={{
                      top: '47.7%',
                      left: '15.9%',
                      width: '68.2%',
                      height: '6.4%'
                    }}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.6, 0] }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Bow Movement Effect - positioned to match the SVG bow */}
                  <motion.div
                    className="absolute"
                    style={{
                      top: '27%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ y: 0, rotateX: 0, scale: 1 }}
                    animate={{
                      y: [0, -12, -35],
                      rotateX: [0, -20, -75],
                      scale: [1, 1.1, 0.8],
                      opacity: [1, 0.7, 0.2]
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut"
                    }}
                  >
                    {/* White bow matching the SVG style */}
                    <div className="relative">
                      {/* Left loop */}
                      <div className="absolute w-6 h-4 bg-white rounded-full transform -translate-x-3 -translate-y-1 -rotate-12 opacity-90"></div>
                      {/* Right loop */}
                      <div className="absolute w-6 h-4 bg-white rounded-full transform translate-x-1 -translate-y-1 rotate-12 opacity-90"></div>
                      {/* Center knot */}
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                  
                  {/* Opening Flash Effect */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                    }}
                  />
                </>
              )}
            </div>

            {/* Click instruction for closed box */}
            {!autoReveal && !isOpened && (
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
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
            style={{ top: "60px" }} // Adjusted for your SVG size
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            <Cake
              onCandleBlowOut={handleCandleBlowOut}
              isVisible={isOpened}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Confetti Burst Effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Large Confetti Burst */}
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={`confetti-${i}`}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ['#FF6B6B', '#FFD700', '#4ECDC4', '#45B7D1', '#FF69B4', '#98FB98', '#FFA500'][i % 7],
                  left: '50%',
                  top: '50%',
                }}
                initial={{
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                }}
                animate={{
                  scale: [0, 1.2, 0.8, 0],
                  x: (Math.cos(i * 14.4 * Math.PI / 180) * (60 + Math.random() * 80)),
                  y: (Math.sin(i * 14.4 * Math.PI / 180) * (60 + Math.random() * 80)),
                  opacity: [1, 1, 0.8, 0],
                  rotate: [0, Math.random() * 720],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: i * 0.03,
                }}
              />
            ))}
            
            {/* Sparkle Effects */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
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
                  scale: [0, 1, 0],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                  delay: Math.random() * 0.5,
                }}
              >
                <div className="relative">
                  <div className="w-1 h-4 bg-yellow-300 rounded-full absolute transform -rotate-45" />
                  <div className="w-4 h-1 bg-yellow-300 rounded-full absolute transform -rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomGiftBoxCakeReveal;