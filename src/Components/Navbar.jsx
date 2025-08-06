import React from "react";

function Navbar() {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center px-4">
        <div className="m-[24px]">
          <h1 className=" text-primary text-[24px] font-bold">RATHI M</h1>
        </div>
        <div className="m-[24px]">
            <ul className="flex items-center gap-8">
                <li className="text-primary">Home</li>
                <li className="text-white">About Me</li>
                <li className="text-white">Skills</li>
                <li className="text-white">Projects</li>
                <li className="text-white">Contact</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
