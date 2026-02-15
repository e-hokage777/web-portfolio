import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Map a number from one range to another.
 *
 * @param value - input value to map
 * @param inMin - input range minimum
 * @param inMax - input range maximum
 * @param outMin - output range minimum
 * @param outMax - output range maximum
 * @param clamp - if true, clamps the result to the output range
 * @returns mapped value in the output range
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  clamp = false,
): number {
  const inRange = inMax - inMin;
  if (inRange === 0) return outMin;

  const t = (value - inMin) / inRange;
  const mapped = outMin + t * (outMax - outMin);

  if (!clamp) return mapped;

  const minOut = Math.min(outMin, outMax);
  const maxOut = Math.max(outMin, outMax);
  return Math.min(maxOut, Math.max(minOut, mapped));
}

export async function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}
