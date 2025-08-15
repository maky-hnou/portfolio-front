// components/Birthoon/BalloonRow.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { buildBalloons } from '../../utils/balloonHelpers';
import BalloonShape from './BalloonShape';

export default function BalloonRow({ name = 'BIRTHDAY', onReady }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const update = () => setItems(buildBalloons(name));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [name]);

  useEffect(() => {
    if (items.length) onReady?.();
  }, [items, onReady]);

  if (!items.length) return null;

  const spacing = items[0].spacing;

  // final order (left -> right)
  const ordered = items.sort((a, b) => a.finalIndex - b.finalIndex);

  return (
    <div className="relative w-full flex justify-center pt-2">
      <div className="flex items-end gap-x-0">
        {ordered.map((b) => (
          <motion.div
            key={b.id}
            className="relative"
            initial={{ y: '100vh', x: `${b.startX}%`, opacity: 0, scale: 0.8 }}
            animate={{
              y: 0,
              x: 0, // flexbox handles horizontal layout
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: b.speed, ease: 'easeOut' }}
            onAnimationComplete={onReady}
          >
            {/* eternal micro-float */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BalloonShape
                filter={b.filter}
                letter={b.letter}
                isName={b.letter !== ''}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}