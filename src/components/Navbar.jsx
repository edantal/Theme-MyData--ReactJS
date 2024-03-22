import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase'>
        My_Data.
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div className='block md:hidden' onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={`fixed ${
          !nav ? 'left-[-100%]' : 'left-0'
        } top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase m-4'>
          My_Data.
        </h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-b-gray-600'>Home</li>
          <li className='p-4 border-b border-b-gray-600'>Company</li>
          <li className='p-4 border-b border-b-gray-600'>Resources</li>
          <li className='p-4 border-b border-b-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
