import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../images/11.png';
import Img2 from '../images/22.png';
import Img3 from '../images/5.png';
import Img4 from '../images/33.png';
import Img5 from '../images/44.png';
import Img6 from '../images/7.png';
import Img7 from '../images/66.png';
import Img8 from '../images/88.png';
import Img9 from '../images/9.png';


const Work = () => {

    return (
        <div className = "container">
            <section id="work" class="area middle portfolio container">
                <div class="title ">
                    <div class="section-title text-center">
                        <h1>My Portfolio</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="center">
                            <a href="images/1.png" data-lightbox="mygallery"><img
                                src= {Img1} alt="description" /></a> </div>
                        <div class="center">
                            <a href="images/2.png" data-lightbox="mygallery"><img class="img-fluid"
                                src= {Img2} alt="description"/></a>
                        </div>
                        <div class="center">
                            <a href="images/5.png" data-lightbox="mygallery"><img class="img-fluid"
                               src= {Img3} alt="description" /></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="center">
                            <a href="images/3.png" data-lightbox="mygallery"><img class="img-fluid" src= {Img4}  alt="description"/></a>
                        </div>
                        <div class="center">
                            <a href="images/4.png" data-lightbox="mygallery"><img class="img-fluid"
                               src= {Img5} alt="description" /></a>
                        </div>
                        <div class="center">
                            <a href="images/7.png" data-lightbox="mygallery"><img class="img-fluid" src= {Img6} alt="description" /></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="center">
                            <a href="images/6.png" data-lightbox="mygallery"><img class="img-fluid"
                                src= {Img7} alt="description" /></a>
                        </div>
                        <div class="center">
                            <a href="images/8.png" data-lightbox="mygallery"><img class="img-fluid"
                                src= {Img8} alt="description" /></a>
                        </div>
                        <div class="center">
                            <a href="images/9.png" data-lightbox="mygallery"><img class="img-fluid"
                                src= {Img9} alt="description"  /></a>
                        </div>
                    </div>
                    </div>
  </section>
            
        </div>
    )
}

export default Work;