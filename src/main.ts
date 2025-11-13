export function clamp(val: number, min: number, max: number): number {
  console.log('v1')
  return Math.max(Math.min(val, max), min)
}
