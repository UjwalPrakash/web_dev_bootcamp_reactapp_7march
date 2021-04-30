import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper">
 	
                    {/* <!-- Preloader --> */}
                    <div className="preloader"></div>
                    
                    {/* <!-- Banner Section --> */}
                    <section className="banner-section">
                        <div className="pattern-layer" style={{backgroundImage: "url(" + "assets/images/background/1.png" + ")"}}></div>
                        <div className="auto-container">
                
                            {/* <!-- Content Boxed --> */}
                            <div className="content-boxed">
                                <div className="inner-column">
                                    <h1>Learn Math, Science, English and Test <br/> Prep from our Experts</h1>
                                    <div className="buttons-box">
                                        <a href="course.html" className="theme-btn btn-style-one"><span className="txt">Get Stared <i className="fa fa-angle-right"></i></span></a>
                                        <a href="course.html" className="theme-btn btn-style-two"><span className="txt">All Courses <i className="fa fa-angle-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- Image Boxed --> */}
                            <div className="image titlt" data-tilt="" data-tilt-max="4">
                                <a href="assets/images/resource/banner.png" data-fancybox="banner" data-caption="" className=""><img src="assets/images/resource/banner.png" alt="" /></a>
                            </div>
                            
                            {/* <!-- Search Boxed --> */}
                            <div className="search-boxed">
                                <div className="search-box">
                                    <form method="post" action="contact.html">
                                        <div className="form-group">
                                            <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required="" />
                                            <button type="submit"><span className="icon fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                    {/* <!-- End Banner Section --> */}
                    
                    {/* <!-- Education Section --> */}
                    <section className="education-section">
                        <div className="patern-layer-one paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" + "assets/images/icons/icon-1.png" + ")"}}></div>
                        <div className="patern-layer-two paroller" data-paroller-factor="0.60" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" + "assets/images/icons/icon-2.png" + ")"}}></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                
                                {/* <!-- Image Column --> */}
                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column parallax-scene-1">
                                        <div className="image parallax-layer" data-depth="0.30">
                                            <img src="assets/images/resource/education.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Content Column --> */}
                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h2>Our education system <br/> works for you</h2>
                                        <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed.</div>
                                        <a href="course.html" className="theme-btn btn-style-two"><span className="txt">Learn More <i className="fa fa-angle-right"></i></span></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Education Section --> */}
                    
                    {/* <!-- Courses Section --> */}
                    <section className="courses-section">
                        <div className="auto-container">
                            <div className="row clearfix">
                                
                                {/* <!-- Title Column --> */}
                                <div className="title-column col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        {/* <!-- Sec Title --> */}
                                        <div className="sec-title">
                                            <h2>Our top courses</h2>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered.</div>
                                        </div>
                                        <a href="course.html" className="theme-btn btn-style-three"><span className="txt">Get Stared <i className="fa fa-angle-right"></i></span></a>
                                    </div>
                                </div>
                                
                                {/* <!-- Cource Block --> */}
                                <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="course-detail.html"><img src="assets/images/resource/course-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <h5><a href="course-detail.html">Computer Science</a></h5>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="price">$140</div>
                                                </div>
                                            </div>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="students">125 Student</div>
                                                </div>
                                                <div className="pull-right">
                                                    <a href="course-detail.html" className="enroll">Enroll Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Cource Block --> */}
                                <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="course-detail.html"><img src="assets/images/resource/course-2.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <h5><a href="course-detail.html">Data Science</a></h5>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="price">$140</div>
                                                </div>
                                            </div>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="students">125 Student</div>
                                                </div>
                                                <div className="pull-right">
                                                    <a href="course-detail.html" className="enroll">Enroll Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Cource Block --> */}
                                <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="course-detail.html"><img src="assets/images/resource/course-3.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <h5><a href="course-detail.html">Development Course</a></h5>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="price">$140</div>
                                                </div>
                                            </div>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="students">125 Student</div>
                                                </div>
                                                <div className="pull-right">
                                                    <a href="course-detail.html" className="enroll">Enroll Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Cource Block --> */}
                                <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="course-detail.html"><img src="assets/images/resource/course-4.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <h5><a href="course-detail.html">Language Course</a></h5>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="price">$140</div>
                                                </div>
                                            </div>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="students">125 Student</div>
                                                </div>
                                                <div className="pull-right">
                                                    <a href="course-detail.html" className="enroll">Enroll Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Cource Block --> */}
                                <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="course-detail.html"><img src="assets/images/resource/course-5.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <h5><a href="course-detail.html">Business Course</a></h5>
                                                </div>
                                                <div className="pull-right">
                                                    <div className="price">$140</div>
                                                </div>
                                            </div>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="students">125 Student</div>
                                                </div>
                                                <div className="pull-right">
                                                    <a href="course-detail.html" className="enroll">Enroll Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Courses Section --> */}
                    
                    {/* <!-- Call To Action Section --> */}
                    <section className="call-to-action-section">
                        <div className="auto-container">
                            <div className="row clearfix">
                                
                                {/* <!-- Title Column --> */}
                                <div className="title-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        {/* <!-- Sec Title --> */}
                                        <div className="sec-title">
                                            <h2>Live the experience <br/> learn at your own pace</h2>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Form Column --> */}
                                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="help">For Help?</div>
                                        <div className="search-box">
                                            <form method="post" action="contact.html">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required="" />
                                                    <button type="submit"><span className="icon fa fa-search"></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Call To Action Section --> */}
                    
                    {/* <!-- Video Section --> */}
                    <section className="video-section" style={{backgroundImage: "url(" + "assets/images/background/2.jpg" + ")"}}>
                        <div className="auto-container">
                            <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image video-box"><span className="fa fa-play"><i className="ripple"></i></span></a>
                            <h4>Watch Intro Video</h4>
                        </div>
                    </section>
                    {/* <!-- End Video Section --> */}
                    
                    {/* <!-- Achievement Section --> */}
                    <section className="achievements-section">
                        <div className="auto-container">
                            {/* <!-- Sec Title --> */}
                            <div className="sec-title centered">
                                <h2>Our achievements</h2>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re <br/> two waters own morning gathered greater shall had behold had seed.</div>
                            </div>
                            
                            {/* <!-- Fact Counter --> */}
                            <div className="fact-counter">
                                <div className="row clearfix">
                
                                    {/* <!-- Column --> */}
                                    <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-course"></span>
                                                </div>
                                                <h4 className="counter-title">Total Courses</h4>
                                                <div className="count-outer count-box">
                                                    <span className="count-text" data-speed="2000" data-stop="50">0</span>+
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                    {/* <!-- Column --> */}
                                    <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-course-1"></span>
                                                </div>
                                                <h4 className="counter-title">Total Student</h4>
                                                <div className="count-outer count-box alternate">
                                                    <span className="count-text" data-speed="3000" data-stop="45">0</span>K+
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                    {/* <!-- Column --> */}
                                    <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="content">
                                                <div className="icon-box">
                                                    <span className="icon flaticon-world"></span>
                                                </div>
                                                <h4 className="counter-title">Global Position</h4>
                                                <div className="count-outer count-box">
                                                    <span className="count-text" data-speed="4000" data-stop="115">0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Achievement Section --> */}
                    
                    {/* <!-- Fluid Section One --> */}
                    <section className="fluid-section-one">
                        <div className="patern-layer-one paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" + "assets/images/icons/icon-1.png" + ")"}}></div>
                        <div className="outer-container clearfix">
                            
                            {/* <!-- Image Column --> */}
                            <div className="image-column" style={{backgroundImage:"url(" + "assets/images/resource/image-1.jpg" + ")"}}>
                                <figure className="image-box"><img src="assets/images/resource/image-1.jpg" alt="" /></figure>
                            </div>
                            
                            {/* <!-- Content Column --> */}
                            <div className="content-column">
                                <div className="inner-column">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h2>Upcoming events</h2>
                                        </div>
                                        <div className="pull-right">
                                            <a href="course-detail.html" className="events">All Events</a>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Blocks Outer --> */}
                                    <div className="blocks-outer">
                                        
                                        {/* <!-- Event Block --> */}
                                        <div className="event-block">
                                            <div className="inner-box">
                                                <div className="clearfix">
                                                    {/* <!-- Event Date --> */}
                                                    <div className="event-date clearfix"><span className="date">21</span>JAN 2020</div>
                                                    {/* <!-- Event List --> */}
                                                    <ul className="event-list">
                                                        <li><a href="course-detail.html">ART & DESIGN</a></li>
                                                        <li><a href="course-detail.html">PAINTING</a></li>
                                                    </ul>
                                                </div>
                                                <h3><a href="course-detail.html">Workshop on UI/ UX</a></h3>
                                            </div>
                                        </div>
                                        
                                        {/* <!-- Event Block --> */}
                                        <div className="event-block">
                                            <div className="inner-box">
                                                <div className="clearfix">
                                                    {/* <!-- Event Date --> */}
                                                    <div className="event-date clearfix"><span className="date">15</span>Mar 2020</div>
                                                    {/* <!-- Event List --> */}
                                                    <ul className="event-list">
                                                        <li><a href="course-detail.html">ART & DESIGN</a></li>
                                                        <li><a href="course-detail.html">PAINTING</a></li>
                                                    </ul>
                                                </div>
                                                <h3><a href="course-detail.html">Amsterdam art weekend</a></h3>
                                            </div>
                                        </div>
                                        
                                        {/* <!-- Event Block --> */}
                                        <div className="event-block">
                                            <div className="inner-box">
                                                <div className="clearfix">
                                                    {/* <!-- Event Date --> */}
                                                    <div className="event-date clearfix"><span className="date">21</span>mar 2020</div>
                                                    {/* <!-- Event List --> */}
                                                    <ul className="event-list">
                                                        <li><a href="course-detail.html">ART & DESIGN</a></li>
                                                        <li><a href="course-detail.html">PAINTING</a></li>
                                                    </ul>
                                                </div>
                                                <h3><a href="course-detail.html">Outside fashion - Group exhibition</a></h3>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </section>
                    
                    {/* <!-- News Section --> */}
                    <section className="news-section">
                        <div className="auto-container">
                            <div className="row clearfix">
                                
                                {/* <!-- Title Column --> */}
                                <div className="title-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        {/* <!-- Sec Title --> */}
                                        <div className="sec-title">
                                            <h2>Our Latest blog posts</h2>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed.</div>
                                        </div>
                                        <a href="course.html" className="theme-btn btn-style-three"><span className="txt">All Blog Post <i className="fa fa-angle-right"></i></span></a>
                                    </div>
                                </div>
                                
                                {/* <!-- News Column --> */}
                                <div className="news-block col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="blog-detail.html"><img src="assets/images/resource/news-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <h3><a href="blog-detail.html">To apply signal detection theory</a></h3>
                                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters</div>
                                            <a href="blog-detail.html" className="read-more">Continue Reading</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* <!-- End News Section --> */}
                    
                    {/* <!-- Testimonial Section --> */}
                    <section className="testimonial-section">
                        <div className="auto-container">
                            {/* <!-- Sec Title --> */}
                            <div className="sec-title centered">
                                <h2>Students & Parents Opinion</h2>
                            </div>
                            
                            {/* <!-- Authors Box --> */}
                            <div className="authors-box">
                                <div className="author-one"><img src="assets/images/resource/author-2.jpg" alt="" /></div>
                                <div className="author-two"><img src="assets/images/resource/author-3.jpg" alt="" /></div>
                                <div className="author-three"><img src="assets/images/resource/author-4.jpg" alt="" /></div>
                                <div className="author-four"><img src="assets/images/resource/author-5.jpg" alt="" /></div>
                                
                                <div className="author-five"><img src="assets/images/resource/author-6.jpg" alt="" /></div>
                                <div className="author-six"><img src="assets/images/resource/author-7.jpg" alt="" /></div>
                                <div className="author-seven"><img src="assets/images/resource/author-8.jpg" alt="" /></div>
                                <div className="author-eight"><img src="assets/images/resource/author-9.jpg" alt="" /></div>
                            </div>
                            
                            <div className="single-item-carousel owl-carousel owl-theme">
                                
                                {/* <!-- Testimonial Block Two --> */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <div className="quote-icon flaticon-quote-5"></div>
                                            <div className="image">
                                                <img src="assets/images/resource/author-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</div>
                                    </div>
                                </div>
                                
                                {/* <!-- Testimonial Block Two --> */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <div className="image">
                                                <img src="assets/images/resource/author-5.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</div>
                                    </div>
                                </div>
                                
                                {/* <!-- Testimonial Block Two --> */}
                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <div className="image">
                                                <img src="assets/images/resource/author-5.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>
                    {/* <!-- End Testimonial Section --> */}
                    
                    {/* <!-- Call To Action Section Two --> */}
                    <section className="call-to-action-section-two" style={{backgroundImage: "url(" + "assets/images/background/3.png" + ")"}}>
                        <div className="auto-container">
                            <div className="content">
                                <h2>Ready to get started?</h2>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two <br/> waters own morning gathered greater shall had behold had seed.</div>
                                <div className="buttons-box">
                                    <a href="course.html" className="theme-btn btn-style-one"><span className="txt">Get Stared <i className="fa fa-angle-right"></i></span></a>
                                    <a href="course.html" className="theme-btn btn-style-two"><span className="txt">All Courses <i className="fa fa-angle-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Call To Action Section Two --> */}
                    
                </div>
                {/* <!--End pagewrapper--> */}
                
                {/* <!--Scroll to top--> */}
                <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-arrow-circle-up"></span></div>
                
            </div>
        )
    }
}

export default Home