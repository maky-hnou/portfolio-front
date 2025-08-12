import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BalloonAnimation, Message, FireworksLayer, BackgroundMusic, CustomGiftBoxCakeReveal } from '../components/Birthday';

export default function Birthday() {
  const personName = 'MAISSA';
  const giftBoxDelay = 2; // seconds

  const [isMobile, setIsMobile] = useState(false);
  const [balloonsCompleted, setBalloonsCompleted] = useState(false);
  const [showGiftBox, setShowGiftBox] = useState(false);
  const [cakeFullyVisible, setCakeFullyVisible] = useState(false);
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  // --- responsive check ---
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // --- callbacks ---
  const handleBalloonsComplete = () => {
    setBalloonsCompleted(true);
    setTimeout(() => setShowGiftBox(true), giftBoxDelay * 1000);
  };

  return (
    <>
      <Head>
        <title>Happy Birthday! - Maissa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Birthday celebration page" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-light_cyan via-light_white to-white overflow-hidden">
        <div className="pt-32 pb-20 px-4">
          <Message name={personName} />

          <div className="mb-16">
            <BalloonAnimation
              name={personName}
              onBalloonsReachFinalPosition={handleBalloonsComplete}
            />
          </div>

          {/* <AnimatePresence>
//            {showGiftBox && (
//              <motion.div
//                className="flex justify-center mb-16 relative z-10"
//                initial={{ opacity: 0, y: 50, scale: 0.8 }}
//                animate={{ opacity: 1, y: 0, scale: 1 }}
//                transition={{ duration: 0.8, ease: 'easeOut' }}
//              >
//                <CustomGiftBoxCakeReveal
//                  autoReveal={false}
//                  onCakeFullyVisible={() => setCakeFullyVisible(true)}
//                  onGiftBoxClick={() => setHasUserInteracted(true)}
//                  onCandlesBlownOut={() => setCandlesBlownOut(true)}
//                />
//              </motion.div>
//            )}
          </AnimatePresence> */}

          {/* <div className="text-center max-w-2xl mx-auto mt-32 sm:mt-24 xs:mt-20 md:mt-40 lg:mt-48 xl:mt-60">
//            <p className="text-lg md:text-base text-text_color leading-relaxed">
//              May this special day bring you joy, laughter, and wonderful memories.
//              Here's to another year of amazing adventures and achievements! 🎈✨
//            </p>
//          </div> */}
        </div>

        {/* <FireworksLayer isMobile={isMobile} /> */}

        {/* <BackgroundMusic
//          candlesBlownOut={candlesBlownOut}
//          hasUserInteracted={hasUserInteracted}
//          isMuted={isMuted}
//          setIsMuted={setIsMuted}
//          audioError={audioError}
//          setAudioError={setAudioError}
//          setAudioLoaded={setAudioLoaded}
//          setMusicStarted={setMusicStarted}
        /> */}
      </main>
    </>
  );
}