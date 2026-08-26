import React from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../content/site'

const linkClass = ({ isActive }) =>
  isActive ? 'text-lantern' : 'text-fog hover:text-lantern-hot'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='flex h-20 w-60 items-center justify-center font-semibold'>
        <p className='text-xl font-semibold tracking-tight text-paper hover:text-lantern'>{site.name}</p>
      </NavLink>
      <nav className='flex gap-7 text-lg font-medium'>
        <NavLink to='/about' className={linkClass}>
          {site.nav.about}
        </NavLink>
        <NavLink to='/projects' className={linkClass}>
          {site.nav.work}
        </NavLink>
        <NavLink to='/contact' className={linkClass}>
          {site.nav.contact}
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
