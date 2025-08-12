import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundMusic({
  candlesBlownOut,
  hasUserInteracted,
  isMuted,
  setIsMuted,
  audioError,
  setAudioError,
  setAudioLoaded,
  setMusicStarted,
}) {
  const audioRef = useRef(null);

  // --- audio event listeners (same as in original useEffect) ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onCanPlay = () => setAudioLoaded(true);
    const onError = () => setAudioError(true);
    const onLoadError = () => setAudioError(true);

    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('error', onError);
    ['abort', 'stalled'].forEach((e) => audio.addEventListener(e, onLoadError));

    return () => {
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('error', onError);
      ['abort', 'stalled'].forEach((e) =>
        audio.removeEventListener(e, onLoadError)
      );
    };
  }, [setAudioError, setAudioLoaded]);

  // --- autoplay when ready ---
  useEffect(() => {
    if (candlesBlownOut && hasUserInteracted && !isMuted && !audioError) {
      audioRef.current
        .play()
        .then(() => setMusicStarted(true))
        .catch(() => setAudioError(true));
    }
  }, [candlesBlownOut, hasUserInteracted, isMuted, audioError, setMusicStarted]);

  const toggleMute = () => {
    if (audioError) return;
    const next = !isMuted;
    audioRef.current.muted = next;
    if (!next) audioRef.current.play().catch(() => setAudioError(true));
    setIsMuted(next);
  };

  return (
    <>
      <audio ref={audioRef} src="/media/birthday.mp3" loop preload="metadata" />
      {/* Mute button */}
      {setMusicStarted && (
        <motion.button
          onClick={toggleMute}
          className={`fixed top-6 right-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-3 shadow-lg z-40 ${
            audioError ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          whileHover={audioError ? {} : { scale: 1.1 }}
          whileTap={audioError ? {} : { scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          disabled={audioError}
          title={audioError ? 'Audio unavailable' : isMuted ? 'Unmute' : 'Mute'}
        >
          <div className="text-2xl">{audioError ? '🔇' : isMuted ? '🔇' : '🔊'}</div>
        </motion.button>
      )}

      {/* Error toast */}
      {audioError && candlesBlownOut && (
        <motion.div
          className="fixed top-20 right-6 bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded-lg shadow-lg max-w-xs z-40"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm">🎵 Audio unavailable, but the celebration continues!</p>
        </motion.div>
      )}
    </>
  );
}