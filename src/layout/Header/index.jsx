import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components';
import './style.css'

export const Header = () => {
    return(
        
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <BackButton className="backButton" />
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/experience'>Experience</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
              
            
        </nav>
    )
};