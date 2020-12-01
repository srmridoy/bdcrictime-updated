import React from 'react';
import { Link } from 'react-router-dom';
import AppBanner from '../../assets/img/add-banner.svg';
import FooterLogo from '../../assets/img/footer-main-logo.svg';
import FacebookIcon from '../../assets/img/facebook.svg';
import TwitterIcon from '../../assets/img/twitter.svg';
import LinkedInIcon from '../../assets/img/linked in.svg';
import PinterestIcon from '../../assets/img/pinterest.svg';

function Footer() {
    return (
        <>
            {/* Footer top-area start */}
            <div className="footer-top-area fx-padding">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="top-app-banner">
                        <Link to="/"><img src={AppBanner} alt="" /></Link>
                    </div>
                    <div className="subs-area">
                        <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-end">
                            <div className="subs-area-left-text">
                            <h3>Subscribe to our NEWSLETTER</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="subs-form">
                            <div className="subs-form-main">
                                <form action="">
                                <input type="text" disabled placeholder="Enter Your Email" />
                                <button type="submit">Subscribe</button>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Footer top-area end */}
            {/* Footer area start */}
            <div className="footer-area ">
                <div className="footer-wrapper fx-padding ">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-single-widget">
                        <div className="footer-logo">
                            <Link to="/"><img src={FooterLogo} alt="" /></Link>
                        </div>
                        <div className="footer-widget-texts">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-single-widget">
                        <div className="footer-widget-texts d-flex justify-content-start">
                            <div className="footer-menu-single-blk">
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/live-score">LIVE SCORES</Link></li>
                                <li><Link to="/fixtures">FIXTURES</Link></li>
                                <li><Link to="/international">INTERNATIONAL</Link></li>
                                <li><Link to="/bangladesh">BANGLADESH</Link></li>
                            </ul>
                            </div>
                            <div className="footer-menu-single-blk">
                            <ul>
                                <li><Link to="/teams">TEAMS</Link></li>
                                <li><Link to="/photos">PHOTOS</Link></li>
                                <li><Link to="/videos">VIDEOS</Link></li>
                                <li><Link to="/stats">STATS</Link></li>
                                <li><Link to="/ranking">RANKING</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-2">
                        <div className="footer-single-widget">
                        <div className="footer-widget-texts">
                            <div className="site-social-icons-links">
                            <Link to="/facebook"><img src={FacebookIcon} alt="" /></Link>
                            <Link to="/twitter"><img src={TwitterIcon} alt="" /></Link>
                            <Link to="/linkedin"><img src={LinkedInIcon} alt="" /></Link>
                            <Link to="/pinterest"><img src={PinterestIcon} alt="" /></Link>
                            </div>
                            <div className="foote-action-buttons">
                            <Link to="/advertising">CONTACT FOR ADVERTISING</Link>
                            <Link to="/become-a-writer">BECOME A WRITER</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-cp-text">
                <p>© Copyright bdcrictime 2019</p>
            </div>
            {/* Footer area end */}
        </>
    );
}

export default Footer;
