import React, { Component } from 'react';
import {FaPhone, FaInstagramSquare, FaFacebook, } from 'react-icons/fa';
import { AiTwotoneMail } from "react-icons/ai";

export default class NavHeaderBar extends Component {
    constructor(){
        super();
    }
   render() {
     return(
        <div className='nav-header-bar'>
           
           
             <div className="Contact-information">
               <div className="Email"> <AiTwotoneMail/>KillerLee1992@gmail.com</div>
               <div className="Phone"><FaPhone/> 601-337-4483</div>
               
         
               
              </div>
              <div className="header-img"> <img src='assets/Quail.jpg'/></div>
              <div className='other-links'>
               <div className='Facebook'><FaInstagramSquare/></div>
               <div className='Instagram'><FaFacebook/></div>
               </div> 

        </div>
            );
        }
    }