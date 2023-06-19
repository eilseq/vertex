declare module 'canvas-dither' {
  import { ImageData } from 'canvas'

  class CanvasDither {
    grayscale(image: ImageData): ImageData
    threshold(image: ImageData, threshold: number): ImageData
    bayer(image: ImageData, threshold: number): ImageData
    floydsteinberg(image: ImageData): ImageData
    atkinson(image: ImageData): ImageData
  }

  const canvasDither: CanvasDither
  export = canvasDither
}
