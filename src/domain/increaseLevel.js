export default function increaseLevel(level, answer) {
  const levels = {
    easy: (level) => level + 25,
    normal: (level) => level + 15,
    good: (level) => level + 10,
    hard: (level) => level -10,
  };
  return answer in levels ? levels[answer](level) > 100 ? 100: levels[answer](level) : level;
}
