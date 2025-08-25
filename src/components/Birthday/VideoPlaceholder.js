import { motion } from 'framer-motion';

export default function VideoPlaceholder({ onClick }) {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-lg overflow-hidden cursor-pointer shadow-xl"
      onClick={onClick}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-center"
        >
          <div className="mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-4xl mb-2"
            >
              🎁
            </motion.div>
          </div>
          <p className="text-lg font-medium text-gray-700 mb-2">A Special Surprise</p>
          <p className="text-sm text-gray-600 px-4">Press to uncover your gift!</p>
        </motion.div>
      </div>
    </motion.div>
  );
}