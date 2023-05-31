import seedrandom from 'seedrandom'
import { legacyRandomGenerator } from './legacy'
import { updateParams } from './params'

const search = new URLSearchParams(window.location.search)
const seed = search.get('seed')

let randomGenerator: () => number

const choosRandomGenerator = (seed: string | null) => {
  if (seed) {
    const [firts, second] = seed
    if (firts === 'o' && second === 'o') {
      // Legacy mode to mantain consistency with first collection
      // fallback on legacy generator for token seeds
      return legacyRandomGenerator(seed)
    } else {
      return seedrandom(seed)
    }
  }
  return Math.random
}
randomGenerator = choosRandomGenerator(seed)

export const random = (min: number, max: number) =>
  randomGenerator() * (max - min) + min

window.addEventListener(
  'message',
  (event) => {
    const { data } = event
    if (data && data.type === 'updateSeed') {
      const { seed } = data
      console.log('seed', seed)

      randomGenerator = choosRandomGenerator(seed)
      updateParams()
    }
  },
  false
)
