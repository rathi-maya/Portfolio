import React from "react";
import logo from "../assets/graduate-hat.png";

const Education = () => {
  return (
    <section className="mt-16 bg-black text-white">
      <h2
        className="text-3xl font-bold text-primary

 mb-12 inline-block"
      >
        Education
        <span
          className="block h-[2px] w-full bg-primary

 mt-2"
        ></span>
      </h2>

      <div className="relative">
        <div
          className="absolute left-10 top-0 bottom-2 w-[3px] bg-primary

"
        />

        <div className="space-y-12">
          {/* ITEM 1 */}
          <div className="grid grid-cols-[80px_1fr] relative">
            <div className="relative">
              <div className="absolute left-10 top-2 -translate-x-1/2 z-10 bg-black px-1 rounded-full">
                <img src={logo} alt="logo" className="h-9 w-9" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                B.Tech Information Technology
              </h3>
              <p className="text-gray-300 mt-1">
                PSNA College of Engineering and Technology, Dindigul
              </p>
              <p
                className="text-primary

 mt-1"
              >
                2024 – 2028
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-[80px_1fr] relative">
            <div className="relative">
              <div className="absolute left-10 top-2 -translate-x-1/2 z-10 bg-black px-1 rounded-full">
                <img src={logo} alt="logo" className="h-9 w-9" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Higher Secondary Education (Class 12)
              </h3>
              <p className="text-gray-300 mt-1">
                OCPM Girls Higher Secondary School, Madurai
              </p>
              <p
                className="text-primary

 mt-1"
              >
                2022 – 2024
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="grid grid-cols-[80px_1fr] relative">
            <div className="relative">
              <div className="absolute left-10 top-2 -translate-x-1/2 z-10 bg-black px-1 rounded-full">
                <img src={logo} alt="logo" className="h-9 w-9" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Secondary Education (Class 10)
              </h3>
              <p className="text-gray-300 mt-1">
                OCPM Girls Higher Secondary School, Madurai
              </p>
              <p className="text-primary mt-1">2021 – 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
