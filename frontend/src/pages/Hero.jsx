import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from './Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import RevealOnScroll from '../components/RevealOnScroll'

const Hero = () => {
  return (
    <div className="">
      <Navbar/>
      <div id="home">
        <RevealOnScroll animationClass="animate-slide-in-left">
          <About/>
        </RevealOnScroll>
      </div>
      <div id="projects">
        <RevealOnScroll animationClass="animate-slide-in-right">
          <Projects/>
        </RevealOnScroll>
      </div>
      <div id="education">
        <Education/>
      </div>
      <div id="contact">
        <RevealOnScroll animationClass="animate-slide-in-right">
          <Contact/>
        </RevealOnScroll>
      </div>
    </div>
  )
}

export default Hero
