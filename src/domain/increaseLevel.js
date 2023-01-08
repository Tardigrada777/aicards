export default function increaseLevel(level, answer) {
  const levels = {
    easy: (level) => level + 25,
    normal: (level) => level + 15,
    good: (level) => level + 10,
    hard: (level) => level -10,
  };
  const nextLevel = answer in levels ? levels[answer](level) : level;
  if (nextLevel < 0) return 0;
  if (nextLevel > 100) return 100;
  return nextLevel;
};
