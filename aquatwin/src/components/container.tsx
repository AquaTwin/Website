import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='w-screen max-w-[1500px] mx-auto px-6'>
      {children}
    </div>
  )
}

export default Container
