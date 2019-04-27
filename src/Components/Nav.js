import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="navBar wrapper">
        <ul className="navLinks">
          <li><Link to="/" exact>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/consultation">Consultation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navContact">
          <a href="mailto:info@legalroots.ca">info@legalroots.ca</a>
          <a href="tel:123-456-7890">123-456-7890</a>
        </div>
      </div>
    </div>
  )
}

export default Nav;