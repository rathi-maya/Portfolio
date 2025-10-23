import './App.css'
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Contact from './Components/Contact.jsx';
import ProjectList from './Components/ProjectList.jsx';



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
