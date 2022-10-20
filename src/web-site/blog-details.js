import React, { useEffect, useState } from 'react'; 
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';
import Footer from './footer';

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
          
          <div className="page-section">
            
              <div className="row">
                <div className="col-lg-8 py-3">
                  <article className="blog-single-entry">
                    <div className="post-thumbnail">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSizS24T7zODCTW06rvTuuB5Je7SmSDsypRGw&usqp=CAU" alt="" />
                    </div>
                    <div className="post-date">
                      Posted on <a href="#">Jan 19, 2020</a>
                    </div>
                    <h2 className="post-title">NCERT Solutions for Class 1 to 12, Free CBSE NCERT Solutions</h2>
                    <div className="entry-meta mb-4">
                      <div className="meta-item entry-author">
                        <div className="icon">
                          <span className="mai-person" />  
                        </div>
                        by <a href="#">Admin</a>
                      </div>
                      <div className="meta-item">
                        <div className="icon">
                          <span className="mai-pricetags" />
                        </div>
                        Category: 
                        <a href="#">Business</a>, 
                        <a href="#">Finances</a>
                      </div>
                      <div className="meta-item">
                        <div className="icon">
                          <span className="mai-chatbubble-ellipses" />
                        </div>
                        <a href="#">24 Comments</a>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>NCERT Solutions The candidates who are studying under CBSE board and in search for NCERT Solutions can refer to this article to this article. In this article, we have listed down the NCERT Solutions for Class 1 to Class 12 for all the subjects updated for new academic session 2019-20 in PDF format. The NCERT Solutions for class 1 to class 12 has been written in order to help the students in all the level of grades. LearnCBSE has given detailed solutions for all the questions keeping the marking scheme for each question.</p>
                      <p>This in turn, helps you ace the exam with colourful grades. These NCERT Solutions PDF will not only help students to score good marks in their class tests, board exams but also helps to clear the toughest competitive exams like NEET, JEE Main, JEE Advanced, AIIMS etc., Read on to find out everything about NCERT Solutions for all the classes here.</p>
                      <p>About NCERT: The National Council of Educational Research and Training, http://ncert.nic.in/ is an autonomous organization which works under the government of India for the improvement of school education. CBSE board and some state boards schools such as UP Board, MP Board, Gujarat Board, Bihar, Uttarakhand and many other state boards schools follow the curriculum & textbooks prescribed by NCERT.</p>
                    </div>
                  </article>
                  {/* Comments */}
                  <div className="comment-area">
                    <h3 className="mb-5">6 Comments</h3>
                    {/* Comment List */}
                    <ul className="comment-list">
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="https://www.mauritius-images.com/assets/img/mauritius-images-icon.png" alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                          <h3>Jacob Smith</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="https://www.mauritius-images.com/assets/img/mauritius-images-icon.png" alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                          <h3>Chris Meyer</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                               <img src="https://www.mauritius-images.com/assets/img/mauritius-images-icon.png" alt="Image placeholder" />
                               </div>
                                <div className="comment-body">
                              <h3>Chintan Patel</h3>
                              <div className="meta">January 9, 2018 at 2:21pm</div>
                              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                              <p><a href="#" className="reply">Reply</a></p>
                            </div>
                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img src="https://www.mauritius-images.com/assets/img/mauritius-images-icon.png" alt="Image placeholder" />
                                </div>
                                <div className="comment-body">
                                  <h3>Jean Doe</h3>
                                  <div className="meta">January 9, 2018 at 2:21pm</div>
                                  <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                  <p><a href="#" className="reply">Reply</a></p>
                                </div>
                                <ul className="children">
                                  <li className="comment">
                                    <div className="vcard bio">
                                      <img src="https://www.mauritius-images.com/assets/img/mauritius-images-icon.png" alt="Image placeholder" />
                                    </div>
                                    <div className="comment-body">
                                      <h3>Ben Afflick</h3>
                                      <div className="meta">January 9, 2018 at 2:21pm</div>
                                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                      <p><a href="#" className="reply">Reply</a></p>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="https://www.mauritius-images.com/assets/img/mauritius-images-icon.png" alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>
                      </li>
                    </ul> {/* END .comment-list */}
                    <div className="comment-form-wrap pt-5">
                      <h3 className="mb-5">Leave a comment</h3>
                      <form action="#" className>
                        <div className="form-row form-group">
                          <div className="col-md-6">
                            <label htmlFor="name">Name *</label>
                            <input type="text" className="form-control1" id="name" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="email">Email *</label>
                            <input type="email" className="form-control1" id="email" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="website">Website</label>
                          <input type="url" className="form-control1" id="website" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea name="msg" id="message" cols={30} rows={10} className="form-control1" defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <input type="submit" defaultValue="Post Comment" className="btn btn-primary" />
                        </div>
                      </form>
                    </div>
                  </div> {/* end comment */}
                </div>
                {/* Sidebar */}
                <div className="col-lg-4 py-3">
                  <div className="widget-wrap">
                    <form action="#" className="search-form1">
                      <h3 className="widget-title1">Search</h3>
                      <div className="form-group1">
                        <span className="icon mai-search" />
                        <input type="text" className="form-control1" placeholder="Type a keyword and hit enter" />
                      </div>
                    </form>
                  </div>
                  <div className="widget-wrap">
                    <h3 className="widget-title">Classes</h3>
                    <ul className="categories">
                      <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/" className="navbar-text2">Class 12 <span>12</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 12 <span>9</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 11 <span>8</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 10 <span>7</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 9 <span>7</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 8 <span>7</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 7 <span>6</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 6 <span>7</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 5 <span>3</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 4 <span>3</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 3 <span>3</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 2 <span>3</span></a></li>
                      <li><a href="#" className="navbar-text2">Class 1 <span>3</span></a></li>
                      {/* <li><a href="#">Graphic Designer <span>12</span></a></li>
                <li><a href="#">Visual Assistant <span>22</span></a></li>
                <li><a href="#">Programing <span>37</span></a></li>
                <li><a href="#">Office Admin <span>42</span></a></li>
                <li><a href="#">Web Designer <span>14</span></a></li>
                <li><a href="#">Language <span>140</span></a></li> */}
                    </ul>
                  </div>
                  <div className="widget-wrap">
                    <h3 className="widget-title">Recent Blog</h3>
                    <div className="blog-widget">
                      <div className="blog-img">
                        <img src="https://lh3.googleusercontent.com/proxy/UdxwFe3dFrqpXVYmBbrS9CpHettI4Zq-4BK4C3bxWNmBxqq4vueWzwuPInxcqGjXSJ_GrO0I06jbwZON061xrBfozsc83VE" alt="" />
                      </div>
                      <div className="entry-footer">
                        <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                        <div className="meta">
                          <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
                          <a href="#"><span className="icon-person" /> Admin</a>
                          <a href="#"><span className="icon-chat" /> 19</a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="blog-img">
                        <img src="https://lh3.googleusercontent.com/proxy/UdxwFe3dFrqpXVYmBbrS9CpHettI4Zq-4BK4C3bxWNmBxqq4vueWzwuPInxcqGjXSJ_GrO0I06jbwZON061xrBfozsc83VE" alt="" />
                      </div>
                      <div className="entry-footer">
                        <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                        <div className="meta">
                          <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
                          <a href="#"><span className="icon-person" /> Admin</a>
                          <a href="#"><span className="icon-chat" /> 19</a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="blog-img">
                        <img src="https://lh3.googleusercontent.com/proxy/UdxwFe3dFrqpXVYmBbrS9CpHettI4Zq-4BK4C3bxWNmBxqq4vueWzwuPInxcqGjXSJ_GrO0I06jbwZON061xrBfozsc83VE" alt="" />
                      </div>
                      <div className="entry-footer">
                        <div className="blog-title mb-2"><a href="#">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                        <div className="meta">
                          <a href="#"><span className="icon-calendar" /> July 12, 2018</a>
                          <a href="#"><span className="icon-person" /> Admin</a>
                          <a href="#"><span className="icon-chat" /> 19</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-wrap">
                    <h3 className="widget-title">Tag Cloud</h3>
                    <div className="tag-clouds">
                      <a href="#" className="tag-cloud-link">dish</a>
                      <a href="#" className="tag-cloud-link">menu</a>
                      <a href="#" className="tag-cloud-link">food</a>
                      <a href="#" className="tag-cloud-link">sweet</a>
                      <a href="#" className="tag-cloud-link">tasty</a>
                      <a href="#" className="tag-cloud-link">delicious</a>
                      <a href="#" className="tag-cloud-link">desserts</a>
                      <a href="#" className="tag-cloud-link">drinks</a>
                    </div>
                  </div>
                  <div className="widget-wrap">
                    <h3 className="widget-title">Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                  </div>
                </div> {/* end sidebar */}
              </div> {/* .row */}
            </div>
         
        </main>
       <Footer />
      </div>
    
 


    </React.Fragment>
    );
};

export default Classes;