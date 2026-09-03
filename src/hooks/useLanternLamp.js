import { useEffect } from 'react'

const FINE_POINTER = '(hover: hover) and (pointer: fine)'
const REDUCE = '(prefers-reduced-motion: reduce)'
const HOT = 'a, button, input, textarea, label, [role="button"]'

export const useLanternLamp = () => {
  useEffect(() => {
    const lamp = document.querySelector('.lantern-lamp')
    const glow = lamp?.querySelector('.lantern-lamp-glow')
    if (!lamp || !glow) return

    const motion = window.matchMedia(REDUCE)
    const hover = window.matchMedia(FINE_POINTER)

    let x = window.innerWidth / 2
    let y = window.innerHeight / 3
    let tx = x
    let ty = y
    let raf = 0

    const allowed = () => hover.matches && !motion.matches

    const stop = () => {
      lamp.classList.remove('is-on', 'is-hot')
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    const tick = () => {
      x += (tx - x) * 0.1
      y += (ty - y) * 0.1
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    const onMove = (event) => {
      if (!allowed()) {
        stop()
        return
      }

      tx = event.clientX
      ty = event.clientY
      const node =
        event.target.nodeType === 1 ? event.target : event.target.parentElement
      lamp.classList.toggle('is-hot', Boolean(node?.closest?.(HOT)))

      if (!raf) {
        x = tx
        y = ty
        lamp.classList.add('is-on')
        raf = requestAnimationFrame(tick)
      }
    }

    const onLeave = () => stop()

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    motion.addEventListener('change', stop)
    hover.addEventListener('change', stop)

    return () => {
      stop()
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      motion.removeEventListener('change', stop)
      hover.removeEventListener('change', stop)
    }
  }, [])
}
