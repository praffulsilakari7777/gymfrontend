import React, { useEffect, useState } from 'react'; 
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import Footer from './footer';
import Sidebar from './sidebar';
import HotTopics from './hottopics';
import Class12Content from './class12Content';

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
     
        <main>
        <HelmetProvider>
        <Helmet>
        <title>NCERT Solutions for Class 12 (2019-20) Science (PCMB), Commerce & Humanities</title>
        <meta
          name="description"
          content="There are many books in the market but “NCERT Books” stand alone in the market.  Candidates preparing for civil services examinations as well as CBSE aspirants require good books and resources for high level preparation. Also for class 12 with Free "
        />
           <meta
          name="keywords"
          content="Ncert, Accountancy Part - 1, Accountancy Part -2, Biology, Business Studies, Chemistry, ENGLISH_(Flamingo), ENGLISH_(Vistas), Mathematics, Physics ,Ncert, Accounting for Share Capital, Issues and Redemption of Debentures, Financial Statements of a Company LEARNING OBJECTIVE, Analysis of Financial Statements, Accounting Ratios, Cash Flow Statements 
          ,Ncert, Accounting for not-for-profit Organisation, Accounting for Partnership: Basic Concepts, Reconstitution of a Partnership firm -Admission of a partner, Reconstitution of a Partnership firm - Retirement/Death of a Partner, Dissolution of Partnership, श्री गणेश
          Ncert, Reproduction in Organisms, Sexual Reproduction in Flowering Plants, Human Reproduction, Reproductive Health, Principles of Inheritance and variation, Molecular Basis of Inheritance, Evolution, Human Health and Diseases, Strategies for Enhancement in food production, Microbes in Human Welfare, Biotechnology : Principles and Processes, Biotechnology and its Applications, Organisms and Population, Ecosystem, Biodiversity and Conservation, Environmental issues,
          Ncert, Nature and significance of Management, Principles of Management, Business Environment, Planning, Organising, Staffing, Directing, Controlling, Financial Management, Financial Market, Marketing, Consumer Protection, 
          Ncert, Solid State, Solutions, Electrochemistry, Chemical Kinetics , Surface Chemistry, General Principles and Processes of Isolation of Elements, The p-Block Elements, The d and f block Elements, Coordination Compounds, Haloalkanes and Haloarenes, Alcohols Phenols and Ethers, Aldehydes, Ketones and Carboxylic Acid, Amines, Biomolecules, Polymers, Chemistry in Everyday life,
          Ncert, The Last Lesson, Lost Spring, Deep Water, The Rattrap, Indigo, Poets and Pancakes, The interview, Going Places , My Mother at Sixty Six, An Elementary School Classroom in a Slum, Keeping Quite, A Thing of Beauty, A Roadside Stand, Aunt Jennifer's Tigers 2,
          Ncert, The Third level, The Tiger King, Journey to the End of the World, The Enemy, Should Wizard hit Mommy, On the face of it, Evan tries an O-level, Memories of Childhood,
          Ncert, Relations and Functions, Inverse Trigonometric Functions, Matrices, Determinants, Continuity and Differentiability, Application of Derivatives, Integrals, Application of Integrals, Differential Equations, Vector Algebra, Three Dimensional Geometry, Linear Programming,
          Ncert, Electric Charges and Fields, Electrostatic Potential and Capacitance, Current Electricity, Moving charges and Magnetism, Magnetism and Matter, Electromagnetic Induction, Alternating Current, Electromagnetic Waves, Ray Optics, Wave Optics, Dual Nature of Radiation and Matter, ATOMS, NUCLEI, Semiconductor Electronics : Materials, Devices and Simple Circuits
          "
        />
         </Helmet>
         </HelmetProvider>
         
          <div className="page-section1">
             {/* <div class="container1"> */}
              <div className="row">
              <div class="row justify-content-center">
                <div className="col-lg-8 py-3">
                  <article className="blog-single-entry">
                    {/* <div className="post-thumbnail">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSizS24T7zODCTW06rvTuuB5Je7SmSDsypRGw&usqp=CAU" alt="" />
                    </div> */}
            
                    <h2 className="post-title">NCERT Books PDF Free Download for Class 12, 11, 10, 9, 8, 7, 6 , 5, 4, 3, 2, and 1</h2>
                   
                    <div className="entry-content"><i>
                      <p><b>NCERT eBooks</b> for <b><i>Class 12</i></b> are solved by experts NCERT eBooks.in in order to help students to obtain excellent marks in their <b><i>board examination</i></b>. All the <b><i>questions and answers</i></b> that are present in the <b><i>CBSE</i></b> <b><i>NCERT</i></b> Books has been included in this page. We have provided all the <b><i>Class 12</i></b> NCERT eBooks with a detailed explanation i.e., we have solved all the questions with step by step <b><i>solutions</i></b> in understandable language. So students having great knowledge over <b><i>NCERT Solutions Class 12</i></b> can easily make a grade in their <b><i>board exams</i></b>. Read on to find out more about  NCERT eBooks for <b><i>Class 12</i></b>. </p>
                      </i></div>
                  </article>
                  {/* Comments */}

          <Class12Content />
                  {/* <div className="card-page mt-3">
                    <h3 className="mb-3">Mobster 10.0.2</h3>
                    <p>Mobster 10.0.2 includes bug fixes and improvements for your iPhone. This update:</p>
                    <ul className="theme-list">
                      <li className="list-item">Fixes an issue where system search and search within Mail, Files, and Notes might not work</li>
                      <li className="list-item">Addresses an issue where photos, links, and other attachments might not display in the Messages details view</li>
                      <li className="list-item">Fixes an issue that could prevent apps from downloading content in the background</li>
                      <li className="list-item">Resolves issues that may prevent Mail from fetching new messages, and fail to include and quote original message content in Exchange accounts</li>
                    </ul>
                    <p>For information on the security content of Apple software updates, please visit this website:&nbsp;<a href="https://support.apple.com/kb/HT201222">https://support.apple.com/kb/HT201222</a>&nbsp;</p>
                  </div>
                  <div className="card-page mt-3">
                    <h3>Mobster 10.0.1</h3>
                    <p>iOS 10.0.1 includes bug fixes and improvements for your iPhone. This update:</p>
                    <ul className="theme-list">
                      <li className="list-item">Fixes an issue that could cause apps to quit unexpectedly when running in the background</li>
                      <li className="list-item">Resolves an issue where iPhone may temporarily lose cellular service after a call</li>
                      <li className="list-item">Addresses an issue where cellular data may temporarily not be available</li>
                      <li className="list-item">Fixes an issue that caused replies to S/MIME encrypted email messages between Exchange accounts to be unreadable</li>
                      <li className="list-item">Addresses an issue where using Kerberos single sign-on service in Safari may present an authentication prompt</li>
                      <li className="list-item">Resolves an issue where charging may be interrupted on Yubikey Lightning-powered accessories</li>
                    </ul>
                    <p>For information on the security content of Apple software updates, please visit this website:&nbsp;<a href="https://support.apple.com/kb/HT201222">https://support.apple.com/kb/HT201222</a>&nbsp;</p>
                  </div> */}
                
                           </div>
                {/* Sidebar */}
                <Sidebar />
                {/* end sidebar */}
              </div>
              </div>
              </div> {/* .row */}
            {/* </div> */}
         
        </main>
       <Footer />
      </div>
    
 


    </React.Fragment>
    );
};

