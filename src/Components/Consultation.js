import React from 'react';
import consultation from '../assets/consultation.jpg';
const Consultation = (props) => {

  return (
    <main>
      <h3>Contact us for an appointment for a 30-minute free consultation
        </h3>
      <div className="wrapper Consultation">
        
        <div className="consultationPhoto">
          <img src={consultation} alt="Coffee cup."/>
        </div>
        <div className="consultationInfo">
          <p>You may book a free consultation via telephone, email, or simply leave us a message below. If you wish to accept our free consultation, you would need to attend either a telephone conversation or an in-person meeting at our office.</p>
          <div>
            <form action="/action_page.php" onSubmit={props.handleFormSubmit}>
              <label>First Name</label>
              <input type="text" id="fName" name="firstname" value={props.fName} onChange={props.handleChange} placeholder="Your name.." />
              <label>Last Name</label>
              <input type="text" id="lName" name="lastname" value={props.lName} onChange={props.handleChange} placeholder="Your last name.." />


              <label>Email</label>
              <input type="email" id="email" name="email" value={props.email} onChange={props.handleChange} placeholder="Your email" />

              <label>Subject</label>
              <textarea id="message" name="subject" valeue={props.message} onChange={props.handleChange} placeholder="Write something.."></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>

    </main >
  )


}

export default Consultation;