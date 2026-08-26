import React from 'react'
import Arrow from '../components/Arrow'
import { about } from '../content/about'

const beats = [
  { key: 'past', side: 'left', peak: false, delay: '0ms', ...about.past },
  { key: 'present', side: 'right', peak: true, delay: '80ms', ...about.present },
  { key: 'future', side: 'left', peak: false, delay: '160ms', ...about.future },
]

const kickerClass = (side) =>
  side === 'left'
    ? 'col-start-2 row-start-1 md:col-start-1 md:pr-8 md:text-right'
    : 'col-start-2 row-start-1 md:col-start-3 md:pl-8'

const bodyClass = (side) =>
  side === 'left'
    ? 'col-start-2 row-start-2 md:col-start-3 md:row-start-1 md:pl-8'
    : 'col-start-2 row-start-2 md:col-start-1 md:row-start-1 md:pr-8'

const About = () => {
  return (
    <main className='min-h-screen w-full bg-ink pt-32 pb-24'>
      <div className='mx-auto max-w-4xl px-8'>
        <header className='mb-16 text-center md:mb-24'>
          <h1 className='page-title'>{about.pageTitle}</h1>
          <p className='mt-5 text-xs font-medium uppercase tracking-[0.12em] text-fog'>
            {about.past.heading}
            <span className='mx-3 text-steel' aria-hidden>
              ·
            </span>
            <span className='text-lantern'>{about.present.heading}</span>
            <span className='mx-3 text-steel' aria-hidden>
              ·
            </span>
            {about.future.heading}
          </p>
        </header>

        <div className='relative'>
          <div
            aria-hidden
            className='absolute bottom-8 left-3 top-2 w-px -translate-x-px bg-steel md:left-1/2'
          />

          {beats.map((beat) => (
            <section
              key={beat.key}
              className={`relative mb-16 grid grid-cols-[1.5rem_1fr] items-start gap-x-5 gap-y-3 animate-rise motion-reduce:animate-none motion-reduce:[animation-delay:0ms] [animation-fill-mode:both] last:mb-0 md:mb-24 md:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] md:gap-x-0 md:gap-y-0 ${
                beat.peak ? 'md:items-center' : ''
              }`}
              style={{ animationDelay: beat.delay }}
            >
              <span className='col-start-1 row-start-1 z-10 mt-0.5 flex h-3 w-3 justify-center justify-self-center bg-ink md:col-start-2'>
                <span
                  className={`mt-0.5 block h-1.5 w-1.5 rounded-[2px] ${
                    beat.peak ? 'bg-lantern' : 'bg-steel'
                  }`}
                />
              </span>

              <h2 className={`label-kicker font-medium ${kickerClass(beat.side)}`}>
                <span className='block'>{beat.heading}</span>
                <span
                  className={`mt-2 block h-px w-3 bg-lantern ${
                    beat.side === 'left' ? 'md:ml-auto' : ''
                  }`}
                  aria-hidden
                />
              </h2>

              <div className={bodyClass(beat.side)}>
                {beat.peak ? (
                  <div className='rounded-[2px] border border-steel bg-ink-elevated p-6 md:p-8'>
                    <p className='max-w-prose text-base leading-relaxed text-mist md:text-lg'>
                      {beat.body}
                    </p>
                  </div>
                ) : (
                  <p className='max-w-prose text-base leading-relaxed text-mist md:text-lg'>
                    {beat.body}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>

        <Arrow />
      </div>
    </main>
  )
}

export default About
