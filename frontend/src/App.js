import React from 'react'
import { About, Footer, Header, Projects, Work, Testimonial } from './Container';
import { Navbar } from './Components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Projects/>
    <Testimonial/>
    <Footer/>
  </div>
  )
}

export default App