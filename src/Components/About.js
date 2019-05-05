import React from 'react';
import aboutServices1 from '../assets/aboutServices1.jpg';
import aboutServices2 from '../assets/aboutServices2.jpg';
import aboutServices3 from '../assets/aboutServices3.jpg';
import panDong from '../assets/panDong.jpg';

const About = () => {
  return (
    <main className="About">
      <div className="wrapper">
        <div className="aboutContainer aboutHeader">
          <h2>About Us</h2>
          <p>LegalRoots is funded by certified and experienced paralegal and aims at providing various legal support through our team. We care for your needs and strive to serve while keeping costs affordable and accessible. Let us help you!</p>
          <div className="aboutValues">
            <h3>Our Values</h3>
            <ul>
              <li>Professionalism</li>
              <li>Reliability</li>
              <li>Affordability</li>
              <li>Consistency</li>
            </ul>
          </div>
        </div>
        <div className="aboutContainer aboutParalegal">
          <h3>What Is a Paralegal</h3>
          <p>A Paralegal is a legal professional licenced by Law Society of Ontario. Under the Law Society of Ontario’s By-Law 4, a Paralegal is authorized to appear as a representative before the Small Claims Court, the Ontario Court of Justice under Provincial Offences Act and for summary conviction offences under the Criminal Code. In addition, a Paralegal is also allowed to represent someone before administrative tribunals. Offering legal advice, preparing documents, and negotiating for matters in above courts and tribunals are also within a Paralegal’s scope of practice.</p>
          <p>The public are now more and more willing to seek advice and representation from a Paralegal for their matters because a good Paralegal serves in a timely, cost-effective, and professional manner.</p>
          <p>A Paralegal is regulated by the Law Society of Ontario and has to follow various legislations in order to maintain their professionalism, quality of service, competence and so forth.</p>
        </div>
        <div className="aboutContainer aboutWeOffer">
          <h3>What We Offer</h3>
          <p>We serve for the best interest of you and ensure our quality of services. Working with us, you will receive valuable legal advice and representation and excellent client experience. You will be informed and updated on every stage of your case development in a timely manner.</p>
          <p>We are taking steps to establish paperless work environment. You benefit that communication between us will be more manageable and you will have quicker access to our services.</p>
          <p>We focus on your experience with us. We ensure transparency and inclusivity and do our best to meet your needs.</p>
        </div>
        
        <div className="aboutContainer">
          <h3>Our Team</h3>
          <div className="aboutOurTeam"> 
            <figure>
            <img src={panDong} alt="Pan Dong, Director and Founder of LegalRoots" />
            <figcaption>Pan Dong, Director and Founder of LegalRoots</figcaption>
          </figure>
          <div>
            <p>Pan has devoted his career to upholding the law by providing his legal services to clients for over nine years. Licensed by the Law Society of Ontario (LSO), Pan specializes in employment law, workplace injury claims and small claims court matters and is eager to meet and represent you. Pan was licenced by Beijing Justice Bureau as a lawyer since 2011. In 2014, he moved to Canada and continued pursuing his legal career. Before funding LegalRoots, He was employed by Workplace Safety and Insurance Appeals Tribunal for over two years.</p>
            <p>Pan speaks Mandarin and English, and in his spare time, assists newcomers settling into Canada.</p>
          </div>
          </div>
          
        </div>
      </div>
      <div className="aboutImageGallery">
        <ul>
          <li>
            <img src={aboutServices1} alt="Individual leading a meeting and using hand gestures to explain their point." />
          </li>
          <li>
            <img src={aboutServices2} alt="Beautiful sunset overlooking the Toronto skyline." />
          </li>
          <li>
            <img src={aboutServices3} alt="Cup of coffee, open notebook, and laptop keyboard." />
          </li>
        </ul>
      </div>
    </main>
  )
}

export default About;





