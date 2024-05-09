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

 
          <h1>Academics Placement Events!</h1>
          <p>We brought you everything faculty notes , previous papers , syllabus , placement data , events , clubs ! </p>
           
      <Link to={isLoggedIn ? '/dashboard' : '/login'} class="btnNew">Explore more !</Link>
 
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
                  <p>Faculty Notes, Papers, syllabus</p>
                </Link>
              </div>
              <div class="offering">
                <img src="../../../public/assets/icon2.png" alt="Offering 1" />
                <Link className='features-caption' to={isLoggedIn ? '/placement' : '/login'}>
                  <h3>Placements</h3>
                  <p>Explore Placement data and companies</p>
                </Link>
              </div>


              <div class="offering">
                <img src="../../../public/assets/icon3.png" alt="Offering 1" />
                <Link className='features-caption' to={isLoggedIn ? '/Events' : '/login'}>

                  <h3>Events in IIPS</h3>
                  <p>Explore all events of IIPS</p>

                </Link>
              </div>

            </div>






            <div className="courses-area section-padding40 fix">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-8">
                    <div className="section-tittle text-center mb-55">
                      <h2 className='h2margin'>IIPS Academic Clubs</h2>
                    </div>
                  </div>
                </div>
                <div className="course-area-container">

                  <div className="properties pb-20">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a target='_blank' href="#"><img src="../../../public/assets/aws.jpg" alt="" /></a>
                      </div>
                      <div className="properties-caption">
                        <p className='courseareap'>AWS Club</p>
                        <h3 style={{ textAlign: 'left' }} ><a className='courseareah' target='_blank' href="https://www.meetup.com/indore-india/">AWS Cloud Club at IIPS for MCA and MTECH</a></h3>
                        <p className='courseareap' style={{ textAlign: 'left' }}>
                          The goal of this club is to teach students about the AWS Cloud and its various use cases, including those related to security, AI, business analytics, business transformation, etc.</p>
                        <a target='_blank' href="https://www.meetup.com/indore-india/" className="border-btn border-btn2">Find out more</a>
                      </div>
                    </div>
                  </div>
                  <div className="properties pb-20">
                    <div className="properties__card">
                      <div className="properties__img overlay1">

                        <a href="#"><img src="../../../public/assets/gdsc-club.jpg" alt="" /></a>
 
                      </div>
                      <div className="properties-caption">
                        <p className='courseareap'>GDSC Club</p>
                        <h3 style={{ textAlign: 'left' }}><a className='courseareah' target='_blank' href="https://gdsc.community.dev/iips-international-institute-of-professional-studies-davv-indore-india/">The Google Developer Student Club (GDSC)</a></h3>
                        <p className='courseareap' style={{ textAlign: 'left' }}>The Developer Student Club at IIPS aims to organize and facilitate workshops, hackathons, speaker sessions, and Study Jams to provide students with technical...</p>

                        <a target='_blank' href="https://gdsc.community.dev/iips-international-institute-of-professional-studies-davv-indore-india/" className="border-btn border-btn2">Find out more</a>
                      </div>
                    </div>
                  </div>
                  <div className="properties pb-20">
                    <div className="properties__card">
                      <div className="properties__img overlay1">

                        <a href="#"><img src="../../../public/assets/iips.jpg" alt="" /></a>
        </div>
                      <div className="properties-caption">
                        <p className='courseareap'>All Clubs</p>
                        <h3 style={{ textAlign: 'left' }}><a className='courseareah' target='_blank' href="https://iips.edu.in/sampoorna/Sampoorna.php">Sampoorna All clubs of IIPS in one place</a></h3>
                        <p className='courseareap' style={{ textAlign: 'left' }}>“Sampoorna” (संपूर्ण) : originates from the Sanskrit word for complete, abundant, or bountiful. It is a platform where a range of extracurricular and curricular activities...</p>

                        <a target='_blank' href="https://iips.edu.in/sampoorna/Sampoorna.php" className="border-btn border-btn2">Find out more</a>
                      </div>
                    </div>
                  </div>
                  {/* Repeat similar structures for other courses */}
                </div>
              </div>
            </div>













            <section className="about-area3 fix">
              <div className="support-wrapper align-items-center">
                <div className="right-content3">
                  <div className="right-img">
                    <img src="../../../public/assets/about3.png" alt="" />
                  </div>
                </div>
                <div className="left-content3">
                  <div className="section-tittle section-tittle2 mb-20">
                    <div className="front-text">
                      <h2 className="h2area3">As we did ! Want to help upcoming Juniors.</h2>
                    </div>
                  </div>
                  <div className="single-features">
                    <div className="features-icon">
                      
                    </div>
                    <div className="features-caption">
                      <p className='parea3'> ➡️ Contribute faculties notes , previous papers, syllabus etc with us.</p>
                    </div>
                  </div>
                  <div className="single-features">
                    <div className="features-icon">
                      <img src="../../../public/assets/icon/right-icon.svg" alt="" />
                    </div>
                    <div className="features-caption">
 
                      <p className='parea3'>Spent time in making your own notes but no use after exam don't worry help needy juniors by sharing with us.We will mentions you in website for contributions</p>
 
                    </div>
                  </div>
                 
                  <div className="single-features">
                    <div className="features-icon">
                      <img src="../../../public/assets/img/icon/right-icon.svg" alt="" />
                    </div>
                    <div className="features-caption">
 
                      <p className='parea3 mb-30'>➡️ We will mentions you in website for contributions.</p>
 
                    </div>
                    <div  > 
                    <a href="https://www.linkedin.com/in/sanyam-jain-874892201/" target='_blank' className="event-button" style={{marginTop:10+"px"}}>Connect With Us ↗️</a></div>
                  </div>
                </div>
              </div>
            </section>






            <section>
              <div class="section-container">
                <div class="left-part">
                  <img src="../../../public/assets/about2.png" alt="IIPS Logo" />
                </div>
                <div class="right-part">
                  <h2>Take the new step toward your open source journey by connecting with us.</h2>
                  <p>If you're keen on joining us as a developer, just explore our website thoroughly. Think up about new and more features.Share any good ideas you have with us.You are welcome !</p>
                  <a target='_blank' href="" class="event-button">Click to Contribute !</a>
                </div>
              </div>
            </section>


         






          </div>
        </div>
      </div>
      <Footer />

    </>
  );





}

export default HomePage;
