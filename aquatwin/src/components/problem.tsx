import Image from 'next/image'
import React from 'react'
import Container from './container'

const Problem = () => {
  return (
    <Container>

      <div className='bg-primary-1'>
        <h2 className="text-4xl font-bold text-title text-center mb-5">Problem Statement</h2>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap items-center md:justify-between gap-6 mt-5 ">
          <p className='md:text-lg lg:w-1/2 w-full'>The AquaTwin project aims to revolutionize the management of transboundary river basins in Kenya by integrating satellite data and digital twin technologies. By creating virtual replicas of river basins and leveraging real-time satellite data, the platform enhances decision-making for water resource management, flood control, and environmental protection.</p>
          <div>
            <Image
              src="/river-basin.jpg"
              width={400}
              height={400}
              alt='Logo'
              className='w-full'
            />
          </div>

        </div>
        {/* <Image
          src="/river-basin.jpg"
          width={400}
          height={400}
          alt='Logo'
          className='hidden md:block p-5'
        /> */}
      </div>

    </Container>
  )
}

export default Problem
