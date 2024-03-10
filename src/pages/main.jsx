import React from 'react'

//companents 
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Social from "../components/Social"
import Skills from "../components/Skills"
import Works from "../components/Works"

const Main = () => {
  return (
    <div>
    <Navbar/> 
    <Header/>
    <Social/>
    <Skills/>
    <Works/>
    </div>
  )
}

export default Main   