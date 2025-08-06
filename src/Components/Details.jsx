import React from 'react'

function Details() {
  return (
    <div className='bg-black h-screen '>
        <div className='flex items-center'>
            <h1 className='text-[32px] text-primary font-bold text-center'>About Me</h1>
        </div>
        <div className='m-[50px]'>
          <p className=' max-w-[900px] text-white text-[20px] p-[20px]'>Hi there! I'm <span className='text-primary font-bold'>Rathi M</span> , a second-year B.Tech IT Student with a strong passion for <span className='text-primary font-bold'>Frontend Development</span>. My curiosity for building digital interfaces started early in college, and I've been exploring technologies ever since. I started by building simple staic pages with <span className='text-primary font-bold'>HTML</span>, <span className='text-primary font-bold'>CSS</span> and <span className='text-primary font-bold'>JavaScript</span> gradually moved into <span className='text-primary font-bold'>ReactJs</span> . Now, I'm actively learning the <span className='text-primary font-bold'>MERN Stack</span>, aming to become a Full-Stack Developer</p>
        </div>
    </div>
  )
}

export default Details