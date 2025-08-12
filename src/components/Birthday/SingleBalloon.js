import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import BalloonShape from './BalloonShape';

export default function SingleBalloon({
  data,
  onReachFinalPosition,
}) {
  const controls = useAnimation();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const go = async () => {
      try {
        // 1. ascend
        await controls.start({
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: data.speed, ease: 'easeOut' },
        });
        // 2. slide to final slot
        await controls.start({
          x: `${data.finalPos}px`,
          transition: { duration: 1.2, ease: 'easeInOut' },
        });
        onReachFinalPosition?.();
        // 3. float forever
        controls.start({
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
          transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        });
      } catch {
        setFailed(true);
        setTimeout(onReachFinalPosition, 2000);
      }
    };
    go();
  }, [controls, data, onReachFinalPosition]);

  return (
    <motion.div
      animate={controls}
      initial={{ y: '100vh', x: `${data.startX}%`, opacity: 0, scale: 0.8 }}
      className="absolute"
      style={{
        left: 0,
        transform: failed ? `translateX(calc(-50% + ${data.finalPos}px))` : 'translateX(-50%)',
        zIndex: data.isNameBalloon ? 10 : 5,
        ...(failed && { animation: 'balloon-float 3s ease-in-out infinite' }),
      }}
    >
      <style jsx>{`
        @keyframes balloon-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
      `}</style>
      <BalloonShape filter={data.filter} letter={data.letter} isName={data.isNameBalloon} />
    </motion.div>
  );
}