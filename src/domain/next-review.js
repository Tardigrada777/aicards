const intervalsMap = () => {
  // hours
  const map = new Map();

  map.set(0, {
    hard: 1,
    normal: 6,
    good: 8,
    easy: 12,
  });

  map.set(12, {
    hard: 14,
    normal: 18,
    good: 20,
    easy: 24,
  });

  map.set(24, {
    hard: 14,
    normal: 18,
    good: 20,
    easy: 24,
  });

  map.set(36, {
    hard: 16,
    normal: 22,
    good: 24,
    easy: 32,
  });

  return map;
};

const currentInterval = (interval) => {
  for (const [upEdge, config] of intervalsMap()) {
    if (interval <= upEdge) return config;
  }
  return intervalsMap().get(36);
};

/**
 * @param {number} interval    Int (hours)
 * @param {'hard' | 'normal' | 'good' | 'easy'} complexity  Complexity to remember card.
 * @returns {number} hours that should be added.
 */
export const hoursToNextReview = (interval, complexity) => {
  const intervalConfig = currentInterval(interval);
  return intervalConfig[complexity] || 0;
};
