import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold uppercase p-2'>
          Growing with data analytics
        </p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>
          Grow with MyData.
        </h1>
        <div className='flex justify-center items-center '>
          <p className='text-xl sm:text-4xl md:text-5xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <ReactTyped
            className='text-xl sm:text-4xl md:text-5xl font-bold pl-2 md:pl-4'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='max-w-[600px] mx-auto px-6 text-base md:text-lg font-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB, BTC &amp;
          SASS platforms.
        </p>
        <button className='bg-[#00df9a] w-[250px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
