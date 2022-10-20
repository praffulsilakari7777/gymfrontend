import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    // <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
    //   <div className="lds-dual-ring"></div>
    // </div>
    <div class="position top-50 start-50 translate-middle">
    <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="visually-hidden"></span>
    </div>
    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="visually-hidden"></span>
    </div>
  </div>
  );
};

export default LoadingSpinner;
