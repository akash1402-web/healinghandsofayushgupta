import React from 'react';
import homeicon from "./images/home icon.png";
import {NavLink} from "react-router-dom";
import MyCarousel from './MyCarousel';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HomeCard from './HomeCard';
const Home = () => {
  return (
    <>
    <section id="header" className='d-flex align-items-center'>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h1>
                Watch Your Breathe <br></br>Relax Your Mind
              </h1>
              <p className='my-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam saepe soluta sapiente eligendi ea iusto voluptatibus
                 
              </p>
              <div className='mt-3'>
                <NavLink to="/" className='btn-get-started'>Book now</NavLink>
              </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={homeicon} className='img-fluid animated' alt="homeimg"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style={{paddingTop:"100px"}}>
    <MyCarousel/>
    </div>
    <div>
      <center style={{paddingTop:"100px",fontFamily:"open sans",fontWeight:"400",fontSize:"36px"}}>Ayush Gupta</center>
    </div>
    <div>
      <HomeCard/>
    </div>
    </>
  )
}

export default Home;
