import Head from 'next/head';
import { useState, useEffect } from 'react';
import { BalloonRow, Message, FireworksLayer, BirthdayVideo, FloatingMessage } from '../components/Birthday';

export default function Birthday() {
  const personName = 'MAISSA';
  const videoDelayInSeconds = 2; // Adjustable delay parameter

  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [fireworksActive, setFireworksActive] = useState(true);

  // --- responsive check ---
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleBalloonsComplete = () => {
    setShowVideo(true);
  };

  const handleVideoPlaceholderClick = () => {
    setFireworksActive(false);
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
            <BalloonRow name="MAISSA" onReady={handleBalloonsComplete} />
          </div>
          
          {showVideo && (
            <BirthdayVideo 
              onVideoReady={() => {}} 
              delayInSeconds={videoDelayInSeconds}
              onPlaceholderClick={handleVideoPlaceholderClick}
            />
          )}
          
          {showVideo && <FloatingMessage />}
        </div>

        <FireworksLayer isMobile={isMobile} isActive={fireworksActive} />
      </main>
    </>
  );
}