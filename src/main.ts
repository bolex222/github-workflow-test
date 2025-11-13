export function clamp(val: number, min: number, max: number): number {
  console.log('v2.9')
  return Math.max(Math.min(val, max), min)
}
