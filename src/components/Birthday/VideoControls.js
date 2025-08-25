// components/VideoControls.jsx

import { motion } from 'framer-motion';

export default function VideoControls({
  isPlaying,
  onTogglePlay,
  currentTime,
  duration,
  onProgressClick,
  formatTime,
  isFullscreen,       // NEW
  onToggleFullscreen, // NEW
}) {
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Progress Bar */}
      <div className="mb-3">
        <div
          className="w-full h-2 bg-white/30 rounded-full cursor-pointer relative group"
          onClick={onProgressClick}
        >
          <div
            className="h-full bg-white rounded-full relative"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onTogglePlay}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            )}
          </motion.button>

          <div className="text-white text-sm font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* NEW: Fullscreen Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleFullscreen}
          className="text-white hover:text-gray-300 transition-colors"
        >
          {isFullscreen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
            </svg>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}