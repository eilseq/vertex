import { random } from './random'

const audioFileIndex = Math.round(random(1, 10))
const rate = random(0.5, 1)

export const params = {
  audio: {
    audioFile: `./audio/${audioFileIndex}.mp3`,
    rate
  },
  color: {
    hue: random(0, 1),
    luma: random(0.5, 1)
  },
  gen: {
    iMax: random(20, 200),
    dt1: rate > 0.7 ? random(0.01, 1) : 0,
    dt2: rate > 0.7 ? random(0.02, 2) : 0,
    dt3: rate > 0.7 ? random(0.03, 3) : 0,
    dt4: rate > 0.7 ? random(0.04, 4) : 0,
    rnd: random(10, 80),
    wrnd: random(0, 1),
    hrnd: random(0, 1)
  },
  setup: {
    wrnd: random(0 - 50, 50),
    hrnd: random(-50, 50),
    p5divrotate: random(0, 360),
    strokeweight: random(2, 3)
  }
}

export function updateParams() {
  params.color.hue = random(0, 1)
  params.color.luma = random(0.5, 1)
  params.gen.iMax = random(20, 200)
  params.gen.dt1 = params.audio.rate > 0.7 ? random(0.01, 1) : 0
  params.gen.dt2 = params.audio.rate > 0.7 ? random(0.02, 2) : 0
  params.gen.dt3 = params.audio.rate > 0.7 ? random(0.03, 3) : 0
  params.gen.dt4 = params.audio.rate > 0.7 ? random(0.04, 4) : 0
  params.gen.rnd = random(10, 80)
  params.gen.wrnd = random(0, 1)
  params.gen.hrnd = random(0, 1)
  params.setup.wrnd = random(0 - 50, 50)
  params.setup.hrnd = random(-50, 50)
  params.setup.p5divrotate = random(0, 360)
  params.setup.strokeweight = random(2, 3)
}
