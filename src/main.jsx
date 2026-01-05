import './index.css'
import App from './App.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import ProjectList from './Components/ProjectList.jsx';  
import Contact from './Components/Contact.jsx';
import { RouterProvider } from 'react-router-dom';
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Layout from './Layout.jsx';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    element : <Layout />,
    children : [
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
    element: <ProjectList />
  },
  {
    path : '/contact',
    element: <Contact />
  },
],
},
])



ReactDOM.createRoot(document.getElementById("root")).render(
 <StrictMode>
  <RouterProvider router={router}></RouterProvider>
 </StrictMode>
);
