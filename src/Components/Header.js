import React from 'react';
import {Link} from 'react-router-dom';
import legalRootsLogo from '../assets/legalRootsLogo.png';

const Header = () => {
  return(
    <header className="wrapper">
      <div className="logo">

        <img src={legalRootsLogo} alt="LegalRoots Logo."/>
        
      </div>
      <div>
        <h1>LegalRoots</h1>
        <p>Legal Services</p>
      </div>
      <div>
        <Link to="/consultation">Book a Consultation</Link>
      </div>
    </header>
  ) 
}


export default Header;