function Projects(props) {
  return (
      <div className="text-white h-[400px] w-[350px] border-2 border-primary m-5 rounded-[5px] p-5 cardHover ">
        <div>
        <h2 className="text-center p-2 text-xl font-bold" >{props.title}</h2>
        <p className="leading-6">{props.description}</p>
        <h3 className="font-semibold text-lg mt-3">⚙️ Tech Stack</h3>
           <div className="flex gap-3 ml-5 mt-2 text-primary font-semibold">
           <p>{props.techstack1}</p>
           <p>{props.techstack2}</p>
            <p>{props.techstack3}</p>
             <p>{props.techstack4}</p>
              <p>{props.techstack5}</p>
              </div>
        
        <h3 className="font-semibold text-lg mt-3  flex">🔗 Links</h3>
            <div className="mt-3">
            <button className="btn cardHover"><a href={props.view}>View Demo</a></button>
            <button className="btn cardHover"><a href={props.source}>Source Code</a></button>
            </div>
      </div>
      </div>
  
  );
}

export default Projects;
