import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faMagic, faLaptopCode, faUsersCog, faCode } from '@fortawesome/free-solid-svg-icons';

const Services = () =>{

    return(
        <div>
              
  <section id="services" className="area middle">
    <div className="title ">
      <div className="section-title text-center">
        <h1>My services</h1>
        <p className="small text-uppercase">What I do?</p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="service-text text-center">
          <FontAwesomeIcon icon={faHtml5} className="fa-3x" />
            <h4>web development</h4>
            <p className="text-muted">Not limited to just one platform & Being one of the most sought after web development
              companies all around the globe.</p>
          </div>
          <div className="service-text text-center">
          <FontAwesomeIcon icon={faLaptopCode} className="fa-3x" />
            <h4>web design</h4>
            <p className="text-muted">I design & develop customer friendly websites that promote businesses. I made
              responsive to make sure I work seamlessly across all platforms and devices.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className="service-text text-center">
          <FontAwesomeIcon icon={faMagic} className="fa-3x" />
            <h4>ui/ux development</h4>
            <p className="text-muted">A dedicated UI/UX Designer will give your website a touch of expertise in the form of
              enhanced loading time, which will make the audience to attract to your site.</p>
          </div>

          <div className="service-text text-center">
          <FontAwesomeIcon icon={faUsersCog} className="fa-3x" />
            <h4>web hosting</h4>
            <p className="text-muted">A web host, or web hosting service provider, is a business that provides the
              technologies and services needed for the website or webpage to be viewed in the Internet.</p>
          </div>

        </div>

        <div className="col-lg-4 col-md-6 col-12">

          <div className="service-text text-center">
          <FontAwesomeIcon icon={faCode} className="fa-3x" />
            <h4>clean code</h4>
            <p className="text-muted">For better readability of the code and facilitate easy maintenance and update, W3C
              compliant and neat code</p>
          </div>

        </div>
      </div>
    </div>




  </section>
            
        </div>
    )
}

export default Services;