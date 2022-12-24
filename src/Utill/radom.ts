export default function random(min:number, max: number) {
  return Math.random() * (max - min) + min;
}