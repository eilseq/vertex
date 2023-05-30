import Dither from 'canvas-dither'

const dither: HTMLCanvasElement | null = document.querySelector('#dither')

export const setDitherColor = ([r, g, b]: [
  r: number,
  g: number,
  b: number
]) => {
  if (!dither) return

  const ctx = dither.getContext('2d')
  if (!ctx) return

  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
}

export const refreshDither = () => {
  if (!dither) return

  const ctx = dither.getContext('2d')
  if (!ctx) return

  ctx.fillRect(0, 0, dither.width, dither.height)

  const data = ctx.getImageData(0, 0, dither.width, dither.height)
  ctx.putImageData(Dither.atkinson(data), 0, 0)

  requestAnimationFrame(refreshDither)
}
refreshDither()
