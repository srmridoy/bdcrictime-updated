import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/site-main-logo.svg';
import LogoWhite from '../../assets/img/logo-whitetext-02.png';
import $ from 'jquery';
import 'jquery-sticky';
import 'bootstrap/dist/js/bootstrap.min.js'
import Clock from 'react-live-clock';

function Header() {

    useEffect(() => {
        $("#sticker").sticky({topSpacing:0});
    });
    
    return (
        <>
            {/* Header bar section start */}
            <header className="header-bar-section">
                <div className="header-bar-wrapper fx-padding">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-6 d-flex align-items-center">
                        <div className="header-top-left-text">
                        <p><Clock format={'DD, MMMM YYYY'} ticking={true} timezone={'Asia/Dhaka'} /><span>|</span><Clock format={'hh:mm:ss A'} ticking={true} timezone={'Asia/Dhaka'} /></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-top-right-text">
                        <div className="lang-select-box">
                            <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                English
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/bangla">Bangla</Link>
                            </div>
                            </div>
                        </div>
                        <div className="login-btn">
                            <Link to="/login">LOGIN</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/* Header bar section complate */}
            {/* Logo area start */}
            <div className="site-logo-area">
                <div className="site-logo-area fx-padding">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="site-main-logo">
                        <Link to="/"><img src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Logo area end */}
            {/* Header menu aera start */}
            <div className="header-top-main-menu" id="sticker">
                <div className="header-top-main-wrapper fx-padding">
                <div className="container-fluid">
                    <div className="main-menu-bar">
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <div className="stkey-logo">
                            <Link to="/"><img src={LogoWhite} alt="" /></Link>
                        </div>
                        <ul className="site-main-menu navbar-nav mr-auto">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/live-score">LIVE SCORES</Link></li>
                            <li><Link to="/international">INTERNATIONAL</Link></li>
                            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" to="/team" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TEAM</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/team/australia">Australia <img src="https://images.cricket.com/teams/1_flag_safari.png" alt="" style={{height:"30px"}}/></Link>
                                <Link className="dropdown-item" to="/team/bangladesh">Bangladesh <img src="https://images.cricket.com/teams/2_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/england">England <img src="https://images.cricket.com/teams/3_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/sri-lanka">Sri Lanka <img src="https://images.cricket.com/teams/8_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/new-zealand">New Zealand <img src="https://images.cricket.com/teams/5_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/pakistan">Pakistan <img src="https://images.cricket.com/teams/6_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/south-africa">South Africa <img src="https://images.cricket.com/teams/7_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/india">India <img src="https://images.cricket.com/teams/4_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/ireland">IreLand <img src="https://images.cricket.com/teams/13_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/west-indies">West Indies <img src="https://images.cricket.com/teams/9_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/zimbabwe">Zimbabwe  <img src="https://images.cricket.com/teams/10_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                            </div>
                            </li>
                            <li><Link to="/photos">PHOTOS</Link></li>
                            <li><Link to="/fixtures">FIXTURES</Link></li>
                            <li><Link to="/stats">STATS</Link></li>
                            <li><Link to="/ranking">RANKING</Link></li>
                        </ul>
                        </div>
                        <div className="header-top-search-bar">
                        <div className="header-top-search-bar-main">
                            <button type="submit"><i className="fal fa-search" /></button>
                            <input type="text" placeholder="Search..." />
                        </div>
                        </div>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            <div className="mobile-hs-menu fx-padding">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <ul>
                        <li><Link className="active" to="/">HOME</Link></li>
                        <li><Link to="/live-scores">LIVE SCORES</Link></li>
                        <li><Link to="/international">INTERNATIONAL</Link></li>
                        <li><Link to="/team">TEAM</Link></li>
                        <li><Link to="/photos">PHOTOS</Link></li>
                        <li><Link to="/fixtures">FIXTURES</Link></li>
                        <li><Link to="/stats">STATS</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            {/* Header menu aera end */}
        </>
    );
}

export default Header;
