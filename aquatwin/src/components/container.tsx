import React from 'react'

type ContainerProps = {
    children: React.ReactNode
    className?: string
}

const Container = ({children, className}: ContainerProps) => {
  const classname = `w-screen max-w-[1500px] mx-auto px-6 ${className}`
  return (
    <div className={classname}>
      {children}
    </div>
  )
}

export default Container
