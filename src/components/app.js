import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cleaning from "./pages/Cleaning";
import About from "./pages/About";
import NavBar from "./nav/NavBar";
import Incubation from "./pages/Incubation";
import cages from "./pages/cages";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Cleaning" component={Cleaning} />
              <Route path="/About" component={About} /> 
              <Route path="/Cages" component={cages} /> 
              <Route path="/Incubation" component={Incubation} /> 
            </Switch>
            
          </div>
        </Router>
       
      
      </div>
    );
  }
}
