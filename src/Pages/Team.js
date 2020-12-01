import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import bg from '../assets/img/team-header-banner.png'
import dribble from '../assets/img/dribble.svg'
import facebook from '../assets/img/facebook.svg'
import twitter from '../assets/img/twitter.svg'
import insta from '../assets/img/insta.svg'

import Trending from '../Components/Trending';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

function Team(props) {
    const [team, setTeam] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        function getTeam() {
            axios.get('https://rest.entitysport.com/v2/teams/' + props.match.params.teamId)
                .then((res) => {
                    setTeam(res.data.response);
                    setLoaded(true);
                })
        }
        getTeam()
    }, [props.match.params.teamId]);

    console.log(team);

    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div>
                <div className="inner-page-hero-area  fx-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-page-hero-content" style={{ backgroundImage: 'url(' + bg + ')' }}>
                                    <div className="hero-page-inner-top-texts">
                                        <div className="left-hr-flag">
                                            <img src={loaded ? team.thumb_url : null} alt="" style={{width:'100%'}} />
                                        </div>
                                        <div className="hr-rt-dets">
                                            <h2>{loaded ? team.title : <Skeleton/>}</h2>
                                            <div className="social-link-list">
                                                <Link to=""><img src={dribble} alt="" /></Link>
                                                <Link to=""><img src={facebook} alt="" /></Link>
                                                <Link to=""><img src={twitter} alt="" /></Link>
                                                <Link to=""><img src={insta} alt="" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-buttons-list">
                                        <Link to="">TEST <span>9</span></Link>
                                        <Link to="">TEST <span>9</span></Link>
                                        <Link to="">TEST <span>9</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Inner page hero area end */}
                {/* news content area start */}
                <div className="news-content-area fx-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="page-inner-content">
                                    <div className="team-menu">
                                        <ul>
                                            <li><Link className="active-menu" to="">News</Link></li>
                                            <li><Link to="">Fixture</Link></li>
                                            <li><Link to="">Results</Link></li>
                                            <li><Link to="">Players</Link></li>
                                            <li><Link to="">Gallery</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="news-main-content">
                                    <div className="news-widget">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="post2">
                                                    <div className="img"><Link to="#"><img src="assets/img/newsupdate thumbnail.png" alt="img" /></Link></div>
                                                    <div className="content">
                                                        <Link to="#">
                                                            <h5>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h5>
                                                        </Link>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q uis nostrud exercitationminim veniam, q uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                                                        <Link to="#" className="read-more">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="post2">
                                                    <div className="img"><Link to="#"><img src="assets/img/newsupdate thumbnail.png" alt="img" /></Link></div>
                                                    <div className="content">
                                                        <Link to="#">
                                                            <h5>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h5>
                                                        </Link>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q uis nostrud exercitationminim veniam, q uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                                                        <Link to="#" className="read-more">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="post2">
                                                    <div className="img"><Link to="#"><img src="assets/img/newsupdate thumbnail.png" alt="img" /></Link></div>
                                                    <div className="content">
                                                        <Link to="#">
                                                            <h5>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h5>
                                                        </Link>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q uis nostrud exercitationminim veniam, q uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                                                        <Link to="#" className="read-more">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post3 ">
                                            <div className="row">
                                                <div className=" col-sm-4">
                                                    <div className="img">
                                                        <Link to="#"><img src="assets/img/post-img2.png" alt="img" /></Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="content">
                                                        <Link to="#">
                                                            <h5>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h5>
                                                        </Link>
                                                        <p>Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur dipisicing elit, sed do eiusmod tempo consectetur Ut enim ad veniam...</p>
                                                        <Link to="#" className="read-more">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post3 ">
                                            <div className="row">
                                                <div className=" col-sm-4">
                                                    <div className="img">
                                                        <Link to="#"><img src="assets/img/post-img2.png" alt="img" /></Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="content">
                                                        <Link to="#">
                                                            <h5>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h5>
                                                        </Link>
                                                        <p>Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur dipisicing elit, sed do eiusmod tempo consectetur Ut enim ad veniam...</p>
                                                        <Link to="#" className="read-more">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post3 ">
                                            <div className="row">
                                                <div className=" col-sm-4">
                                                    <div className="img">
                                                        <Link to="#"><img src="assets/img/post-img2.png" alt="img" /></Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="content">
                                                        <Link to="#">
                                                            <h5>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h5>
                                                        </Link>
                                                        <p>Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur dipisicing elit, sed do eiusmod tempo consectetur Ut enim ad veniam...</p>
                                                        <Link to="#" className="read-more">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post3 mb-0">
                                            <div className="row">
                                                <div className=" col-sm-4">
                                                    <div className="img">
                                                        <Link to="#"><img src="assets/img/post-img2.png" alt="img" /></Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="content">
                                                        <Link to="#">
                                                            <h5>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h5>
                                                        </Link>
                                                        <p>Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur dipisicing elit, sed do eiusmod tempo consectetur Ut enim ad veniam...</p>
                                                        <Link to="#" className="read-more">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="seemore-btn-inner">
                                            <Link to="" className="ld-more-btn">Load More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="sidebar-widget-wrapper">
                                    <div className="sidebar-widget rank-widget fct-wd">
                                        <h4 className="heading-title">Quick Facts</h4>
                                        <div className="facts-info">
                                            <h5>Association</h5>
                                            <div className="inner-facts-texts">
                                                <img src="assets/img/tiger-img.svg" alt="" />
                                                <p>Bangladesh Cricket Board</p>
                                            </div>
                                            <div className="nk-name">
                                                <h5>Nickname</h5>
                                                <p>The Tigers</p>
                                            </div>
                                            <div className="captine">
                                                <h5>Captain</h5>
                                                <div className="cpt-list-items">
                                                    <p><span>Test</span>Mominul Haque</p>
                                                    <p><span>ODI</span>Mashrafe Bin Mortaza</p>
                                                    <p><span>T20</span>Mahmudullah</p>
                                                    <p><span>Coach</span>Russell Domingo</p>
                                                </div>
                                            </div>
                                            <div className="nk-name">
                                                <h5>History</h5>
                                                <p>Test Status 2020</p>
                                            </div>
                                            <div className="nk-name">
                                                <h5>Matches</h5>
                                                <div className="match-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th><span className="gp" /></th>
                                                                <th>P</th>
                                                                <th>W</th>
                                                                <th>L</th>
                                                                <th>T</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><span className="gp">Mark</span></td>
                                                                <td>117</td>
                                                                <td>13</td>
                                                                <td>88</td>
                                                                <td>16</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="gp">Mark</span></td>
                                                                <td>373</td>
                                                                <td>125</td>
                                                                <td>241</td>
                                                                <td>0</td>
                                                            </tr>
                                                            <tr>
                                                                <td><span className="gp">Mark</span></td>
                                                                <td>94</td>
                                                                <td>30</td>
                                                                <td>62</td>
                                                                <td>0</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Trending />
                                    <div className="sidebar-widget popular-widget">
                                        <h4 className="heading-title">Most Popular</h4>
                                        <div>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <Link className="nav-item nav-link active" data-toggle="tab" to="#nav-7">Today</Link>
                                                <Link className="nav-item nav-link" data-toggle="tab" to="#nav-8">Last 7 Days</Link>
                                                <Link className="nav-item nav-link" data-toggle="tab" to="#nav-9">Last 30 Days</Link>
                                            </div>
                                        </div>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-7">
                                                <nav>
                                                    <ul>
                                                        <li>
                                                            <span>1</span>
                                                            <Link to="#">
                                                                <p>Lorem Ipsum is simply dummy ..</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <span>2</span>
                                                            <Link to="#">
                                                                <p>Lorem int and typesetting int and typesetting int and typesetting int and typesetting...</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <span>3</span>
                                                            <Link to="#">
                                                                <p>Lorem int and typesetting int and typesetting int and typesetting int and typesetting...</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <span>4</span>
                                                            <Link to="#">
                                                                <p>Lorem int and typesetting int and typesetting int and typesetting int and typesetting...</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <span>5</span>
                                                            <Link to="#">
                                                                <p>Lorem int and typesetting int and typesetting int and typesetting int and typesetting...</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="tab-pane fade" id="nav-8">
                                            </div>
                                            <div className="tab-pane fade" id="nav-9">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* news content area end */}
            </div>
        </SkeletonTheme>
        </>
    );
}

export default withRouter(Team);
