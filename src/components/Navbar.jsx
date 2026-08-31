import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { useActiveSection } from '../hooks/useActiveSection'

const sections = [
  { id: 'intro', label: site.nav.about },
  { id: 'work', label: site.nav.work },
  { id: 'contact', label: site.nav.contact },
]

const Navbar = () => {
  const active = useActiveSection(sections.map((section) => section.id))

  return (
    <header className='sticky top-0 z-10 w-full border-b border-steel bg-ink'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-8 py-4 sm:px-16'>
      <Link to='/' className='flex h-16 items-center font-semibold'>
        <p className='text-lg font-semibold tracking-tight text-paper hover:text-lantern sm:text-xl'>{site.name}</p>
      </Link>
      <nav className='flex gap-5 text-base font-medium sm:gap-7 sm:text-lg'>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={
              active === section.id ? 'text-lantern' : 'text-fog hover:text-lantern-hot'
            }
          >
            {section.label}
          </a>
        ))}
      </nav>
      </div>
    </header>
  )
}

export default Navbar
