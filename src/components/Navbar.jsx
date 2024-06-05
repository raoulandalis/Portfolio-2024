import React from 'react'
import { NavLink } from 'react-router-dom'

//routes have already been made, navbar allows user to navigate through those routes

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='w-60 h-20 items-center justify-center flex font-bold'>
        <p className='blue-gradient_text'>Raoul Andalis</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-black-500' : 'text-blue-500'}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-black-500' : 'text-blue-500'}>
          Projects & Skills
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-black-500' : 'text-blue-500'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
