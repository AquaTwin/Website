import React from 'react'
import TeamCard from './ui/team-card'
import TestImage  from '../public/next.svg'

const Team = () => {
  const teamMembers = [
    {
    image: '/image.png',
    name: 'John Doe',
    title: 'Frontend Lead',
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    image: '/image.png',
    name: 'John Doe',
    title: 'Frontend Lead',
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    image: '/image.png',
    name: 'John Doe',
    title: 'Frontend Lead',
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    image: '/image.png',
    name: 'John Doe',
    title: 'Frontend Lead',
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    image: '/image.png',
    name: 'John Doe',
    title: 'Frontend Lead',
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
]

  return (
    <section className='space-y-8 w-full max-w-[1400px] mx-auto py-16'>
      <div className='space-y-2 text-center'>
      <p className="text-text font-bold text-sm text-center mb-3">
        Experienced
      </p>
        <h2 className='text-4xl font-bold'>Meet Our Team</h2>
        <p className='md:text-lg'>Our team is made up of passionate individuals who are dedicated to making a difference in the world.</p>
      </div>
      <div className='flex flex-wrap justify-start w-full gap-5'>
        {teamMembers.map((team, index) => (
          <TeamCard key={index} {...team}/>
        ))}
      </div>

    </section>

  )
}

export default Team
