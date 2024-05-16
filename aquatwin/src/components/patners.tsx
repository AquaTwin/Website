import React from 'react'
import Image from 'next/image'
const Patners = () => {
  const partners = [
    {
      image: '/next.svg',
    },
    {
      image: 'next.svg',
    },
  ]

  return (
    <section className='w-full space-y-7 pb-16 bg-primary-1 text-center'>
      <h2 className='font-semibold text-lg'>Trusted by industry leading companies</h2>
      <div className='flex flex-wrap justify-center gap-8 '>
        {partners.map((partner, index) => (
          <Image width={100} height={100} key={index} src={partner.image} alt='partner' />
        ))}
      </div>
    </section>
  )
}

export default Patners
