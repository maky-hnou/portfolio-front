import Image from 'next/image';
import balloonSvg from '../../../media/balloon.svg';

export default function BalloonShape({ filter, letter, isName }) {
  return (
    <div className="relative w-28 h-32 xl:w-26 xl:h-30 lg:w-24 lg:h-28 md:w-20 md:h-24 sm:w-16 sm:h-20 xs:w-14 xs:h-18">
      <Image
        src={balloonSvg}
        alt={isName ? 'Letter balloon' : 'Decorative balloon'}
        fill
        className="object-contain"
        style={{ filter }}
        priority
      />
      {isName && (
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs drop-shadow-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] mt-[-40px]">
          {letter}
        </span>
      )}
    </div>
  );
}