export default Classes;















// import React, { useEffect, useState } from 'react'; 
// import ErrorModal from '../shared/components/UIElements/ErrorModal';
// import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
// import { useHttpClient } from '../shared/hooks/http-hook';
// import Footer from './footer';
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import './front-page.css';



// const Classes = () => {
//    const { isLoading, error, clearError } = useHttpClient();
   

// return (
//     <React.Fragment>
//     <ErrorModal error={error} onClear={clearError} />
//     {isLoading && (
//     // <div className="center">
//     //     <LoadingSpinner />
//     //     </div>
//     <div>
//        <SkeletonTheme color="#E5E5E5" highlightColor="#F5F5F5"  >
//      <p>
//     <Skeleton count={20}  height={70} width={"100%"}  />
//     </p>
    
// </SkeletonTheme>
//     </div>
//         )}
//     <div>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//         <meta name="description" content="Mobile Application HTML5 Template" />
//         <meta name="copyright" content="MACode ID, https://www.macodeid.com/" />
//         <title>Ncert eBooks</title>
//         <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon" />
//         <link rel="stylesheet" href="./assets/css/maicons.css" />
//         <link rel="stylesheet" href="./assets/vendor/animate/animate.css" />
//         <link rel="stylesheet" href="./assets/vendor/owl-carousel/css/owl.carousel.min.css" />
//         <link rel="stylesheet" href="./assets/css/bootstrap.css" />
//         <link rel="stylesheet" href="./assets/css/mobster.css" />
      
