import React from 'react'

const Projects = () => {
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <div className="max-w-4xl mx-auto mt-40 my-36">
        <h1 className='text-5xl flex justify-center mb-14'>Dive Into</h1>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2'>FearFace
              <div>😈</div>
            </h2>
            <p className="max-w-md">Lorem Ipsum</p>
          </article>
        </section>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2 md:block sm:block lg:hidden'>Flix 🎥
            </h2>
            <p className="max-w-md">Lorem Ipsum</p>
            <h2 className='text-4xl flex items-center gap-2 hidden lg:block'>Flix 🎥
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
