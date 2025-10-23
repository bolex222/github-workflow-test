export function clamp(val: number, min: number, max: number): number {
  console.log('add info')
  return Math.max(Math.min(val, max), min)
}
