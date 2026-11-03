import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
            techstack3: "[JS]",
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

     const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => {
      window.removeEventListener("resize", updateCount);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  const prev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  };

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <>
      <section id="projects" className="scroll-mt-24">
      <div className="bg-black min-h-screen">

        <div className="text-primary font-bold text-center">
          <h2 className="headHover">Project</h2>
        </div>

        <div className="relative px-8 md:max-w-5xl sm:max-w-xl mx-auto">

          {/* Previous button */}
         <button
  onClick={prev}
  disabled={currentIndex === 0}
  className={`absolute left-3 top-1/2 -translate-y-1/2 z-10
    w-10 h-10 rounded-full border-2
    flex items-center justify-center
    transition-all duration-300
    ${
      currentIndex === 0
        ? "border-primary/30 text-primary/30 cursor-not-allowed"
        : "border-primary text-primary hover:bg-primary hover:text-black hover:scale-110 cursor-pointer"
    }`}
>
  <ChevronLeft size={22} />
</button>

          {/* Projects carousel */}
          <div className="overflow-hidden mx-6">

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >

              {projects.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <Projects
                    title={item.title}
                    description={item.description}
                    techstack1={item.techstack1}
                    techstack2={item.techstack2}
                    techstack3={item.techstack3}
                    techstack4={item.techstack4}
                    view={item.view}
                    source={item.source}
                  />
                </div>
              ))}

            </div>
          </div>

          {/* Next button */}
         <button
  onClick={next}
  disabled={currentIndex >= maxIndex}
  className={`absolute right-3 top-1/2 -translate-y-1/2 z-10
    w-10 h-10 rounded-full border-2
    flex items-center justify-center
    transition-all duration-300
    ${
      currentIndex >= maxIndex
        ? "border-primary/30 text-primary/30 cursor-not-allowed"
        : "border-primary text-primary hover:bg-primary hover:text-black hover:scale-110 cursor-pointer"
    }`}
>
  <ChevronRight size={22} />
</button>

        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">

  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrentIndex(i)}
      className={`h-2 rounded-full transition-all duration-300
        ${
          i === currentIndex
            ? "w-8 bg-primary shadow-[0_0_10px_var(--tw-shadow-color)] shadow-primary/60"
            : "w-2 bg-primary/30 hover:bg-primary/70"
        }`}
    />
  ))}

</div>

      </div>
    </section>
    </>
  );
}

export default ProjectList