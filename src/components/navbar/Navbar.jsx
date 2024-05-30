import React from 'react';
import { RiMenuLine, RiCloseLin } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/slack.png'


const Navbar = () => {
  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>    
    </div>
  )
}

export default Navbar
