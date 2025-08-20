import React from 'react'
// import phone-call from 'src\assets\phone-call.png'

function Contact() {
  return (
    <div className='bg-black min-h-screen text-primary'>
      <div className='text-center'>
        <h1 className='text-[32px] font-bold'>Get in Touch</h1>
        <p className='pt-5 text-[white]'>Feel free to reach out for collaboration, opportunities, or just a hello!</p>
      </div>
      <div className='pt-5'>
        <ul className='text-white flex justify-center gap-20 m-[20px]'>
          <li className='flex gap-2'> <img className='h-[25px] w-[25px]' src="src\assets\phone-call.png" alt="" />+91 7603906320</li>
          <li className='flex gap-2'> <img className='h-[25px] w-[25px]' src="src\assets\email.png" alt="" />rathimaya22@gmail.com</li>
          <li className='flex gap-2'><img className='h-[25px] w-[25px]' src="src\assets\linkedin-logo.png" alt="" /><a href="https://www.linkedin.com/in/rathimaya/">Linkedin</a></li>
          <li className='flex gap-2'> <img className='h-[25px] w-[25px]' src="src\assets\github.png" alt="" /><a href="https://www.github.com/rathi-maya">GitHub</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact