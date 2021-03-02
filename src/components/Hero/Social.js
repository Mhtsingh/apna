import React from 'react'
import './Design.css'
import { FaFacebookSquare,FaInstagram,FaLinkedin,FaTwitterSquare } from "react-icons/fa";


const Social = () => {
    return (
       
<div className="icon-bar">
  <a href="#" className="facebook"><FaFacebookSquare/></a> 
  <a href="#" className="instagram"><FaInstagram/></a> 
  <a href="#" className="linkedin"><FaLinkedin/></a> 
  <a href="#" className="twitter"><FaTwitterSquare/></a> 
  
</div>
    )
}

export default Social
