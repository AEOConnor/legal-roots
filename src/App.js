import React, {Component} from 'react';
import Header from './Components/Header.js';
import Nav from './Components/Nav.js'
import Home from './Components/Home.js';
import About from './Components/About.js';
import Services from './Components/Services.js';
import Consultation from './Components/Consultation.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
    
        fName: "",
        lName: "",
        email: "",
        message: "",
        mailSent: false,
        error: null
      
      
    }
  }

  handleFormSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state)

    
  }

  handleChange = (e) => {
    const field = e.target.id;
    const value = e.target.value

    this.setState({
       [field]: `${value}`
    })
  }

  render(){
    return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
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
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
  }
}

export default App;
