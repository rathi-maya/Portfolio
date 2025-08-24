import React from 'react'
import ProfilePic from './profilePic'
import Details from './Details'

function About() {
  return (
    <div className='flex bg-black'>
        <div className='w-[400px] fixed-position '><ProfilePic/></div>
        <div className='flex-1'><Details/></div>
    </div>
  )
}

export default About