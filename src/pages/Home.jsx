import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { about } from '../content/about'
import { contact } from '../content/contact'
import { projects } from '../content/projects'
import { site } from '../content/site'
import { skillGroups } from '../content/skills'
import { useReveal } from '../hooks/useReveal'
import '../reel.css'

const listed = projects.filter((project) => project.listed)
const marquee = about.future.body

const Home = () => {
  const location = useLocation()
  useReveal()

  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <main className='bg-ink text-mist'>
      <div className='mx-auto max-w-5xl px-8 sm:px-16'>
      <section id='intro' className='scroll-mt-8 pt-12 pb-16 md:pt-16 md:pb-20'>
        <p className='label-kicker mb-4'>
          {site.name}
          <span className='mx-3 text-steel' aria-hidden>
            ·
          </span>
          {site.location}
          <span className='mx-3 text-steel' aria-hidden>
            ·
          </span>
          / creating since {site.creatingSince}
        </p>
        <h1 className='mb-8 max-w-[16ch] text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl'>
          {site.headline}
        </h1>
        <h2 className='page-title mb-10' data-reveal>
          Hey!
        </h2>
        <div className='grid gap-10 md:grid-cols-3 md:gap-12'>
          {[about.past, about.present, about.future].map((beat) => (
            <div key={beat.heading} data-reveal>
              <h3 className='label-kicker mb-3'>{beat.heading}</h3>
              <p className='text-base leading-relaxed text-mist md:text-lg'>{beat.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className='marquee border-y border-steel py-4' aria-hidden>
        <div className='marquee-track'>
          <span>{marquee}</span>
          <span>{marquee}</span>
        </div>
      </div>

      <section id='work' className='scroll-mt-8 py-16 md:py-20'>
        <p className='label-kicker mb-6' data-reveal>
          / work
        </p>
        <h2 className='page-title mb-16' data-reveal>
          Featured
        </h2>
        <div className='flex flex-col gap-20 md:gap-28'>
          {listed.map((project) => (
            <article
              key={project.id}
              className='grid gap-8 md:grid-cols-2 md:items-center md:gap-16'
              data-reveal
            >
              <div>
                <h3 className='text-3xl font-semibold tracking-tight text-paper md:text-4xl'>
                  {project.title}
                </h3>
                {project.roleLine && (
                  <p className='mt-2 text-sm text-fog'>{project.roleLine}</p>
                )}
                {project.blurb && (
                  <p className='mt-4 max-w-prose text-base leading-relaxed text-mist md:text-lg'>
                    {project.blurb}
                  </p>
                )}
                {(project.liveUrl || project.githubUrl) && (
                  <div className='mt-5 flex gap-5 text-sm'>
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
                <div className='flex min-h-[14rem] items-center justify-center rounded-[2px] border border-steel bg-ink-elevated md:min-h-[18rem]'>
                  <p className='text-2xl font-semibold tracking-tight text-paper sm:text-3xl'>
                    {project.title}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className='py-16 md:py-20'>
        <p className='label-kicker mb-6' data-reveal>
          / how I work
        </p>
        <h2 className='page-title mb-12' data-reveal>
          Skills
        </h2>
        <div className='grid gap-10 md:grid-cols-3'>
          {skillGroups.map((group) => (
            <div key={group.id} data-reveal>
              <h3 className='label-kicker mb-4'>{group.label}</h3>
              <ul className='flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className='rounded-[2px] border border-steel bg-ink-elevated px-3 py-1.5 text-sm text-mist'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id='contact' className='scroll-mt-8 py-16 md:py-20'>
        <p className='label-kicker mb-6' data-reveal>
          / contact
        </p>
        <h2 className='page-title mb-10' data-reveal>
          Let’s talk.
        </h2>
        <ul className='flex flex-col gap-4 text-xl text-paper md:text-2xl' data-reveal>
          <li>
            <a
              href={`mailto:${contact.email}`}
              className='text-lantern hover:text-lantern-hot focus-visible:outline-none focus-visible:text-lantern-hot'
            >
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-fog hover:text-paper focus-visible:outline-none focus-visible:text-paper'
            >
              {contact.linkedin.label}
            </a>
          </li>
          <li>
            <a
              href={contact.github.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-fog hover:text-paper focus-visible:outline-none focus-visible:text-paper'
            >
              {contact.github.label}
            </a>
          </li>
          <li>
            <a
              href={contact.resume.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-fog hover:text-paper focus-visible:outline-none focus-visible:text-paper'
            >
              {contact.resume.label}
            </a>
          </li>
        </ul>
      </section>

      <footer className='flex flex-col gap-2 border-t border-steel py-10 text-sm text-fog sm:flex-row sm:items-center sm:justify-between'>
        <p>{site.name}</p>
        <p>{site.headline}</p>
      </footer>
      </div>
    </main>
  )
}

export default Home
