import React from 'react'
import Skills from './Skills'
import Arrow from '../components/Arrow'
import { projects } from '../content/projects'

const Projects = () => {
  const listed = projects.filter((project) => project.listed)

  return (
    <main className='w-full min-h-screen flex justify-center items-center bg-gray-800'>
      <div className="max-w-4xl mx-auto mt-40 my-36">
        <h1 className='text-5xl flex justify-center mb-20 text-blue-500'>Dive Into...</h1>

        {listed.map((project) => (
          <section key={project.id} className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
            <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
              <div className="md:w-1/2">
                <div className='flex flex-row gap-3'>
                  <h2 className='text-4xl flex items-center italic text-blue-500'>{project.title}</h2>
                  {project.liveUrl && (
                    <div className='flex items-end'>
                      <a href={project.liveUrl} target='_blank' className="hover:text-blue-500 text-white">
                        live
                      </a>
                    </div>
                  )}
                  {project.githubUrl && (
                    <div className='flex items-end'>
                      <a href={project.githubUrl} target='_blank' className="hover:text-blue-500 text-white">
                        github
                      </a>
                    </div>
                  )}
                </div>
                <p className="max-w-md mt-2 md:max-w-none text-white">{project.blurb}</p>
              </div>
              {project.mediaUrl && (
                <img
                  src={project.mediaUrl}
                  className='-m-10'
                ></img>
              )}
            </article>
          </section>
        ))}

        <Skills/>

        <Arrow/>

      </div>
    </main>
  )
}

export default Projects
