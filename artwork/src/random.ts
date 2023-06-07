import seedrandom from 'seedrandom'
import { legacyRandomGenerator } from './legacy'

export const createRandomFunction = (seed?: string) => {
  if (seed) {
    const [firts, second] = seed
    if (firts === 'o' && second === 'o') {
      // Legacy mode to mantain consistency with first collection
      // fallback on legacy generator for token seeds
      return (min: number, max: number) =>
        legacyRandomGenerator(seed)() * (max - min) + min
    } else {
      return (min: number, max: number) => seedrandom(seed) * (max - min) + min
    }
  }
  return (min: number, max: number) => Math.random() * (max - min) + min
}
