import './index.css'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import { RouterProvider } from 'react-router-dom';
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path : '/skills',
    element: <Skills />
  },
  {
    path : '/projects',
    element: <Projects />
  },
  {
    path : '/contact',
    element: <Contact />
  }

])



ReactDOM.createRoot(document.getElementById("root")).render(
 <StrictMode>
  <RouterProvider router={router}></RouterProvider>
 </StrictMode>
);
