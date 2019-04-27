import React from 'react';

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
            <ul>
              <li>Wrongful Dismissal</li>
              <li>Constructive Dismissal</li>
              <li>Pay Equity</li>
              <li>Employment Standards and Compliance</li>
              <li>Unlawful Reprisal</li>
              <li>Severance Pay</li>
              <li>Workplace Harrasment and Discrimination</li>
            </ul>
          </li>


          
          <li className="serviceSmallClaim">
            <h3>Small Claims Court</h3>
            <ul>
              <li>Representation for procedures regarding employment disputes.</li>
            </ul>
          </li>
          <li className="serviceWsib">
            <h3>Workplace Safety and Insurance Board (WSIB)/Workplace Safety and Insurance Appeals Tribunal (WSIAT)</h3>
            <ul>
              <li>Worker’s Benefits claims</li>
              <li>Disability Benefits</li>
              <li>Employer Work Reintegration (WR)/Return to Work (RTW) responsibility and disputes</li>
              <li>Employer Classification Claims</li>
              <li>Representation for appeals at the WSIAT</li>
            </ul>
          </li>
          <li className="serviceEmployer">
            <h3>Employer Legal Advisor for small and medium sized employers</h3>
            <ul>
              <li>Offer ongoing advice regarding employment, workplace safety, occupational health and safety, human rights issue for small employers within ontario.</li>
            </ul>
          </li>
        </ul>

      </div>
    </main>
  )
}

export default Services;