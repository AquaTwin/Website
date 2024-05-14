import React from 'react'
import Header from './header'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='w-screen h-screen text-white'>
      <Header />
      <div className='flex flex-col p-1 gap-3 md:gap-6 justify-center  h-3/5 md:h-full bg-black align-middle text-center relative'>
        <h1 className='text-3xl md:text-5xl font-semibold'>Bridging the gap in Transboundary River Basin Management</h1>
        <div className='flex justify-center w-screen gap-10'>
          <Button>Learn more</Button>
          <Button variant="contact" >Contact us</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
