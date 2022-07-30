import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Experience from "./components/experience/Experience"
import Nav from "./components/nav/Nav"
import Services from './components/services/Services'
import Footer from "./components/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonial from "./components/testimonial/Testimonial"
import Contact from "./components/contact/Contact"
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App