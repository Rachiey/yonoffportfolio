import React from 'react';
// import { useNavigate } from 'react-router';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './style.css';



export const SocialLinks = () => {


    return (
    <div className="iconLinks">
    <a href="https://github.com/Rachiey" target="_blank" className="home__social-icon">
      <i className="Github"> <FaGithub/></i>
    </a>
    <a href="https://www.linkedin.com/in/rachaelyonoff/" target="_blank" className="home__social-icon">
      <i className="LinkedIn"><FaLinkedin/></i>
    </a>
    <a href="mailto:rachaelyonoff@gmail.com" className="home__social-icon">
      <i className="Envelope"><FaEnvelope/></i>
    </a>
  </div>
    )
}

export default SocialLinks;

