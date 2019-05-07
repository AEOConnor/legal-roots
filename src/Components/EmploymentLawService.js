import React from 'react';
import { Link } from 'react-router-dom';


const EmploymentLawService = () => {
  return (
    <section className="indService">
      <Link to="/services">Back to Services</Link>
      <h3>Employment Law Services</h3>
      <ul>
        <li>Wrongful Dismissal</li>
        <li>Constructive Dismissal</li>
        <li>Pay Equity</li>
        <li>Employment Standards and Compliance</li>
        <li>Unlawful Reprisal</li>
        <li>Severance Pay</li>
        <li>Workplace Harrasment and Discrimination</li>
      </ul>
    </section>

  )
}

export default EmploymentLawService;