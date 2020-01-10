import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="site-footer ">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 col-md-3">
                    <div className="footer-widget widget-border ">
                        <figure className="footer-logo">
                            <img src="images/bus.png" alt="footer-logo" />
                        </figure>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="footer-widget widget-border ">
                        <address>
                            Nagarjun-7 Balaju <br />
                            Kathmandu, Nepal
                        </address>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="footer-widget contact-widget widget-border ">
                        <p>ysewa@gmail.com</p>
                        <p>+977 - 9851012345</p>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="footer-widget ">
                        <div className="social-widget">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="copyright">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <span>Copyright &copy; 2019 <a href="https://ysewa.com/">Y-sewa</a></span>
                </div>
                <div className="col-md-8">
                    <ul className="footer-nav flex-end">
                        <li><a href="">Security Policy</a></li>
                        <li><a href="">Support Policy</a></li>
                        <li><a href="">Terms & condition</a></li>
                        <li><a href="">Faqs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
            </>
        )
    }
}
