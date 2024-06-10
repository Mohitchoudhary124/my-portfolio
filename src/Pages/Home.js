import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home