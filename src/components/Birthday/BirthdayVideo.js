import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import VideoPlaceholder from './VideoPlaceholder';
import CustomVideoPlayer from './CustomVideoPlayer';

export default function BirthdayVideo({ onVideoReady, delayInSeconds = 2, onPlaceholderClick }) {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [placeholderClicked, setPlaceholderClicked] = useState(false);

  useEffect(() => {
    // Show placeholder after a delay, only if it hasn't been clicked yet
    if (onVideoReady && !placeholderClicked) {
      const timer = setTimeout(() => {
        setShowPlaceholder(true);
      }, delayInSeconds * 1000);
      return () => clearTimeout(timer);
    }
  }, [onVideoReady, delayInSeconds, placeholderClicked]);

  const handlePlaceholderClick = () => {
    setPlaceholderClicked(true);
    setShowConfetti(true);
    onPlaceholderClick?.();

    // After a short delay for confetti, hide placeholder and show video
    setTimeout(() => {
      setShowPlaceholder(false);
      setShowVideo(true);
      setShowConfetti(false);
    }, 1500);
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="relative w-[600px] h-[450px] lg:w-[500px] lg:h-[375px] md:w-96 md:h-72 sm:w-80 sm:h-60">
        {showConfetti && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <ConfettiExplosion
              particleCount={100}
              width={1200}
              colors={['#ff69b4', '#ffd700', '#87ceeb', '#98fb98', '#dda0dd', '#f0e68c']}
              duration={2200}
              force={0.6}
            />
          </div>
        )}

        <AnimatePresence>
          {showPlaceholder && <VideoPlaceholder onClick={handlePlaceholderClick} />}
        </AnimatePresence>

        <AnimatePresence>
          {showVideo && <CustomVideoPlayer videoSrc="/media/birthday.mp4" />}
        </AnimatePresence>
      </div>
    </div>
  );
}