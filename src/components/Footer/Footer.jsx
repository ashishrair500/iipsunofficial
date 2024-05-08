import React from 'react';
import "./Footer.css";
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/actionCreators/authActionCreator';

const Footer = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  // const location = useLocation();
  const dispatch = useDispatch();
  return (
    <footer>
      <div className="footer-wrappper footer-bg">

        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">

                  <a href="https://www.dauniv.ac.in/" target='_blank' className='footer-text'>
                        <img 
                          src="../../../public/assets/favicon.ico"
                          alt="Davv Logo"
                          className='footer-logo'
                        /> IIPS DAVV
                      </a>
                   
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>Welcome to International Institute of Professional Studies</p>
                      </div>
                    </div>
                    <div className="footer-social">
                      <a href="https://www.linkedin.com/school/iips-davv/" target='_blank'>
                        <img
                          src="../../../public/assets/linkedin.svg"
                          alt="LinkedIn"
                          className='social-links-icon'
                        />
                      </a>


                      <a href="https://www.instagram.com/iips_davv_indore?igsh=MWV6b296dzA3MnU2" target='_blank'>
                        <img
                          src="../../../public/assets/insta.svg"
                          alt="Instagram"
                          className='social-links-icon'
                          style={{marginLeft:10 +"px"}}
                        />
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Important Links</h4>
                    <ul className="list-unstyled">
                      <li><a href="https://iips.edu.in/" target="_blank">IIPS Official</a></li>
                      <li><a href="https://www.dauniv.ac.in/" target="_blank">Davv Official</a></li>
                      <li><a href="https://swayam.gov.in/" target="_blank">Swayam Portal</a></li>
                       
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="">
                  <div className="footer-tittle">
                    <h4>Current</h4>
                    <ul className="list-unstyled">
                      <li><a href="https://drive.google.com/file/d/1bgUJrETbFwL2FQnayw0HXDE14bIpNUbp/view?usp=drivesdk" target="_blank">Academic Calendar</a></li>
                      <li><a href="https://drive.google.com/file/d/1SOP1oO4tKTByTqBKoXsoJCk1Is094DXz/view" target="_blank">Exam Time Tables</a></li>
                      <li><a href="https://davv.mponline.gov.in/Portal/services/DAVVDASHBOARD/DAVVHOME.aspx" target="_blank">Davv Mponline</a></li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Other</h4>
                    <ul className="list-unstyled">
                      <li><a href="http://www.lib.dauniv.ac.in/" target="_blank"> Central Library</a></li>
                      <li><a href="https://www.dauniv.ac.in/utdresults" target="_blank">Results</a></li>
                      <li><a href="/AboutUs" target="_blank">Contact Us</a></li>
                     
                       
                      <button className='btnNew' onClick={() => dispatch(signOutUser())}>
              
              Logout
             
    
              </button>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div >
            <div >
              <div className="row d-flex align-items-center">
                <div className="col-xl-12">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright ©{new Date().getFullYear()} All rights reserved by IIPS Unofficial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
