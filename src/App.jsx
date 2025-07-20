import React from 'react'
// import profilePic from "../src/assets/image.jpeg"
import { FaFacebookF } from "react-icons/fa";
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl">
        {/* <img src={profilePic} className=' h-20 w-20'></img>
        <span><FaFacebookF /></span> */}
        
        <div id="home" className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div id="about">
          <Aboutme />
        </div>
        <Technologies />
        <Projects />
        <Certifications />
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App