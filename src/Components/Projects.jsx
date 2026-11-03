import { FaGithub } from "react-icons/fa";

import {
  UserRound,
  Cloud,
  Code2,
  ExternalLink
} from "lucide-react";
function Projects(props) {

  // Select icon based on project title
  const ProjectIcon = props.title.includes("Login")
    ? UserRound
    : props.title.includes("Weather")
    ? Cloud
    : Code2;

  // Collect available technologies
  const techStack = [
    props.techstack1,
    props.techstack2,
    props.techstack3,
    props.techstack4,
    props.techstack5
  ].filter(Boolean);

  return (
    <div className="
      w-full max-w-[360px] min-h-[420px]
      mx-auto p-5 md:p-6
      bg-black text-white
      border border-primary/70
      rounded-xl
      flex flex-col
      transition-all duration-300
      hover:border-primary
      hover:shadow-[0_0_18px_rgba(0,229,160,0.15)]
      group
    ">

      {/* Project Icon */}
      <div className="
        w-12 h-12
        rounded-xl
        bg-primary/10
        text-primary
        flex items-center justify-center
        mb-4
        transition-all duration-300
        group-hover:bg-primary/20
      ">
        <ProjectIcon size={25} />
      </div>

      {/* Project Title */}
      <h2 className="text-lg font-bold mb-3">
        {props.title}
      </h2>

      {/* Description */}
      <p className="text-sm leading-6 text-gray-300 break-words">
        {props.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-5">

        <h3 className="text-sm font-semibold mb-3">
          Tech Used
        </h3>

        <div className="flex flex-wrap gap-2">

          {techStack.map((tech, index) => (
            <span
              key={index}
              className="
                px-3 py-1.5
                rounded-md
                bg-primary/10
                border border-primary/20
                text-primary
                text-xs font-semibold
              "
            >
              {tech}
            </span>
          ))}

        </div>
      </div>

      {/* Project Links */}
      <div className="mt-auto pt-6">

        <div className="flex flex-wrap gap-2">

          {props.view && (
            <a
              href={props.view}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                px-3 py-2
                rounded-lg
                bg-primary text-black
                text-sm font-semibold
                transition-all duration-300
                hover:bg-primary/80
              "
            >
              View Demo
              <ExternalLink size={15} />
            </a>
          )}

          {props.source && (
            <a
              href={props.source}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                px-3 py-2
                rounded-lg
                border border-primary
                text-white
                text-sm font-semibold
                transition-all duration-300
                hover:bg-primary hover:text-black
              "
            >
        <FaGithub size={15} />
Source Code
            </a>
          )}

        </div>
      </div>

    </div>
  );
}

export default Projects;

