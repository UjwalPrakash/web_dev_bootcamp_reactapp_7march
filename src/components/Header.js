import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                {/* <!-- Main Header--> */}
                <header className="main-header header-style-one">
                    
                    {/* <!-- Header Top --> */}
                    <div className="header-top">
                        <div className="auto-container">
                            <div className="clearfix">
                            
                                {/* <!-- Top Left --> */}
                                <div className="top-left pull-left clearfix">
                                
                                    {/* <!-- Info List --> */}
                                    <ul className="info-list">
                                        <li><span>Call Us:</span><a href="tel:+123-456-7890"> +1 (800) 123-4567</a></li>
                                        <li><span>Email Us:</span><a href="mailto:info@yourcompany.com"> info@yourcompany.com</a></li>
                                    </ul>
                                    
                                </div>
                                
                                {/* <!-- Top Right --> */}
                                <div className="top-right pull-right clearfix">
                                    {/* <!-- Login Nav --> */}
                                    <ul className="login-nav">
                                        <li><Link to="/login">Log In</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Header Upper --> */}
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="clearfix">
                                
                                <div className="pull-left logo-box">
                                    <div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title="Bootcamp" /></a></div>
                                </div>
                                    
                                    <div className="nav-outer clearfix">
                                    {/* <!--Mobile Navigation Toggler--> */}
                                    <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
                                    {/* <!-- Main Menu --> */}
                                    <nav className="main-menu show navbar-expand-md">
                                        <div className="navbar-header">
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
            
                                        <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li className="current dropdown"><Link to="/">Home</Link></li>
                                                <li className="dropdown"><a href="#">Pages</a>
                                                    <ul>
                                                        <li><a href="price.html">Pricing</a></li>
                                                        <li><a href="privacy.html">Privacy Policy</a></li>
                                                        <li><a href="comming-soon.html">Coming Soon</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="#">Courses</a>
                                                    <ul>
                                                        <li><a href="course.html">Courses As Grid</a></li>
                                                        <li><a href="course-list.html">Courses As List</a></li>
                                                        <li><a href="course-path.html">Course Topics</a></li>
                                                        <li><a href="course-lesson.html">Course Lesson</a></li>
                                                        <li><a href="course-detail.html">Course Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="#">Books</a>
                                                    <ul>
                                                        <li><a href="books.html">Books</a></li>
                                                        <li><a href="books-detail.html">Book Detail</a></li>
                                                        <li><Link to="/bookAsPDF">Books as PDF</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="#">Profiles</a>
                                                    <ul>
                                                        <li><a href="intro-profile.html">Instructor Profile</a></li>
                                                        <li><a href="student-profile.html">Student Profile</a></li>
                                                        <li><a href="edit-profile.html">Edit Profile</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="#">Blog</a>
                                                    <ul>
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                                        <li><a href="error.html">Not Found / 404</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="#">Links</a>
                                                    <ul>
                                                        <li><a href="https://www.wikipedia.org">Wikipedia</a></li>
                                                        <li><a href="https://www.education.com">Education</a></li>
                                                        <li><a href="https://www.theidioms.com">The Idioms</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </div>
                                        
                                    </nav>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Header Upper --> */}
                    
                    {/* <!-- Mobile Menu  --> */}
                    <div className="mobile-menu">
                        <div className="menu-backdrop"></div>
                        <div className="close-btn"><span className="icon flaticon-multiply"></span></div>
                        
                        <nav className="menu-box">
                            <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-5.png" alt="" title="" /></a></div>
                            <div className="menu-outer">
                                {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                            </div>
                        </nav>
                    </div>
                    {/* <!-- End Mobile Menu --> */}
                    
                </header>
                {/* <!-- End Main Header --> */}
            </div>
        )
    }
}

export default Header