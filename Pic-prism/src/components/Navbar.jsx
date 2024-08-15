import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' flex justify-between p-3 flex-col sm:flex-row items-start sm:items-center  fixed left-0 top-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white'>
      <div className='flex justify-between items-center'>
      <Link  to="/" className='font-bold text-2xl'>Photo-Lab</Link>  
      </div>

<ul className='flex gap-6 text-lg font-semibold ml-5 text-gray-400'>
  <Link to="/about" className='hover:text-black cursor-pointer sm:p-2'>About</Link>
  <Link to="/Contact" className='hover:text-black cursor-pointer sm:p-2'>Contact</Link>
  <Link to="/Login" className='hover:text-black cursor-pointer sm:p-2'>Login</Link>
  <Link to="/Singup" className='hover:text-black cursor-pointer sm:p-2'>Singup</Link>
</ul>
    </nav>
  )
}

export default Navbar
