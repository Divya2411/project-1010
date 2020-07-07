
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Img from '../images/dp.jpg';
import Typical from 'react-typical';
import Scrollspy from '../../node_modules/react-scrollspy/lib/scrollspy'
import { HashLink as Link } from 'react-router-hash-link';


const Home = () =>{
  window.addEventListener("scroll", function(){
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
  <section id="home" className="home text-white">
    <div className="page-table">
      <div className="table-cell ">
        <div className="hero">
          <img src= {Img}  alt="divya-patel" />
        </div>
        <h1>Hi, I'm Divya Patel</h1>
        <h2 className=" text-uppercase">
        <Typical
        steps={["i'm ui/ux designer", 1000, "i'm Web Developer", 1000, "LET'S WORK TOGETHER", 1000]}
        loop={Infinity}
        wrapper="p"
      />
        </h2>
        <button type="button" className="btn btn-outline-light">Download CV</button>
      </div>
    </div>

  </section>

  </div>
    )
}

export default Home;