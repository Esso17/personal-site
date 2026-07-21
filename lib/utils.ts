import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toFixed(decimals)
}
