import React, { useEffect, useState } from 'react'; 
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import Footer from './footer';
import Sidebar from './sidebar';
import HotTopics from './hottopics';
import Class12Content from './class12Content';
import Class11Content from './class11Content';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



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
            
                    <h1 className="post-title">NCERT Books PDF Free Download for Class 12, 11, 10, 9, 8, 7, 6 , 5, 4, 3, 2, and 1</h1>
                   
                    <div className="entry-content"><i>
                        <p>NCERT Class 11 Books for <b><i>Physics, Chemistry, Mathematics Biology, Business Studies, Accountancy, Economics, History, Geography, Political Science etc</i></b>. etc. has been available to <b><i>download</i></b> on this page. If you do not have access to the hard copies of the <b><i>class 11th books</i></b>, then check out the PDF’s of the books below. The NCERT Books are downloadable for the reference purpose and you can also use them to refer a particular chapter also. The soft copy is beneficial for candidates who cannot afford to buy the books in hardcover or do not have access to hard copy at the moment. Also, teachers, <b><i>entrance exam aspirants can download the NCERT Books</i></b> for their reference. You can check the complete list of NCERT Class 11th Books in the article below. Also you can get answers to all exercises in this book at our NCERT Solutions section.</p>
                      <p><b>NCERT eBooks</b> for <b><i>Class 12</i></b> are solved by experts NCERT eBooks.in in order to help students to obtain excellent marks in their <b><i>board examination</i></b>. All the <b><i>questions and answers</i></b> that are present in the <b><i>CBSE</i></b> <b><i>NCERT</i></b> Books has been included in this page. We have provided all the <b><i>Class 12</i></b> NCERT eBooks with a detailed explanation i.e., we have solved all the questions with step by step <b><i>solutions</i></b> in understandable language. So students having great knowledge over <b><i>NCERT Solutions Class 12</i></b> can easily make a grade in their <b><i>board exams</i></b>. Read on to find out more about  NCERT eBooks for <b><i>Class 12</i></b>. </p>
                      </i></div>
                  </article>
                  {/* Comments */}

          <Class11Content />
               
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








