import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

class Contact extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const content = document.getElementById('content').value;
        axios({
            method: "POST", 
            url:"http://localhost:4000/contact_form/entries", 
            data: {
                name: name,   
                email: email, 
                phoneNumber: phoneNumber, 
                content: content
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
    return(
        <div>
                <div id="contact" className="area contact middle">
    <div className="title ">
      <div className="section-title text-center">
        <h1>Contact Me</h1>
      </div>
    </div>
    <div className="container">
      
        <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
                <div className="contact-icon text-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x" />
                 <p>65 Davenfield Circle, Canada</p>
                </div>
                </div> <div className="col-lg-4 col-md-4 col-12">
                  <div className="contact-icon text-center">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
                   <p>Pdivyapatel@outlook.com</p>
                  </div>
                  </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="contact-icon text-center">
                    <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x" />
                   <p>+1 (437) 998-4563</p>
                  </div>
                  </div>

                
                </div>

                <div className="container">   
      <div className="row">
          <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
            <form action="/action_page.php"  id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                 
                  <input type="text" className="form-control"  placeholder=" Enter your name " id="name"  required autocomplete="off"/>
                </div>
                <div className="form-group">                        
                    <input type="email" className="form-control"  placeholder="Enter email" id="email"   required autocomplete="off"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter phone number" id="phoneNumber" required autocomplete="off"/>
                  </div>
                  <div className="form-group">
                   
                    <textarea className="form-control" rows="4" placeholder="Enter your message" id="content"  />
                  </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox"/> Remember me
                  </label>
                </div>
                <div className="d-flex justify-content-center form-button">
                <button type="submit" className="btn">Submit</button>
            </div>
            </form>
          </div>
          </div>
    
  



</div>
            
        </div>
        </div>
        </div>
    )
}
}
export default Contact;