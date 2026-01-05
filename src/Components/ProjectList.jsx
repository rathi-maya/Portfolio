import React from 'react'
import Projects from './Projects';

function ProjectList() {

    const projects = [
        {
           title : "Login & Signup page",
           description : "A clean, responsive login and signup UI built using HTML and CSS. Designed with modern form styling and mobile-friendly layout.",
           techstack1 : "[HTML]",
           techstack2 : "[CSS]",
           view: " https://rathi-maya.github.io/Login_Page/",
           source : "https://github.com/rathi-maya/Login_Page.git"
    },
        {
           title : "Weather Website",
           description : "A Web app that shows real-time weather info using the OpenWeatherMap API. Users can search by city and get temperature, humidity and weather icons.",
           techstack1: "[HTML]",
           techstack2: "[CSS]",
            techstack3: "[JavaScript]",
             techstack4: "[API]",
             view: "https://rathi-maya.github.io/Weather/",
             source : "https://github.com/rathi-maya/Weather.git"

    },
     {
            title : "Portfolio",
           description : "My personal protfolio showcasing projects, contact info and skills. Built using React and designed to be fully responsive with clean navigation",
           techstack1: "[ReactJs]",
           techstack2: "[Tailwind CSS]",
           source :"https://github.com/rathi-maya/Portfolio.git"
    }
    ]

    const projectsList = projects.map(
        (project,index)=>
        <Projects 
        key={index}
        title={project.title} 
        description={project.description} 
        techstack1={project.techstack1} 
        techstack2={project.techstack2} 
        techstack3={project.techstack3} 
        techstack4={project.techstack4} 
        techstack5={project.techstack5} 
        view ={project.view}
        source = {project.source}
        />)

  return (
    <>
      
       <div className="bg-black min-h-screen">
      <div className="text-primary  font-bold text-center">
              <h2 className="headHover">
  Project
</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5 ">
        {projectsList}     
      </div>
    </div>
    </>
  );
}

export default ProjectList