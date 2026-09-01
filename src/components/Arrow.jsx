import React from 'react'

const Arrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type='button'
      onClick={scrollToTop}
      className='mx-auto mt-20 block text-sm tracking-wide text-fog hover:text-lantern focus-visible:outline-none focus-visible:text-lantern'
      aria-label='Back to top'
    >
      Top
    </button>
  )
}

export default Arrow
