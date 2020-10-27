import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    constructor(){
        super();
    }
   render() {
     return(
        <div className='nav'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Incubation">Incubation</NavLink>
            <NavLink to="/Cleaning">Cleaning</NavLink>
            <NavLink to="/EggProduction">Egg Production</NavLink>
        </div>
            );
        }
    }