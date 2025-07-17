import React from 'react'
import profilePic from "../src/assets/image.jpeg"
import { FaFacebookF } from "react-icons/fa";

const App = () => {
  return (
    <div className=''>
      <img src={profilePic} className=' h-20 w-20'></img>
      <span><FaFacebookF /></span>
    </div>
  )
}

export default App