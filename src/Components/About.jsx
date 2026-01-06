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
          Hi there! I'm <strong style={{ color: "#00ffab" }}>Rathi M</strong>, a
          second-year B.TECH IT student with a strong passion for{" "}
          <strong style={{ color: "#00ffab" }}>Frontend Development</strong>. My
          curiosity for building digital interfaces started early in college,
          and I've been exploring technologies ever since. I started by building
          simple static pages with <strong className="text-white">HTML</strong>{" "}
          and <strong className="text-white">CSS</strong>,{" "}
          <strong className="text-white">JavaScript</strong> gradually moved
          into <strong className="text-white">React</strong>. Now, I'm actively
          learning the <strong className="text-white">MERN stack</strong>,
          aiming to become a full-stack developer.
        </p>
            <Education />
      </div>
    </div>
    </div>
    </section>
  );
};

export default About;
