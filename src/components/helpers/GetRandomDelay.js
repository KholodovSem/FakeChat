export function randomDelay(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
