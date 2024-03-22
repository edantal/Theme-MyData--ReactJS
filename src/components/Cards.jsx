import React from 'react'

import Card from './Card'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const plans = [
  {
    id: 1,
    name: 'Single',
    data: {
      price: 149,
      storage: '500 GB',
      users: 1,
      transferLimit: 2,
    },
    image: Single,
    isFeatured: false,
    cta: 'Start Trial',
  },
  {
    id: 2,
    name: 'Double',
    data: {
      price: 199,
      storage: '1 TB',
      users: 2,
      transferLimit: 5,
    },
    image: Double,
    isFeatured: true,
    cta: 'Subscribe',
  },
  {
    id: 3,
    name: 'Triple',
    data: {
      price: 229,
      storage: '2 TB',
      users: 3,
      transferLimit: 10,
    },
    image: Triple,
    isFeatured: false,
    cta: 'Subscribe',
  },
]

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {plans.map((plan) => (
          <Card key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  )
}

export default Cards
