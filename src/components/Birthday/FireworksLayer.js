import { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

export default function FireworksLayer({ isMobile }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const getConfig = () => {
      const base = {
        hue: { min: 0, max: 360 },
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.5,
        traceSpeed: 10,
        flickering: 50,
        lineStyle: 'round',
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        mouse: { click: false, move: false, max: 1 },
      };
      if (isMobile) {
        return {
          ...base,
          rocketsPoint: { min: 30, max: 70 },
          delay: { min: 40, max: 80 },
          particles: 30,
          explosion: 3,
          intensity: 20,
          lineWidth: { explosion: { min: 1, max: 2 }, trace: { min: 1, max: 1.5 } },
        };
      }
      return {
        ...base,
        rocketsPoint: { min: 50, max: 50 },
        delay: { min: 30, max: 60 },
        particles: 50,
        explosion: 5,
        intensity: 30,
        lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
      };
    };

    const canvas = canvasRef.current;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const fireworks = new Fireworks(canvas, getConfig());
    fireworks.start();

    return () => {
      try {
        fireworks.stop();
      } catch {}
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
}