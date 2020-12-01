import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import he from 'he';
import Logo from '../assets/img/site-main-logo.svg';

import Sponsor from '../assets/img/sponsor.svg';
import LogoWhite from '../assets/img/logo-whitetext-02.png';
import $ from 'jquery';
import 'jquery-sticky';
import 'bootstrap/dist/js/bootstrap.min.js'
import Clock from 'react-live-clock';
import Encryption from 'object-encrypt-decrypt';
import axios from 'axios';
import Advertisement from './Advertisement';
import {isMobile} from "react-device-detect";

function Header() {
    const user = localStorage.getItem('InRva2VuIg==') ? Encryption.decrypt(localStorage.getItem('InRva2VuIg==')) : null;

    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');
    const [focus, setFocus] = useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value);
      }

    useEffect(() => {
        $("#sticker").sticky({topSpacing:0});
        $('.searchbox').focus(function(){
            setFocus(true);
        }).focusout(function(){
            setFocus(false);
        });
    }, []);


    const fireSearch = (event) => {
        event.preventDefault()
        setNews([]);
        if(search) {
            axios.get('https://www.bdcrictime.com/wp-json/wp/v2/search?search='+search+'&_embed')
            .then(function (response) {
                setNews(response.data)
            })
        }
    };
    
    return (
        <>
        <div className="sampleDiv"></div>
            {/* Header bar section start */}
            {isMobile ? <Advertisement size={32050} imgstyle={{width:'100%'}}/> : null}
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
                            {user ?
                            <Link to="/profile">{user.user_display_name}</Link>
                            :
                            <Link to="/login">LOGIN</Link>
                            }
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
                        <div className={isMobile ? "site-main-logo text-center" : "site-main-logo"}>
                            <Link to="/"><img src={Logo} alt="" /></Link>
                            <a href="https://www.gameof11.com/" target="_blank" rel="noopener noreferrer" style={{marginLeft:'15px'}}><img src={Sponsor} alt="" style={{height:'70px'}} /></a>
                            {isMobile ? null : <Advertisement size={728} style={{float:'right'}}/>}
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
                            <li><NavLink exact={true} activeClassName="active-menu" to="/">HOME</NavLink></li>
                            <li><NavLink activeClassName="active-menu" to="/news">NEWS</NavLink></li>
                            <li><NavLink activeClassName="active-menu" to="/live-score">LIVE SCORES</NavLink></li>
                            <li className="nav-item dropdown"><NavLink activeClassName="active-menu" className="nav-link dropdown-toggle" to="/team" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TEAM</NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/team/5/australia">Australia <img src="https://images.cricket.com/teams/1_flag_safari.png" alt="" style={{height:"30px"}}/></Link>
                                <Link className="dropdown-item" to="/team/23/bangladesh">Bangladesh <img src="https://images.cricket.com/teams/2_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/490/england">England <img src="https://images.cricket.com/teams/3_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/21/sri-lanka">Sri Lanka <img src="https://images.cricket.com/teams/8_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/7/new-zealand">New Zealand <img src="https://images.cricket.com/teams/5_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/13/pakistan">Pakistan <img src="https://images.cricket.com/teams/6_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/19/south-africa">South Africa <img src="https://images.cricket.com/teams/7_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/25/india">India <img src="https://images.cricket.com/teams/4_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/11/ireland">IreLand <img src="https://images.cricket.com/teams/13_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/17/west-indies">West Indies <img src="https://images.cricket.com/teams/9_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                                <Link className="dropdown-item" to="/team/493/zimbabwe">Zimbabwe  <img src="https://images.cricket.com/teams/10_flag_safari.png" alt="" style={{height:"30px"}} /></Link>
                            </div>
                            </li>
                            <li><NavLink activeClassName="active-menu" to="/results">RESULTS</NavLink></li>
                            {/* <li><NavLink activeClassName="active-menu" to="/photos">PHOTOS</NavLink></li> */}
                            <li><NavLink activeClassName="active-menu" to="/fixtures">FIXTURES</NavLink></li>
                            <li><NavLink activeClassName="active-menu" to="/series">SERIES</NavLink></li>
                            {/* <li><NavLink activeClassName="active-menu" to="/stats">STATS</NavLink></li> */}
                            <li><NavLink activeClassName="active-menu" to="/ranking">RANKING</NavLink></li>
                        </ul>
                        </div>
                        <div className="header-top-search-bar">
                            <div className="header-top-search-bar-main">
                                <form onSubmit={fireSearch}>
                                    <button type="submit"><i className="fal fa-search" /></button>
                                    <input type="text" placeholder="Search..." value={search} onChange={handleSearch} className="searchbox"/>
                                </form>
                                
                                <div style={{
                                    position:'absolute', 
                                    top:'15px', 
                                    zIndex:'10', 
                                    background:'white', 
                                    width:"100%", 
                                    height:"auto", 
                                    padding:"30px 15px 15px 15px", 
                                    borderBottomRightRadius:'15px', 
                                    borderBottomLeftRadius:'15px',
                                    transition: 'height 2s'
                                }}
                                className={focus ? null : 'd-none'}
                                >
                                    {news[0] ? news.map((item, index) => 
                                        <div key={index}
                                        style={{
                                            display:'flex', 
                                            width:'100%', 
                                            marginBottom: '10px', 
                                            paddingBottom: '10px', 
                                            borderBottom: '1px dashed #ccc'}}
                                        >
                                            <Link to={item.id && item._embedded.self[0].slug ? item.id+'/'+item._embedded.self[0].slug : ''}>
                                                <p style={{
                                                    fontSize: '12px', 
                                                    marginBottom:'0px', 
                                                    color: '#444444', 
                                                    lineHeight: '18px'
                                                }}>{he.decode(item.title)}</p>
                                            </Link>
                                        </div>
                                    ) : <>
                                        <div
                                        style={{
                                            display:'flex', 
                                            width:'100%', 
                                            marginBottom: '10px', 
                                            paddingBottom: '10px', 
                                            borderBottom: '1px dashed #ccc'}}
                                        >
                                            <div style={{width:'25%'}}>
                                                <Link to=''>
                                                    <Skeleton height={"50px"} width={"50px"}/>
                                                </Link>
                                            </div>
                                            <div style={{width:'75%', paddingLeft:'10px'}}>
                                                <Link to=''>
                                                    <p style={{
                                                        fontSize: '12px', 
                                                        marginBottom:'0px', 
                                                        color: '#444444', 
                                                        lineHeight: '18px'
                                                    }}><Skeleton count={2} width={"80%"}/></p>
                                                </Link>
                                            </div>
                                        </div>
                                        <span>Please hit enter or click on the search icon</span>
                                    </>}
                                </div>
                                
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
                        <li><NavLink exact={true} activeClassName="active" to="/">HOME</NavLink></li>
                        <li><NavLink activeClassName="active" to="/news">NEWS</NavLink></li>
                        <li><NavLink activeClassName="active" to="/live-score">LIVE SCORES</NavLink></li>
                        <li><NavLink activeClassName="active" to="/results">RESULTS</NavLink></li>
                        {/* <li><NavLink activeClassName="active" to="/photos">PHOTOS</NavLink></li> */}
                        <li><NavLink activeClassName="active" to="/fixtures">FIXTURES</NavLink></li>
                        <li><NavLink activeClassName="active" to="/series">SERIES</NavLink></li>
                        {/* <li><NavLink activeClassName="active" to="/stats">STATS</NavLink></li> */}
                        <li><NavLink activeClassName="active" to="/ranking">RANKING</NavLink></li>
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
