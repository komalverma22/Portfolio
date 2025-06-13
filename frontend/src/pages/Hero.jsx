import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from './Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div id="home">
      <About/>
      </div>
      <div id="projects">
      <Projects/>
      </div>
      <div id="education">
      <Education/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Hero
