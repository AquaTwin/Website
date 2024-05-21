import Image from 'next/image'
import React from 'react'
import Container from './container'

const Problem = () => {
  return (
    <Container >
      <section className="h-[80vh] text-primary-1 flex flex-col justify-center items-center" id='problem-statement'>
        <div className="fixed bg-image -z-10 h-screen w-screen top-0 left-0">

        </div>
        <h2 className="text-4xl font-bold text-primary-2 text-center mb-5 z-10">Problem Statement</h2>
        <p className='md:text-lg lg:w-1/2 w-full'>The AquaTwin project aims to revolutionize the management of transboundary river basins in Kenya by integrating satellite data and digital twin technologies. By creating virtual replicas of river basins and leveraging real-time satellite data, the platform enhances decision-making for water resource management, flood control, and environmental protection.</p>

      </section>
    </Container >
  )
}

export default Problem
