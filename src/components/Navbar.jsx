import React from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../content/site'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='w-60 h-20 items-center justify-center flex font-bold'>
        <p className='blue-gradient_text text-2xl'>{site.name}</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-white' : 'text-blue-500'}>
          {site.nav.about}
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-white' : 'text-blue-500'}>
          {site.nav.work}
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-white' : 'text-blue-500'}>
          {site.nav.contact}
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
