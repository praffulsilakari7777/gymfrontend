// import React, { useEffect, useState } from 'react'; 
// import ErrorModal from '../shared/components/UIElements/ErrorModal';
// import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
// import { useHttpClient } from '../shared/hooks/http-hook';

// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// // import './front-page.css';



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
    
//     <div className="col-lg-4 py-3">
//                   <div className="widget-wrap">
//                     <form action="#" className="search-form1">
//                       <h3 className="widget-title1">Search</h3>
//                       <div className="form-group1">
//                         <span className="icon mai-search" />
//                         <input type="text" className="form-control1" placeholder="Type a keyword and hit enter" />
//                       </div>
//                     </form>
//                   </div>
//                   <div className="widget-wrap">
//                     <h3 className="widget-title">Classes</h3>
//                     <ul className="categories">
//                       <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">science solution class 9 ncert<span>12</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">science solution class 9 ncert ncert solutions for class 8 math<span>9</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2">solution of class 10 maths ncert<span>8</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25754e1ec5cd6c1493d087/" className="navbar-text2">ncert maths solutions of class 11<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25753c1ec5cd6c1493d086/" className="navbar-text2">ncert solutions class 9 math<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25752b1ec5cd6c1493d085/" className="navbar-text2">ncert solutions of maths class 7<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575171ec5cd6c1493d084/" className="navbar-text2">maths class 10th<span>6</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575041ec5cd6c1493d083/" className="navbar-text2">sample paper for science class 9<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574f11ec5cd6c1493d082/" className="navbar-text2">science sample paper for class 10<span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574de1ec5cd6c1493d081/" className="navbar-text2">maths class 9 sample paper<span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574cd1ec5cd6c1493d080/" className="navbar-text2">exemplar ncert<span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574b91ec5cd6c1493d07f/" className="navbar-text2">maths ncert exemplar class 10<span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574971ec5cd6c1493d07e/" className="navbar-text2">sample paper of maths for class 10<span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">class 9 rd sharma solution<span>12</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">ncert maths solutions class 6<span>9</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2">cbse sample papers<span>8</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25754e1ec5cd6c1493d087/" className="navbar-text2">solutions of science ncert class 8<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25753c1ec5cd6c1493d086/" className="navbar-text2">ncert science solution class 6<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25752b1ec5cd6c1493d085/" className="navbar-text2">rd sharma class 10<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575171ec5cd6c1493d084/" className="navbar-text2">sample paper for cbse class 10<span>6</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575041ec5cd6c1493d083/" className="navbar-text2">sample paper class 10th<span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574f11ec5cd6c1493d082/" className="navbar-text2">ncert solution for class 10<span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574de1ec5cd6c1493d081/" className="navbar-text2">class 11 math ncert solution <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574cd1ec5cd6c1493d080/" className="navbar-text2">Class 3 <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574b91ec5cd6c1493d07f/" className="navbar-text2">Class 2 <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574971ec5cd6c1493d07e/" className="navbar-text2">Class 1 <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">Class 12 <span>12</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">Class 12 <span>9</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575601ec5cd6c1493d088/" className="navbar-text2">Class 11 <span>8</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25754e1ec5cd6c1493d087/" className="navbar-text2">Class 10 <span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25753c1ec5cd6c1493d086/" className="navbar-text2">Class 9 <span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f25752b1ec5cd6c1493d085/" className="navbar-text2">Class 8 <span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575171ec5cd6c1493d084/" className="navbar-text2">Class 7 <span>6</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2575041ec5cd6c1493d083/" className="navbar-text2">Class 6 <span>7</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574f11ec5cd6c1493d082/" className="navbar-text2">Class 5 <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574de1ec5cd6c1493d081/" className="navbar-text2">Class 4 <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574cd1ec5cd6c1493d080/" className="navbar-text2">Class 3 <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574b91ec5cd6c1493d07f/" className="navbar-text2">Class 2 <span>3</span></a></li>
//                       <li><a href="https://ncertebooks.in/books/5f2574971ec5cd6c1493d07e/" className="navbar-text2">Class 1 <span>3</span></a></li>
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
//                         <img src="https://lh3.googleusercontent.com/proxy/UdxwFe3dFrqpXVYmBbrS9CpHettI4Zq-4BK4C3bxWNmBxqq4vueWzwuPInxcqGjXSJ_GrO0I06jbwZON061xrBfozsc83VE" alt="" />
//                       </div>
//                       <div className="entry-footer">
//                         <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                         <div className="meta">
//                           <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
//                           <a href="#"><span className="icon-person" /> Admin</a>
//                           <a href="#"><span className="icon-chat" /> 19</a>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="blog-widget">
//                       <div className="blog-img">
//                         <img src="https://lh3.googleusercontent.com/proxy/UdxwFe3dFrqpXVYmBbrS9CpHettI4Zq-4BK4C3bxWNmBxqq4vueWzwuPInxcqGjXSJ_GrO0I06jbwZON061xrBfozsc83VE" alt="" />
//                       </div>
//                       <div className="entry-footer">
//                         <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
//                         <div className="meta">
//                           <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
//                           <a href="#"><span className="icon-person" /> Admin</a>
//                           <a href="#"><span className="icon-chat" /> 19</a>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="blog-widget">
//                       <div className="blog-img">
//                         <img src="https://lh3.googleusercontent.com/proxy/UdxwFe3dFrqpXVYmBbrS9CpHettI4Zq-4BK4C3bxWNmBxqq4vueWzwuPInxcqGjXSJ_GrO0I06jbwZON061xrBfozsc83VE" alt="" />
//                       </div>
//                       <div className="entry-footer">
//                         <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
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
//                       <a href="#" className="tag-cloud-link">dish</a>
//                       <a href="#" className="tag-cloud-link">menu</a>
//                       <a href="#" className="tag-cloud-link">food</a>
//                       <a href="#" className="tag-cloud-link">sweet</a>
//                       <a href="#" className="tag-cloud-link">tasty</a>
//                       <a href="#" className="tag-cloud-link">delicious</a>
//                       <a href="#" className="tag-cloud-link">desserts</a>
//                       <a href="#" className="tag-cloud-link">drinks</a>
//                     </div>
//                   </div>
//                   <div className="widget-wrap">
//                     <h3 className="widget-title">Paragraph</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
//                   </div>
//                 </div>
//          {/* .page-footer */}
      
    
 


//     </React.Fragment>
//     );
// };

// export default Classes;