import { cn } from '@/lib/utils'
import React from 'react'

type ContainerProps = {
    children: React.ReactNode
    className?: string
}

const Container = ({children, className}: ContainerProps) => {
  const classname = cn('w-full px-6 py-7', className)
  return (
    <section className={classname}>
      <div className='max-w-[1500px] mx-auto'>
        {children}
      </div>
    </section>
  )
}

export default Container
