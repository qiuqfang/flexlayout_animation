export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

export const PHI = (1 + Math.sqrt(5)) / 2;