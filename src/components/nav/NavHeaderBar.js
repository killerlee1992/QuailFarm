import React, { Component } from 'react';
import {FaPhone,FaAt, FaInstagramSquare, FaFacebook } from 'react-icons/fa';

export default class NavHeaderBar extends Component {
    constructor(){
        super();
    }
   render() {
     return(
        <div className='nav-header-bar'>
             <div className="Contact-information">
               <div className="Email"><FaAt/>KillerLee1992@gmail.com</div>
               <div className="Phone"><FaPhone/> 601-337-4483</div>
               <div className='other-links'>
               <div className='Facebook'><FaInstagramSquare/></div>
               <div className='Instagram'><FaFacebook/></div>
               </div>
           </div>


        </div>
            );
        }
    }