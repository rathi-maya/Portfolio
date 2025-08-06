import React from 'react'
import ProfilePic from './profilePic'
import Details from './Details'

function About() {
  return (
    <div className='flex fixed-position'>
        <div className='w-[400px]'><ProfilePic/></div>
        <div className='flex-1'><Details/></div>
    </div>
  )
}

export default About