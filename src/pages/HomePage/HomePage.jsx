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
        <div className='main-photo-gap'>
          <img src="../../../public/assets/h1_hero.png" loading="lazy" alt="IIPS Logo" className='main-img' />
        </div>
      <div className='info'>
      <h1>Online Learning Platform</h1>
      <p>gddddddddddddddddddddddddddddddddddddddd</p>
      <a href="/dashboard" class="btnNew">Join now for Free</a>
      
      </div>

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
                  <h3>Study Material</h3>
                  <p>Explore Some study Material . </p>
                </Link>
              </div>
              <div class="offering">
                <img src="../../../public/assets/icon2.png" alt="Offering 1" />
                <Link className='features-caption' to={isLoggedIn ? '/placement' : '/login'}>
                  <h3>Placements</h3>
                  <p>Explore Placement Material . </p>
                </Link>
              </div>


              <div class="offering">
                <img src="../../../public/assets/icon3.png" alt="Offering 1" />
                <Link className='features-caption' to={isLoggedIn ? '/Events' : '/login'}>
 
                  <h3>Events in IIPS</h3>
                  <p>Click to Contribute</p>

                </Link>
              </div>

            </div>


<div  className='social-grp-main-container'>


  <h2 >Our Offerings</h2>
  <div className='social-grp-content'>
    <div>
    <img src="../../../public/assets/about2.png" alt="IIPS Logo" />
    <h3>Google Cloud</h3>
    </div>

    <div>

    <img src="../../../public/assets/about2.png" alt="IIPS Logo" />
      <h3>AWS</h3>
    </div>
    <div>
    <img src="../../../public/assets/about2.png" alt="IIPS Logo" />
      <h3>Azure</h3>
    </div>
  </div>
</div>





            <section>
              <div class="section-container">
                <div class="left-part">
                  <img src="../../../public/assets/about2.png" alt="IIPS Logo" />
                </div>
                <div class="right-part">
 
                  <h2>Take the new step toward your open source journey by connecting with us.</h2>
                  <p>If you're keen on joining us as a developer, just explore our website thoroughly. Think up about new and more features.Share any good ideas you have with us.You are welcome !</p>
                  <a href="#" class="btnNew">Click to Contribute</a>

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
