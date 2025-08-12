// Pure functions – no React
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

const spacingMap = [
  { w: 1280, s: 120 }, // Desktop: 120px
  { w: 1024, s: 100 }, // Large tablets: 100px
  { w: 889,  s: 80 },  // Medium tablets: 80px (using your md breakpoint)
  { w: 671,  s: 55 },  // Small tablets: 55px (using your sm breakpoint)
  { w: 480,  s: 45 },  // Small phones: 45px (using your xs breakpoint)
];

export const getBalloonSpacing = () =>
  spacingMap.find(({ w }) => window.innerWidth >= w)?.s ?? 35; // Very small phones: 35px (below xs)

export const generateBalloonData = (name) => {
  const letters = name.split('');
  const vw = window.innerWidth;

  // 1. decide how many extras to add
  const extraCount = vw < 670 ? 0 : 4;

  const spacing = Math.min(vw * 0.13, 120);
  console.log('spacing: ' + spacing)

  // 2. build arrays
  const letterB = letters.map((l, i) => ({
    letter: l,
    id: `l-${i}`,
    isNameBalloon: true,
    idx: i,
  }));
  const extraB = Array.from({ length: extraCount }, (_, i) => ({
    letter: '',
    id: `e-${i}`,
    isNameBalloon: false,
    idx: letters.length + i,
  }));

  const all = [...letterB, ...extraB].sort(() => Math.random() - 0.5);

  // 3. build final order (extras only if they exist)
  const orderFinal = [
    ...(extraCount ? all.filter(b => !b.isNameBalloon).slice(0, 2) : []),
    ...all.filter(b => b.isNameBalloon).sort((a, b) => a.idx - b.idx),
    ...(extraCount ? all.filter(b => !b.isNameBalloon).slice(2, 4) : []),
  ];

  const totalCount = letters.length + extraCount;
  const half = (totalCount - 1) / 2;

  // 4. attach positions
  const final = all.map((b, i) => {
    const pos = (orderFinal.findIndex(o => o.id === b.id) - half) * spacing;
    console.log(`Balloon ${b.letter || 'extra'} (${b.id}): finalPos = ${pos}px`);
    const start = Math.random() * 80 + 10
    console.log('start: ' + start)
    return {
      ...b,
      startX: Math.random() * 80 + 10,
      speed: 1.5 + Math.random() * 2.5,
      filter: balloonFilters[i % balloonFilters.length],
      finalPos: pos,
    };
  });

  return final;
};