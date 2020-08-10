export const range = (startsAt: number, size: number): Array<number> =>
  [...Array(size).keys()].map(i => i + startsAt)
