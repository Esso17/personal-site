import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toFixed(decimals)
}
