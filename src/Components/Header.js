import React from 'react';
import {Link} from 'react-router-dom';
import legalRootsLogo from '../assets/legalRootsLogo.png';

const Header = () => {
  return(
    <header className="wrapper">
      <div className="logo">

        <img src={legalRootsLogo} alt="Legal Roots Logo."/>
        
      </div>
      <div>
        <h1>Legal Roots</h1>
        <p>Legal Services</p>
      </div>
      <div>
        <button>Consultation</button>
      </div>
    </header>
  ) 
}


export default Header;