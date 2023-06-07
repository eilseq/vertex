import Dither from 'canvas-dither'

const dither = document.querySelector('#dither') as HTMLCanvasElement
const ctx = dither.getContext('2d') as CanvasRenderingContext2D

export const setDitherColor = ([r, g, b]: [
  r: number,
  g: number,
  b: number
]) => {
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
}

export const refreshDither = () => {
  ctx.fillRect(0, 0, dither.width, dither.height)

  const data = ctx.getImageData(0, 0, dither.width, dither.height)
  ctx.putImageData(Dither.atkinson(data), 0, 0)

  requestAnimationFrame(refreshDither)
}
refreshDither()
