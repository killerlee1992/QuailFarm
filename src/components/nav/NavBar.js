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
           
        </div>
            );
        }
    }