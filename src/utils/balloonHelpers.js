export const balloonFilters = [
  "sepia(100%) saturate(1200%) hue-rotate(320deg) brightness(1.1)",
  "sepia(100%) saturate(1000%) hue-rotate(160deg) brightness(1.2)",
  "sepia(100%) saturate(1200%) hue-rotate(200deg) brightness(1.1)",
  "sepia(100%) saturate(1100%) hue-rotate(110deg) brightness(1.2)",
  "sepia(100%) saturate(1300%) hue-rotate(40deg)  brightness(1.3)",
  "sepia(100%) saturate(1000%) hue-rotate(280deg) brightness(1.1)",
  "sepia(100%) saturate(1100%) hue-rotate(140deg) brightness(1.2)",
  "sepia(100%) saturate(1200%) hue-rotate(20deg)  brightness(1.2)",
  "sepia(100%) saturate(900%)  hue-rotate(260deg) brightness(1.1)",
  "sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(1.2)",
  "sepia(100%) saturate(1100%) hue-rotate(80deg)  brightness(1.2)",
  "sepia(100%) saturate(1000%) hue-rotate(300deg) brightness(1.1)",
  "sepia(100%) saturate(1200%) hue-rotate(240deg) brightness(1.1)",
  "sepia(100%) saturate(1100%) hue-rotate(60deg)  brightness(1.3)",
];

export const buildBalloons = (name) => {
  const vw = window.innerWidth;
  const letters = name.split('');
  const extras  = vw < 670 ? 0 : 4;
  const spacing = Math.min(vw * 0.13, 120);

  /* 1. final array (never sliced again) */
  const ordered = [
    ...(extras ? [{ id: 'e0', letter: '' }, { id: 'e1', letter: '' }] : []),
    ...letters.map((l, i) => ({ id: `l${i}`, letter: l })),
    ...(extras ? [{ id: 'e2', letter: '' }, { id: 'e3', letter: '' }] : []),
  ];

  /* 2. shuffle indices, keep the objects */
  const shuffledIndices = [...Array(ordered.length).keys()]
    .sort(() => Math.random() - 0.5);

  return shuffledIndices.map((startIdx, i) => ({
    ...ordered[startIdx],
    startX: Math.random() * 80 + 10,
    speed: 1.5 + Math.random() * 2.5,
    filter: balloonFilters[i % balloonFilters.length],
    finalIndex: startIdx, // the already-ordered index
    spacing,
  }));
};