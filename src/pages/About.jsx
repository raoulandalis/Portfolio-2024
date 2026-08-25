import React from 'react'
import Arrow from '../components/Arrow'
import { about } from '../content/about'

const About = () => {

  return (
    <main className='w-full min-h-screen flex justify-center items-center bg-gray-800'>
      <div className="max-w-4xl mx-auto mt-40 my-36">
        <h1 className='text-5xl flex justify-center mb-14 text-blue-500'>{about.pageTitle}</h1>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2 text-blue-500'>{about.past.heading}
              <div>⬅️</div>
            </h2>
            <p className="max-w-md text-white">{about.past.body}</p>
          </article>
        </section>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2 md:block sm:block lg:hidden text-blue-500'>{about.present.heading} 🎉
            </h2>
            <p className="max-w-md text-white">{about.present.body}</p>
            <h2 className='text-4xl flex items-center gap-2 hidden lg:block text-blue-500'>{about.present.heading} 🎉
            </h2>
          </article>
        </section>
        <section className='flex flex-col md:flex-row justify-around animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2 text-blue-500'>{about.future.heading}
              <div>➡️</div>
            </h2>
            <p className="max-w-md text-white">{about.future.body}</p>
          </article>
        </section>

        <Arrow/>

      </div>
    </main>
  )
}

export default About
