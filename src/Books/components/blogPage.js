import React from 'react';

import './blogPage.css';

const blogPage = props => {

    return (
       
 
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="../assets/favicon-light.png" alt="" width={40} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item active" href="index.html">Homepage 1</a>
                    <a className="dropdown-item" href="index-2.html">Homepage 2</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">Books</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="updates.html">What's New</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
              <div className="ml-auto my-2 my-lg-0">
                <button className="btn btn-dark rounded-pill">Download Now</button>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="page-hero-section bg-image hero-mini" style={{backgroundImage: 'url(../assets/img/hero_mini.svg)'}}>
            <div className="hero-caption">
              <div className="container fg-white h-100">
                <div className="row justify-content-center align-items-center text-center h-100">
                  <div className="col-lg-6">
                    <h3 className="mb-4 fw-medium">Books</h3>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                        <li className="breadcrumb-item"><a href="https://ncertebooks.in">Home</a></li>
                        <li className="breadcrumb-item"><a href="https://ncertebooks.in">Chapter wise book (All Classes)</a></li>
                        <li className="breadcrumb-item"><a href="https://ncertebooks.in">Full Books (All Classes)</a></li>
                        <li className="breadcrumb-item"><a href="https://ncertebooks.in">Chapter wise Solution (All Classes)</a></li>
                        {/* <li class="breadcrumb-item active" aria-current="page">Chapter wise book (All Classes)</li>
                <li class="breadcrumb-item"><a href="https://ncertebooks.in">Full Books (All Classes)</a></li>
                <li class="breadcrumb-item active" aria-current="page">Chapter wise Solution (All Classes)</li> */}
                        <li className="breadcrumb-item"><a href="https://ncertebooks.in">Full Books Solution (All Classes)</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><a href="https://ncertebooks.in">Books</a></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card-page">
                    <h3 className="mb-3">NCERT Solutions | NCERT Books| RD Sharma Solutions | NCERT Exemplar Problems | CBSE Sample Papers</h3>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books </a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Solutions </a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">MCQ Questions </a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">Textbook Solutions</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">Factoring Calculator</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">Coding for Kids</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">Maths Notes</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">Science Notes</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">Social Science Notes</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">English Notes</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 12</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 11</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 10</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 9</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 8</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 7</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 6</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 5</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 4</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 2</a> (2020-21 Academic Session)</p>
                    <a href="https://ncertebooks.in" /><p><a href="https://ncertebooks.in">NCERT Books for Class 1</a> (2020-21 Academic Session)</p>
                    <p>
                    </p><p>
                    </p><p>
                    </p><h3><b>FAQs on NCERT Books for Class 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</b></h3>
                    <p>
                    </p><p>
                    </p><p>
                    </p><h5><b>1. What includes NCERT Books?</b></h5>
                    <p>
                    </p><p>
                    </p><ul className="theme-list">
                      <li className="list-item">NCERT Books includes CBSE prescribed the latest academic session syllabus of all subjects for the respective class in an explanatory way. High experienced subject experts designed all the concepts in a conceptual way in a simple language. You can also find solved &amp; unsolved exercises for better practice after the end of every chapter.</li>
                      <li className="list-item"> Also, you can explore previous questions of all concepts in NCERT Solutions Books.</li>
                    </ul>
                    <p>
                    </p><p>
                    </p><p>
                    </p><h5><b>2. How do NCERT Textbooks help in competitive exams like JEE, NEET, and AIPMT?</b></h5>
                    <p>
                    </p><p>
                    </p><ul className="theme-list">
                      <li className="list-item">Most important competitive exams like JEE Mains, NEET, AIPMT, etc follow the NCERT Books of Class 10 &amp; 12 mostly to prepare their exam papers. To secure a better rank in competitive exams, NCERT Textbooks helps you a lot &amp; even it improves your subject knowledge to an extent.</li>
                    </ul>
                    <p>
                    </p><p>
                    </p><p>
                    </p><h5><b>3. How to download NCERT Books for Class 1 to 12 online?</b></h5>
                    <p>
                    </p><p>
                    </p><ul className="theme-list">
                      <li className="list-item">To download NCERT eBooks Online, all you have to do is visit the official site ‘NCERT’ or else simply click on the respective class links provided on Ncertenotes.in page and downlaod NCERT Textbooks online in PDF format.</li>
                    </ul>
                    <p>
                    </p><p>
                    </p><p>
                    </p><h5><b>4. How to make good notes from NCERT Textbooks?</b></h5>
                    <p>
                    </p><p>
                    </p><ul className="theme-list">
                      <li className="list-item">To download NCERT eBooks Online, all you have to do is visit the official site ‘NCERT’ or else simply click on the respective class links provided on Ncertenotes.in page and downlaod NCERT Textbooks online in PDF format.</li>
                    </ul>
                    <p>
                    </p><p>
                    </p><p>
                    </p><div className="card-page">
                      <h5 className="fg-primary">NCERT textbooks to be available in Indian sign language</h5>
                      <hr />
                      <p>According to officials of the ministry, the cognitive skills of children are developed in the childhood and it is necessary to provide them with educational material in accordance with their learning needs.</p>
                      <p>The National Council of Educational Research and Training (NCERT) signed an MoU with the Indian Sign Language Research and Training Centre (ISLRTC) on Tuesday to make textbooks and other educational material accessible for deaf children in sign language. “The availability of NCERT textbooks in Indian Sign Language (ISL) will ensure that hearing-impaired children can also now access educational resources and it will be a useful and much needed resource for teachers, teacher educators, parents and the hearing-impaired community,” Union Minister for Social Justice and Empowerment Thawar Chand Gehlot said.</p>
                      {/* Video */}
                      <div className="text-center py-5">
                        <embed className="embed-video" src="https://www.youtube.com/embed/k1D0_wFlXgo?list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX" />
                      </div>
                      <p>According to officials of the ministry, the cognitive skills of children are developed in the childhood and it is necessary to provide them with educational material in accordance with their learning needs.
                        “So far, hearing-impaired children used to study only through a verbal or written medium but after the signing of this MoU, they can study through a single Indian Sign Language also. It will not only enhance their vocabulary, but also enhance their capabilities to understand concepts,” Secertary Shakuntala Gamlin said.</p>
                    </div>
                    <p><b>Here we have given download files for all the subjects of Classes 1 to 12. The subjects are:</b></p>
                    <ul className="theme-list">
                      <li className="list-item"><a href="https:ncertebooks.in">Class 1 </a>- Hindi, English, Maths, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 2 </a>- Hindi, English, Maths, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 3 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 4 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 5 </a>- Hindi, English, Maths, Urdu, Enviornmental Studies (EVS)</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 6 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 7 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 8 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 9 </a>- Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu, Health and Physical Education</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 10</a> - Maths, Science, Social Science, Hindi, English, Sanskrit, Urdu</li>
                      <li className="list-item">Resolves an issue where the Cellular Data setting may incorrectly show as off</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 11</a> - Accountancy , Biology , Business Studies , Chemistry , Computers and Communication Technology , Creative Writing and Translation , Economics , English , Fine Art , Geography , Graphics design , Heritage Crafts , Hindi , History , Home Science , Mathematics , Physics , Political Science , Psychology , Sanskrit , Sociology , Statistics , Urdu</li>
                      <li className="list-item"><a href="https:ncertebooks.in">Class 12</a> - Accountancy , Biology , Business Studies , Chemistry , Economics , English , Geography , Heritage Crafts , Hindi , History , Home Science , Mathematics , New Age Graphics Design , Physics , Political Science , Psychology , Sanskrit , Sociology , Urdu</li>
                    </ul>
                    <p>For information on the security content of Apple software updates, please visit this website: <a href="https://support.apple.com/kb/HT201222 ">https://support.apple.com/kb/HT201222</a></p>
                  </div>
                  <div className="card-page mt-3">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 py-3">
                  <article className="blog-entry">
                    <div className="entry-header">
                      <div className="post-thumbnail">
                        <img src="../assets/img/blogs/blog_4.jpg" alt="" />
                      </div>
                      <div className="post-date">
                        <h3>20</h3>
                        <span>Feb</span>
                      </div>
                    </div>
                    <div className="post-title"><a href="blog-details.html">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                    <div className="entry-meta mb-2">
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
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
                    </div>
                    <a href="#" className="btn btn-primary">View Chapter</a>
                    <a href="#" className="btn btn-primary">View Solution</a>
                    {/* .btn
              .btn-default
              .btn-primary
              .btn-success
              .btn-info
              .btn-warning
              .btn-danger
              .btn-link */}
                  </article>
                  <article className="blog-entry">
                    <div className="entry-header">
                      <div className="post-thumbnail">
                        <img src="../assets/img/blogs/blog_5.jpg" alt="" />
                      </div>
                      <div className="post-date">
                        <h3>20</h3>
                        <span>Feb</span>
                      </div>
                    </div>
                    <div className="post-title"><a href="blog-details.html">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                    <div className="entry-meta mb-2">
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
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
                    </div>
                    <a href="#" className="btn btn-primary">Continue Reading</a>
                  </article>
                  <article className="blog-entry">
                    <div className="entry-header">
                      <div className="post-thumbnail">
                        <img src="../assets/img/blogs/blog_6.jpg" alt="" />
                      </div>
                      <div className="post-date">
                        <h3>06</h3>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="post-title"><a href="blog-details.html">Duis feugiat neque sed dolor cursus, sed lacinia nisl pretium</a></div>
                    <div className="entry-meta mb-2">
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
                        <a href="#">0 Comments</a>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo officia tenetur hic facere animi doloremque adipisci, fugiat ratione corrupti eius amet exercitationem dolorem inventore eum et placeat, sunt ducimus.</p>
                    </div>
                    <a href="#" className="btn btn-primary">Continue Reading</a>
                  </article>
                </div>
                {/* Sidebar */}
                <div className="col-lg-4 py-3">
                  <div className="widget-wrap">
                    <form action="#" className="search-form">
                      <h3 className="widget-title">Search</h3>
                      <div className="form-group">
                        <span className="icon mai-search" />
                        <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                      </div>
                    </form>
                  </div>
                  <div className="widget-wrap">
                    <h3 className="widget-title">Classes</h3>
                    <ul className="categories">
                      <li><a href="https://ncertebooks.in/books/5f2575ac1ec5cd6c1493d08a/">Class 12 <span>12</span></a></li>
                      <li><a href="#">Class 12 <span>9</span></a></li>
                      <li><a href="#">Class 11 <span>8</span></a></li>
                      <li><a href="#">Class 10 <span>7</span></a></li>
                      <li><a href="#">Class 9 <span>7</span></a></li>
                      <li><a href="#">Class 8 <span>7</span></a></li>
                      <li><a href="#">Class 7 <span>6</span></a></li>
                      <li><a href="#">Class 6 <span>7</span></a></li>
                      <li><a href="#">Class 5 <span>3</span></a></li>
                      <li><a href="#">Class 4 <span>3</span></a></li>
                      <li><a href="#">Class 3 <span>3</span></a></li>
                      <li><a href="#">Class 2 <span>3</span></a></li>
                      <li><a href="#">Class 1 <span>3</span></a></li>
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
                        <img src="../assets/img/blogs/blog_1.jpg" alt="" />
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
                        <img src="../assets/img/blogs/blog_2.jpg" alt="" />
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
                        <img src="../assets/img/blogs/blog_3.jpg" alt="" />
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
              </div>
            </div>
          </div>
        </main>
        <footer className="page-footer-section bg-dark fg-white">
          <div className="container">
            <div className="row mb-5 py-3">
              <div className="col-sm-6 col-lg-3 py-3">
                <h5 className="mb-3">FREE RESOURCES</h5>
                <ul className="menu-link">
                  <li><a href="#" className>NCERT Solution for Class 12</a></li>
                  <li><a href="#" className>NCERT Solution for Class 11</a></li>
                  <li><a href="#" className>NCERT Solution for Class 10</a></li>
                  <li><a href="#" className>NCERT Solution for Class 9</a></li>
                  <li><a href="#" className>NCERT Solution for Class 8</a></li>
                  <li><a href="#" className>NCERT Solution for Class 7</a></li>
                  <li><a href="#" className>NCERT Solution for Class 6</a></li>
                  <li><a href="#" className>NCERT Solution for Class 5</a></li>
                  <li><a href="#" className>NCERT Solution for Class 4</a></li>
                  <li><a href="#" className>NCERT Solution for Class 3</a></li>
                  <li><a href="#" className>NCERT Solution for Class 2</a></li>
                  <li><a href="#" className>NCERT Solution for Class 1</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3 py-3">
                <h5 className="mb-3">NCERT SOLUTIONS</h5>
                <ul className="menu-link">
                  <li><a href="#" className>NCERT Solution for Class 12</a></li>
                  <li><a href="#" className>NCERT Solution for Class 11</a></li>
                  <li><a href="#" className>NCERT Solution for Class 10</a></li>
                  <li><a href="#" className>NCERT Solution for Class 9</a></li>
                  <li><a href="#" className>NCERT Solution for Class 8</a></li>
                  <li><a href="#" className>NCERT Solution for Class 7</a></li>
                  <li><a href="#" className>NCERT Solution for Class 6</a></li>
                  <li><a href="#" className>NCERT Solution for Class 5</a></li>
                  <li><a href="#" className>NCERT Solution for Class 4</a></li>
                  <li><a href="#" className>NCERT Solution for Class 3</a></li>
                  <li><a href="#" className>NCERT Solution for Class 2</a></li>
                  <li><a href="#" className>NCERT Solution for Class 1</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 py-3">
                <h5 className="mb-3">QUICK RESOURCES</h5>
                <ul className="menu-link">
                  <li><a href="#" className>NCERT Solution for Class 12</a></li>
                  <li><a href="#" className>NCERT Solution for Class 11</a></li>
                  <li><a href="#" className>NCERT Solution for Class 10</a></li>
                  <li><a href="#" className>NCERT Solution for Class 9</a></li>
                  <li><a href="#" className>NCERT Solution for Class 8</a></li>
                  <li><a href="#" className>NCERT Solution for Class 7</a></li>
                  <li><a href="#" className>NCERT Solution for Class 6</a></li>
                  <li><a href="#" className>NCERT Solution for Class 5</a></li>
                  <li><a href="#" className>NCERT Solution for Class 4</a></li>
                  <li><a href="#" className>NCERT Solution for Class 3</a></li>
                  <li><a href="#" className>NCERT Solution for Class 2</a></li>
                  <li><a href="#" className>NCERT Solution for Class 1</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 py-3">
                <h5 className="mb-3">QUICK RESOURCES</h5>
                <ul className="menu-link">
                  <li><a href="#" className>NCERT Solution for Class 12</a></li>
                  <li><a href="#" className>NCERT Solution for Class 11</a></li>
                  <li><a href="#" className>NCERT Solution for Class 10</a></li>
                  <li><a href="#" className>NCERT Solution for Class 9</a></li>
                  <li><a href="#" className>NCERT Solution for Class 8</a></li>
                  <li><a href="#" className>NCERT Solution for Class 7</a></li>
                  <li><a href="#" className>NCERT Solution for Class 6</a></li>
                  <li><a href="#" className>NCERT Solution for Class 5</a></li>
                  <li><a href="#" className>NCERT Solution for Class 4</a></li>
                  <li><a href="#" className>NCERT Solution for Class 3</a></li>
                  <li><a href="#" className>NCERT Solution for Class 2</a></li>
                  <li><a href="#" className>NCERT Solution for Class 1</a></li>
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
                  <li><a href="#" className>Features</a></li>
                  <li><a href="#" className>Customers</a></li>
                  <li><a href="#" className>Pricing</a></li>
                  <li><a href="#" className>GDPR</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-2 py-3">
                <h5 className="mb-3">Company</h5>
                <ul className="menu-link">
                  <li><a href="#" className>About</a></li>
                  <li><a href="#" className>Team</a></li>
                  <li><a href="#" className>Leadership</a></li>
                  <li><a href="#" className>Careers</a></li>
                  <li><a href="#" className>HIRING!</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 py-3">
                <h5 className="mb-3">Contact</h5>
                <ul className="menu-link">
                  <li><a href="#" className>Contact Us</a></li>
                  <li><a href="#" className>Office Location</a></li>
                  <li><a href="#" className>hello@mobster.com</a></li>
                  <li><a href="#" className>support@macodeid.com</a></li>
                  <li><a href="#" className>+808 11233 900</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 py-3">
                <h5 className="mb-3">Subscribe</h5>
                <p>Get some offers, news, or update features of application</p>
                <form method="POST">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your email.." />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary"><span className="mai-send" /></button>
                    </div>
                  </div>
                </form>
                {/* Social Media Button */}
                <div className="mt-4">
                  <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-facebook" /></a>
                  <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-twitter" /></a>
                  <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-instagram" /></a>
                  <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-google" /></a>
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
                <p className="d-inline-block ml-2">Copyright © <a href="https://www.macodeid.com/" className="fg-white fw-medium">MACode ID</a>. All rights reserved</p>
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
          
    );
};

export default blogPage;