import { useEffect } from 'react'

export const useYearLine = () => {
  useEffect(() => {
    const beats = [...document.querySelectorAll('[data-year]')]
    if (!beats.length) return

    let frame = 0
    const pick = () => {
      const focus = window.innerHeight * 0.38
      let best = null
      let dist = Infinity
      beats.forEach((beat) => {
        const box = beat.getBoundingClientRect()
        if (box.bottom < 0 || box.top > window.innerHeight) return
        const center = box.top + box.height / 2
        const next = Math.abs(center - focus)
        if (next < dist) {
          dist = next
          best = beat
        }
      })
      beats.forEach((beat) => {
        const on = beat === best
        beat.classList.toggle('is-current', on)
        if (on) beat.setAttribute('aria-current', 'true')
        else beat.removeAttribute('aria-current')
      })
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        pick()
      })
    }

    pick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
