import Image from 'next/image'
import React from 'react'

const Problem = () => {
  return (
    <div className='bg-primary-2 h-screen flex flex-row md:px-20'>
      <div className='flex flex-col gap-5 pt-16 px-4 w-1/2'>
        <h2 className='text-3xl font-bold '>Problem Statement</h2>
        <p>The AquaTwin project aims to revolutionize the management of transboundary river basins in Kenya by integrating satellite data and digital twin technologies. By creating virtual replicas of river basins and leveraging real-time satellite data, the platform enhances decision-making for water resource management, flood control, and environmental protection.</p>
      </div>
      <Image
        src="/river-basin.jpg"
        width={400}
        height={400}
        alt='Logo'
        className='block md:hidden p-5'
      />
      <Image
        src="/river-basin.jpg"
        width={400}
        height={300}
        alt='Logo'
        className='hidden md:block p-5'
      />
    </div>
  )
}

export default Problem
