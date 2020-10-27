import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


 

import NavHeaderBar from "./nav/NavHeaderBar";
import NavBar from "./nav/NavBar";
import Home from "./pages/Home";
import Cleaning from "./pages/Cleaning";
import About from "./pages/About";
import Incubation from "./pages/Incubation";
import EggProduction from "./pages/Eggs";



export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavHeaderBar/>
            <NavBar/>
        
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Cleaning" component={Cleaning} />
              <Route path="/About" component={About} /> 
              <Route path="/Incubation" component={Incubation} /> 
              <Route path="/EggProduction" component={EggProduction} /> 
            </Switch>
            
          </div>
        </Router>
       
      
      </div>
    );
  }
}
