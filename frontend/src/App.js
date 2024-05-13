import React from 'react'
import { About, Footer, Header, Projects, Work } from './Container';
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
    <Footer />
  </div>
  )
}

export default App