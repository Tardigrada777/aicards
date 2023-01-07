export default function increaseLevel(l, answer) {
  let level = l;
  if (answer === 'easy') {
    level += 25;
  } else if (answer === 'medium') {
    level += 10;
  } else if (answer === 'hard') {
    level -= 10;
  }
  if (level > 100) {
    level = 100;
  }
  return level;
}
