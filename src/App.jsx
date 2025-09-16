import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import ProjectList from './Components/ProjectList.jsx';
import ProfilePic from './Components/profilePic.jsx';
import Details from './Components/Details.jsx';


function App() {
  return (
    <> 
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <ProjectList/>
      <Contact/>

    </>
  )
}

export default App
