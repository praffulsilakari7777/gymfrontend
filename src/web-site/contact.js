import React, { useEffect, useState } from 'react'; 
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';
import Footer from './footer';
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
        <div className="bg-light">
          <div className="page-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 my-3 wow fadeInUp">
                  <div className="card-page">
                    <div className="row row-beam-md">
                      <div className="col-md-4 text-center py-3 py-md-2">
                        <i className="mai-location-outline h3" />
                        <p className="fg-primary fw-medium fs-vlarge">Location</p>
                        <p className="mb-0">3 East Ridgewood Avenue Los Angeles, CA 90022</p>
                      </div>
                      <div className="col-md-4 text-center py-3 py-md-2">
                        <i className="mai-call-outline h3" />
                        <p className="fg-primary fw-medium fs-vlarge">Contact</p>
                        <p className="mb-1">+213 908 92034</p>
                        <p className="mb-0">+415 123 89245</p>
                      </div>
                      <div className="col-md-4 text-center py-3 py-md-2">
                        <i className="mai-mail-open-outline h3" />
                        <p className="fg-primary fw-medium fs-vlarge">Email</p>
                        <p className="mb-1">support@mobster.com</p>
                        <p className="mb-0">support@macodeid.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 my-3 wow fadeInUp">
                  <div className="card-page1">
                    <h3 className="fw-normal">Get in touch</h3>
                    <form method="POST" className="mt-3">
                      <div className="form-group">
                        <label htmlFor="name" className="fw-medium fg-grey">Fullname</label>
                        <input type="text" className="form-control1" id="name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="fw-medium fg-grey">Email</label>
                        <input type="text" className="form-control1" id="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="fw-medium fg-grey">Phone(optional)</label>
                        <input type="number" className="form-control1" id="phone" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message" className="fw-medium fg-grey">Message</label>
                        <textarea rows={6} className="form-control1" id="message" defaultValue={""} />
                      </div>
                      <p>*Your information will never be shared with any third party.</p>
                      <div className="form-group mt-4">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="col-md-6 col-lg-7 my-3 wow fadeInUp">
                  <div className="card-page">
                    <div className="maps-container">
                      <div id="myMap" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div> {/* .bg-light */}
      <Footer />
      </div>
    
 


    </React.Fragment>
    );
};

export default Classes;