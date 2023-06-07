const createFastDrawingRoutine = (params) => (p5, size: number) => {
  const { gen } = params

  let t1: number = 0
  let t2: number = 0
  let t3: number = 0
  let t4: number = 0

  return () => {
    p5.clear()
    p5.translate(size / 2, size / 2)
    p5.scale(0.9)

    for (let i = 1; i < gen.iMax; i++) {
      p5.triangle(
        Math.abs(Math.sin(gen.wrnd + i * gen.rnd)) * size,
        Math.abs(Math.sin(gen.hrnd + i * gen.rnd)) * size,
        Math.abs(Math.sin(t1 + i * gen.rnd)) * size,
        Math.abs(Math.cos(t2 + i * gen.rnd)) * size,
        Math.abs(Math.sin(t3 + i * gen.rnd)) * size,
        Math.abs(Math.cos(t4 + i * gen.rnd)) * size
      )
    }

    t1 += gen.dt1
    t2 += gen.dt2
    t3 += gen.dt3
    t4 += gen.dt4
  }
}

const createSlowDrawingRoutine = (params) => (p5, size: number) => {
  const { gen, audio } = params
  const { rate } = audio
  const dRate = rate / 10

  let t1: number = 0
  let t2: number = 0
  let t3: number = 0
  let t4: number = 0

  return () => {
    p5.clear()
    p5.translate(size / 2, size / 2)
    p5.scale(0.9)

    for (let i = 1; i < gen.iMax; i++) {
      p5.triangle(
        Math.abs(Math.sin(gen.wrnd + i * gen.rnd)) * size,
        Math.abs(Math.sin(gen.hrnd + i * gen.rnd)) * size,
        Math.abs(Math.sin(t1 + i * gen.rnd)) * size,
        Math.abs(Math.cos(t2 + i * gen.rnd)) * size,
        Math.abs(Math.sin(t3 + i * gen.rnd)) * size,
        Math.abs(Math.cos(t4 + i * gen.rnd)) * size
      )
    }

    t1 += dRate * 0.01
    t2 += dRate * 0.02
    t3 += dRate * 0.03
    t4 += dRate * 0.04
  }
}

export const createDrawingRoutine = (params) =>
  params.audio.rate > 0.7
    ? createFastDrawingRoutine(params)
    : createSlowDrawingRoutine(params)
