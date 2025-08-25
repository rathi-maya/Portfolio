import React from "react";
import phone from "../assets/phone-call.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github.png";

function Contact() {
  return (
    <div className="bg-black min-h-screen text-primary flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-[32px] font-bold underline-offset-8 decoration-primary ">
          Get in Touch
        </h1>
        <p className="pt-5 text-[white]">
          Feel free to reach out for collaboration, opportunities, or just a
          hello!
        </p>
      </div>
      <div className="pt-8">
        <ul className="text-white flex flex-wrap justify-center gap-10 m-5">
          <li className="flex gap-2">
            {" "}
            <img className="h-[25px] w-[25px]" src={phone} alt="phone" />
            +91 7603906320
          </li>
          <li className="flex gap-2">
            {" "}
            <img className="h-[25px] w-[25px]" src={email} alt="email" />
            rathimaya22@gmail.com
          </li>
          <li className="flex gap-2">
            <img className="h-[25px] w-[25px]" src={linkedin} alt="linkedin" />
            <a href="https://www.linkedin.com/in/rathimaya/">Linkedin</a>
          </li>
          <li className="flex gap-2">
            {" "}
            <img className="h-[25px] w-[25px]" src={github} alt="github" />
            <a href="https://www.github.com/rathi-maya">GitHub</a>
          </li>
        </ul>
      </div>
      <form className="mx-10 border-1 border-primary h-auto w-[60%]  rounded-[10px] text-white">
        <div className="m-4 flex flex-col">
          <label className="mx-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="font-bold border-1 border-primary rounded-[10px] m-2 p-2 text-[#808080]"
          />
        </div>
        <div className="m-4 flex flex-col">
          <label className="mx-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            placeholder="Your Email"
            className="font-bold border-1 border-primary rounded-[10px] m-2 p-2 text-[#808080]"
          />
        </div>
        <div className="m-4 flex flex-col">
          <label className="mx-2" htmlFor="message">
            Message
          </label>
          <input
            type="text"
            placeholder="Your Message....."
            className="align-text-top font-bold border-1 border-primary rounded-[10px] m-2 p-2 text-[#808080] h-40"
          />
        </div>
      </form>
      <footer className="text-[#AAAAAA] text-center py-4">
        <p className="text-sm sm:text-base md:text-lg">
          © 2025 <span className="font-semibold">Rathi M</span> | Designed &
          Developed with <span className="text-red-500">❤️</span>
        </p>
      </footer>
    </div>
  );
}

export default Contact;
