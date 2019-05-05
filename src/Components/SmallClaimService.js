import React from 'react';
import { Link } from 'react-router-dom';


const SmallClaimService = () => {
  return (
    <section>
      <Link to="/services">Back to Services</Link>
      <h3>Small Claims Court Services</h3>
      <p>Small Claims Court is a division of the Ontario Superior Court of Justice. Its jurisdiction is on monetary disputes with a maximum of $25,000 or return of property with a maximum value of $25,000 (excluding legal fees). Small Claims Court serves in a relatively simple and quick way for someone in dispute.</p>
      <p>Our services include filing claims/defence, filing motions, attending settlement conferences, negotiating, attending trials, and enforcing court orders, on your behalf. We are devoted to serve you in order to meet all procedural requirements and present proper arguments during trials.</p>
      <p>We also offer flexible services to meet our clients’ needs. Our clients may opt to retain us for an entire procedure, or just retain us for a specific stage within a procedure as long as it is practicable.</p>
  
    </section>

  )
}

export default SmallClaimService;