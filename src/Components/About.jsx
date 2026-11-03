import React from "react";
import ProfilePic from "../assets/profile.jpg";
import SideBar from "../assets/education_sideBar.png";
import Education from "./Education";

const About = () => {
  return (
    <section id="about"  className="scroll-mt-22">
     <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      <div className="w-full lg:w-1/3 md:p-10 flex-shrink-0  
                flex items-center justify-center">

        <div className="p-8 md:p-0 flex items-center justify-center">
          <img
            src={ProfilePic}
            alt="Rathi M"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-[300px] 
                       transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3 p-10  md:items-center">
       <div className="">
        <div className=" pl-[70px] lg:pl-[250px] md:pl-[300px] sm:pl-[210px]">
        <h1 className="headHover mb-4 ">
          About Me
        </h1>
        </div>
        <p className="mb-8 text-lg leading-relaxed ">
           Hi there! I'm <strong className="text-primary font-semibold">Rathi M</strong>,
  a <strong>third-year B.Tech IT student</strong> with a strong passion
  for web development.

  I enjoy building <strong>responsive, interactive, and user-friendly
  web applications</strong>. My journey started with building simple
  web pages using <strong>HTML, CSS, and JavaScript</strong>, and
  gradually progressed into <span className="font-semibold" style={{ color: "#00ffab" }}>React.js</span>.

  Currently, I'm actively exploring the <strong className="text-primary font-semibold">
  MERN stack</strong> and developing <strong>full-stack applications</strong>
  to strengthen my frontend and backend skills. I'm passionate about
   learning new technologies,
  solving problems, and turning creative ideas into practical digital
  solutions. My goal is to become a skilled
  <strong className="text-primary font-semibold" > Full Stack Developer</strong>.
        </p>
            <Education />
      </div>
    </div>
    </div>
    </section>
  );
};

export default About;
