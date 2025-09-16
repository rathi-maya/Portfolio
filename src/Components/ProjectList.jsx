import React from 'react'
import Projects from './Projects';

function ProjectList() {

    const projects = [
        {
           title : "Login & Signup page",
           description : "A clean, responsive login and signup UI built using HTML and CSS. Designed with modern form styling and mobile-friendly layout.",
           techstack1 : "HTML",
           techstack2 : "CSS",
    },
        {
           title : "Login & Signup page",
           description : "A clean, responsive login and signup UI built using HTML and CSS. Designed with modern form styling and mobile-friendly layout.",
           techstack : "HTML",
           techstack : "CSS",
    },
     {
           title : "Login & Signup page",
           description : "A clean, responsive login and signup UI built using HTML and CSS. Designed with modern form styling and mobile-friendly layout.",
           techstack : "HTML",
           techstack : "CSS",
    }
    ]

    const projectsList = projects.map(
        (project,index)=>
        <Projects 
        key={index}
        title={project.title} 
        description={project.description} 
        techstack1={project.techstack1} 
        techstack2={project.techstack2} />)

  return (
    <>
       <div className="bg-black min-h-screen">
      <div className="text-primary text-[40px] font-bold text-center">
        <h1>Projects</h1>  
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {projectsList}     
      </div>
    </div>
    </>
  );
}

export default ProjectList