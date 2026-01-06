import React from "react";
import HTML from "../assets/HTML.jpg";
import CSS from "../assets/CSS.jpg";
import JS from "../assets/JS.webp";
import ReactJs from "../assets/ReactJs.png";
import TailwindCSS from "../assets/Tailwind CSS.png";
import Git from "../assets/Git.png";


function Skills() {
  return (
    <section id="skills" className="scroll-mt-22">
    <div className="bg-black p-[20px]">
      <div className="text-center">
        <h2
          className="headHover"
        >
          Skills
        </h2>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center py-8">
          <div>
            <li>
              <img src={HTML} className="skillsImage" alt="" />
            </li>
            <li>
              <h1 className="skillsName">
                HTML
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={CSS} className="skillsImage" alt="" />
            </li>
            <li>
              <h1 className="skillsName">
                CSS
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={JS} className="skillsImage" alt="" />
            </li>
            <li>
              <h1 className="skillsName">
                Javascript
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={ReactJs} className="skillsImage" alt="" />
            </li>
            <li>
              <h1 className="skillsName">
                React Js
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={TailwindCSS} className="skillsImage" alt="" />
            </li>
            <li>
              <h1 className="skillsName">
                Tailwind CSS
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={Git} className="skillsImage" alt="" />
            </li>
            <li>
              <h1 className="skillsName">
                Git
              </h1>
            </li>
          </div>
        </ul>
      </div>
    </div>
    </section>
  );
}

export default Skills;
