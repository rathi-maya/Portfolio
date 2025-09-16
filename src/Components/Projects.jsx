function Projects(props) {
  return (
      <div className="text-white h-[400px] w-[350px] border-2 border-primary m-5 rounded-[5px] p-5">
        <div>
        <h2 className="text-center text-xl" >{props.title}</h2>
        <p>{props.description}</p>
        <h3>Tech Stack</h3>
           <p>{props.techstack1}</p>
           <p>{props.techStack2}</p>
        <h3>Links</h3>
           <button></button>
      </div>
      </div>
  
  );
}

export default Projects;
