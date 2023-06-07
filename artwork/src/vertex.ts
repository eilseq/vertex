import p5 from 'p5'
import seedrandom from 'seedrandom'

import { legacyRandomGenerator } from './legacy'
import { createDrawingRoutine } from './drawing'
import { createAnimationSketch } from './animation'
import { loadMedia } from './media'

export class Vertex {
  static NUM_AUDIO_FILES = 10
  static singleton: Vertex | undefined

  private seed: string | undefined
  private params = {
    audio: {} as { audioFile?: string; rate?: number },
    gen: {} as Record<string, number>,
    color: {} as Record<string, number>,
    setup: {} as Record<string, number>
  }
  private random = (min: number, max: number) =>
    Math.random() * (max - min) + min

  private vertexInstance: p5
  private vertexDiv: HTMLElement
  private vertexSketch: (p5: p5, size: number) => void

  static createOrUpdateSingleInstance(seed?: string): Vertex {
    if (!Vertex.singleton) {
      Vertex.singleton = new Vertex(seed)
    } else if (seed && seed !== Vertex.singleton.seed) {
      if (Vertex.singleton.vertexInstance)
        Vertex.singleton.vertexInstance.remove()

      Vertex.singleton = new Vertex(seed)
    }
  }

  static updateGenParams() {
    if (!Vertex.singleton) return
    Vertex.singleton.evaluateGenParams()
  }

  static getAudioFilePath() {
    if (!Vertex.singleton) return
    return Vertex.singleton.params.audio.audioFile as string
  }

  static getAudioRate() {
    if (!Vertex.singleton) return
    return Vertex.singleton.params.audio.rate as number
  }

  private constructor(seed?: string) {
    this.vertexDiv = document.querySelector('#vertexdiv') as HTMLElement

    if (seed) {
      this.seed = seed
      this.evaluateRandomFunctioUsingSeed(this.seed)
    }

    this.evaluateAudioParams()
    this.evaluateColorParams()
    this.evaluateGenParams()
    this.evaluateSetupParams()

    this.vertexSketch = createAnimationSketch(
      this.vertexDiv,
      this.params,
      createDrawingRoutine(this.params)
    )
    this.vertexInstance = new p5(this.vertexSketch, this.vertexDiv)

    loadMedia(
      this.params.audio.audioFile as string,
      this.params.audio.rate as number
    )
  }

  private evaluateAudioParams() {
    const fileIndex = Math.floor(this.random(1, Vertex.NUM_AUDIO_FILES))
    this.params.audio.audioFile = `./audio/${fileIndex}.mp3`
    this.params.audio.rate = this.random(0.5, 1)
  }

  private evaluateColorParams() {
    this.params.color.hue = this.random(0, 1)
    this.params.color.luma = this.random(0.5, 1)
  }

  private evaluateGenParams() {
    if (!this.params.audio.rate) return
    const { rate } = this.params.audio

    this.params.gen.iMax = this.random(20, 200)
    this.params.gen.dt1 = rate > 0.7 ? this.random(0.01, 1) : 0
    this.params.gen.dt2 = rate > 0.7 ? this.random(0.02, 2) : 0
    this.params.gen.dt3 = rate > 0.7 ? this.random(0.03, 3) : 0
    this.params.gen.dt4 = rate > 0.7 ? this.random(0.04, 4) : 0
    this.params.gen.rnd = this.random(10, 80)
    this.params.gen.wrnd = this.random(0, 1)
    this.params.gen.hrnd = this.random(0, 1)
  }

  private evaluateSetupParams() {
    this.params.setup.wrnd = this.random(0 - 50, 50)
    this.params.setup.hrnd = this.random(-50, 50)
    this.params.setup.p5divrotate = this.random(0, 360)
    this.params.setup.strokeweight = this.random(2, 3)
  }

  private evaluateRandomFunctioUsingSeed(seed: string): void {
    const [firts, second] = seed
    if (firts === 'o' && second === 'o') {
      // Legacy mode to mantain consistency with first collection
      // fallback on legacy generator for token seeds
      this.random = (min: number, max: number) =>
        legacyRandomGenerator(seed)() * (max - min) + min
    } else {
      this.random = (min: number, max: number) =>
        seedrandom(seed) * (max - min) + min
    }
  }
}
