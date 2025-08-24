import React from 'react';

function Home() {
  return (
   <div className='bg-black min-h-[calc(100vh-64px)]   flex items-center justify-center'>
   <div className='m-32 mt-[20px]'>
      <div>
          <h1 className='text-primary text-[40px] font-bold'>Hi, I'm Rathi M</h1>  
      </div>
      <div>
         <p className=' text-primary text-[24px]'>Frontend Developer | B.Tech IT Student | Mern Stack Learner</p>
         <p className='font-semibold text-[20px] text-white'> A passionate 2nd-year B.Tech Information Technology student and an aspiring frontend developer. I’m currently learning the <span className='font-bold text-primary'>MERN Stack </span>(MongoDB, Express, React, Node.js) and love building responsive, user-focused websites</p>
      </div>
      <div className='flex mt-3'>
         <button className='btn p-2 mr-3 '>View My Work</button>
         <button className='btn p-3'>Download My Resume</button>
      </div>
   </div>
   </div>
  );
}

export default Home;
