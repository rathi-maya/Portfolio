import React from 'react'

function Details() {
  return (
    <div className="bg-black min-h-screen">
        <div className='flex items-center'>
            <h1 className='text-[32px] text-primary font-bold text-center'>About Me</h1>
        </div>
        <div className='m-[50px]'>
          <p className=' max-w-[900px] text-white text-[20px] p-[20px]'>Hi there! I'm <span className='text-primary font-bold'>Rathi M</span> , a second-year B.Tech IT Student with a strong passion for <span className='text-primary font-bold'>Frontend Development</span>. My curiosity for building digital interfaces started early in college, and I've been exploring technologies ever since. I started by building simple staic pages with <span className='text-primary font-bold'>HTML</span>, <span className='text-primary font-bold'>CSS</span> and <span className='text-primary font-bold'>JavaScript</span> gradually moved into <span className='text-primary font-bold'>ReactJs</span> . Now, I'm actively learning the <span className='text-primary font-bold'>MERN Stack</span>, aming to become a Full-Stack Developer</p>
        </div>
        <div>
          <h1 className='text-[32px] text-primary font-bold text-center'>Education</h1>
        </div>
        <div className="relative border-l-2 border-green-400 ml-4 pl-6">
  {/* 1st item */}
  <div className="mb-10 relative">
    <div className="absolute -left-[10px] top-1 w-4 h-4 bg-green-400 rounded-full"></div>
    <h3 className="text-white font-semibold">B.Tech IT</h3>
    <p className="text-gray-300">PSNA College</p>
    <p className="text-gray-400 text-sm">2024 - 2028</p>
  </div>

  {/* 2nd item */}
  <div className="mb-10 relative">
    <div className="absolute -left-[10px] top-1 w-4 h-4 bg-green-400 rounded-full"></div>
    <h3 className="text-white font-semibold">Higher Secondary</h3>
    <p className="text-gray-300">OCPM Girls</p>
    <p className="text-gray-400 text-sm">2022 - 2024</p>
  </div>

  {/* 3rd item */}
  <div className="relative">
    <div className="absolute -left-[10px] top-1 w-4 h-4 bg-green-400 rounded-full"></div>
    <h3 className="text-white font-semibold">Secondary</h3>
    <p className="text-gray-300">OCPM Girls</p>
    <p className="text-gray-400 text-sm">2021 - 2022</p>
  </div>
</div>

    </div>
  )
}

export default Details