import React from 'react'
import Skills from './Skills'
import Arrow from '../components/Arrow'
import { projects, work } from '../content/projects'

const Projects = () => {
  const listed = projects.filter((project) => project.listed)

  return (
    <main className='min-h-screen w-full bg-ink pt-32 pb-24'>
      <div className='mx-auto max-w-4xl px-8'>
        <h1 className='page-title mb-16 text-center'>{work.pageTitle}</h1>

        {listed.map((project, i) => (
          <article
            key={project.id}
            className='mb-16 grid gap-8 animate-rise motion-reduce:animate-none [animation-fill-mode:both] md:mb-24 md:grid-cols-2 md:items-start md:gap-12'
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div>
              <h2 className='text-2xl font-semibold tracking-tight text-paper md:text-3xl'>
                {project.title}
              </h2>
              {project.roleLine && (
                <p className='mt-2 text-sm text-fog'>{project.roleLine}</p>
              )}
              {project.blurb && (
                <p className='mt-4 max-w-prose text-base leading-relaxed text-mist md:text-lg'>
                  {project.blurb}
                </p>
              )}
              {(project.liveUrl || project.githubUrl) && (
                <div className='mt-4 flex gap-5 text-sm'>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-lantern hover:text-lantern-hot focus-visible:outline-none focus-visible:text-lantern-hot'
                    >
                      live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-fog hover:text-paper focus-visible:outline-none focus-visible:text-paper'
                    >
                      github
                    </a>
                  )}
                </div>
              )}
            </div>
            {project.mediaUrl ? (
              <img
                src={project.mediaUrl}
                alt=''
                className='w-full rounded-[2px] border border-steel'
              />
            ) : (
              <div className='flex min-h-[12rem] items-center justify-center rounded-[2px] border border-steel bg-ink-elevated'>
                <p className='page-title text-2xl sm:text-3xl'>{project.title}</p>
              </div>
            )}
          </article>
        ))}

        <Skills />
        <Arrow />
      </div>
    </main>
  )
}

export default Projects
