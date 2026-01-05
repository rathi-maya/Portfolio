// src/Layout.jsx
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
