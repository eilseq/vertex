import { setDitherColor } from './dither'
import { getSize, hslToRgb } from './helpers'

export const createAnimationSketch = (div, params, graphicGenerator) => {
  const { hue, luma } = params.color
  const color = hslToRgb([hue, 1, luma])

  document.body.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  setDitherColor(color)

  return (p5) => {
    p5.setup = () => {
      const { wrnd, hrnd, p5divrotate, strokeweight } = params.setup

      p5.createCanvas(div.clientWidth * 2, div.clientWidth * 2)
      p5.translate(-wrnd, -hrnd)

      p5.drawingContext.shadowColor = 'purple'
      p5.drawingContext.imageSmoothingEnabled = true
      p5.drawingContext.shadowOffsetX = wrnd
      p5.drawingContext.shadowOffsetY = hrnd
      p5.drawingContext.shadowBlur = 10

      div.style.transform = `rotate(${p5divrotate}deg), translate(${wrnd}, ${hrnd})`

      p5.noFill()
      p5.stroke(color)
      p5.frameRate(35)
      p5.strokeWeight(strokeweight)
    }

    const size = getSize(div)
    let generate = graphicGenerator(p5, size)

    p5.draw = () => {
      p5.background(color)

      generate()

      p5.translate(size / 2, size / 2)
      p5.scale(0.8)
    }
    p5.windowResized = () => {
      generate = graphicGenerator(p5, size)
    }
  }
}
