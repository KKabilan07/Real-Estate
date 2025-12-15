import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10 bg-white'>
      <div className='flex justify-between items-center px-6 py-4'>
        <img src={assets.logo} alt="Logo" className='h-8' />
        <ul className='hidden md:flex gap-8'>
          <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
          <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a></li>
          <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
          <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
        </ul>
        <button className='cursor-pointer hidden md:block bg-white px-8 py-2 rounded-full border border-gray-300'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar