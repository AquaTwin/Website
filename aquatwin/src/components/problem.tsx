import Image from 'next/image'
import React from 'react'
import Container from './container'

const Problem = () => {
  return (
    <Container>

      <section className='bg-primary-1 ' id='problem-statement'>
        <div
          style={{
            position: 'relative',
            height: '60vh',
            width: '100%',
            clipPath: 'inset(0 0 0 0)',
          }}
        >
          <div
            style={{
              position: 'fixed',
              height: '100%',
              width: '100%',
              left: '0',
              top: '0',
            }}
          >
            <h2 className="text-4xl font-bold text-title text-center mb-5 z-10">Problem Statement</h2>
            <div className="flex flex-col justify-center md:flex-row md:flex-wrap items-center md:justify-between gap-6 mt-5 ">
              <p className='md:text-lg lg:w-1/2 w-full'>The AquaTwin project aims to revolutionize the management of transboundary river basins in Kenya by integrating satellite data and digital twin technologies. By creating virtual replicas of river basins and leveraging real-time satellite data, the platform enhances decision-making for water resource management, flood control, and environmental protection.</p>
              <div> 

              <Image
                src="/river-basin.jpg"
                layout="fill"
                objectFit="cover"
                sizes="100vw"
                alt="River Basin"
              />

            </div>
             </div> 
          </div>

        </div>

      </section> 


      {/* <section className='bg-primary-1' id='problem-statement'>
        <div style={{ position: 'relative', height: '60vh', width: '100%', overflow: 'auto' }}>
          <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            <Image
              src="/river-basin.jpg"
              layout="responsive"
              width={1920}
              height={1080}
              alt="River Basin"
            />
          </div>
          <div style={{ position: 'absolute', top: '50%', left: '50%',  zIndex: 2, padding: '20px' }} className='-translate-y-1/2'>
            <h2 className="text-4xl font-bold text-title text-center mb-5">Problem Statement</h2>
            <div className="flex flex-col justify-center md:flex-row md:flex-wrap items-center md:justify-between gap-6 mt-5">
              <p className='md:text-lg lg:w-1/2 w-full'>
                The AquaTwin project aims to revolutionize the management of transboundary river basins in Kenya by integrating satellite data and digital twin technologies. By creating virtual replicas of river basins and leveraging real-time satellite data, the platform enhances decision-making for water resource management, flood control, and environmental protection.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </Container>
  )
}

export default Problem
