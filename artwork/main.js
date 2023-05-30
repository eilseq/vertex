import p5 from 'p5'

import {
  disableAllUserEvents,
  getRandomRGB,
  getSize,
  random
} from './src/helpers.js'

import { generator } from './src/generator.js'
import { setDitherColor } from './src/dither.js'
import { tryPlay } from './src/media.js'

const p5div = document.querySelector('#p5div')
const body = document.body

let p5Instance
const createAnimationInstance = () => {
  const color = getRandomRGB()
  body.style = `background:rgb(${color[0]}, ${color[1]}, ${color[2]})`

  setDitherColor(color)

  if (p5Instance) p5Instance.remove()

  const p5sketch = (p5) => {
    p5.setup = () => {
      const wrnd = random(-50, 50)
      const hrnd = random(-50, 50)

      p5.createCanvas(p5div.clientWidth * 2, p5div.clientWidth * 2)
      p5.translate(-wrnd, -hrnd)

      p5.drawingContext.shadowColor = 'purple'
      p5.drawingContext.imageSmoothingEnabled = true
      p5.drawingContext.shadowOffsetX = wrnd
      p5.drawingContext.shadowOffsetY = hrnd
      p5.drawingContext.shadowBlur = 10
      p5div.style = `
        transform: rotate(${random(0, 360)}deg);
        transform: translate(${wrnd}, ${hrnd});
      `

      p5.noFill()
      p5.stroke(color)
      p5.frameRate(35)
      p5.strokeWeight(random(2, 3))
    }

    let generate = generator(p5, getSize(p5div))

    p5.draw = () => {
      p5.background(color)

      generate()

      const size = getSize(p5div)
      p5.translate(size / 2, size / 2)
      p5.scale(0.8)
    }

    p5.windowResized = () => {
      generate = generator(p5, getSize(p5div))
    }
  }

  p5Instance = new p5(p5sketch, p5div)
  setTimeout(createAnimationInstance, 3000)
}
createAnimationInstance()
disableAllUserEvents()

tryPlay()
document.onclick = (e) => {
  tryPlay()
  e.stopPropagation()
  e.preventDefault()
}
