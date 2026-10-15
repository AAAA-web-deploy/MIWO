/**
 * Intro scene lengths in milliseconds.
 * Change these to retune the opening. Asset loading still gates the first scene:
 * the bar will not finish before `loadingMin`, and it will not hold past `loadingMax`.
 *
 * Mobile total (after the cap) stays under ~4.5s. Desktop is a slightly longer arc.
 * Whale mode is the GO FULL WHALE hold before the ocean settles back.
 */
export const DESKTOP_TIMINGS = {
  loadingMin: 700,
  loadingMax: 1600,
  eyes: 2400,
  reveal: 1500,
  dream: 1900,
  splash: 1200,
} as const;

export const MOBILE_TIMINGS = {
  loadingMin: 450,
  loadingMax: 1000,
  eyes: 1700,
  reveal: 1000,
  dream: 1200,
  splash: 800,
} as const;

export const WHALE_MODE_MS = 2600;

export type SceneTimings = {
  loadingMin: number;
  loadingMax: number;
  eyes: number;
  reveal: number;
  dream: number;
  splash: number;
};

export function timingsForViewport(): SceneTimings {
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches) {
    return MOBILE_TIMINGS;
  }
  return DESKTOP_TIMINGS;
}
