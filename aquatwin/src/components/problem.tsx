import React from 'react'
import Container from './container'

const Problem = () => {
  return (
    <Container className='px-0 bg-gradient-to-b from-[#070f29] to-primary-1' >
      <section className="flex flex-col justify-center items-center h-[90vh] md:h-[75vh]" id='problem-statement'>
      <div className='bg-[#F8F8F8] p-8 md:w-2/3 mx-2 shadow rounded-md'>
            <h2 className="text-4xl font-bold text-title text-center mb-5 z-10">Problem Statement</h2>
            <p className='md:text-lg'>The AquaTwin project aims to revolutionize the management of transboundary river basins in Kenya by integrating satellite data and digital twin technologies. By creating virtual replicas of river basins and leveraging real-time satellite data, the platform enhances decision-making for water resource management, flood control, and environmental protection.</p>
        </div>
      </section>
    </Container >
  )
}

export default Problem
