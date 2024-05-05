import React from 'react';
import './HomePage.css'; // Import your styles
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';


import { shallowEqual } from 'react-redux';


const HomePage = () => {

  const { isLoggedIn } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
    }),
    shallowEqual
  );
  return (
    <>
      <div>

        <Navbar />
        <img src="../../../public/assets/h1_hero.png" loading="lazy" alt="IIPS Logo" className='main-img' />
        <div className='home-container'>
          <div className='home-content'>


            <div className='content-below-line'>
              {/* <img src="../../../public/assets/h1_hero.png" loading="lazy" alt="IIPS Logo" /> */}
              {/* <div className='text-container'>


                <div className='home-para'>
                  <h1>Our Moto.... &emsp; &emsp;</h1>
                  We devoted to make this a platform where
                  respective faculties can upload their study material
                  ,suggested online links, referenced
                  vedios links and others things which will
                  be easier for the students to get authenticate
                  academics  materials.
                  we welcomes faculties and students for
                  suggestions and improvements.

                </div>
              </div>
              <div className='image-container'>
                <img

                  src="../../../public/assets/iips-logo.png"
                  loading="lazy"
                  alt="IIPS Logo"
                  className='logo-image'
                />
              </div> */}

            </div>


            <div class="grid-container">

              <div class="offering">
                <img src="../../../public/assets/icon1.png" alt="Offering 1" />
                <Link className='features-caption' to={isLoggedIn ? '/dashboard' : '/login'}>
                  <h3>Explore study </h3>
                  <p>Explore Some study Materialvgh cghg </p>
                </Link>
              </div>
              <div class="offering">
                <img src="../../../public/assets/icon2.png" alt="Offering 1" />
                <Link className='features-caption' to={isLoggedIn ? '/placement' : '/login'}>
                  <h3>Placements</h3>
                  <p>Explore Placement Materialvgh </p>
                </Link>
              </div>


              <div class="offering">
                <img src="../../../public/assets/icon3.png" alt="Offering 1" />
                <Link className='features-caption' to={isLoggedIn ? '/Events' : '/login'}>
                  <h3>Events in IIPs</h3>
                  <p>Join to Explore innner you</p>
                </Link>
              </div>



            </div>



            <section>
              <div class="section-container">
                <div class="left-part">
                  <img src="../../../public/assets/about2.png" alt="IIPS Logo" />
                </div>
                <div class="right-part">
                  <h2>Take the next step toward your personal and professional goals with us.</h2>
                  <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                  <a href="#" class="btn">Join now for Free</a>
                </div>
              </div>
            </section>


            {/*          
            <div className='carousel'>
            

              <img src="../../../public/assets/1_iips.jpg" alt="IIPS" loading="lazy" />
              <img src="../../../public/assets/2_iips_meme.jpg" alt="IIPS" loading="lazy" />
              <img src="../../../public/assets/3_iips-hostel.jpg" alt="IIPS" loading="lazy" />
              <img src="../../../public/assets/4_iips.jpg" alt="IIPS" loading="lazy" />

            </div> */}
          </div>
        </div>
      </div>
      {/* <a href="https://www.linkedin.com/school/iips-davv/" target="_blank" className='iips-linkedin'
      >@International Institute of Professional Studies

        <img src="../../../public/assets/linkedin-logo.jpg"loading="lazy" ></img>

      </a> */}

      <Footer />

    </>
  );





}

export default HomePage;
