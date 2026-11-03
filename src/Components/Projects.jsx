
function Projects(props) {
  return (
    <div className="text-white w-full max-w-[340px] h-[420px] mx-auto
                border-2 border-primary rounded-[8px]
                p-6 lg:p-5 xl:p-6
                cardHover flex flex-col">

      {/* Project Title */}
      <h2 className="text-center text-xl font-bold mb-4">
        {props.title}
      </h2>

      {/* Description */}
     <p className="text-[16px] leading-6">
  {props.description}
</p>
      {/* Tech Stack */}
      <div className="mt-5">
        <h3 className="font-semibold text-base mb-2">
          Tech Used
        </h3>

        <div className="flex flex-wrap justify-center gap-2
                        text-primary font-semibold text-[15px]">

          {props.techstack1 && <span> {props.techstack1} </span>}
          {props.techstack2 && <span> {props.techstack2} </span>}
          {props.techstack3 && <span> {props.techstack3} </span>}
          {props.techstack4 && <span> {props.techstack4} </span>}
          {props.techstack5 && <span> {props.techstack5} </span>}

        </div>
      </div>

      {/* Links */}
      <div className="mt-4">

        <h3 className="font-semibold text-base mb-3">
          🔗 Links
        </h3>

        <div className="flex flex-wrap lg:flex-nowrap gap-3">

          {props.view && (
            <a className="btn cardHover whitespace-nowrap"
              href={props.view}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}

          {props.source && (
            <a
              href={props.source}
              target="_blank"
              rel="noopener noreferrer"
            className="btn cardHover whitespace-nowrap"
            >
              Source code
            </a>
          )}

        </div>
      </div>

    </div>
  );
}

export default Projects;
