import React from 'react';
import {Link} from 'react-router-dom';

const WSIBService = () => {
  return (
    <section>
      <Link to="/services">Back to Services</Link>
      <h3>Workplace Safety and Insurance Board (WSIB)/Workplace Safety and Insurance Appeals Tribunal (WSIAT)</h3>
      <p>WSIB is an independent and quasi - judicial institution whose sole jurisdiction is on workplace injuries and work - related illnesses.</p>
      <p>There are two decision making levels within WSIB, a decision from a Case Manager(CM) and a decision from an Appeals Resolution Office(ARO).A CM’s decision is the first level decision and can be appealed to an ARO.</p>
      <p>WSIAT is an independent, separate from WSIB, and quasi - judicial institution which only hears appeals from workers or employers there they are in disagreement with an ARO decision.</p>
      <p>Our services include offering legal advice and / or represent parties with issues which fall under:</p>
      <ul>
        <li>Worker Benefit claims</li>
        <li>Disability Benefits</li>
        <li>Employer Work Reintegration(WR) / Return to Work(RTW) responsibility and disputes</li>
        <li>Employer Classification Claims</li>
        <li>Legal Representation at WSIB and / or WSIAT</li>
      </ul>
    </section>
  )
}

export default WSIBService;