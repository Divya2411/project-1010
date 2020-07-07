import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from '../../node_modules/react-scrollspy/lib/scrollspy'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () =>{
    window.addEventListener("click", function(){
      var header = this.document.querySelector('header')
      header.classList.toggle("sticky", window.scrollY > 0);
    
  
  })
      return(
          <div>
           <Scrollspy items={ ['home', 'about', 'services','resume','work','contact'] } currentClassName="active">
          <header className="nav fixed-top  ">
      <nav className="navbar navbar-expand-lg navbar-dark p-3 container">
        <a className="navbar-brand" href="#home">Divya</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
       
          <ul className="navbar-nav ml-auto text-uppercase">
            <li className="nav-item active ">
            <Link className="nav-link" smooth to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" smooth to="/about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" smooth to="/services">services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" smooth to="/resume">resume</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" smooth to="/work">WORK</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" smooth to="/contact">contact</Link>
            </li>
  
  
          </ul>
          
        </div>
        
      </nav>
      
    </header>
   
    </Scrollspy>
    </div>
    )
      }
    export default Navbar;