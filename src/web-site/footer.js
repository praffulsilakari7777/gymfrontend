import React, { useEffect, useState } from 'react'; 
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import './front-page.css';



const Classes = () => {
   const { isLoading, error, clearError } = useHttpClient();
   

return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (
    // <div className="center">
    //     <LoadingSpinner />
    //     </div>
    <div>
       <SkeletonTheme color="#E5E5E5" highlightColor="#F5F5F5"  >
     <p>
    <Skeleton count={20}  height={70} width={"100%"}  />
    </p>
    
</SkeletonTheme>
    </div>
        )}
    <div>
      
        <footer className="page-footer-section bg-dark fg-white">
          <div className="container">
            <div className="row mb-5 py-3">
              <div className="col-sm-6 col-lg-3 py-3">
                <h5 className="mb-3">FREE RESOURCES</h5>
                <ul className="menu-link">
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 12</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 11</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 10</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 9</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 8</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 7</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 6</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 5</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 4</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 3</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 2</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 1</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3 py-3">
                <h5 className="mb-3">NCERT SOLUTIONS</h5>
                <ul className="menu-link">
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 12</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 11</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 10</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 9</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 8</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 7</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 6</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 5</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 4</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 3</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 2</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 1</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 py-3">
                <h5 className="mb-3">QUICK RESOURCES</h5>
                <ul className="menu-link">
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 12</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 11</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 10</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 9</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 8</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 7</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 6</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 5</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 4</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 3</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 2</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 1</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 py-3">
                <h5 className="mb-3">QUICK RESOURCES</h5>
                <ul className="menu-link">
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 12</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 11</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 10</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 9</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 8</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 7</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 6</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 5</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 4</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 3</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 2</a></li>
                  <li><a href="#" className="navbar-text1">NCERT Solution for Class 1</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row mb-5 py-3">
              <div className="col-sm-6 col-lg-2 py-3">
                <h5 className="mb-3">Pages</h5>
                <ul className="menu-link">
                  <li><a href="#" className="navbar-text2">Features</a></li>
                  <li><a href="#" className="navbar-text2">Customers</a></li>
                  <li><a href="#" className="navbar-text2">Pricing</a></li>
                  <li><a href="#" className="navbar-text2">GDPR</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-2 py-3">
                <h5 className="mb-3">Company</h5>
                <ul className="menu-link">
                  <li><a href="#" className="navbar-text2">About</a></li>
                  <li><a href="#" className="navbar-text2">Team</a></li>
                  <li><a href="#" className="navbar-text2">Leadership</a></li>
                  <li><a href="#" className="navbar-text2">Careers</a></li>
                  <li><a href="#" className="navbar-text2">HIRING!</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 py-3">
                <h5 className="mb-3">Contact</h5>
                <ul className="menu-link">
                  <li><a href="#" className="navbar-text2">Contact Us</a></li>
                  <li><a href="#" className="navbar-text2">Office Location</a></li>
                  <li><a href="#" className="navbar-text2">hello@mobster.com</a></li>
                  <li><a href="#" className="navbar-text2">support@macodeid.com</a></li>
                  <li><a href="#" className="navbar-text2">+808 11233 900</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 py-3">
                <h5 className="mb-3">Subscribe</h5>
                <p>Get some offers, news, or update features of application</p>
                <form method="POST">
                  <div className="input-group">
                    <input type="text" className="form-control1" placeholder="Your email.." />
                    <div className="input-group-append1">
                      <button type="submit" className="btn1 btn-primary1"><span className="mai-send1" /></button>
                    </div>
                  </div>
                </form>
                {/* Social Media Button */}
                <div className="mt-4">
                  <a href="#" className="btn1 btn-fab1 btn-primary1 fg-white navbar-text1" ><span className="mai-logo-facebook" /></a>
                  <a href="#" className="btn1 btn-fab1 btn-primary1 fg-white navbar-text1" ><span className="mai-logo-twitter" /></a>
                  <a href="#" className="btn1 btn-fab1 btn-primary1 fg-white navbar-text1" ><span className="mai-logo-instagram" /></a>
                  <a href="#" className="btn1 btn-fab1 btn-primary1 fg-white navbar-text1" ><span className="mai-logo-google" /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 py-2">
                <img src="../assets/favicon-light.png" alt="" width={40} />
                {/* Please don't remove or modify the credits below */}
                <p className="d-inline-block ml-2">Copyright © <a href="https://infinityeight.in/" className="navbar-text1">Infinity eight Inc</a>. All rights reserved</p>
              </div>
              <div className="col-12 col-md-6 py-2">
                <ul className="nav justify-content-end">
                  <li className="nav-item"><a href="#" className="nav-link">Terms of Use</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Privacy Policy</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer> {/* .page-footer */}
      </div>
    
 


    </React.Fragment>
    );
};

export default Classes;