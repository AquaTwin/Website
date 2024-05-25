import React from 'react'
import Container from './container'

const About = () => {
    return (
        <Container className='' >
            <section className="flex flex-col justify-center items-center h-[90vh] md:h-[75vh]" id='about'>
                <div className='bg-[#F8F8F8] p-8 md:w-2/3 mx-2 shadow rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
                    <h2 className="text-4xl font-bold text-title text-center mb-5 z-10">About 
                        <span className='text-blue-800'> Aqua</span>
                        <span className='text-blue-400'>twin</span></h2>
                    <p className='md:text-lg'>
                        Aquatwin is a project that aims to build a digital twin - a virtual replica
                        of transboundary river basins - that uses real-time satellite data to monitor water flow, quality,
                        and usage. This innovative approach will support decision-making for water resource
                        management, flood control, and environmental protection, empowering stakeholders
                        to have better insight on river basin management and fostering international cooperation.
                    </p>
                </div>
            </section>
        </Container >
    )
}

export default About
