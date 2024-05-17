import React from 'react'
import TeamCard from './ui/team-card'
import TestImage from '../public/next.svg'
import Container from './container'

const Team = () => {
  const teamMembers = [
    {
      image: '/members/karume.jpeg',
      name: 'Daniel Karume',
      title: 'Team lead | Project Manager',
      github: 'https://github.com/Karume-lab',
      linkedIn: 'https://www.linkedin.com/in/daniel-karume/'
    },
    {
      image: '/members/dancoon.jpeg',
      name: 'Ian Dancun',
      title: 'Backend Developer',
      github: 'https://github.com/dancoon',
      linkedIn: 'https://linkedin.comin/dancoon'
    },
    {
      image: '/members/javan.jpeg',
      name: 'Javan Otieno',
      title: 'Backend Developer',
      github: 'https://github.com/Javan-Odhiambo',
      linkedIn: 'https://linkedin.com/in/javan-otieno'
    },
    {
      image: '/members/peaches.jpeg',
      name: 'Peaches Njenga',
      title: 'Frontend Developer',
      github: 'https://github.com/Peachy-Njenga',
      linkedIn: 'https://linkedin.com/in/peaches-njenga'
    },
    {
      image: '/members/sandrah.jpeg',
      name: 'Sandrah Lewa',
      title: 'Frontend Developer',
      github: 'https://github.com/comfortsandrah',
      linkedIn: 'https://www.linkedin.com/in/sandrah-comfort/'
    },
  ]

  return (
    <Container>

      <section className='space-y-8 w-full min-h-[80vh] place-items-center grid'>
        <div>

          <div className='space-y-2 text-center mb-20'>
            <p className="text-text font-bold text-sm text-center mb-3">
              Experienced
            </p>
            <h2 className='text-4xl font-bold text-title'>Meet Our Team</h2>
            <p className='md:text-lg'>Our team is made up of passionate individuals who are dedicated to making a difference in the world.</p>
          </div>
          <div className='flex flex-wrap justify-start gap-5 '>
            {teamMembers.map((team, index) => (
              <TeamCard key={index} {...team} />
            ))}
          </div>
        </div>

      </section>
    </ Container>
      )
}
export default Team
