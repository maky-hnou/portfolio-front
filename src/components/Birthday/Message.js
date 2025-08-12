import { motion } from 'framer-motion';

export default function HeroMessage({ name }) {
  return (
    <div className="text-center mb-4 relative">
      <motion.h1
        className="text-6xl md:text-4xl sm:text-3xl font-bold text-primary mb-4 relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', times: [0, 0.6, 1] }}
      >
        🎉 Happy Birthday! 🎂
      </motion.h1>

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: Math.cos(i * 30 * Math.PI / 180) * (300 + Math.random() * 40),
            y: Math.sin(i * 30 * Math.PI / 180) * (30 + Math.random() * 40),
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1 + 1.5,
            ease: 'easeInOut',
          }}
          style={{
            left: '50%',
            top: '25%',
            boxShadow: '0 0 8px rgba(255, 211, 61, 0.8)',
          }}
        />
      ))}
      <motion.p
        className="mt-8 text-2xl md:text-lg sm:text-sm sm:mt-4 text-text_color font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Celebrating another amazing year!
      </motion.p>
    </div>
  );
}