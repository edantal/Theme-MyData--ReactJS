import React from 'react'
import {
  FaSquareGithub,
  FaInstagram,
  FaSquareFacebook,
  FaSquareYoutube,
  FaSquareXTwitter,
} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div className=''>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase'>
          My_Data.
        </h1>
        <p className='py-4 text-xs'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta
          aliquam nisi deserunt sunt, debitis vitae tempora magnam quo. Officia.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaSquareFacebook
            size={30}
            className='hover:fill-[#00df9a] ease-out duration-300 cursor-pointer'
          />
          <FaInstagram
            size={30}
            className='hover:fill-[#00df9a] ease-out duration-300 cursor-pointer'
          />
          <FaSquareXTwitter
            size={30}
            className='hover:fill-[#00df9a] ease-out duration-300 cursor-pointer'
          />
          <FaSquareYoutube
            size={30}
            className='hover:fill-[#00df9a] ease-out duration-300 cursor-pointer'
          />
          <FaSquareGithub
            size={30}
            className='hover:fill-[#00df9a] ease-out duration-300 cursor-pointer'
          />
        </div>
      </div>

      <div className='lg:col-span-2 flex justify-between lg:mt-6'>
        <div className=''>
          <h6 className='font-base text-sm text-[#00df9a] mb-2'>Solutions</h6>
          <ul className='text-xs font-light'>
            <li className='py-2'>Analytics</li>
            <li className='py-2'>Marketing</li>
            <li className='py-2'>Commerce</li>
            <li className='py-2'>Insights</li>
          </ul>
        </div>
        <div className=''>
          <h6 className='font-base text-sm text-[#00df9a] mb-2'>Support</h6>
          <ul className='text-xs font-light'>
            <li className='py-2'>Pricing</li>
            <li className='py-2'>Documentation</li>
            <li className='py-2'>Guides</li>
            <li className='py-2'>API</li>
          </ul>
        </div>
        <div className=''>
          <h6 className='font-base text-sm text-[#00df9a] mb-2'>Company</h6>
          <ul className='text-xs font-light'>
            <li className='py-2'>About</li>
            <li className='py-2'>Blog</li>
            <li className='py-2'>Careers</li>
            <li className='py-2'>Press</li>
          </ul>
        </div>
        <div className=''>
          <h6 className='font-base text-sm text-[#00df9a] mb-2'>Legal</h6>
          <ul className='text-xs font-light'>
            <li className='py-2'>Claim</li>
            <li className='py-2'>Policy</li>
            <li className='py-2'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
