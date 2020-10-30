import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Incubator extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="Titles">Incubation</div>
        
          <div className="Incubators">
            <button> Incubator 1 </button>
            <button> Incubator 2 </button>
            <button> Incubator 3 </button>
            <button> Incubator 4 </button>
            <button> Incubator 5 </button>
            <button> Incubator 6 </button>
          </div>
          <div className="btn_wrapper">
            <button>
              <NavLink to="/Cages">All Cages</NavLink>
            </button>
            <button>New Cage</button>
          </div>
        </div>
    );
  }
}
export default Incubator;