//         <main>

//           <div className="page-section">
//             <div className="container">
              // <div className="row justify-content-center">
              //   <div className="col-lg-8">
              //     <div className="card-page">
              //       <h3 className="mb-3">NCERT Solutions | NCERT Books| RD Sharma Solutions | NCERT Exemplar Problems | CBSE Sample Papers</h3>
              //       <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books </a></p>
              //       <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Solutions </a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">MCQ Questions </a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">Textbook Solutions</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">Factoring Calculator</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">Coding for Kids</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">Maths Notes</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">Science Notes</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">Social Science Notes</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">English Notes</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 12</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 11</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 10</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 9</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 8</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 7</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 6</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 5</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 4</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 2</a> (2020-21 Academic Session)</p>
              //       <a href="https://ncertebooks.in" className="navbar-text2" /><p><a href="https://ncertebooks.in" className="navbar-text2">NCERT Books for Class 1</a> (2020-21 Academic Session)</p>
              //       <p>
              //       </p><p>
              //       </p><p>
              //       </p><h3><b>FAQs on NCERT Books for Class 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</b></h3>
              //       <p>
              //       </p><p>
              //       </p><p>
              //       </p><h5><b>1. What includes NCERT Books?</b></h5>
              //       <p>
              //       </p><p>
              //       </p><ul className="theme-list">
              //         <li className="list-item">NCERT Books includes CBSE prescribed the latest academic session syllabus of all subjects for the respective class in an explanatory way. High experienced subject experts designed all the concepts in a conceptual way in a simple language. You can also find solved &amp; unsolved exercises for better practice after the end of every chapter.</li>
              //         <li className="list-item"> Also, you can explore previous questions of all concepts in NCERT Solutions Books.</li>
              //       </ul>
              //       <p>
              //       </p><p>
              //       </p><p>
              //       </p><h5><b>2. How do NCERT Textbooks help in competitive exams like JEE, NEET, and AIPMT?</b></h5>
              //       <p>
              //       </p><p>
              //       </p><ul className="theme-list">
              //         <li className="list-item">Most important competitive exams like JEE Mains, NEET, AIPMT, etc follow the NCERT Books of Class 10 &amp; 12 mostly to prepare their exam papers. To secure a better rank in competitive exams, NCERT Textbooks helps you a lot &amp; even it improves your subject knowledge to an extent.</li>
              //       </ul>
              //       <p>
              //       </p><p>
              //       </p><p>
              //       </p><h5><b>3. How to download NCERT Books for Class 1 to 12 online?</b></h5>
              //       <p>
              //       </p><p>
              //       </p><ul className="theme-list">
              //         <li className="list-item">To download NCERT eBooks Online, all you have to do is visit the official site ‘NCERT’ or else simply click on the respective class links provided on Ncertenotes.in page and downlaod NCERT Textbooks online in PDF format.</li>
              //       </ul>
              //       <p>
              //       </p><p>
              //       </p><p>
              //       </p><h5><b>4. How to make good notes from NCERT Textbooks?</b></h5>
              //       <p>
              //       </p><p>
              //       </p><ul className="theme-list">
              //         <li className="list-item">To download NCERT eBooks Online, all you have to do is visit the official site ‘NCERT’ or else simply click on the respective class links provided on Ncertenotes.in page and downlaod NCERT Textbooks online in PDF format.</li>
              //       </ul>
              //       <p>
              //       </p><p>
              //       </p><p>
              //       </p><div className="card-page">
              //         <h5 className="fg-primary">NCERT textbooks to be available in Indian sign language</h5>
              //         <hr />
              //         <p>According to officials of the ministry, the cognitive skills of children are developed in the childhood and it is necessary to provide them with educational material in accordance with their learning needs.</p>
              //         <p>The National Council of Educational Research and Training (NCERT) signed an MoU with the Indian Sign Language Research and Training Centre (ISLRTC) on Tuesday to make textbooks and other educational material accessible for deaf children in sign language. “The availability of NCERT textbooks in Indian Sign Language (ISL) will ensure that hearing-impaired children can also now access educational resources and it will be a useful and much needed resource for teachers, teacher educators, parents and the hearing-impaired community,” Union Minister for Social Justice and Empowerment Thawar Chand Gehlot said.</p>
              //         {/* Video */}
              //         <div className="text-center py-5">
              //           <embed className="embed-video" src="https://www.youtube.com/embed/8tiQuiCdbkM" />
              //         </div>
              //         <p>According to officials of the ministry, the cognitive skills of children are developed in the childhood and it is necessary to provide them with educational material in accordance with their learning needs.
              //           “So far, hearing-impaired children used to study only through a verbal or written medium but after the signing of this MoU, they can study through a single Indian Sign Language also. It will not only enhance their vocabulary, but also enhance their capabilities to understand concepts,” Secertary Shakuntala Gamlin said.</p>
              //       </div>
              //       <p><b>Here we have given download files for all the subjects of Classes 1 to 12. The subjects are:</b></p>
              //       <ul className="theme-list">
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 1 </a>- Hindi, English, Maths, Urdu</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 2 </a>- Hindi, English, Maths, Urdu</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 3 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 4 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 5 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 6 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 7 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 8 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 9 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu, Health and Physical Education</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 10</a> - Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
              //         <li className="list-item">Resolves an issue where the Cellular Data setting may incorrectly show as off</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 11</a> - Accountancy , Biology , Business Studies , Chemistry , Computers and Communication Technology , Creative Writing and Translation , Economics , English , Fine Art , Geography , Graphics design , Heritage Crafts , Hindi , History , Home Science , Mathematics , Physics , Political Science , Psychology , Sanskrit , Sociology , Statistics , Urdu</li>
              //         <li className="list-item"><a href="https:ncertebooks.in" className="navbar-text2">Class 12</a> - Accountancy , Biology , Business Studies , Chemistry , Economics , English , Geography , Heritage Crafts , Hindi , History , Home Science , Mathematics , New Age Graphics Design , Physics , Political Science , Psychology , Sanskrit , Sociology , Urdu</li>
              //       </ul>
              //       <p>For information on the security content of Apple software updates, please visit this website: <a href="https://support.apple.com/kb/HT201222 ">https://support.apple.com/kb/HT201222</a></p>
              //     </div>
              //     <div className="card-page mt-3">
              //       <h3 className="mb-3">Mobster 10.0.2</h3>
              //       <p>Mobster 10.0.2 includes bug fixes and improvements for your iPhone. This update:</p>
              //       <ul className="theme-list">
              //         <li className="list-item">Fixes an issue where system search and search within Mail, Files, and Notes might not work</li>
              //         <li className="list-item">Addresses an issue where photos, links, and other attachments might not display in the Messages details view</li>
              //         <li className="list-item">Fixes an issue that could prevent apps from downloading content in the background</li>
              //         <li className="list-item">Resolves issues that may prevent Mail from fetching new messages, and fail to include and quote original message content in Exchange accounts</li>
              //       </ul>
              //       <p>For information on the security content of Apple software updates, please visit this website:&nbsp;<a href="https://support.apple.com/kb/HT201222">https://support.apple.com/kb/HT201222</a>&nbsp;</p>
              //     </div>
              //     <div className="card-page mt-3">
              //       <h3>Mobster 10.0.1</h3>
              //       <p>iOS 10.0.1 includes bug fixes and improvements for your iPhone. This update:</p>
              //       <ul className="theme-list">
              //         <li className="list-item">Fixes an issue that could cause apps to quit unexpectedly when running in the background</li>
              //         <li className="list-item">Resolves an issue where iPhone may temporarily lose cellular service after a call</li>
              //         <li className="list-item">Addresses an issue where cellular data may temporarily not be available</li>
              //         <li className="list-item">Fixes an issue that caused replies to S/MIME encrypted email messages between Exchange accounts to be unreadable</li>
              //         <li className="list-item">Addresses an issue where using Kerberos single sign-on service in Safari may present an authentication prompt</li>
              //         <li className="list-item">Resolves an issue where charging may be interrupted on Yubikey Lightning-powered accessories</li>
              //       </ul>
              //       <p>For information on the security content of Apple software updates, please visit this website:&nbsp;<a href="https://support.apple.com/kb/HT201222">https://support.apple.com/kb/HT201222</a>&nbsp;</p>
              //     </div>
              //   </div>
              // </div>
           
