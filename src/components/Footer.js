import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

//import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () =>{
 return(
     <div>
         <footer>
    <div class="container">
        <div class="row">
            <div class="logo">Divya</div>
            <div class="social">
                <a href="#/"><i class="fa fa-facebook"></i></a>
                <a href="#/"><i class="fa fa-twitter"></i></a>
                <a href="#/"><i class="fa fa-instagram"></i></a>
                <a href="#/"><i class="fa fa-linkedin"></i></a>
                <a href="#/"><i class="fa fa-github"></i></a>
            </div>
        </div>
    </div>

</footer>
<section class="copyright">
    <div class="container">
        <p>&copy; 2020 copyright all right reserved</p>
    </div>
</section>

     </div>
 )

}
export default Footer;