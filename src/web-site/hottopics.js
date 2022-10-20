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
    <h3 className="mb-3">Here we have given download files for all the subjects of Classes 1 to 12. The subjects are:</h3>
                    <ul className="theme-list">
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 1 </a>- Hindi, English, Maths, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 2 </a>- Hindi, English, Maths, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 3 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 4 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 5 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 6 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 7 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 8 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 9 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu, Health and Physical Education</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 10</a> - Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item">Resolves an issue where the Cellular Data setting may incorrectly show as off</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 11</a> - Accountancy , Biology , Business Studies , Chemistry , Computers and Communication Technology , Creative Writing and Translation , Economics , English , Fine Art , Geography , Graphics design , Heritage Crafts , Hindi , History , Home Science , Mathematics , Physics , Political Science , Psychology , Sanskrit , Sociology , Statistics , Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 12</a> - Accountancy , Biology , Business Studies , Chemistry , Economics , English , Geography , Heritage Crafts , Hindi , History , Home Science , Mathematics , New Age Graphics Design , Physics , Political Science , Psychology , Sanskrit , Sociology , Urdu</li>
                    </ul>
                    <p>For information on the security content of Apple software updates, please visit this website: <a href="https://support.apple.com/kb/HT201222 ">https://support.apple.com/kb/HT201222</a></p>
  
    
 


    </React.Fragment>
    );
};

export default Classes;