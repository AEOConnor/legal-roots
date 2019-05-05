import React, { Component } from 'react';
import Header from './Components/Header.js';
import Nav from './Components/Nav.js'
import Home from './Components/Home.js';
import About from './Components/About.js';
import Services from './Components/Services.js';
import EmploymentLawService from './Components/EmploymentLawService.js';
import SmallClaimService from './Components/SmallClaimService.js';
import WSIBService from './Components/WSIBService.js';
import LegalAdvisorService from './Components/LegalAdvisorService.js';
import Consultation from './Components/Consultation.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {

      fName: "",
      lName: "",
      email: "",
      message: "",
      mailSent: false,
      error: null

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }



  async handleFormSubmit(e) {
    e.preventDefault()
    console.log(this.state)

    const form = await axios.post('/test.php', {
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      message: this.state.message
    })

  }


  handleChange = (e) => {
    const field = e.target.id;
    const value = e.target.value

    this.setState({
      [field]: `${value}`
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/employmentlaw" component={EmploymentLawService} />
          <Route path="/smallclaimscourt" component={SmallClaimService} />
          <Route path="/wsib" component={WSIBService} />
          <Route path="/legaladvisor" component={LegalAdvisorService} />
          <Route path="/contact" component={Contact} />

          <Route path="/consultation" render={() => {
            return (
              <Consultation
                fName={this.state.fName}
                lName={this.state.lName}
                email={this.state.email}
                message={this.state.message}
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
              />
            )
          }}
          />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
