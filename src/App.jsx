import React from 'react'
// import profilePic from "../src/assets/image.jpeg"
import { FaFacebookF } from "react-icons/fa";
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'

const App = () => {
  return (
    <div>
      {/* <img src={profilePic} className=' h-20 w-20'></img>
      <span><FaFacebookF /></span> */}
      <Navbar />
      <Aboutme />
    </div>
  )
}

export default App