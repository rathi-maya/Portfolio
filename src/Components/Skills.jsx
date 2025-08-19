import React from "react";
import HTML from "../assets/HTML.jpg";
import CSS from "../assets/CSS.jpg";
import JS from "../assets/JS.webp";
import ReactJs from "../assets/ReactJs.png";
import TailwindCSS from "../assets/Tailwind CSS.png";
import Git from "../assets/Git.png";
// import tailwindcss from '@tailwindcss/vite';

function Skills() {
  return (
    <div className="bg-black p-[20px]">
      <div className="text-primary mt-10">
        <h1 className="font-bold text-[32px] text-center">My Skills</h1>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center py-8">
          <div>
            <li>
              <img src={HTML} className="w-40 h-40" alt="" />
            </li>
            <li>
              <h1 className="text-primary text-center p-5 font-semibold">
                HTML
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={CSS} className="w-40 h-40" alt="" />
            </li>
            <li>
              <h1 className="text-primary text-center p-5 font-semibold">
                CSS
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={JS} className="w-40 h-40" alt="" />
            </li>
            <li>
              <h1 className="text-primary text-center p-5 font-semibold">
                Javascript
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={ReactJs} className="w-40 h-40" alt="" />
            </li>
            <li>
              <h1 className="text-primary text-center p-5 font-semibold">
                React Js
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={TailwindCSS} className="w-40 h-40" alt="" />
            </li>
            <li>
              <h1 className="text-primary text-center p-5 font-semibold">
                Tailwind CSS
              </h1>
            </li>
          </div>
          <div>
            <li>
              <img src={Git} className="w-40 h-40" alt="" />
            </li>
            <li>
              <h1 className="text-primary text-center p-5 font-semibold">
                Git
              </h1>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
