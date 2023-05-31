import p5 from 'p5'

import { disableAllUserEvents, getSize, hslToRgb } from './src/helpers.js'
import { generator } from './src/generator.js'
import { setDitherColor } from './src/dither.js'
import { tryPlay } from './src/media.js'
import { params, updateParams } from './src/params.js'

const p5div: HTMLElement | null = document.querySelector('#p5div')
const body = document.body

let p5Instance: p5 | null = null
const createAnimationInstance = () => {
  const { hue, luma } = params.color
  const color = hslToRgb([hue, 1, luma])
  body.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  setDitherColor(color)

  if (p5Instance) p5Instance.remove()

  const p5sketch = (p5) => {
    p5.setup = () => {
      if (!p5div) return

      const { wrnd, hrnd, p5divrotate, strokeweight } = params.setup

      p5.createCanvas(p5div.clientWidth * 2, p5div.clientWidth * 2)
      p5.translate(-wrnd, -hrnd)

      p5.drawingContext.shadowColor = 'purple'
      p5.drawingContext.imageSmoothingEnabled = true
      p5.drawingContext.shadowOffsetX = wrnd
      p5.drawingContext.shadowOffsetY = hrnd
      p5.drawingContext.shadowBlur = 10

      p5div.style.transform = `rotate(${p5divrotate}deg), translate(${wrnd}, ${hrnd})`

      p5.noFill()
      p5.stroke(color)
      p5.frameRate(35)
      p5.strokeWeight(strokeweight)
    }

    if (!p5div) return

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

  if (!p5div) return

  p5Instance = new p5(p5sketch, p5div)

  setInterval(updateParams, 3000)
}
createAnimationInstance()
disableAllUserEvents()

tryPlay()
document.onclick = (e) => {
  tryPlay()
  e.stopPropagation()
  e.preventDefault()
}
