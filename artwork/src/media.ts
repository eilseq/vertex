import { Player, start } from 'tone'

const vhs = document.querySelector('#vhsNoise') as HTMLVideoElements
const audio = new Player().toDestination()

audio.autostart = true
audio.loop = true
audio.fadeIn = 0.1
audio.fadeOut = 0.1

export const loadMedia = async (path: string, rate: number) => {
  await audio.load(path)
  audio.playbackRate = rate
  vhs.playbackRate = rate * 1.2
}

export const play = () => {
  if (vhs.paused) vhs.play()
  start()
}
