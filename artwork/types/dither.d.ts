declare module 'dither' {
  export class CanvasDither {
    grayscale(image: ImageData): ImageData
    threshold(image: ImageData): ImageData
    bayer(image: ImageData): ImageData
    floydSteinberg(image: ImageData): ImageData
    falseFloydSteinberg(image: ImageData): ImageData
    stucki(image: ImageData): ImageData
    atkinson(image: ImageData): ImageData
  }
}
