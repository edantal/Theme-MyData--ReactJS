import React from 'react'

const Card = ({ plan }) => {
  return (
    <div
      className={`w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${
        plan.isFeatured && 'bg-gray-100 md:my-0'
      }`}
    >
      <div className='w-20 h-20 mx-auto mt-[-3rem] p-3 rounded-full bg-white border border-gray-200'>
        <img
          src={plan.image}
          alt={plan.name}
          className='object-contain object-center'
        />
      </div>
      <h2 className='text-2xl font-bold text-center py-8'>
        {plan.name} {plan.data.users > 1 ? 'Users' : 'User'}
      </h2>
      <p className='text-center text-4xl font-bold'>€{plan.data.price}</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{plan.data.storage} Storage</p>
        <p className='py-2 border-b mx-8'>
          {plan.data.users} Granted {plan.data.users > 1 ? 'Users' : 'User'}
        </p>
        <p className='py-2 border-b mx-8'>
          Send up to {plan.data.transferLimit} GB
        </p>
      </div>
      <button
        className={`${
          plan.isFeatured
            ? 'bg-black text-[#00df9a]'
            : 'bg-[#00df9a] text-black'
        } w-[250px] rounded-md font-medium my-6 mx-auto py-3`}
      >
        {plan.cta}
      </button>
    </div>
  )
}

export default Card
