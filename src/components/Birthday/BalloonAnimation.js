import { useState, useEffect } from 'react';
import { generateBalloonData } from '../../utils/balloonHelpers';
import SingleBalloon from './SingleBalloon';

export default function BalloonAnimation({
  name = 'BIRTHDAY',
  className = '',
  onBalloonsReachFinalPosition,
}) {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(0);

  useEffect(() => {
    const gen = () => setData(generateBalloonData(name));
    gen();
    window.addEventListener('resize', gen);
    return () => window.removeEventListener('resize', gen);
  }, [name]);

  useEffect(() => {
    if (data.length && done === data.length) onBalloonsReachFinalPosition?.();
  }, [done, data.length, onBalloonsReachFinalPosition]);

  if (!data.length) return <div className={`relative w-full ${className}`} />; // SSR guard

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative pt-2 flex justify-center">
        <div className="relative">
          {data.map((b) => (
            <SingleBalloon
              key={b.id}
              data={b}
              onReachFinalPosition={() => setDone((c) => c + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}