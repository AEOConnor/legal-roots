import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main className="Services">
      <div className="wrapper">
        <h2>Professional Services</h2>
      </div>
      <div >
        <ul className="servicesGallery">
          <li className="serviceEmploymentLaw">
            <h3>Employment Law</h3>
            <p>We offer various advice and/or provide legal opinions on issues arose under Employment law. <Link to="/employmentlaw">Learn More</Link></p>
          </li>
 
          <li className="serviceSmallClaim">
            <h3>Small Claims Court</h3>
            <p>Legal Representation for procedures in small Claims Court with a specialty of employment disputes. <Link to="/smallclaimscourt">Learn More</Link> </p>
          </li>
          <li className="serviceWsib">
            <h3>Workplace Safety and Insurance Board (WSIB)/Workplace Safety and Insurance Appeals Tribunal (WSIAT)</h3>
            <p>We provide legal advice and/or represent either workers who suffer work-related injuries or employer for procedures at WSIB/WSIAT. <Link to="/wsib">Learn More</Link></p>
          </li>
          <li className="serviceEmployer">
            <h3>Legal Advisor for Small and Medium Sized Employers</h3>
            <p>We offer ongoing advice regarding employment, workplace safety, occupational health and safety, human rights issue for small employers within Ontario. <Link to="/legaladvisor">Learn More</Link></p>
          </li>
        </ul>

      </div>
    </main>
  )
}

export default Services;