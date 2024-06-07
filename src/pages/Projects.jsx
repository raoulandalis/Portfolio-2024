import React from 'react'
import Skills from './Skills'
import Arrow from '../components/Arrow'

const Projects = () => {
  return (
    <main className='w-full min-h-screen flex justify-center items-center bg-gray-800'>
      <div className="max-w-4xl mx-auto mt-40 my-36">
        <h1 className='text-5xl flex justify-center mb-20 text-blue-500'>Dive Into...</h1>

        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <div className="md:w-1/2">
              <div className='flex flex-row gap-3'>
                <h2 className='text-4xl flex items-center italic text-blue-500'>FearFace</h2>
                <div className='flex items-end'>
                  <a href='https://fearface.onrender.com/' target='_blank' className="hover:text-blue-500 text-white">
                    live
                  </a>
                </div>
                <div className='flex items-end'>
                  <a href='https://github.com/jgodfrey324/FearFace' target='_blank' className="hover:text-blue-500 text-white">
                    github
                  </a>
                </div>
              </div>
              <p className="max-w-md mt-2 md:max-w-none text-white">A team-developed, horror-themed social app where users can browse and post comments, interact with others, and explore a haunted marketplace featuring witty horror movie references. Horror fans will enjoy this playful and engaging community.</p>
            </div>
            <img
              src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnd2dHJmaW5id3RiempzdWw1cGM2Mjl0cGJwMXlvaW9scmZiZTNpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jEOocwutlskiTvgm2O/giphy.gif'}
              className='-m-10'
            ></img>
          </article>
        </section>

        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <div className="md:w-1/2">
              <div className='flex flex-row gap-3'>
                <h2 className='text-4xl flex items-center italic text-blue-500'>Flix</h2>
                <div className='flex items-end'>
                  <a href='https://flix-dyz2.onrender.com/' target='_blank' className="hover:text-blue-500 text-white">
                    live
                  </a>
                </div>
                <div className='flex items-end'>
                  <a href='https://github.com/raoulandalis/Flix' target='_blank' className="hover:text-blue-500 text-white">
                    github
                  </a>
                </div>
              </div>
              <p className="max-w-md mt-2 md:max-w-none text-white">An independently made, movie-app for friend groups to upload, rate, and review movies. Movie-lovers can also categorize movies by creating curated playlists all while contributing to their own profile stats.</p>
            </div>
            <img
              src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzh3OG9jMGFidnFtMHQ3aWowY3E0ZmZybWhpdzc4MHB6eTNiZWJqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TZDBbWqlv74kNW7VMI/giphy.gif'}
              className='-m-10'
            ></img>
          </article>
        </section>

        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <div className="md:w-1/2">
              <div className='flex flex-row gap-3'>
                <h2 className='text-4xl flex items-center italic text-blue-500'>Valbnb</h2>
                <div className='flex items-end'>
                  <a href='https://raoul-airbnb.onrender.com/' target='_blank' className="hover:text-blue-500 text-white">
                    live
                  </a>
                </div>
                <div className='flex items-end'>
                  <a href='https://github.com/raoulandalis/Valbnb' target='_blank' className="hover:text-blue-500 text-white">
                    github
                  </a>
                </div>
              </div>
              <p className="max-w-md mt-2 md:max-w-none text-white">An Airbnb-inspired app based on the theme of the popular game "Valorant", where gaming enthusiasts can create listings of locations they're renting out and leave reviews of places they've visited.</p>
            </div>
            <img
              src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDlsNnRhNWNjajNxb2RxbXNlM3p5Z3hrbnA3cjA0aHAxaWdiczFkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tNHOL9qG3QMcvQ096W/giphy.gif'}
              className='-m-10'
            ></img>
          </article>
        </section>

        <Skills/>

        <Arrow/>

      </div>
    </main>
  )
}

export default Projects
