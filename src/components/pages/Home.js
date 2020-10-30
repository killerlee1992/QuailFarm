import React from "react";
import { NavLink } from "react-router-dom";
import Cages from "./Cages";
import Incubation from './Incubation';
import Bruder from './Bruder';
import Eggs from './Eggs'

export default function () {
  return (
    <div className="home">
      <div className="flex_wrapper_top">
        <div className="cages">
           <Cages />
           <div className='btn_wrapper'>
        <button><NavLink to="/Cages">All Cages</NavLink></button>
        <button>New Cage</button>
          </div>
           
          </div>
        <div>
           <Incubation/>
          <button>
            <NavLink to="/Incubation">Incubators</NavLink>
          </button>
        </div>{" "}
      </div>
      <div className="flex_wrapper_bottom">
        <div className="Bruder">
           <Bruder/>
          <button>
            <NavLink to="/Bruder">Bruder</NavLink>
          </button>
        </div>
        <div className="Eggs">
           <Eggs/>
          <NavLink to="/Eggs">Egg Production</NavLink>
        </div>
      </div>
    </div>
  );
}
