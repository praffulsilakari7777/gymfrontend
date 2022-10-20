import React, { useEffect, useState } from 'react'; 
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import './front-page.css';
import HotTopics from './hottopics';


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
<div className="card-page">
                    <h3 className="mb-3">NCERT Books for Class 12, Free CBSE NCERT Books</h3>
                    <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Maths</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Physics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Chemistry</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Biology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 English</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 English Vistas</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 English Flamingo</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Hindi</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Hindi Aroh</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Hindi Vitan</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Books for Class 12 Sanskrit</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 12 History</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f25754e1ec5cd6c1493d087/" className="navbar-text2"><b><u>NCERT Books for Class 12 Geography</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f25753c1ec5cd6c1493d086/" className="navbar-text2"><b><u>NCERT Books for Class 12 Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f25752b1ec5cd6c1493d085/" className="navbar-text2"><b><u>NCERT Books for Class 12 Macro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575171ec5cd6c1493d084/" className="navbar-text2"><b><u>NCERT Books for Class 12 Micro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575041ec5cd6c1493d083/" className="navbar-text2"><b><u>NCERT Books for Class 12 Political Science</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574f11ec5cd6c1493d082/" className="navbar-text2"><b><u>NCERT Books for Class 12 Accountancy</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574de1ec5cd6c1493d081/" className="navbar-text2"><b><u>NCERT Books for Class 12 Business Studies</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574cd1ec5cd6c1493d080/" className="navbar-text2"><b><u>NCERT Books for Class 12 Entrepreneurship</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574b91ec5cd6c1493d07f/" className="navbar-text2"><b><u>NCERT Books for Class 12 Sociology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574971ec5cd6c1493d07e/" className="navbar-text2"><b><u>NCERT Books for Class 12 Computer Science (C++)</u></b></a></p>
                    </div>

              
                  <article className="blog-single-entry">
                    {/* <div className="post-thumbnail">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSizS24T7zODCTW06rvTuuB5Je7SmSDsypRGw&usqp=CAU" alt="" />
                    </div> */}
            
                    <h2 className="post-title">NCERT Solution PDF Free Download for Class 12, 11, 10, 9, 8, 7, 6 , 5, 4, 3, 2, and 1</h2>
                   
                    <div className="entry-content"><i>
                      <p>In this page, each and every question originate with a <b><i>step-wise solution</i></b>. Working on <b><i>NCERT Solutions</i></b> for <b><i>Class 12</i></b> will help students to get an idea about how to solve the <b><i>problems</i></b>. With the help of these NCERT Solutions for <b><i>Class 12 Science, Commerce and Humanities</i></b> you can easily grasp basic concepts better and faster. Moreover, it is a perfect guide to help you to score good marks in <b><i>CBSE board examination</i></b>. Just click on the chapter wise links given below to practice the <b><i>NCERT Solutions for the respective chapter</i></b>. </p>
                     </i></div>
                  </article>


                  <div className="card-page">
                    <h3 className="mb-3">NCERT Solutions for Class 12, Free CBSE NCERT Solutions</h3>
                    <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Maths</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Physics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Chemistry</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Biology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 English</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 English Vistas</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 English Flamingo</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Hindi</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Hindi Aroh</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Hindi Vitan</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Sanskrit</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 History</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f25754e1ec5cd6c1493d087/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Geography</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f25753c1ec5cd6c1493d086/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f25752b1ec5cd6c1493d085/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Macro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575171ec5cd6c1493d084/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Micro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575041ec5cd6c1493d083/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Political Science</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574f11ec5cd6c1493d082/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Accountancy</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574de1ec5cd6c1493d081/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Business Studies</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574cd1ec5cd6c1493d080/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Entrepreneurship</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574b91ec5cd6c1493d07f/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Sociology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2574971ec5cd6c1493d07e/" className="navbar-text2"><b><u>NCERT Solutions for Class 12 Computer Science (C++)</u></b></a></p>
                    <p>
                    </p><p>
                    </p><p>
                    <h3 className="mb-3">NCERT Solutions for Class 12 Maths</h3>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 1 Relations and Functions</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 2 Inverse Trigonometric Functions</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 3 Matrices</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 4 Determinants</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 5 Continuity and Differentiability</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 6 Application of Derivatives</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 7 Integrals</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 8 Application of Integrals</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 9 Differential Equations</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 10 Vector Algebra</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 11 Three Dimensional Geometry</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 12 Linear Programming</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f259bd2f21057db3773c" className="navbar-text2"><b><u>Chapter 13 Probability</u></b></a></p>

                   <h3 className="mb-3">NCERT Solutions for Class 12 Physics</h3>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 1 Electric Charges And Fields</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 2 Electrostatic Potential And Capacitance</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 3 Current Electricity</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 4 Moving Charges And Magnetism</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 5 Magnetism And Matter</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 6 Electromagnetic Induction</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 7 Alternating Current</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 8 Electromagnetic Waves</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 9 Ray Optics and Optical Instruments</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 10 Wave Optics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 11 Dual Nature Of Radiation And Matter</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 12 Atoms</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 13 Nuclei</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 14 Semiconductor Electronics Materials Devices And Simple Circuits</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f298bd2f21057db3773d" className="navbar-text2"><b><u>Chapter 15 Communication Systems</u></b></a></p>
                  

                   <h3 className="mb-3">NCERT Solutions for Class 12 Biology</h3>
                    <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 1 Reproduction in Organisms</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 2 Sexual Reproduction in Flowering Plants</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 3 Human Reproduction</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 4 Reproductive Health</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 5 Principles of Inheritance and Variation</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 6 Molecular Basis of Inheritance</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 7 Evolution</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 8 Human Health and Disease</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 9 Strategies for Enhancement in Food Production</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 10 Microbes in Human Welfare</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 11 Biotechnology:Principles And Processes</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 12 Biotechnology and its Applications</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 13 Organisms and Populations</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 14 Ecosystem</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 15 Biodiversity and Conservation</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f319de5c69c0570507575e2" className="navbar-text2"><b><u>Chapter 16 Environmental Issues</u></b></a></p>

                 <h3 className="mb-3">NCERT Solutions for Class 12 English Vistas</h3>
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 1 Third Level</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 2 The Tiger King</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 3 The Enemy</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 4 Journey to the End of the Earth</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 5 Should Wizard Hit Mommy?</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 6 On the Face of It</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 7 Evans Tries an O-level</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 8 Memories of Childhood</u></b></a></p>

                <h3 className="mb-3">NCERT Solutions for Class 12 English Flamingo</h3>
                   <h5 className="mb-3">NCERT Solutions for Class 12 English Flamingo Prose</h5>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 1 The Last Lesson</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 2 Lost Spring</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 3 Deep Water</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 4 The Rattrap</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 5 Indigo</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 6 Poets and Pancakes</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 7 The Interview</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 8 Going Places</u></b></a></p>


                   <h5 className="mb-3">NCERT Solutions for Class 12 English Flamingo Poem</h5>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 1 My Mother at Sixty-six</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 2 An Elementary School Classroom in a Slum</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 3 Keeping Quiet</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 4 A Thing of Beauty</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 5 A Roadside Stand</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 6 Aunt Jennifer’s Tigers</u></b></a></p>
                  

                   <h3 className="mb-3">NCERT Solutions for Class 12 Business Studies</h3>
                   <h5 className="mb-3">NCERT Solutions for Class 12 Business Studies Part 1 Principles and Functions of Management</h5>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 1 Nature and Significance of Management</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 2 Principles of Management</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 3 Business Environment</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 4 Planning</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 5 Organising</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 6 Staffing</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 7 Directing</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 8 Controlling</u></b></a></p>


                   <h5 className="mb-3">NCERT Solutions for Class 12 Business Studies Part 2 Business Finance and Marketing</h5>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 9 Financial Management</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 10 Financial Market</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 11 Marketing</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 12 Consumer Protection</u></b></a></p>



                   <h3 className="mb-3">NCERT Solutions for Class 12 Accountancy</h3>
                   <h5 className="mb-3">NCERT Solutions for Class 12 Accountancy Part 1 Partnership Accounts</h5>
                    <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 1 Accounting for Partnership : Basic Concepts</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 2 Accounting for Not for Profit Organisation</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 3 Reconstitution of a Partnership Firm – Admission of a Partner</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 4 Reconstitution of a Partnership Firm – Retirement/Death of a Partner</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 5 Dissolution of Partnership Firm</u></b></a></p>
                   


                   <h5 className="mb-3">NCERT Solutions for Class 12 Accountancy Part 2 Company Accounts and Analysis of Financial Statements</h5>
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 1 Accounting for Share Capital</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 2 Issue and Redemption of Debentures</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 3 Financial Statements of a Company</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 4 Analysis of Financial Statements</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 5 Accounting Ratios</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 6 Cash Flow Statement</u></b></a></p>
                
                   

                   <h3 className="mb-3">NCERT Solutions for Class 12 Psychology</h3>
                    <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 1 Intelligence And Aptitude</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 2 Self And Personality</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 3 Human Strengths And Meeting Life Challenges</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 4 Psychological Disorders</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 5 Therapeutic Approaches And Counselling</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 6 Attitude And Social Cognition</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 7 Social Influence And Group Processes</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 8 Psychology And Life</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 9 Developing Psychological Skills</u></b></a></p>
                  

                    </p><div className="card-page">
                      <h5 className="fg-primary">NCERT textbooks to be available in Indian sign language</h5>
                      <hr /><i>
                      <p>There are many books in the market but <b><i>NCERT eBooks</i></b> stand alone in the market. <b><i>Candidates</i></b> <b><i>preparing</i></b> for <b><i>civil services examinations</i></b> as well as <b><i>CBSE</i></b> <b><i>aspirants</i></b> require good books and resources for <b><i>high level preparation</i></b>.
                      Here we are providing the facility to <b>download</b> <i><b>Latest Edition</b></i> <b><i>(2020-21 Academic Year)</i></b> NCERT books totally <b><i>free</i></b> for <b><i>class 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 and 12th</i></b> students. You can download <b><i>NCERT text-books</i></b> as well as their <b><i>solutions for Hindi, English and Urdu medium schools</i></b>.</p>
                      
                      {/* Video */}
                      <div className="text-center py-5">
                        <embed className="embed-video" src="https://www.youtube.com/embed/8tiQuiCdbkM" />
                      </div>
                      <p>NCERT books are main books required for <b>CBSE Exams</b>, as well as useful to form the foundation in the <b><i>UPSC Civil Services Examination</i></b>. <b><i>Download</i></b> the latest 2020-2021 Edition (for Exams in 2021) of NCERT Books for Class 1 to 12 in PDF Format, in both Hindi and English. <b><i>NCERT solutions</i></b> of all the NCERT questions for Maths Class 6 to 12 free.
                      Here we are providing the facility to <b>download</b> <i><b>Latest Edition</b></i> <b><i>(2020-21 Academic Year)</i></b> NCERT books totally <b><i>free</i></b> for <b><i>class 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 and 12th</i></b> students. You can download <b><i>NCERT text-books</i></b> as well as their <b><i>solutions for Hindi, English and Urdu medium schools</i></b>.</p>
                      </i>
                    </div>
                   <HotTopics />
                   </div>
    
 


    </React.Fragment>
    );
};

export default Classes;