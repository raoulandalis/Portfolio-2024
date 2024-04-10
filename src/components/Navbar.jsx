import React from 'react'
import { NavLink } from 'react-router-dom'

//routes have already been made, navbar allows user to navigate through those routes

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>RA</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500' : 'text-red-500'}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-red-500'}>
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
