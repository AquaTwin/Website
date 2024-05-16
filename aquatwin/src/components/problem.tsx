import Image from 'next/image'
import React from 'react'

const Problem = () => {
  return (
    <div className='bg-primary-1 py-16 px-10'>
      <h2 className="text-4xl font-bold text-title text-center mb-5">Problem Statement</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-5 ">
        <p className='max-w-[500px] md:text-lg'>The AquaTwin project aims to revolutionize the management of transboundary river basins in Kenya by integrating satellite data and digital twin technologies. By creating virtual replicas of river basins and leveraging real-time satellite data, the platform enhances decision-making for water resource management, flood control, and environmental protection.</p>
        <Image
          src="/river-basin.jpg"
          width={400}
          height={400}
          alt='Logo'
        // className='block md:hidden p-5'
        />

      </div>
      {/* <Image
        src="/river-basin.jpg"
        width={400}
        height={400}
        alt='Logo'
        className='hidden md:block p-5'
      /> */}
    </div>
  )
}

export default Problem
