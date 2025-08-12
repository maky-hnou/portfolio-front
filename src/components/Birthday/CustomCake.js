import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import birthdayCakeSvg from "../../media/birthday_cake.svg";

const CustomCakeComponent = ({ onCandleBlowOut, isVisible = true }) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [showFlames, setShowFlames] = useState(true);
  const canvasRef = useRef(null);

  const handleCakeClick = () => {
    if (candlesLit) {
      setCandlesLit(false);
      setShowFlames(false);
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
    
    // Approximate candle positions for a typical birthday cake SVG
    // These positions will work for most cake designs - adjust if needed
    const candlePositions = [
      { x: 80, y: 40 },   // Left candle
      { x: 120, y: 35 },  // Center-left candle  
      { x: 160, y: 40 },  // Center-right candle
      { x: 200, y: 45 }   // Right candle
    ];
    
    candlePositions.forEach((pos, candleIndex) => {
      // Create multiple particles per candle
      for (let i = 0; i < 10; i++) {
        particles.push({
          x: pos.x,
          y: pos.y,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * -6 - 3,
          life: 1.0,
          decay: 0.015 + Math.random() * 0.01,
          size: Math.random() * 4 + 2,
          color: ['#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FF69B4', '#98FB98'][Math.floor(Math.random() * 7)],
          delay: candleIndex * 60 + i * 25
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
        particle.vy += 0.12; // gravity
        particle.life -= particle.decay;
        
        if (particle.life > 0) {
          // Draw particle
          ctx.save();
          ctx.globalAlpha = particle.life;
          ctx.fillStyle = particle.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = particle.color;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });
      
      // Continue animation if particles are alive
      if (particles.some(p => p.life > 0) && elapsed < 3500) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 280;
      canvas.height = 200;
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
      {/* Your Custom SVG Cake */}
      <div className="relative drop-shadow-xl">
        <Image
          src={birthdayCakeSvg}
          alt="Birthday Cake"
          width={280}
          height={200}
          className="object-contain"
          priority
        />
        
        {/* Animated Candle Flames Overlay */}
        {showFlames && (
          <div className="absolute inset-0">
            {/* Candle flames positioned over your cake */}
            {[
              { x: '28%', y: '20%' },  // Adjust these positions to match your SVG's candles
              { x: '43%', y: '18%' },
              { x: '57%', y: '20%' },
              { x: '72%', y: '22%' }
            ].map((pos, index) => (
              <motion.div
                key={`flame-${index}`}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Outer flame */}
                <motion.div
                  className="w-3 h-5 rounded-full bg-gradient-to-t from-orange-500 to-yellow-300"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                  style={{
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 8px rgba(255, 165, 0, 0.6)'
                  }}
                />
                
                {/* Inner flame glow */}
                <motion.div
                  className="absolute inset-0 w-2 h-3 rounded-full bg-gradient-to-t from-yellow-400 to-white"
                  style={{
                    left: '50%',
                    top: '30%',
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Smoke effects when candles are blown out */}
        {!candlesLit && (
          <div className="absolute inset-0">
            {[
              { x: '28%', y: '20%' },
              { x: '43%', y: '18%' },
              { x: '57%', y: '20%' },
              { x: '72%', y: '22%' }
            ].map((pos, index) => (
              <motion.div
                key={`smoke-${index}`}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.div
                  className="w-1 h-1 rounded-full bg-gray-400 opacity-60"
                  initial={{ scale: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 1.5, 0],
                    y: [0, -20, -40, -60],
                    x: [0, Math.random() * 6 - 3, Math.random() * 12 - 6],
                    opacity: [0, 0.6, 0.3, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Particle Effect Canvas */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 pointer-events-none"
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

export default CustomCakeComponent;