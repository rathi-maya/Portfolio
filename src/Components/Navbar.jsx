function Navbar() {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center px-4">
        <div className="m-[24px]">
          <h1 className=" text-primary text-[24px] font-bold">RATHI M</h1>
        </div>
        <div className="m-[24px]">
            <ul className="flex items-center gap-8">
                <li className=" navbarHover">Home</li>
                <li className=" navbarHover">About Me</li>
                <li className=" navbarHover">Skills</li>
                <li className="navbarHover">Projects</li>
                <li className="navbarHover">Contact</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
