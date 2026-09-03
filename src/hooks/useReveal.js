import { useEffect } from 'react'

export const useReveal = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const marquee = document.querySelector('.marquee')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      nodes.forEach((node) => node.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target.classList.contains('marquee')) {
            entry.target.classList.add('is-running')
          } else {
            entry.target.classList.add('is-revealed')
          }
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    )

    nodes.forEach((node) => observer.observe(node))
    if (marquee) observer.observe(marquee)

    return () => observer.disconnect()
  }, [])
}
