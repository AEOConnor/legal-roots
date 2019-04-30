import React from 'react';
import aboutServices2 from '../assets/aboutServices2.jpg';

const Contact = () => {
  return (
    <main>
      <div className="wrapper Contact">
        <div className="contactInfo">
          <h3>LegalRoots</h3>
          <a href="https://www.google.com/maps/place/33+Bloor+St+E+5th+Floor,+Toronto,+ON+M4W+3H1/@43.6698664,-79.3877239,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34addb89fcc5:0xe873839a2079abb5!8m2!3d43.6698625!4d-79.3855352" target="_blank">33 Bloor Street East, 5th Floor, Toronto, Ontario
M4W3H1</a>
        <p>Phone <a href="telto:647-890-2642">(647) 890 2642</a></p>
        <p>Business hours: 8:30 AM to 5:00 PM </p>
          <p>If you inquire specific information about our services and fees, please contact us at  <a href="mailto:info@legalroots.ca">info@legalroots.ca</a> </p>
   





        </div>
        <div className="contactPhoto">
          <img src={aboutServices2} alt=""/>
        </div>
      </div>
    </main>
  )
}

export default Contact;