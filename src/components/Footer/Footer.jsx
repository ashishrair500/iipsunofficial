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
                        <p>The automated process starts as soon as your clothes go into the machine.</p>
                      </div>
                    </div>
                    <div className="footer-social">
                      <a href="https://www.linkedin.com/in/sanyam-jain-874892201/" target='_blank'>
                        <img
                          src="../../../public/assets/linkedin.svg"
                          alt="LinkedIn"
                          className='social-links-icon'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Our solutions</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Design &amp; creatives</a></li>
                      <li><a href="#">Telecommunication</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Programing</a></li>
                      <li><a href="#">Architecture</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Support</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Design &amp; creatives</a></li>
                      <li><a href="#">Telecommunication</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Programing</a></li>
                      <li><a href="#">Architecture</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Company</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Design &amp; creatives</a></li>
                      <li><a href="#">Telecommunication</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Programing</a></li>
                      <li><a href="#">Architecture</a></li>
                      <button className='btn' onClick={() => dispatch(signOutUser())}>
              
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
          <div className="container">
            <div className="footer-border">
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
