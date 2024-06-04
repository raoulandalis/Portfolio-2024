import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <div className="max-w-4xl mx-auto mt-40 my-36">
        <h1 className='text-5xl flex justify-center mb-14'>Dive Into</h1>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2'><Link to='https://fearface.onrender.com/' target='_blank'>FearFace</Link>
              <div>😈</div>
            </h2>
            <p className="max-w-md">Lorem Ipsum</p>
          </article>
        </section>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2 md:block sm:block lg:hidden'><Link to='https://flix-dyz2.onrender.com/' target='_blank'>Flix 🎥</Link>
            </h2>
            <p className="max-w-md">Lorem Ipsum</p>
            <h2 className='text-4xl flex items-center gap-2 hidden lg:block'><Link to='https://flix-dyz2.onrender.com/' target='_blank'>Flix 🎥</Link>
            </h2>
          </article>
        </section>
        <section className='flex flex-col md:flex-row justify-around'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2'>ValBnb
              <div>🎮</div>
            </h2>
            <p className="max-w-md">Lorem Ipsum</p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default Projects
