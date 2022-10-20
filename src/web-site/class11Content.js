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
          <article className="blog-single-entry">
<div className="card-page">
                    <h1 className="post-title">NCERT Books for Class 11, Free CBSE NCERT Books</h1>
                    <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Maths</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Physics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Chemistry</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Biology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 English</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 English Snapshots</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 English Hornbill</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Hindi</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Hindi Aroh</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Hindi Vitan</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Sanskrit</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 History</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Geography</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Macro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Micro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Political Science</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Accountancy</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Business Studies</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Entrepreneurship</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Sociology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Books for Class 11 Computer Science (C++)</u></b></a></p>
                    </div>

              
                  <article className="blog-single-entry">
                    {/* <div className="post-thumbnail">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSizS24T7zODCTW06rvTuuB5Je7SmSDsypRGw&usqp=CAU" alt="" />
                    </div> */}
            
                    <h1 className="post-title">NCERT Solution PDF Free Download for Class 11, 11, 10, 9, 8, 7, 6 , 5, 4, 3, 2, and 1</h1>
                   
                    <div className="entry-content"><i>
                      <p>In this page, each and every question originate with a <b><i>step-wise solution</i></b>. Working on <b><i>NCERT Solutions</i></b> for <b><i>Class 11</i></b> will help students to get an idea about how to solve the <b><i>problems</i></b>. With the help of these NCERT Solutions for <b><i>Class 11 Science, Commerce and Humanities</i></b> you can easily grasp basic concepts better and faster. Moreover, it is a perfect guide to help you to score good marks in <b><i>CBSE board examination</i></b>. Just click on the chapter wise links given below to practice the <b><i>NCERT Solutions for the respective chapter</i></b>. </p>
                     </i></div>
                  </article>


                  <div className="card-page">
                    <h1 className="post-title">NCERT Solutions for Class 11, Free CBSE NCERT Solutions</h1>
                    <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Maths</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Physics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Chemistry</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Biology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 English</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 English Vistas</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 English Flamingo</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Hindi</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Hindi Aroh</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Hindi Vitan</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Sanskrit</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 History</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Geography</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Macro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Micro Economics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Political Science</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Accountancy</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Business Studies</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Entrepreneurship</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Sociology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2"><b><u>NCERT Solutions for Class 11 Computer Science (C++)</u></b></a></p>
                    <p>
                    </p><p>
                    </p><p>
                    <h1 className="post-title">NCERT Solutions for Class 11 Maths</h1>
                    <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 1 Sets</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 2 Relations and Functions</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 3 Trigonometric Functions</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 4 Principle of Mathematical Induction</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 5 Complex Numbers and Quadratic Equations</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 6 Linear Inequalities</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 7 Permutation and Combinations</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 8 Binomial Theorem</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 9 Sequences and Series</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 10 Straight Lines</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 11 Conic Sections</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 12 Introduction to Three Dimensional Geometry</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 13 Limits and Derivatives</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 14 Mathematical Reasoning</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 15 Statistics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3477090dd430af9a314" className="navbar-text2"><b><u>Chapter 16 Probability</u></b></a></p>

                   <h1 className="post-title">NCERT Solutions for Class 11 Physics</h1>
                    <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 1 Physical World</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 2 Units and Measurements</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 3 Motion in a Straight Line</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 4 Motion in a plane</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 5 Laws of motion</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 6 Work Energy and power</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 7 System of particles and Rotational Motion</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 8 Gravitation</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 9 Mechanical Properties Of Solids</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 10 Mechanical Properties Of Fluids</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 11 Thermal Properties of matter</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 12 Thermodynamics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 13 Kinetic Theory</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 14 Oscillations</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f38242b344c7d211cd4d83c" className="navbar-text2"><b><u>Chapter 15 Waves</u></b></a></p>
                  

                   <h1 className="post-title">NCERT Solutions for Class 11 Biology</h1>
                    <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 1 The Living World</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 2 Biological Classification</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 3 Plant Kingdom</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 4 Animal Kingdom</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 5 Morphology of Flowering Plants</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 6 Anatomy of Flowering Plants</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 7 Structural Organisation in Animals</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 8 Cell: The Unit of Life</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 9 Biomolecules</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 10 Cell Cycle and Cell Division</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 11 Transport in Plants</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 12 Mineral Nutrition</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 13 Photosynthesis in Higher Plants</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 14 Respiration in Plants</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 15 Plant Growth and Development</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 16 Digestion and Absorption</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 17 Breathing and Exchange of Gases</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 18 Body Fluids and Circulation</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 19 Excretory Products and their Elimination</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 20 Locomotion and Movement</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 21 Neural Control and Coordination</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f3fd3c47090dd430af9a315" className="navbar-text2"><b><u>Chapter 22 Chemical Coordination and Integration</u></b></a></p>

                 <h1 className="post-title">NCERT Solution Class 11 English (Hornbill)</h1>
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 1 : The Portrait of a Lady</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 2 : We’re Not Afraid to Die… if We Can All Be Together</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 3 : Discovering Tut: the Saga Continues; The Laburnum Top</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 4 : Landscape of the Soul; The Voice of the Rain</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 5 : The Ailing Planet: the Green Movement’s Role</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 6 : The Browning Version; Childhood</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 7 : The Adventure</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b5c45b98a2f10dc4e02c5" className="navbar-text2"><b><u>Chapter 8 : Silk Road; Father to Son</u></b></a></p>

                <h1 className="post-title">NCERT Solution Class 11 English (Snapshots)</h1>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 1 : The Summer of the Beautiful White Horse</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 2 : The Address</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 3 : Ranga’s Marriage</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 4 : Albert Einstein at School</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 5 : Mother’s Day</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 6 : The Ghat of the Only World</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 7 : Birth</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2ccbd2f21057db3773e" className="navbar-text2"><b><u>Chapter 8 : The Tale of Melon City</u></b></a></p>



                   <h1 className="post-title">NCERT Solutions for Class 11 Business Studies</h1>
                   {/* <h5 className="mb-3">NCERT Solutions for Class 11 Business Studies Part 1 Principles and Functions of Management</h5> */}
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 1 Nature and Purpose of Business</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 2 Forms of Business Organisation</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 3 Private, Public and Global Enterprises</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 4 Business Services</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 5 Emerging Modes of Business</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 6 Social Responsibilities of Business and Business Ethics</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 7 Formation of a Company</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 8 Sources of Business Finance</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 9 Small Business</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 10 Internal Trade</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 11 International Business-I</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f45f2febd2f21057db3773f" className="navbar-text2"><b><u>Chapter 12 International Business-II</u></b></a></p>



                   <h1 className="post-title">NCERT Solutions for Class 11 Accountancy</h1>
                   {/* <h5 className="mb-3">NCERT Solutions for Class 11 Accountancy Part 1 Partnership Accounts</h5> */}
                    <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 1 Introduction to Accounting</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 2 Theory Base of Accounting</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 3 Recording of Transactions – I</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 4 Recording of Transactions – II</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f25764e1ec5cd6c1493d08b" className="navbar-text2"><b><u>Chapter 5 Bank Reconciliation Statement</u></b></a></p>
                   


                   {/* <h5 className="mb-3">NCERT Solutions for Class 11 Accountancy Part 2 Company Accounts and Analysis of Financial Statements</h5> */}
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 6 Trial Balance and Rectification of Errors</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 7 Depreciation, Provisions and Reserves</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 8 Bills of Exchange</u></b></a></p>
                   {/* <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 4 Analysis of Financial Statements</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 5 Accounting Ratios</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f4b2b07b98a2f10dc4e02bd" className="navbar-text2"><b><u>Chapter 6 Cash Flow Statement</u></b></a></p>
                 */}
                   

                   <h1 className="post-title">NCERT Solutions for Class 11 Psychology</h1>
                    <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 1 What is Psychology?</u></b></a></p>
                    <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 2 Methods of Enquiry in Psychology</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 3 The Bases of Human Behaviour</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 4 Human Development</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 5 Sensory, Attentional And Perceptual Processes</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 6 Learning</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 7 Human Memory</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 8 Thinking</u></b></a></p>
                   <p><a href="https://ncertebooks.in/books/chapters/5f99a7c81d07503cbded9f8e" className="navbar-text2"><b><u>Chapter 9 Motivation And Emotion</u></b></a></p>
                  

                    </p><div className="card-page">
                      <h5 className="fg-primary">NCERT textbooks to be available in Indian sign language</h5>
                      <hr /><i>
                      <p>There are many books in the market but <b><i>NCERT eBooks</i></b> stand alone in the market. <b><i>Candidates</i></b> <b><i>preparing</i></b> for <b><i>civil services examinations</i></b> as well as <b><i>CBSE</i></b> <b><i>aspirants</i></b> require good books and resources for <b><i>high level preparation</i></b>.
                      Here we are providing the facility to <b>download</b> <i><b>Latest Edition</b></i> <b><i>(2020-21 Academic Year)</i></b> NCERT books totally <b><i>free</i></b> for <b><i>class 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 and 11th</i></b> students. You can download <b><i>NCERT text-books</i></b> as well as their <b><i>solutions for Hindi, English and Urdu medium schools</i></b>.</p>
                      
                      {/* Video */}
                      <div className="text-center py-5">
                        <embed className="embed-video" src="https://www.youtube.com/embed/8tiQuiCdbkM" />
                      </div>
                      <p>NCERT books are main books required for <b>CBSE Exams</b>, as well as useful to form the foundation in the <b><i>UPSC Civil Services Examination</i></b>. <b><i>Download</i></b> the latest 2020-2021 Edition (for Exams in 2021) of NCERT Books for Class 1 to 11 in PDF Format, in both Hindi and English. <b><i>NCERT solutions</i></b> of all the NCERT questions for Maths Class 6 to 11 free.
                      Here we are providing the facility to <b>download</b> <i><b>Latest Edition</b></i> <b><i>(2020-21 Academic Year)</i></b> NCERT books totally <b><i>free</i></b> for <b><i>class 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 and 11th</i></b> students. You can download <b><i>NCERT text-books</i></b> as well as their <b><i>solutions for Hindi, English and Urdu medium schools</i></b>.</p>
                      </i>
                    </div>
                   <HotTopics />
                   </div>
                   </article>
 


    </React.Fragment>
    );
};

export default Classes;