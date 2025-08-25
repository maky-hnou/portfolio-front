// components/CustomVideoPlayer.jsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import VideoControls from './VideoControls';

// Utility function to format time (can be in a separate utils file)
const formatTime = (time) => {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default function CustomVideoPlayer({ videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null); // NEW: Ref to hold the timer ID

  // NEW: Function to hide controls after a delay on mobile
  const hideControlsAfterDelay = () => {
    if (!isMobile) return;
    // Clear any existing timer
    clearTimeout(controlsTimeoutRef.current);
    // Set a new timer to hide controls after 3 seconds
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      clearTimeout(controlsTimeoutRef.current); // NEW: Cleanup timer on unmount
    };
  }, []);

  // NEW: Start the hide timer when the video starts playing
  useEffect(() => {
    if (isPlaying && showControls) {
      hideControlsAfterDelay();
    } else {
      // If paused, clear the timer to keep controls visible
      clearTimeout(controlsTimeoutRef.current);
    }
  }, [isPlaying, showControls, isMobile]);


  const togglePlay = () => {
    if (!videoRef.current) return;
    const currentlyPlaying = !videoRef.current.paused;
    if (currentlyPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!currentlyPlaying);

    // CHANGED: Reset the auto-hide timer on interaction
    if (isMobile) {
      hideControlsAfterDelay();
    }
  };

  const handleTimeUpdate = () => setCurrentTime(videoRef.current?.currentTime || 0);
  const handleLoadedMetadata = () => setDuration(videoRef.current?.duration || 0);
  const handleVideoEnd = () => setIsPlaying(false);

  const handleProgressClick = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    // NEW: Reset timer on scrub
    if (isMobile) {
      hideControlsAfterDelay();
    }
  };

  const handleMouseEnter = () => !isMobile && setShowControls(true);
  const handleMouseLeave = () => {
    if (!isMobile) setShowControls(false);
  };

  // CHANGED: Updated logic for mobile clicks
  const handleVideoClick = () => {
    if (isMobile) {
      // Toggle visibility of controls
      const newShowState = !showControls;
      setShowControls(newShowState);

      // If controls are now visible and video is playing, start timer to hide them
      if (newShowState && isPlaying) {
        hideControlsAfterDelay();
      } else {
        // If hiding controls manually, clear the timer
        clearTimeout(controlsTimeoutRef.current);
      }
    } else {
      togglePlay();
    }
  };

  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
    // NEW: Reset timer on fullscreen toggle
    if (isMobile) {
      hideControlsAfterDelay();
    }
  };

  return (
    <motion.div
      ref={playerContainerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-black rounded-lg overflow-hidden shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        onEnded={handleVideoEnd}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="metadata"
        autoPlay
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none"
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-lg transition-colors pointer-events-auto"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* CHANGED: Logic for showing controls on mobile now also depends on isPlaying */}
        {(showControls || (!isPlaying && isMobile)) && (
          <VideoControls
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
            currentTime={currentTime}
            duration={duration}
            onProgressClick={handleProgressClick}
            formatTime={formatTime}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}