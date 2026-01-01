const Home = () => {
  return (
     <section id="home" className="min-h-screen flex items-center bg-black ">
    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div>
          <h1 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold leading-tight text-white">
            Hi, I'm <span className="text-primary">Rathi M</span>
          </h1>
          <h2 className="mt-2 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]
           font-semibold text-white">
            <span className="text-primary">Frontend Developer</span> | B.Tech IT Student | MERN Stack Learner
          </h2>
          <p className="mt-2 font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed text-white  max-w-full sm:max-w-[90%] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1000px]">
            A passionate 2nd-year B.Tech Information Technology student and an aspiring frontend developer. I'm currently learning the <span className="text-primary font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js) and love building responsive, user-focused websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#projects" className="inline-block px-6 py-3 font-medium text-white border-2 border-[#00ffab] rounded-full hover:bg-[#00ffab] hover:text-black transition-colors duration-300 text-center">
              View My Work
            </a>
            <a href="/RathiM_Resume.pdf" download className="inline-block px-6 py-3 font-medium text-white border-2 border-[#00ffab] rounded-full hover:bg-[#00ffab] hover:text-black transition-colors duration-300 text-center">
              Download My Resume
            </a>
          </div>
        </div>
     
    </div>
     </section>
  );
};

export default Home;