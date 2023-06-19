import { Vertex } from './src/vertex'
import { play } from './src/media'
import { disableAllUserEvents } from './src/helpers'

let timer: NodeJS.Timer
let timeout: NodeJS.Timeout

function setup(seed?: string) {
  if (timer) clearInterval(timer)
  if (timeout) clearTimeout(timeout)

  Vertex.createOrUpdateSingleInstance(seed)
  timer = setInterval(Vertex.updateGenParams, 3000)

  const audioRate = Vertex.getAudioRate()
  if (audioRate) {
    const setCssVars = () => {
      document.documentElement.style.setProperty(
        '--animation-step-speed',
        (0.1 / audioRate).toString()
      )
      document.documentElement.style.setProperty(
        '--animation-step-1',
        (audioRate < 0.7 ? 0.9 : 0.3).toString()
      )
      document.documentElement.style.setProperty(
        '--animation-step-2',
        (0.9).toString()
      )
      document.documentElement.style.setProperty(
        '--animation-step-3',
        (audioRate < 0.7 ? 2 : 10.9).toString()
      )
    }
    setCssVars()

    timeout = setTimeout(() => {
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
  }
}
setup()

window.addEventListener(
  'message',
  (event) => {
    const { data } = event
    if (data && data.type === 'updateSeed') {
      const { seed } = data
      setup(seed)
    }
  },
  false
)

play() //try
document.onclick = (e) => {
  play()
  e.stopPropagation()
  e.preventDefault()
}
disableAllUserEvents()
