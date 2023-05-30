import { random } from './helpers.js'
import { rate } from './media.js'

let t1 = 0,
  t2 = 0,
  t3 = 0,
  t4 = 0

const generatorFast = (p5, size) => {
  const iMax = random(20, 200)

  let dt1 = random(0.01, 1),
    dt2 = random(0.02, 2),
    dt3 = random(0.03, 3),
    dt4 = random(0.04, 4)

  let rnd = random(10, 80),
    wrnd = random(0, 1),
    hrnd = random(0, 1)

  return () => {
    p5.clear()
    p5.translate(size / 2, size / 2)
    p5.scale(0.9)

    for (let i = 1; i < iMax; i++) {
      p5.triangle(
        Math.abs(Math.sin(wrnd + i * rnd)) * size,
        Math.abs(Math.sin(hrnd + i * rnd)) * size,
        Math.abs(Math.sin(t1 + i * rnd)) * size,
        Math.abs(Math.cos(t2 + i * rnd)) * size,
        Math.abs(Math.sin(t3 + i * rnd)) * size,
        Math.abs(Math.cos(t4 + i * rnd)) * size
      )
    }

    t1 += dt1
    t2 += dt2
    t3 += dt3
    t4 += dt4
  }
}

const generatorSlow = (p5, size) => {
  const iMax = random(20, 200)

  let dRate = rate / 10

  let rnd = random(10, 80),
    wrnd = random(0, 1),
    hrnd = random(0, 1)

  return () => {
    p5.clear()
    p5.translate(size / 2, size / 2)
    p5.scale(0.9)

    for (let i = 1; i < iMax; i++) {
      p5.triangle(
        Math.abs(Math.sin(wrnd + i * rnd)) * size,
        Math.abs(Math.sin(hrnd + i * rnd)) * size,
        Math.abs(Math.sin(t1 + i * rnd)) * size,
        Math.abs(Math.cos(t2 + i * rnd)) * size,
        Math.abs(Math.sin(t3 + i * rnd)) * size,
        Math.abs(Math.cos(t4 + i * rnd)) * size
      )
    }

    t1 += dRate * 0.01
    t2 += dRate * 0.02
    t3 += dRate * 0.03
    t4 += dRate * 0.04
  }
}

export const generator = rate > 0.7 ? generatorFast : generatorSlow
