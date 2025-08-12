import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const CakeComponent = ({ onCandleBlowOut, isVisible = true }) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const canvasRef = useRef(null);

  const handleCakeClick = () => {
    if (candlesLit) {
      setCandlesLit(false);
      setShowParticles(true);
      onCandleBlowOut && onCandleBlowOut();
      
      // Trigger particle effect
      setTimeout(() => {
        createParticleEffect();
      }, 100);

      // Hide particles after animation
      setTimeout(() => {
        setShowParticles(false);
      }, 3000);
    }
  };

  const createParticleEffect = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Create particles from each candle position
    const candlePositions = [75, 90, 105, 120];
    
    candlePositions.forEach((x, candleIndex) => {
      // Create multiple particles per candle
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: x,
          y: 30,
          vx: (Math.random() - 0.5) * 6,
          vy: Math.random() * -4 - 2,
          life: 1.0,
          decay: 0.015 + Math.random() * 0.01,
          size: Math.random() * 3 + 1,
          color: ['#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FF69B4'][Math.floor(Math.random() * 6)],
          delay: candleIndex * 50 + i * 20
        });
      }
    });

    // Animation loop
    let startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        if (elapsed < particle.delay) return;
        
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.life -= particle.decay;
        
        if (particle.life > 0) {
          // Draw particle
          ctx.save();
          ctx.globalAlpha = particle.life;
          ctx.fillStyle = particle.color;
          ctx.shadowBlur = 4;
          ctx.shadowColor = particle.color;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });
      
      // Continue animation if particles are alive
      if (particles.some(p => p.life > 0) && elapsed < 3000) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 200;
      canvas.height = 160;
    }
  }, []);

  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={handleCakeClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="200"
        height="160"
        viewBox="0 0 200 160"
        className="drop-shadow-lg w-52 h-40 xl:w-48 xl:h-36 lg:w-44 lg:h-32 md:w-40 md:h-28 sm:w-36 sm:h-24 xs:w-32 xs:h-20"
      >
        {/* Cake Base (Bottom Layer) */}
        <ellipse
          cx="100"
          cy="140"
          rx="80"
          ry="15"
          fill="#8B4513"
          className="opacity-30"
        />
        
        {/* Bottom Cake Layer */}
        <rect
          x="30"
          y="100"
          width="140"
          height="40"
          fill="#FFB6C1"
          rx="8"
        />
        
        {/* Bottom Layer Frosting */}
        <path
          d="M30 100 Q40 95 50 100 Q60 95 70 100 Q80 95 90 100 Q100 95 110 100 Q120 95 130 100 Q140 95 150 100 Q160 95 170 100 L170 105 Q160 100 150 105 Q140 100 130 105 Q120 100 110 105 Q100 100 90 105 Q80 100 70 105 Q60 100 50 105 Q40 100 30 105 Z"
          fill="#FFFFFF"
        />

        {/* Middle Cake Layer */}
        <rect
          x="45"
          y="70"
          width="110"
          height="35"
          fill="#FFE4E1"
          rx="6"
        />
        
        {/* Middle Layer Frosting */}
        <path
          d="M45 70 Q52 65 60 70 Q68 65 75 70 Q82 65 90 70 Q98 65 105 70 Q112 65 120 70 Q128 65 135 70 Q142 65 150 70 Q155 65 155 70 L155 75 Q150 70 142 75 Q135 70 128 75 Q120 70 112 75 Q105 70 98 75 Q90 70 82 75 Q75 70 68 75 Q60 70 52 75 Q45 70 45 75 Z"
          fill="#FFFFFF"
        />

        {/* Top Cake Layer */}
        <rect
          x="60"
          y="45"
          width="80"
          height="30"
          fill="#FFF0F5"
          rx="4"
        />
        
        {/* Top Layer Frosting */}
        <path
          d="M60 45 Q67 40 75 45 Q82 40 90 45 Q98 40 105 45 Q112 40 120 45 Q128 40 135 45 Q140 40 140 45 L140 50 Q135 45 128 50 Q120 45 112 50 Q105 45 98 50 Q90 45 82 50 Q75 45 67 50 Q60 45 60 50 Z"
          fill="#FFFFFF"
        />

        {/* Decorative Elements */}
        <circle cx="70" cy="85" r="3" fill="#FF69B4" />
        <circle cx="90" cy="80" r="3" fill="#FFB6C1" />
        <circle cx="110" cy="85" r="3" fill="#FF1493" />
        <circle cx="130" cy="80" r="3" fill="#FF69B4" />
        
        <circle cx="80" cy="58" r="2" fill="#FF69B4" />
        <circle cx="100" cy="55" r="2" fill="#FF1493" />
        <circle cx="120" cy="58" r="2" fill="#FFB6C1" />

        {/* Candles */}
        {[75, 90, 105, 120].map((x, index) => (
          <g key={index}>
            {/* Candle */}
            <rect
              x={x - 1.5}
              y="30"
              width="3"
              height="15"
              fill="#FFF8DC"
              rx="1"
            />
            
            {/* Candle Flame */}
            {candlesLit && (
              <motion.ellipse
                cx={x}
                cy="27"
                rx="2"
                ry="4"
                fill="#FF4500"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            
            {/* Inner flame glow */}
            {candlesLit && (
              <motion.ellipse
                cx={x}
                cy="27"
                rx="1"
                ry="2.5"
                fill="#FFD700"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              />
            )}
          </g>
        ))}

        {/* Smoke effect when candles are blown out */}
        {!candlesLit && (
          <>
            {[75, 90, 105, 120].map((x, index) => (
              <motion.g key={`smoke-${index}`}>
                <motion.circle
                  cx={x}
                  cy="25"
                  r="1"
                  fill="#D3D3D3"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 0.6, 0],
                    y: [0, -15, -25],
                    x: [0, Math.random() * 4 - 2, Math.random() * 8 - 4]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                />
              </motion.g>
            ))}
          </>
        )}
      </svg>

      {/* Particle Effect Canvas */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 pointer-events-none"
          width="200"
          height="160"
          style={{ zIndex: 10 }}
        />
      )}

      {/* Click instruction text */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: candlesLit ? 1 : 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm text-gray-600 font-light">
          Click to blow out candles! 🎂
        </p>
      </motion.div>

      {/* Success message after blowing out candles */}
      {!candlesLit && (
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-green-600 font-medium">
            🎉 Make a wish! 🎉
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CakeComponent;