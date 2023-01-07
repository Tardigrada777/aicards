const intervalsMap = () => {
  // hours
  const map = new Map();

  intervalsMap.set(0, {
    hard: 1,
    normal: 6,
    good: 8,
    ease: 12,
  });

  intervalsMap.set(12, {
    hard: 14,
    normal: 18,
    good: 20,
    ease: 24,
  });

  intervalsMap.set(24, {
    hard: 14,
    normal: 18,
    good: 20,
    ease: 24,
  });

  intervalsMap.set(36, {
    hard: 16,
    normal: 22,
    good: 24,
    ease: 32,
  });

  return map;
};

const currentInterval = (interval) => {
  for (const [upEdge, config] of intervalsMap()) {
    if (interval < upEdge) return config;
  }
  return intervalsMap.get(36);
};

/**
 * 
 * @param {number} interval    Int (hours)
 * @param {'hard' | 'normal' | 'good' | 'ease'} complexity  Complexity to remember card.
 * @returns {number} hours that should be added.
 */
export const nextReview = (interval, complexity) => {
  const intervalConfig = currentInterval(interval);
  return intervalConfig[complexity] || 0;
};
