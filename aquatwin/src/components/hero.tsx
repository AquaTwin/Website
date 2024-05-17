import React from 'react'
import Header from './header'
import { Button } from './ui/button'
import Container from './container'

const Hero = () => {
  return (
    <section className='w-full h-[80vh] sm:h-screen text-white bg-black flex flex-col'>
      <Header />
        <div className='flex flex-col p-1 gap-3 md:gap-6 justify-center flex-grow items-center text-center max-w-[1400px] mx-auto'>
          <h1 className='text-3xl md:text-5xl font-semibold'>Bridging the gap in Transboundary River Basin Management</h1>
          <div className='flex justify-center w-full gap-10'>
            <Button>Learn more</Button>
            <Button variant="outline" >Contact us</Button>
          </div>
        </div>
    </section>
  )
}

export default Hero
