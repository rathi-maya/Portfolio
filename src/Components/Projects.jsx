import React from 'react'

function Projects() {
  return (
    <div className="bg-black min-h-screen text-primary">
        <div className='text-[32px] text-primary font-bold text-center' >Projects</div>
        <div>
            <div className='grid grid-cols-3 gap-4 text-white justify-between'>
                <div className='projectcol'>
                    <h1 className='text-center text-[20px]'>Login and Sign Up page</h1>
                    <p className='text-[16px]'>A clean, responsive login and signup UI built using HTML and CSS. Designed with modern form styling and mobile-friendly layout.</p>
                </div>
                 <div className='projectcol'>
                    Login and Sign Up page
                </div>
                 <div className='projectcol'>
                    Login and Sign Up page
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects