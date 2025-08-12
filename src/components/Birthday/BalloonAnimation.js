import {motion, useAnimation} from "framer-motion";
import Image from "next/image";
import balloonSvg from "../../../media/balloon.svg";
import {useEffect, useState} from "react";

const BalloonAnimation = ({ name = "BIRTHDAY", className = "", onBalloonsReachFinalPosition }) => {
  const [balloonData, setBalloonData] = useState([]);
  const [balloonsReachedFinalPosition, setBalloonsReachedFinalPosition] = useState(0);
  const [animationError, setAnimationError] = useState(false);
  const letters = name.split("");
  
  // CSS filter values to create softer colored balloons from the white SVG
  const balloonFilters = [
    "sepia(100%) saturate(1200%) hue-rotate(320deg) brightness(1.1)", // Soft Red
    "sepia(100%) saturate(1000%) hue-rotate(160deg) brightness(1.2)", // Soft Teal
    "sepia(100%) saturate(1200%) hue-rotate(200deg) brightness(1.1)", // Soft Blue
    "sepia(100%) saturate(1100%) hue-rotate(110deg) brightness(1.2)", // Soft Green
    "sepia(100%) saturate(1300%) hue-rotate(40deg) brightness(1.3)", // Soft Yellow
    "sepia(100%) saturate(1000%) hue-rotate(280deg) brightness(1.1)", // Soft Purple
    "sepia(100%) saturate(1100%) hue-rotate(140deg) brightness(1.2)", // Soft Cyan
    "sepia(100%) saturate(1200%) hue-rotate(20deg) brightness(1.2)", // Soft Orange
    "sepia(100%) saturate(900%) hue-rotate(260deg) brightness(1.1)", // Soft Pink
    "sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2)", // Soft Aqua
    "sepia(100%) saturate(1100%) hue-rotate(80deg) brightness(1.2)", // Soft Lime
    "sepia(100%) saturate(1000%) hue-rotate(300deg) brightness(1.1)", // Soft Magenta
    "sepia(100%) saturate(1200%) hue-rotate(240deg) brightness(1.1)", // Soft Indigo
    "sepia(100%) saturate(1100%) hue-rotate(60deg) brightness(1.3)", // Soft Gold
  ];

  // Generate balloon data on client side only to avoid hydration mismatch
  useEffect(() => {
    const generateBalloonData = () => {
    // Create balloon data first with letters + 4 extras
    const letterBalloons = letters.map((letter, index) => ({
      letter,
      id: `letter-${index}`,
      isNameBalloon: true,
      originalIndex: index,
    }));
    
    const extraBalloons = Array.from({ length: 4 }, (_, index) => ({
      letter: "",
      id: `extra-${index}`,
      isNameBalloon: false,
      originalIndex: letters.length + index,
    }));

    // Shuffle all balloons together for random order
    const allBalloonsData = [...letterBalloons, ...extraBalloons];
    const shuffledBalloons = [...allBalloonsData].sort(() => Math.random() - 0.5);
    
    // Calculate equidistant positions symmetrically around vertical center axis
    // 8 balloons total, with equal spacing between consecutive balloons
    // Responsive spacing based on screen width
    const getResponsiveBalloonSpacing = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) return 120; // Desktop: 120px
      if (screenWidth >= 1024) return 100; // Large tablets: 100px
      if (screenWidth >= 889) return 80;   // Medium tablets: 80px (using your md breakpoint)
      if (screenWidth >= 671) return 55;   // Small tablets: 55px (using your sm breakpoint)
      if (screenWidth >= 480) return 45;   // Small phones: 45px (using your xs breakpoint)
      return 35; // Very small phones: 35px (below xs)
    };
    
    const balloonSpacing = getResponsiveBalloonSpacing();
    
    // For 8 balloons, we place them symmetrically:
    // Positions: -420, -300, -180, -60, +60, +180, +300, +420
    // This creates 4 balloons on each side of the vertical center axis
    
    // Sort balloons for final positioning: 2 extras, 4 letters, 2 extras
    const extraBalloonsFiltered = shuffledBalloons.filter(b => !b.isNameBalloon);
    const nameBalloons = shuffledBalloons.filter(b => b.isNameBalloon).sort((a, b) => a.originalIndex - b.originalIndex);
    const orderedForFinalPosition = [
      extraBalloonsFiltered[0], extraBalloonsFiltered[1], // Left extras
      ...nameBalloons, // Name balloons in correct order (H, A, N, I)
      extraBalloonsFiltered[2], extraBalloonsFiltered[3]  // Right extras
    ];
    
    // Create symmetric positions around vertical center axis
    // 8 positions: -420, -300, -180, -60, +60, +180, +300, +420
    const balloonPositions = {};
    orderedForFinalPosition.forEach((balloon, index) => {
      // Calculate position symmetrically around center (x = 0)
       // Centers the 8 balloons around x=0
      balloonPositions[balloon.id] = (index - 3.5) * balloonSpacing;
    });
    
    // Add positioning and animation data
    const balloonsWithData = shuffledBalloons.map((balloon, index) => {
      return {
        ...balloon,
        startX: Math.random() * 80 + 10, // Random horizontal position (10-90%)
        speed: 1.5 + Math.random() * 2.5, // Random speed multiplier (1.5-4.0s duration)
        filter: balloonFilters[index % balloonFilters.length],
        finalIndex: balloon.isNameBalloon ? balloon.originalIndex : -1, // For final ordering
        finalPosition: balloonPositions[balloon.id], // Equidistant final position
      };
    });

    setBalloonData(balloonsWithData);
    setBalloonsReachedFinalPosition(0); // Reset counter when balloons are regenerated
    };

    // Generate initial balloon data
    generateBalloonData();

    // Add resize event listener to recalculate positions on screen size change
    const handleResize = () => {
      generateBalloonData();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect to check if all balloons have reached their final position
  useEffect(() => {
    if (balloonData.length > 0 && balloonsReachedFinalPosition === balloonData.length) {
      if (onBalloonsReachFinalPosition) {
        onBalloonsReachFinalPosition();
      }
    }
  }, [balloonsReachedFinalPosition, balloonData.length, onBalloonsReachFinalPosition]);

  // Don't render anything until client-side data is ready
  if (balloonData.length === 0) {
    return <div className={`relative w-full ${className}`} />; // Empty placeholder
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container positioned under the subtitle text */}
      <div className="relative pt-2 flex justify-center">
        <div className="relative">
          {balloonData.map((data, index) => (
            <BalloonComponent 
              key={data.id} 
              data={data} 
              index={index} 
              totalBalloons={balloonData.length}
              onReachFinalPosition={() => setBalloonsReachedFinalPosition(prev => prev + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const BalloonComponent = ({ data, index, totalBalloons, onReachFinalPosition }) => {
  const controls = useAnimation();
  const [animationFailed, setAnimationFailed] = useState(false);

  useEffect(() => {
    const animateSequence = async () => {
      try {
        // Phase 1: Ascend to target position (stay in random order)
        await controls.start({
          y: 0, // Target position under the subtitle
          x: 0, // Keep centered during ascent
          opacity: 1,
          scale: 1,
          transition: {
            duration: data.speed,
            ease: "easeOut",
          },
        });

        // Phase 2: Rearrange to final equidistant positions
        await controls.start({
          x: `${data.finalPosition}px`, // Use pre-calculated equidistant position
          transition: {
            duration: 1.2,
            ease: "easeInOut",
          },
        });

        // Call callback when this balloon reaches its final position
        if (onReachFinalPosition) {
          onReachFinalPosition();
        }

        // Phase 3: Start floating animation
        controls.start({
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          },
        });
      } catch (error) {
        console.error('Balloon animation failed:', error);
        setAnimationFailed(true);
        // Fallback: Still call completion callback
        setTimeout(() => {
          if (onReachFinalPosition) {
            onReachFinalPosition();
          }
        }, 2000);
      }
    };

    animateSequence();
  }, [controls, data, onReachFinalPosition]);

  // CSS fallback animation styles
  const fallbackStyle = animationFailed ? {
    left: "50%",
    transform: `translateX(calc(-50% + ${data.finalPosition}px))`,
    zIndex: data.isNameBalloon ? 10 : 5,
    opacity: 1,
    animation: 'balloon-float 3s ease-in-out infinite',
  } : {
    left: "0",
    transform: "translateX(-50%)",
    zIndex: data.isNameBalloon ? 10 : 5,
  };

  if (animationFailed) {
    return (
      <div
        className="absolute"
        style={fallbackStyle}
      >
        <style jsx>{`
          @keyframes balloon-float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.02); }
          }
        `}</style>
        <div className="relative w-28 h-32 xl:w-26 xl:h-30 lg:w-24 lg:h-28 md:w-20 md:h-24 sm:w-16 sm:h-20 xs:w-14 xs:h-18">
          <Image
            src={balloonSvg}
            alt={data.isNameBalloon ? "Letter Balloon" : "Decorative Balloon"}
            fill
            className="object-contain"
            style={{
              filter: data.filter,
            }}
            priority
          />
          {/* Letter overlay for name balloons */}
          {data.isNameBalloon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="text-white font-bold text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs drop-shadow-lg"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  marginTop: "-40px",
                }}
              >
                {data.letter}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      animate={controls}
      initial={{
        y: "100vh", // Start from bottom of screen
        x: `${data.startX}%`, // Start at random horizontal position
        opacity: 0,
        scale: 0.8,
      }}
      className="absolute"
      style={fallbackStyle}
    >
      <div className="relative w-28 h-32 xl:w-26 xl:h-30 lg:w-24 lg:h-28 md:w-20 md:h-24 sm:w-16 sm:h-20 xs:w-14 xs:h-18">
        <Image
          src={balloonSvg}
          alt={data.isNameBalloon ? "Letter Balloon" : "Decorative Balloon"}
          fill
          className="object-contain"
          style={{
            filter: data.filter,
          }}
          priority
        />
        {/* Letter overlay for name balloons */}
        {data.isNameBalloon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-white font-bold text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs drop-shadow-lg"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                marginTop: "-40px", // Reduced from -8px to better center on balloon
              }}
            >
              {data.letter}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BalloonAnimation;