//               <div className="row">
//                 <div className="col-lg-8 py-3">
//                   <article className="blog-entry">
//                     <div className="entry-header">
//                       <div className="post-thumbnail">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUgt433gb_YZA3mXuMOwLW68Ma3WwXNOwnVw&usqp=CAU" alt="" />
//                       </div>
//                       <div className="post-date">
//                         <h3>20</h3>
//                         <span>Feb</span>
//                       </div>
//                     </div>
//                     <div className="post-title"><a href="blog-details.html" className="navbar-text2">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                     <div className="entry-meta mb-2">
//                       <div className="meta-item entry-author">
//                         <div className="icon">
//                           <span className="mai-person" />
//                         </div>
//                         by <a href="#">Admin</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-pricetags" />
//                         </div>
//                         Category:
//                         <a href="#">Business</a>,
//                         <a href="#">Finances</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-chatbubble-ellipses" />
//                         </div>
//                         <a href="#">24 Comments</a>
//                       </div>
//                     </div>
//                     <div className="entry-content">
//                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
//                     </div>
//                     <a href="#" className="btn btn-primary">View Chapter</a>
//                     <a href="#" className="btn btn-primary">View Solution</a>
//                     {/* .btn
//               .btn-default
//               .btn-primary
//               .btn-success
//               .btn-info
//               .btn-warning
//               .btn-danger
//               .btn-link */}
//                   </article>
//                   <article >
//                     <div >
//                       <div >
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIW3AiJyJ1Q6usG_c-MEK5Z9jyE6H0VD1k7w&usqp=CAU" alt="" />
//                       </div>
//                       <div className="post-date">
//                         <h3>20</h3>
//                         <span>Feb</span>
//                       </div>
//                     </div>
//                     <div className="post-title"><a href="blog-details.html" className="navbar-text2">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                     <div className="entry-meta mb-2">
//                       <div className="meta-item entry-author">
//                         <div className="icon">
//                           <span className="mai-person" />
//                         </div>
//                         by <a href="#">Admin</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-pricetags" />
//                         </div>
//                         Category:
//                         <a href="#">Business</a>,
//                         <a href="#">Finances</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-chatbubble-ellipses" />
//                         </div>
//                         <a href="#">24 Comments</a>
//                       </div>
//                     </div>
//                     <div className="entry-content">
//                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
//                     </div>
//                     <a href="#" className="btn btn-primary">Continue Reading</a>
//                   </article>
//                   <article className="blog-entry">
//                     <div className="entry-header">
//                       <div className="post-thumbnail">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIW3AiJyJ1Q6usG_c-MEK5Z9jyE6H0VD1k7w&usqp=CAU" alt="" />
//                       </div>
//                       <div className="post-date">
//                         <h3>06</h3>
//                         <span>Jan</span>
//                       </div>
//                     </div>
//                     <div className="post-title"><a href="blog-details.html" className="navbar-text2">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                     <div className="entry-meta mb-2">
//                       <div className="meta-item entry-author">
//                         <div className="icon">
//                           <span className="mai-person" />
//                         </div>
//                         by <a href="#">Admin</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-pricetags" />
//                         </div>
//                         Category:
//                         <a href="#">Business</a>,
//                         <a href="#">Finances</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-chatbubble-ellipses" />
//                         </div>
//                         <a href="#">0 Comments</a>
//                       </div>
//                     </div>
//                     <div className="entry-content">
//                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
//                     </div>
//                     <a href="#" className="btn btn-primary">Continue Reading</a>
//                   </article>
//                   <article className="blog-entry">
//                     <div className="entry-header">
//                       <div className="post-thumbnail">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIW3AiJyJ1Q6usG_c-MEK5Z9jyE6H0VD1k7w&usqp=CAU" alt="" />
//                       </div>
//                       <div className="post-date">
//                         <h3>06</h3>
//                         <span>Jan</span>
//                       </div>
//                     </div>
//                     <div className="post-title"><a href="blog-details.html" className="navbar-text2">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                     <div className="entry-meta mb-2">
//                       <div className="meta-item entry-author">
//                         <div className="icon">
//                           <span className="mai-person" />
//                         </div>
//                         by <a href="#">Admin</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-pricetags" />
//                         </div>
//                         Category:
//                         <a href="#">Business</a>,
//                         <a href="#">Finances</a>
//                       </div>
//                       <div className="meta-item">
//                         <div className="icon">
//                           <span className="mai-chatbubble-ellipses" />
//                         </div>
//                         <a href="#">0 Comments</a>
//                       </div>
//                     </div>
//                     <div className="entry-content">
//                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
//                     </div>
//                     <a href="#" className="btn btn-primary">Continue Reading</a>
//                   </article>
//                 </div>
//                 {/* Sidebar */}
//                 <div className="col-lg-4 py-3">
//                   <div className="widget-wrap">
//                     <form action="#" className="search-form1">
//                       <h3 className="widget-title">Search</h3>
//                       <div className="form-group1">
//                         <span className="icon mai-search" />
//                         <input type="text" className="form-control1" placeholder="Type a keyword and hit enter" />
//                       </div>
//                     </form>
//                   </div>
//                   <div className="widget-wrap">
//                     <h3 className="widget-title">Classes</h3>
//                     <ul className="categories">
//                       <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">Class 12 <span>12</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 12 <span>9</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2">Class 11 <span>8</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 10 <span>7</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 9 <span>7</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 8 <span>7</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 7 <span>6</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 6 <span>7</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 5 <span>3</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 4 <span>3</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 3 <span>3</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 2 <span>3</span></a></li>
//                       <li><a href="#" className="navbar-text2">Class 1 <span>3</span></a></li>
//                       {/* <li><a href="#">Graphic Designer <span>12</span></a></li>
//                 <li><a href="#">Visual Assistant <span>22</span></a></li>
//                 <li><a href="#">Programing <span>37</span></a></li>
//                 <li><a href="#">Office Admin <span>42</span></a></li>
//                 <li><a href="#">Web Designer <span>14</span></a></li>
//                 <li><a href="#">Language <span>140</span></a></li> */}
//                     </ul>
//                   </div>
//                   <div className="widget-wrap">
//                     <h3 className="widget-title">Recent Blog</h3>
//                     <div className="blog-widget">
//                       <div className="blog-img">
//                         <img src={`${process.env.REACT_APP_ASSET_URL}/img/blogs/blog_1.jpg`} alt="" />
//                       </div>
//                       <div className="entry-footer">
//                         <div className="blog-title mb-2"><a href="#" className="navbar-text2">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                         <div className="meta">
//                           <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
//                           <a href="#"><span className="icon-person" /> Admin</a>
//                           <a href="#"><span className="icon-chat" /> 19</a>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="blog-widget">
//                       <div className="blog-img">
//                         <img src="https://images.jansatta.com/2020/01/shahrukh-khan-Feature-620x400.jpg?w=360&h=232" alt="" />
//                       </div>
//                       <div className="entry-footer">
//                         <div className="blog-title mb-2"><a href="#" className="navbar-text2">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                         <div className="meta">
//                           <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
//                           <a href="#"><span className="icon-person" /> Admin</a>
//                           <a href="#"><span className="icon-chat" /> 19</a>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="blog-widget">
//                       <div className="blog-img">
//                         <img src="../assets/img/blogs/blog_3.jpg" alt="" />
//                       </div>
//                       <div className="entry-footer">
//                         <div className="blog-title mb-2"><a href="#" className="navbar-text2">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                         <div className="meta">
//                           <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
//                           <a href="#"><span className="icon-person" /> Admin</a>
//                           <a href="#"><span className="icon-chat" /> 19</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="widget-wrap">
//                     <h3 className="widget-title">Tag Cloud</h3>
//                     <div className="tag-clouds">
//                       <a href="#" className="tag-cloud-link" >dish</a>
//                       <a href="#" className="tag-cloud-link" >menu</a>
//                       <a href="#" className="tag-cloud-link" >food</a>
//                       <a href="#" className="tag-cloud-link" >sweet</a>
//                       <a href="#" className="tag-cloud-link" >tasty</a>
//                       <a href="#" className="tag-cloud-link" >delicious</a>
//                       <a href="#" className="tag-cloud-link" >desserts</a>
//                       <a href="#" className="tag-cloud-link" >drinks</a>
//                     </div>
//                   </div>
//                   <div className="widget-wrap">
//                     <h3 className="widget-title">Paragraph</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
//                   </div>
//                 </div> {/* end sidebar */}
//               </div>
//             </div>
//           </div>
//         </main>
//        <Footer />
//       </div>
//     );
 


//     </React.Fragment>
//     );
// };

// export default Classes;