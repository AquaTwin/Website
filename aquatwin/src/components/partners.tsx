import React from 'react'
import Image from 'next/image'
const Partners = () => {
  const partners = [
    {
      name: "JKUAT",
      image: '/partners/jkuat.png',
      size: 100,
    },
    {
      name: "JHUB",
      image: '/partners/jhub.png',
      size: 200,
    },
  ]
 

  return (
    <section className='w-full space-y-7 bg-primary-1 text-center px-10'>
      <h2 className='font-semibold text-lg'>In partnership with </h2>
        <hr className='fill-white bg-title  block h-[2px]'/>
      <div className='flex flex-wrap justify-center gap-8 '>
        {partners.map((partner, index) => (
          <div className='max-w-[300px] flex items-center' key={index}>
            <Image width={partner.size} height={partner.size} key={index} src={partner.image} alt={partner.name} />
          </div>
        ))}
      </div>
      <div>

      </div>
    </section>
  )
}

export default Partners
