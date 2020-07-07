import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ImgR from '../images/resume.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
//import { faCalendarAlt } from "@fortawesome/free-brands-svg-icons";
const Resume = () =>{

    return(
        <div className = " container">
              <section id="resume" class="container area">
    <div class="title">
      <div class="section-title">
        <h1>My resume</h1>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-lg-6 col-md-12 col-12">
        <div class="image">
          <img src= {ImgR} class="img-fluid" alt="description"/>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-12">
        <div class="content">
          <h2>Education</h2>
          <div class="education">
            <h6><FontAwesomeIcon icon={faCalendarAlt} /> 2019-2020</h6>
            <h5>Full Stack Web Development</h5>
            <p class="text-muted">Certificate Course From York University</p>
          </div>
          <div class="education">
            <h6><FontAwesomeIcon icon={faCalendarAlt} /> 2012-2016</h6>
            <h5>Bachelor Degree</h5>
            <p class="text-muted">B.E COMPUTER From Parul University</p>
          </div>

        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-10 skill-text">
        <h3>Professional Skills</h3>

        <div class="names my-3">
          <h6>html</h6>
          <p class="text-muted">100%</p>
          <div class="progress">
            <div class="progress-bar bg-warning" style = {{width: "1000%"}} aria-valuenow="75" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>CSS</h6>
          <p class="text-muted">90%</p>
          <div class="progress">
            <div class="progress-bar bg-warning " style = {{width: "90%"}}></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>BOOTSTRAP</h6>
          <p class="text-muted">85%</p>
          <div class="progress">
            <div class="progress-bar bg-warning" style = {{width: "85%"}}></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>JAVASCRIPT</h6>
          <p class="text-muted">80%</p>
          <div class="progress">
            <div class="progress-bar bg-warning " style = {{width: "80%"}}></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>NODEJS</h6>
          <p class="text-muted">80%</p>
          <div class="progress">
            <div class="progress-bar bg-warning " style = {{width: "80%"}}></div>
          </div>
        </div>

      </div>

      <div class="col-lg-6 col-md-12 col-10  skill-text">
        <h3>My Skills</h3>

        <div class="names my-3">
          <h6>Communication</h6>
          <p class="text-muted">80%</p>
          <div class="progress">
            <div class="progress-bar bg-warning" style = {{width: "80%"}} aria-valuenow="75" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>Team Work</h6>
          <p class="text-muted">90%</p>
          <div class="progress">
            <div class="progress-bar bg-warning " style = {{width: "90%"}}></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>Project Management</h6>
          <p class="text-muted">75%</p>
          <div class="progress">
            <div class="progress-bar bg-warning" style = {{width: "75%"}}></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>Creativity</h6>
          <p class="text-muted">84%</p>
          <div class="progress">
            <div class="progress-bar bg-warning " style = {{width: "84%"}}></div>
          </div>
        </div>
        <div class="names my-3">
          <h6>Problem solving</h6>
          <p class="text-muted">90%</p>
          <div class="progress">
            <div class="progress-bar bg-warning " style = {{width: "90%"}}></div>
          </div>
        </div>

      </div>

    </div>
    


  </section>
            
        </div>
    )
}

export default Resume