import React from 'react'

//companents 
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Social from "../components/Social"
import Skills from "../components/Skills"
import Works from "../components/Works"
import Contact from "../components/Contact"

const Main = () => {
  return (
    <div>
    <Navbar/> 
    <Header/>
    <Social/>
    <Skills/>
    <Works/>
    <Contact/>
    </div>
  )
}

export default Main   