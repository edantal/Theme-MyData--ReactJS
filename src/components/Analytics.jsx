import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt='Laptop' className='w-[500px] mx-auto' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold uppercase'>
            Data Analytics Dashboard
          </p>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            corporis repellendus cupiditate at facere repellat delectus, harum
            illo deleniti ducimus qui debitis a. Aperiam, quas.
          </p>
          <button className='bg-black w-[250px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
