import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!--Main Footer--> */}
                <footer className="main-footer">
                    {/* <!-- Pattern Layer --> */}
                    <div className="pattern-layer paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage:`url(require("assets/images/icons/icon-1.png"))`}}></div>
                    <div className="pattern-layer-two" data-paroller-factor=" 0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage:`url(require("assets/images/icons/icon-3.png"))`}}></div>
                    <div className="auto-container">
                    
                        {/* <!-- Widgets Section --> */}
                        <div className="widgets-section">
                            <div className="row clearfix">
                                
                                {/* <!-- Big Column --> */}
                                <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="row clearfix">
                                        
                                        {/* <!--Footer Column--> */}
                                        <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                            <div className="footer-widget logo-widget">
                                                <div className="logo">
                                                    <a href="index.html"><img src="assets/images/footer-logo.png" alt="" /></a>
                                                </div>
                                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater.</div>
                                                <div className="social-box">
                                                    <a href="#" className="fa fa-facebook"></a>
                                                    <a href="#" className="fa fa-instagram"></a>
                                                    <a href="#" className="fa fa-twitter"></a>
                                                    <a href="#" className="fa fa-google"></a>
                                                    <a href="#" className="fa fa-pinterest-p"></a>
                                                </div>
                                                <div className="copyright">Copyright &copy; 2020 AuburnForest</div>
                                            </div>
                                        </div>
                                        
                                        {/* <!--Footer Column--> */}
                                        <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                            <div className="footer-widget links-widget">
                                                <h4>About Us</h4>
                                                <ul className="links-widget">
                                                    <li><a href="#">Afficiates</a></li>
                                                    <li><a href="#">Partners</a></li>
                                                    <li><a href="#">Reviews</a></li>
                                                    <li><a href="#">Blogs</a></li>
                                                    <li><a href="#">Newsletter</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                {/* <!-- Big Column --> */}
                                <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="row clearfix">
                                        
                                        {/* <!--Footer Column--> */}
                                        <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                            <div className="footer-widget links-widget">
                                                <h4>Resource</h4>
                                                <ul className="links-widget">
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Support Area</a></li>
                                                    <li><a href="#">Documentations</a></li>
                                                    <li><a href="#">How it works</a></li>
                                                    <li><a href="#">Terms of Policy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        {/* <!--Footer Column--> */}
                                        <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                            <div className="footer-widget links-widget">
                                                <h4>Quick Links</h4>
                                                <ul className="links-widget">
                                                    <li><a href="#">home</a></li>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Features</a></li>
                                                    <li><a href="#">Pricing</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </footer>
                {/* End Footer */}
            </div>
        )
    }
}

export default Footer