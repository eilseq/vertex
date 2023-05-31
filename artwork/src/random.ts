import seedrandom from 'seedrandom'
import { legacyRandomGenerator } from './legacy'

const search = new URLSearchParams(window.location.search)
const seed = search.get('seed')

let randomGenerator: () => number

if (seed) {
  const [firts, second] = seed
  if (firts === 'o' && second === 'o') {
    // Legacy mode to mantain consistency with first collection
    // fallback on legacy generator for token seeds
    randomGenerator = legacyRandomGenerator(seed)
  } else {
    randomGenerator = seedrandom(seed)
  }
} else {
  randomGenerator = Math.random
}

export const random = (min: number, max: number) =>
  randomGenerator() * (max - min) + min
