import { Player, start } from 'tone'
import { random } from './helpers'

const vhs: HTMLVideoElement | null = document.querySelector('#vhsNoise')

const audio = new Player(
  `./audio/${Math.round(random(1, 10))}.mp3`
).toDestination()

audio.autostart = true
audio.loop = true

export const rate = random(0.5, 1)

function init() {
  if (!vhs) return
  vhs.playbackRate = rate * 1.2
  audio.playbackRate = rate
}
init()

let playing = false
export const tryPlay = async () => {
  if (!vhs) return
  if (vhs.paused) vhs.play()
  start()
}

const setCssVars = () => {
  document.documentElement.style.setProperty(
    '--animation-step-speed',
    (0.1 / rate).toString()
  )

  document.documentElement.style.setProperty(
    '--animation-step-1',
    (rate < 0.7 ? 0.9 : 0.3).toString()
  )
  document.documentElement.style.setProperty('--animation-step-2', 0.9)
  document.documentElement.style.setProperty(
    '--animation-step-3',
    (rate < 0.7 ? 2 : 10.9).toString()
  )
}
setCssVars()

setTimeout(() => {
  document.documentElement.style.setProperty(
    '--animation-step-1',
    (3).toString()
  )
  document.documentElement.style.setProperty(
    '--animation-step-2',
    (3).toString()
  )
  document.documentElement.style.setProperty(
    '--animation-step-3',
    (3).toString()
  )

  setCssVars()
}, Math.floor(Math.random() * 30000))
