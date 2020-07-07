import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Imgp from '../images/nick.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'


const About = () =>{

    return(
        <div className = "container">
     <div className="area container" id="about" >
    <div className="title">
      <div className="section-title">
        <h1>About Me</h1>
        <p className="small text-uppercase">information about me</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-5 col-md-12 col-12">
        <div className="image">
          <img src= {Imgp}  className="img-fluid" alt =" divya" />
        </div>
      </div>
      <div className="col-lg-7 col-md-12 col-12">
        <div className="content">
          <div className="text">
            <h4>I'M <span>Divya Patel</span></h4>
            <p className="text-muted">I'm creative web developer based in Canada, specializing in User Interface Design and
              Development. I build clean, appealing, and functional interfaces which comply with the latest web
              standards. I have rich experience in web site design & building and customization.</p>
            <div className="info">
              <div className="list">
                <label><FontAwesomeIcon icon={faAngleRight} /> Birthday:</label>
                <p>24th November 1993</p>
              </div>
              <div className="list">
                <label> <FontAwesomeIcon icon={faAngleRight} /> Email:</label>
                <p>pdivyapatel@outlook.com</p>
              </div>
              <div className="list">
                <label><FontAwesomeIcon icon={faAngleRight} /> Age:</label>
                <p>26 yr</p>
              </div>
              <div className="list">
                <label><FontAwesomeIcon icon={faAngleRight} /> Phone:</label>
                <p>437-998-4563</p>
              </div>
              <div className="list">
                <label><FontAwesomeIcon icon={faAngleRight} /> Residance:</label>
                <p>Canada</p>
              </div>
              <div className="list">
                <label><FontAwesomeIcon icon={faAngleRight} /> Address:</label>
                <p>65 Davenfield Circle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="social-link">
          <a href="#/"><FontAwesomeIcon icon={faFacebookF} /> </a>
          <a href="#/"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#/"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>

    </div>

  </div>

        </div>
    )
}

export default About