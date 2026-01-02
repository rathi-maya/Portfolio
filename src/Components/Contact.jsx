import React from "react";
import phone from "../assets/phone-call.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github.png";

function Contact() {
  return (
    <section className="h-auto  flex flex-col bg-black">
      <div className=" text-primary w-full flex flex-col items-center justify-center px-6">
        <div className="text-center w-full px-6">
          <h2 className="headHover">Get in Touch</h2>
          <p
  className="
    pt-4
    text-white
    text-base sm:text-lg
    leading-relaxed
    max-w-sm sm:max-w-2xl
    mx-auto
    text-center
  "
>
  Feel free to reach out for collaboration, opportunities, or just a hello!
</p>

        </div>
        <div className="text-white my-5">
          <ul
            className="
      w-full max-w-6xl mx-auto
      flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center px-6text-left sm:text-center"
          >
            <li className="flex gap-3">
              {" "}
              <img className="h-[25px] w-[25px] " src={phone} alt="phone" />
              +91 7603906320
            </li>
            <li className="flex gap-3">
              {" "}
              <img className="h-[25px] w-[25px]" src={email} alt="email" />
              rathimaya22@gmail.com
            </li>
            <li className="flex gap-3">
              <img
                className="h-[25px] w-[25px]"
                src={linkedin}
                alt="linkedin"
              />
              <a href="https://www.linkedin.com/in/rathimaya/">Linkedin</a>
            </li>
            <li className="flex gap-3">
              {" "}
              <img className="h-[25px] w-[25px]" src={github} alt="github" />
              <a href="https://www.github.com/rathi-maya">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="pt-2 w-full max-w-xl">
        <form className=" border border-primary rounded-[10px] text-white">
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
            <textarea
              rows={4}
              placeholder="Your Message..."
              className="font-bold border border-primary rounded-[10px] m-2 p-2 text-[#808080] resize-none"
            />
          </div>
        </form>
        </div>
        <footer className="text-[#AAAAAA] text-center py-4">
          <p className="text-sm sm:text-base md:text-lg">
            © 2025 <span className="font-semibold">Rathi M</span> | Designed &
            Developed with <span className="text-red-500">❤️</span>
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
