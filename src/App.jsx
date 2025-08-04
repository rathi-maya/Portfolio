import { useState } from 'react'
import './App.css'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';


function App() {
  return (
    <> 
      <Home/>
      {/* <About/> */}
      <Skills/>
      <Projects/>
      <Contact/>

    </>
  )
}

export default App
