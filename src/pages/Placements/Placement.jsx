import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Placement.css';
const Placement = () => {
  return (
    <>
       <Navbar />
    
       <section className="team-area section-padding40 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2 className='teamh'>Community experts</h2>
            </div>
          </div>
        </div>
        <div className="team-active">
          <div className="single-cat text-center">
            <div className="cat-icon">
              <img src="../../../public/assets/team1.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5><a href="services.html">Mr. Urela</a></h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <img src="../../../public/assets/team2.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5><a href="services.html">Mr. Uttom</a></h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <img src="../../../public/assets/team3.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5><a href="services.html">Mr. Shakil</a></h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <img src="../../../public/assets/team4.png" alt="" />
            </div>
            <div className="cat-cap">
              <h5><a href="services.html">Mr. Arafat</a></h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Placement;
