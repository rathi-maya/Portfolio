
import React, { useState, useEffect } from "react";
import Projects from "./Projects";

import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

function ProjectsList() {

  // Project Data
  const projects = [
    {
      title: "Login & Signup page",
      description:
        "A clean, responsive login and signup UI built using HTML and CSS. Designed with modern form styling and mobile-friendly layout.",

      techstack1: "HTML",
      techstack2: "CSS",

      view: "https://rathi-maya.github.io/Login_Page/",
      source: "https://github.com/rathi-maya/Login_Page.git"
    },

    {
      title: "Weather Website",
      description:
        "A web app that shows real-time weather info using the OpenWeatherMap API. Users can search by city and get temperature, humidity and weather icons.",

      techstack1: "HTML",
      techstack2: "CSS",
      techstack3: "JS",
      techstack4: "API",

      view: "https://rathi-maya.github.io/Weather/",
      source: "https://github.com/rathi-maya/Weather.git"
    },
     { title: "UrbanKey – Real Estate Website",
       description:"A modern real estate landing page with a clean design and responsive layout, built to showcase properties and deliver a smooth browsing experience.",
      techstack1: "React Js",
      techstack2: "Tailwind CSS",
      view : "https://theurbankeys.netlify.app/",
      source: "https://github.com/rathi-maya/urbanKeys.git"
    },
     { title: "To-Do List Application",
       description:"A full-stack task management application that allows users to add, edit, mark tasks as completed, and delete tasks. Tasks are stored securely in MongoDB with a responsive user interface.",
      techstack1: "MERN",
      techstack2: "Tailwind CSS",
      view : "https://rathi-todo-list.netlify.app/",
      source: "https://github.com/rathi-maya/To-Do-list.git"
    }
  ];

  // Carousel States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive Card Count
  useEffect(() => {

    const updateCount = () => {

      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      }
      else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      }
      else {
        setVisibleCount(1);
      }

    };

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => {
      window.removeEventListener("resize", updateCount);
    };

  }, []);

  // Reset Index When Screen Size Changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);

  // Maximum Slide Index
  const maxIndex = Math.max(
    0,
    projects.length - visibleCount
  );

  // Previous Slide
  const prev = () => {
    setCurrentIndex((index) =>
      Math.max(0, index - 1)
    );
  };

  // Next Slide
  const next = () => {
    setCurrentIndex((index) =>
      Math.min(maxIndex, index + 1)
    );
  };

  // Carousel Track Width
  const trackWidth =
    (projects.length * 100) / visibleCount;

  // Track Movement
  const translateX =
    -(currentIndex * (100 / projects.length));

  return (

    <section
      id="projects"
      className="
        bg-black min-h-screen
        py-16 scroll-mt-24
      "
    >

      {/* Section Heading */}
      <div className="text-center mb-12">

        <h2 className="
          text-primary
          text-3xl md:text-4xl
          font-bold
          headHover
        ">
          Projects
        </h2>

      </div>


      {/* Carousel Main Container */}
      <div className="
        relative
        w-full max-w-[1250px]
        mx-auto
        px-12
      ">

        {/* Previous Button */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          aria-label="Previous projects"
          className={`
            absolute left-1
            top-1/2 -translate-y-1/2
            z-20

            w-10 h-10
            rounded-full
            border-2

            flex items-center justify-center

            transition-all duration-300

            ${
              currentIndex === 0
                ? "border-primary/30 text-primary/30 cursor-not-allowed"
                : "border-primary text-primary hover:bg-primary hover:text-black hover:scale-110"
            }
          `}
        >
          <ChevronLeft size={22} />
        </button>


        {/* Carousel Viewport */}
        <div className="overflow-hidden w-full">

          {/* Carousel Track */}
          <div
            className="
              flex
              transition-transform
              duration-500
              ease-in-out
            "
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(${translateX}%)`
            }}
          >

            {projects.map((item, index) => (

              <div
                key={index}
                className="
                  shrink-0
                  flex justify-center
                  px-2 sm:px-3
                "
                style={{
                  width: `${100 / projects.length}%`
                }}
              >

                <Projects {...item} />

              </div>

            ))}

          </div>

        </div>


        {/* Next Button */}
        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          aria-label="Next projects"
          className={`
            absolute right-1
            top-1/2 -translate-y-1/2
            z-20

            w-10 h-10
            rounded-full
            border-2

            flex items-center justify-center

            transition-all duration-300

            ${
              currentIndex >= maxIndex
                ? "border-primary/30 text-primary/30 cursor-not-allowed"
                : "border-primary text-primary hover:bg-primary hover:text-black hover:scale-110"
            }
          `}
        >
          <ChevronRight size={22} />
        </button>

      </div>


      {/* Slider Indicators */}
      <div className="
        flex justify-center items-center
        gap-2 mt-10
      ">

        {Array.from({
          length: maxIndex + 1
        }).map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2 rounded-full
              transition-all duration-300

              ${
                currentIndex === index
                  ? "w-8 bg-primary shadow-[0_0_12px_#00E5A0]"
                  : "w-2 bg-primary/30 hover:bg-primary/70"
              }
            `}
          />

        ))}

      </div>

    </section>

  );
}

export default ProjectsList;
