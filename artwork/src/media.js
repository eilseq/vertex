import { Player, start } from 'tone'
import { random } from './helpers'

const vhs = document.querySelector('#vhsNoise')
const audio = new Player(
  `./audio/${Math.round(random(1, 10))}.mp3`
).toDestination()
audio.autostart = true
audio.loop = true

export const rate = random(0.5, 1)
vhs.playbackRate = rate * 1.2
audio.playbackRate = rate

let playing = false
export const tryPlay = async () => {
  if (vhs.paused) vhs.play()
  start().then(() => {
    hideUnmuteButton()
  })
  if (!playing) showUnmuteButton()
}

const setCssVars = () => {
  document.documentElement.style.setProperty(
    '--animation-step-speed',
    0.1 / rate
  )

  document.documentElement.style.setProperty(
    '--animation-step-1',
    rate < 0.7 ? 0.9 : 0.3
  )
  document.documentElement.style.setProperty('--animation-step-2', 0.9)
  document.documentElement.style.setProperty(
    '--animation-step-3',
    rate < 0.7 ? 2 : 10.9
  )
}
setCssVars()

setTimeout(() => {
  document.documentElement.style.setProperty('--animation-step-1', 3)
  document.documentElement.style.setProperty('--animation-step-2', 3)
  document.documentElement.style.setProperty('--animation-step-3', 3)

  setCssVars()
}, Math.floor(Math.random() * 30000))
