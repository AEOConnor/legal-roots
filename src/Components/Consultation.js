import React from 'react';

const Consultation = (props) => {

    return (
    <main>
      <p>Contact Me</p>
      <div>
        <form action="/action_page.php" onSubmit={props.handleFormSubmit}>
          <label>First Name</label>
          <input type="text" id="fName" name="firstname" value={props.fName} onChange={props.handleChange} placeholder="Your name.." />
          <label>Last Name</label>
          <input type="text" id="lName" name="lastname" value={props.lName}  onChange={props.handleChange}placeholder="Your last name.." />


          <label>Email</label>
          <input type="email" id="email" name="email" value={props.email} onChange={props.handleChange} placeholder="Your email" />

          <label>Subject</label>
          <textarea id="message" name="subject" valeue={props.message} onChange={props.handleChange}placeholder="Write something.."></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </main >
  )

  
}

export default Consultation;