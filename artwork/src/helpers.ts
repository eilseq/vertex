export function hslToRgb([h, s, l]: [h: number, s: number, l: number]): [
  r: number,
  g: number,
  b: number
] {
  let r: number, g: number, b: number

  if (s == 0) {
    r = g = b = l // achromatic
  } else {
    let hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s
    let p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
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

export const getSize = (el: HTMLElement) => {
  const { clientWidth: w, clientHeight: h } = el
  return w > h ? w : h
}
