import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, withRouter, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

import MatchCards from '../Components/MatchCards';
import MostPopular from '../Components/MostPopular';
import LatestNews from '../Components/LatestNews';
import NewsCards from '../Components/NewsCards';
import Heros from '../Components/Heros';
import { Helmet } from 'react-helmet';

function SeriesDetails(props) {
    const [competitions, setCompetitions] = useState([]);
    const [fixtures, setFixtures] = useState([{},{},{},{}]);
    const [standings, setStandings] = useState([]);
    // const [teams, setTeams] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [fixturesLoaded, setFixturesLoaded] = useState(false);
    const [standingsLoaded, setStandingsLoaded] = useState(false);
    // const [teamsLoaded, setTeamsLoaded] = useState(false);
    const [imageAvailable, setImageAvailable] = useState(false);
    
    
    
    useEffect(() => {
        function getCompetitions() {
            axios.get('https://rest.entitysport.com/v2/competitions/'+props.match.params.seriesId)
            .then((res)=> {
                setCompetitions(res.data.response);
                function getLogo() {
                    axios.get('https://images.shadowbangladesh.com/v2/logo/'+res.data.response.abbr+".png")
                    .then((res2) => {
                        setImageAvailable(true);
                    })
                }
                getLogo();
            })

        }

        function getFixture() {
            axios.get('https://rest.entitysport.com/v2/competitions/'+props.match.params.seriesId+"/matches")
            .then((res) => {
                setFixtures(res.data.response.items);
                setFixturesLoaded(true);
            })
        }
        
        function getStandings() {
            axios.get('https://rest.entitysport.com/v2/competitions/'+props.match.params.seriesId+"/standings")
            .then((res) => {
                setStandings(res.data.response);
                setStandingsLoaded(true);
            })
        }
        
        function getTeams() {
            // axios.get('https://rest.entitysport.com/v2/competitions/'+props.match.params.seriesId+"/teams")
            // .then((res) => {
            //     setTeams(res.data.response.teams);
            //     setTeamsLoaded(true);
            // })
        }
        
        getCompetitions();
        getFixture();
        getStandings();
        getTeams();
        setLoaded(true);
    }, [props.match.params.seriesId]);

    return (
        <> 
            <Helmet>
                <title>{loaded ? competitions.title+' - BDCricTime' : null}</title>
            </Helmet>
            <div>
                <Heros format="default" title={loaded ? competitions.title : null} logo={imageAvailable ? "https://images.shadowbangladesh.com/v2/logo/"+competitions.abbr+".png" : null}/>
                {/* news content area start */}
                <div className="news-content-area fx-padding">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">
                        <div className="page-inner-content mb-10">
                            <div className="team-menu">
                            <ul>
                                {/* <li><NavLink activeClassName="active-menu" to={"/series/"+props.match.params.seriesId+"/"+props.match.params.seriesSlug+"/news"}>News</NavLink></li> */}
                                <li><NavLink activeClassName="active-menu" to={"/series/"+props.match.params.seriesId+"/"+props.match.params.seriesSlug+"/teams"}>Teams</NavLink></li>
                                <li><NavLink activeClassName="active-menu" to={"/series/"+props.match.params.seriesId+"/"+props.match.params.seriesSlug+"/fixture"}>Fixture</NavLink></li>
                                {/* <li><NavLink activeClassName="active-menu" to={"/series/"+props.match.params.seriesId+"/"+props.match.params.seriesSlug+"/results"}>Results</NavLink></li> */}
                                <li><NavLink activeClassName="active-menu" to={"/series/"+props.match.params.seriesId+"/"+props.match.params.seriesSlug+"/standings"}>Standings</NavLink></li>
                                {/* <li><NavLink activeClassName="active-menu" to={"/series/"+props.match.params.seriesId+"/"+props.match.params.seriesSlug+"/stats"}>Stats</NavLink></li> */}
                            </ul>
                            </div>
                        </div>
                        <div className="news-main-content">
                            <Switch>
                                <Route path="/series/:seriesId/:seriesSlug/news">
                                    <div className="news-widget">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <NewsCards format="boxed-down"/>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <NewsCards format="boxed-down"/>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <NewsCards format="boxed-down"/>
                                            </div>
                                        </div>
                                        <NewsCards format="boxed-side"/>
                                        <NewsCards format="boxed-side"/>
                                        <NewsCards format="boxed-side"/>
                                        <NewsCards format="boxed-side"/>
                                        <NewsCards format="boxed-side"/>
                                        
                                        <div className="seemore-btn-inner">
                                            <Link to="" className="ld-more-btn">Load More</Link>
                                        </div>
                                    </div>
                                </Route>
                                <Route path="/series/:seriesId/:seriesSlug/teams">
                                    <div className="news-widget tbl-responsive-purpose">
                                        <div className="single-group-list grp">
                                            {/* <h3 className="grp-title">Group A</h3> */}
                                            <div className="grp-table">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Matches</th>
                                                    <th className="d-n">Won</th>
                                                    <th className="d-n">Lost</th>
                                                    <th>N/R</th>
                                                    <th className="d-n">Tied</th>
                                                    <th className="d-n">Net RR</th>
                                                    <th>Points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        <div className="single-group-list grp">
                                            <h3 className="grp-title">Group A</h3>
                                            <div className="grp-table">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Matches</th>
                                                    <th className="d-n">Won</th>
                                                    <th className="d-n">Lost</th>
                                                    <th>N/R</th>
                                                    <th className="d-n">Tied</th>
                                                    <th className="d-n">Net RR</th>
                                                    <th>Points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        <div className="single-group-list grp">
                                            <h3 className="grp-title">Group A</h3>
                                            <div className="grp-table">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Matches</th>
                                                    <th className="d-n">Won</th>
                                                    <th className="d-n">Lost</th>
                                                    <th>N/R</th>
                                                    <th className="d-n">Tied</th>
                                                    <th className="d-n">Net RR</th>
                                                    <th>Points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        <div className="single-group-list grp">
                                            <h3 className="grp-title">Group A</h3>
                                            <div className="grp-table">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Matches</th>
                                                    <th className="d-n">Won</th>
                                                    <th className="d-n">Lost</th>
                                                    <th>N/R</th>
                                                    <th className="d-n">Tied</th>
                                                    <th className="d-n">Net RR</th>
                                                    <th>Points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/flag.svg" alt="" /><strong>Ban <span className="srt-text">gladesh</span></strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td>0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td><strong>6</strong></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        </div>

                                </Route>
                                <Route path="/series/:seriesId/:seriesSlug/fixture">
                                    <div className="news-widget">
                                        <div className="row">
                                            <div className="col-lg-12">
                                            {fixtures[0] ? fixtures.map((item, index) => 
                                                <MatchCards format="default"
                                                    key={index} 
                                                    id={fixturesLoaded ? item.match_id : null} 
                                                    team1={fixturesLoaded ? item.teama.name : null} 
                                                    team1ShortName={fixturesLoaded ? item.teama.short_name : null} 
                                                    team1Logo={fixturesLoaded ? item.teama.logo_url : null} 
                                                    team1Score={fixturesLoaded ? item.teama.scores : null} 
                                                    team1Over={fixturesLoaded ? item.teama.overs : null} 
                                                    team2={fixturesLoaded ? item.teamb.name : null} 
                                                    team2ShortName={fixturesLoaded ? item.teamb.short_name : null} 
                                                    team2Logo={fixturesLoaded ? item.teamb.logo_url : null} 
                                                    team2Score={fixturesLoaded ? item.teamb.scores : null} 
                                                    team2Over={fixturesLoaded ? item.teamb.overs : null} 
                                                    status={fixturesLoaded ? item.status_note : null} 
                                                    state={fixturesLoaded ? item.status_str : null} 
                                                    series={fixturesLoaded ? item.competition.title : null} 
                                                    title={fixturesLoaded ? item.title : null} 
                                                    matchName={fixturesLoaded ? item.short_title : null} 
                                                    startTime={fixturesLoaded ? item.date_start : null} 
                                                    statusCode={fixturesLoaded ? item.status : null}/>
                                            ) : <div style={{fontWeight:'bold', fontSize:'30px', color:'#cccccc', textAlign:'center', padding:'100px'}}>NO MATCH IS LIVE NOW</div>
                                            }
                                            </div>
                                        </div>
                                        </div>

                                </Route>
                                <Route path="/series/:seriesId/:seriesSlug/results">
                                <div className="news-widget">
                                        <div className="row">
                                            <div className="col-lg-12">
                                            <div className="single-fixture-blk">
                                                <div className="fx-top-blk">
                                                <h4>Ban<span className="srt-name">gladesh</span> VS In <span className="srt-name">dia</span></h4>
                                                <div className="fx-top-right-info">
                                                    <span>1st ODI</span>
                                                    <span>6-DEC-2019</span>
                                                    <span>4:00 PM</span>
                                                </div>
                                                </div>
                                                <div className="fx-inner-part">
                                                <div className="fx-inner-top-info">
                                                    <span>Live</span>
                                                </div>
                                                <div className="fx-inner-main-part">
                                                    <div className="single-team-info">
                                                    <img className="fx-flag-img" src="assets/img/flag.svg" alt="" />
                                                    <h3><img src="assets/img/ball.png" alt="" /> ban<span>gladesh</span></h3>
                                                    <p>300 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                    <div className="vs">
                                                    <h3>-VS-</h3>
                                                    </div>
                                                    <div className="single-team-info rt-blk">
                                                    <img className="fx-flag-img" src="assets/img/f-india.png" alt="" />
                                                    <h3>IND<span>ia</span><img src="assets/img/ball.png" alt="" /> </h3>
                                                    <p>290 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                </div>
                                                </div>
                                                <p className="para-des">India needs 11 more runs to win from 8 balls with 5 wickets in hand</p>
                                                <div className="fx-bottom-blk">
                                                <Link to="">View match details</Link>
                                                </div>
                                            </div>
                                            <div className="single-fixture-blk">
                                                <div className="fx-top-blk">
                                                <h4>Bangladesh VS India</h4>
                                                <div className="fx-top-right-info">
                                                    <span>1st ODI</span>
                                                    <span>6-DEC-2019</span>
                                                    <span>4:00 PM</span>
                                                </div>
                                                </div>
                                                <div className="fx-inner-part">
                                                <div className="fx-inner-top-info up-c">
                                                    <span>Upcoming</span>
                                                </div>
                                                <div className="fx-inner-main-part">
                                                    <div className="single-team-info">
                                                    <img className="fx-flag-img" src="assets/img/flag.svg" alt="" />
                                                    <h3><img src="assets/img/ball.png" alt="" /> ban<span>gladesh</span></h3>
                                                    <p>300 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                    <div className="vs">
                                                    <h3>-VS-</h3>
                                                    </div>
                                                    <div className="single-team-info rt-blk">
                                                    <img className="fx-flag-img" src="assets/img/f-india.png" alt="" />
                                                    <h3>IND<span>ia</span><img src="assets/img/ball.png" alt="" /> </h3>
                                                    <p>290 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                </div>
                                                </div>
                                                <p className="para-des">India needs 11 more runs to win from 8 balls with 5 wickets in hand</p>
                                                <div className="fx-bottom-blk">
                                                <Link to="">View match details</Link>
                                                </div>
                                            </div>
                                            <div className="single-fixture-blk">
                                                <div className="fx-top-blk">
                                                <h4>Bangladesh VS India</h4>
                                                <div className="fx-top-right-info">
                                                    <span>1st ODI</span>
                                                    <span>6-DEC-2019</span>
                                                    <span>4:00 PM</span>
                                                </div>
                                                </div>
                                                <div className="fx-inner-part">
                                                <div className="fx-inner-top-info up-c">
                                                    <span>Upcoming</span>
                                                </div>
                                                <div className="fx-inner-main-part">
                                                    <div className="single-team-info">
                                                    <img className="fx-flag-img" src="assets/img/flag.svg" alt="" />
                                                    <h3><img src="assets/img/ball.png" alt="" /> ban<span>gladesh</span></h3>
                                                    <p>300 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                    <div className="vs">
                                                    <h3>-VS-</h3>
                                                    </div>
                                                    <div className="single-team-info rt-blk">
                                                    <img className="fx-flag-img" src="assets/img/f-india.png" alt="" />
                                                    <h3>IND<span>ia</span><img src="assets/img/ball.png" alt="" /> </h3>
                                                    <p>290 / 5 <br /><span>(50 OVERS)</span></p>
                                                    </div>
                                                </div>
                                                </div>
                                                <p className="para-des">India needs 11 more runs to win from 8 balls with 5 wickets in hand</p>
                                                <div className="fx-bottom-blk">
                                                <Link to="">View match details</Link>
                                                </div>
                                            </div>
                                            <div className="single-fixture-blk">
                                                <div className="fx-top-blk">
                                                <h4>Bangladesh VS India</h4>
                                                <div className="fx-top-right-info">
                                                    <span>1st ODI</span>
                                                    <span>6-DEC-2019</span>
                                                    <span>4:00 PM</span>
                                                </div>
                                                </div>
                                                <div className="fx-inner-part">
                                                <div className="fx-inner-top-info up-c">
                                                    <span>Upcoming</span>
                                                </div>
                                                <div className="fx-inner-main-part">
                                                    <div className="single-team-info">
                                                    <img className="fx-flag-img" src="assets/img/flag.svg" alt="" />
                                                    <h3><img src="assets/img/ball.png" alt="" /> ban<span>gladesh</span></h3>
                                                    <p>300 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                    <div className="vs">
                                                    <h3>-VS-</h3>
                                                    </div>
                                                    <div className="single-team-info rt-blk">
                                                    <img className="fx-flag-img" src="assets/img/f-india.png" alt="" />
                                                    <h3>IND<span>ia</span><img src="assets/img/ball.png" alt="" /> </h3>
                                                    <p>290 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                </div>
                                                </div>
                                                <p className="para-des">India needs 11 more runs to win from 8 balls with 5 wickets in hand</p>
                                                <div className="fx-bottom-blk">
                                                <Link to="">View match details</Link>
                                                </div>
                                            </div>
                                            <div className="single-fixture-blk">
                                                <div className="fx-top-blk">
                                                <h4>Bangladesh VS India</h4>
                                                <div className="fx-top-right-info">
                                                    <span>1st ODI</span>
                                                    <span>6-DEC-2019</span>
                                                    <span>4:00 PM</span>
                                                </div>
                                                </div>
                                                <div className="fx-inner-part">
                                                <div className="fx-inner-top-info up-c">
                                                    <span>Upcoming</span>
                                                </div>
                                                <div className="fx-inner-main-part">
                                                    <div className="single-team-info">
                                                    <img className="fx-flag-img" src="assets/img/flag.svg" alt="" />
                                                    <h3><img src="assets/img/ball.png" alt="" /> ban<span>gladesh</span></h3>
                                                    <p>300 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                    <div className="vs">
                                                    <h3>-VS-</h3>
                                                    </div>
                                                    <div className="single-team-info rt-blk">
                                                    <img className="fx-flag-img" src="assets/img/f-india.png" alt="" />
                                                    <h3>IND<span>ia</span><img src="assets/img/ball.png" alt="" /> </h3>
                                                    <p>290 / 5 <br /> <span>(50 OVERS)</span></p>
                                                    </div>
                                                </div>
                                                </div>
                                                <p className="para-des">India needs 11 more runs to win from 8 balls with 5 wickets in hand</p>
                                                <div className="fx-bottom-blk">
                                                <Link to="">View match details</Link>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </Route>
                                <Route path="/series/:seriesId/:seriesSlug/standings">
                                    <div className="news-widget tbl-responsive-purpose">
                                        <div className="single-group-list grp">
                                            <h3 className="grp-title">Point Table</h3>
                                            <div className="grp-table">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Played</th>
                                                    <th className="d-n">Won</th>
                                                    <th className="d-n">Lost</th>
                                                    <th>N/R</th>
                                                    <th className="d-n">Tied</th>
                                                    <th className="d-n">Net RR</th>
                                                    <th>Points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    standingsLoaded ? 
                                                        standings.standing_type === "per_round" ?
                                                            standings.standings.map((item, index) =>
                                                                item.standings.map((item, index) =>
                                                                    <tr key={index}>
                                                                        <td>{++index}</td>
                                                                        <td><strong><span className="shortName">{item.team.abbr}</span><span className="fullName">{item.team.title}</span></strong></td>
                                                                        <td>{item.player}</td>
                                                                        <td className="d-n">{item.win}</td>
                                                                        <td className="d-n">{item.o9ss}</td>
                                                                        <td className="d-n">{item.nr}</td>
                                                                        <td>{item.draw}</td>
                                                                        <td className="d-n">{item.netrr}</td>
                                                                        <td><strong>{item.points}</strong></td>
                                                                    </tr>
                                                                )) :
                                                                standings.standings.map((item, index) =>
                                                                    <tr key={index}>
                                                                        <td>{++index}</td>
                                                                        <td><strong><span className="shortName">{item.team.abbr}</span><span className="fullName">{item.team.title}</span></strong></td>
                                                                        <td>{item.player}</td>
                                                                        <td className="d-n">{item.win}</td>
                                                                        <td className="d-n">{item.o9ss}</td>
                                                                        <td className="d-n">{item.nr}</td>
                                                                        <td>{item.draw}</td>
                                                                        <td className="d-n">{item.netrr}</td>
                                                                        <td><strong>{item.points}</strong></td>
                                                                    </tr>
                                                                ) : null
                                                }
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        </div>

                                </Route>
                                <Route path="/series/:seriesId/:seriesSlug/stats">
                                    <div className="news-widget tbl-responsive-purpose">
                                        <div className="single-group-list stats">
                                            <div className="cat-select">
                                            <select name id="">
                                                <option value>Most Runs</option>
                                                <option value>Most Wickets</option>
                                                <option value>Most Sixes</option>
                                                <option value>Most 100s</option>
                                                <option value>Most 50s</option>
                                                <option value>Most Runs</option>
                                                <option value>Fastest 100s</option>
                                            </select>
                                            </div>
                                            <div className="grp-table">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Matches</th>
                                                    <th className="d-n">Innings</th>
                                                    <th className="d-n">H/S</th>
                                                    <th className="d-n">Avg</th>
                                                    <th className="d-n">50s/100s</th>
                                                    <th className="d-n">4s/6s</th>
                                                    <th>Runs</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        <div className="single-group-list stats">
                                            <div className="cat-select">
                                            <select name id="">
                                                <option value>Most Runs</option>
                                                <option value>Most Wickets</option>
                                                <option value>Most Sixes</option>
                                                <option value>Most 100s</option>
                                                <option value>Most 50s</option>
                                                <option value>Most Runs</option>
                                                <option value>Fastest 100s</option>
                                            </select>
                                            </div>
                                            <div className="grp-table">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Team</th>
                                                    <th>Matches</th>
                                                    <th className="d-n">Innings</th>
                                                    <th className="d-n">H/S</th>
                                                    <th className="d-n">Avg</th>
                                                    <th className="d-n">50s/100s</th>
                                                    <th className="d-n">4s/6s</th>
                                                    <th>Runs</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td><img src="assets/img/player-1.png" alt="" /><strong>Batsman Name</strong></td>
                                                    <td>3</td>
                                                    <td className="d-n">3</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">0</td>
                                                    <td className="d-n">+3.598</td>
                                                    <td>6</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        </div>

                                </Route>
                                <Route>
                                    <Redirect to={"/series/"+props.match.params.seriesId+"/"+props.match.params.seriesSlug+"/fixture"} />
                                </Route>
                            </Switch>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="sidebar-widget-wrapper">
                            <LatestNews/>
                            <MostPopular/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* news content area end */}
                </div>




        </>
    );
}

export default withRouter(SeriesDetails);
