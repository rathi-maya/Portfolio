const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center bg-black"
    >
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div>
          <h1 className="text-[32px] sm:text-[39px] md:text-[45px] lg:text-[49px] font-bold leading-tight text-white">
            Hi, I'm <span className="text-primary">Rathi M</span>
          </h1>
          <h2
            className="mt-2 text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px]
           font-semibold text-white"
          >
            <span className="text-primary">Frontend Developer</span> | B.Tech IT
            Student | MERN Stack Learner
          </h2>
          <p className="mt-4 text-base font-semibold text-[15px] sm:text-lg leading-relaxed md:text-[17px] lg:text-[19px] text-white  max-w-full sm:max-w-[90%] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1000px]">
            A passionate 2nd-year B.Tech Information Technology student and an
            aspiring frontend developer. I'm currently learning the{" "}
            <span className="text-primary font-semibold">MERN stack</span>{" "}
            (MongoDB, Express, React, Node.js) and love building responsive,
            user-focused websites.
          </p>
         <div className="flex flex-col sm:flex-row gap-4 mt-6 items-start">

<button
  className="
    inline-flex items-center justify-center
    px-6 py-3
    text-base sm:text-sm
    min-h-[48px]
    rounded-full
    border border-primary text-white
   cardHover font-semibold
  "
>
  View My Work
</button>

<button
  className="
    inline-flex items-center justify-center
    px-6 py-3
    text-base sm:text-sm
    min-h-[48px]
    rounded-full
    border border-primary text-white
   cardHover font-semibold
  "
>
  Download My Resume
</button>
</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
