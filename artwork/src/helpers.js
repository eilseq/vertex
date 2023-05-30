export const random = (min, max) => fxrand() * (max - min) + min

export const randomInt = (min, max) => Math.round(random(min, max))

export const getRandomRGB = () => hslToRgb([random(0, 1), 1, random(0.5, 0.8)])

function hslToRgb([h, s, l]) {
  var r, g, b

  if (s == 0) {
    r = g = b = l // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s
    var p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

export const distortedRandom = (min, max) => {
  min = min || 0
  max = max || 1

  let x1, x2, rad
  do {
    x1 = 2 * fxrand() - 1
    x2 = 2 * fxrand() - 1
    rad = x1 * x1 + x2 * x2
  } while (rad >= 1 || rad == 0)

  const c = Math.sqrt((-2 * Math.log(rad)) / rad)
  return min + Math.abs(x1 * c) * (max - min)
}

export const disableAllUserEvents = () => {
  const events = [
    'contextmenu',
    'dblclick',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseout',
    'mouseup',
    'keydown',
    'keypress',
    'keyup',
    'blur',
    'change',
    'focus',
    'focusin',
    'focusout',
    'input',
    'invalid',
    'reset',
    'scroll',
    'search',
    'select',
    'submit',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'drop',
    'copy',
    'cut',
    'paste',
    'mousewheel',
    'wheel',
    'touchcancel',
    'touchmove'
  ]

  const preventBehavior = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  for (let i = 0, l = events.length; i < l; i++) {
    document.addEventListener(events[i], preventBehavior, { passive: false })
  }
}

export const getSize = (div) => {
  const { clientWidth: w, clientHeight: h } = div
  return w > h ? w : h
}
