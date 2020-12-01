import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import Moment from 'react-moment';
import { Bar, Line, HorizontalBar, defaults } from 'react-chartjs-2';
import LatestNews from '../Components/LatestNews';
import Advertisement from '../Components/Advertisement';
import {isMobile} from "react-device-detect";

import bg from "../assets/img/l-info-img.jpg";
import avatar from "../assets/img/player-img.svg";
import PlayerCard from "../Components/PlayerCard";
import ICCTeamRanking from "../Components/ICCTeamRanking";
import MostPopular from "../Components/MostPopular";
import { Helmet } from "react-helmet";

function MatchDetails(props) {
    const [match, setMatch] = useState([]);
    const [commentary1st, setCommentary1st] = useState([]);
    const [commentary2nd, setCommentary2nd] = useState([]);
    const [statistics, setStatistics] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [squad, setSquad] = useState([]);
    const [live, setLive] = useState([]);
    const players = loaded ? match.players : [];



    const findPlayer = (ID) => {
        return players.find(player => {
            return player.pid === parseInt(ID)
        }) ? players.find(player => {
            return player.pid === parseInt(ID)
        }).title : null;
    }

    defaults.global.defaultFontFamily = "'Montserrat', sans-serif"
    
    const data = {
        labels: loaded && statistics[0] ? statistics[0].statistics.manhattan.map((item) => item.over) : [],
        datasets: [
            {
                label: loaded && statistics[0] ? statistics[0].name : '1',
                backgroundColor: '#00CCCC',
                data: statistics[0] ? statistics[0].statistics.manhattan.map((item) => item.runs) : []
            },
            {
                label: loaded && statistics[1] ? statistics[1].name : '2',
                backgroundColor: '#FFE100',
                data: loaded && statistics[1] ? statistics[1].statistics.manhattan.map((item) => item.runs) : []
            }
        ]
    };

    const data2 = {
        labels: loaded && statistics[0] ? statistics[0].statistics.manhattan.map((item) => item.over) : [],
        datasets: [
          {
            label: loaded && statistics[0] ? statistics[0].name : '3',
            fill: false,
            lineTension: 0.1,
            borderColor: '#00CCCC',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#00CCCC',
            pointBackgroundColor: '#00CCCC',
            pointBorderWidth: 1,
            pointRadius: 3,
            pointHitRadius: 10,
            data: loaded && statistics[0] ? statistics[0].statistics.worm.map((item) => item.runs) : []
          },
          {
            label: loaded && statistics[1] ? statistics[1].name : '4',
            fill: false,
            lineTension: 0.1,
            borderColor: '#FFE100',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FFE100',
            pointBackgroundColor: '#FFE100',
            pointBorderWidth: 1,
            pointRadius: 3,
            pointHitRadius: 10,
            data: loaded && statistics[1] ? statistics[1].statistics.worm.map((item) => item.runs) : []
          }
        ]
      };

    //   const data3 = {
    //     labels: loaded && statistics[0] ? statistics[0].statistics.p2p.map((item) => findPlayer(item.batsman_id)) : [],
    //     datasets: [
    //       {
    //         label: loaded && statistics[0] ? statistics[0].name : null,
    //         backgroundColor: '#00CCCC',
    //         data: loaded && statistics[0] ? statistics[0].statistics.p2p.map((item) => item.runs) : []
    //       },
    //       {
    //         label: loaded && statistics[1] ? statistics[1].name : null,
    //         backgroundColor: '#FFE100',
    //         data: loaded && statistics[1] ? statistics[1].statistics.p2p.map((item) => item.runs) : []
    //       }
    //     ]
    //   };

      const data4 = {
        labels: loaded && statistics[0] ? statistics[0].statistics.runtypes.map((item) => item.name) : [],
        datasets: [
          {
            label: loaded && statistics[0] ? statistics[0].name : '5',
            backgroundColor: '#00CCCC',
            data: loaded && statistics[0] ? statistics[0].statistics.runtypes.map((item) => item.value) : []
          },
          {
            label: loaded && statistics[1] ? statistics[1].name : '6',
            backgroundColor: '#FFE100',
            data: loaded && statistics[1] ? statistics[1].statistics.runtypes.map((item) => item.value) : []
          }
        ]
      };

      const data5 = {
        labels: loaded && statistics[0] ? statistics[0].statistics.wickets.map((item) => item.name) : [],
        datasets: [
          {
            label: loaded && statistics[0] ? statistics[0].name : '7',
            backgroundColor: '#00CCCC',
            data: loaded && statistics[0] ? statistics[0].statistics.wickets.map((item) => item.value) : []
          },
          {
            label: loaded && statistics[1] ? statistics[1].name : '8',
            backgroundColor: '#FFE100',
            data: loaded && statistics[1] ? statistics[1].statistics.wickets.map((item) => item.value) : []
          }
        ]
      };

      const data6 = {
        labels: loaded && statistics[0] ? statistics[0].statistics.extras.map((item) => item.name) : [],
        datasets: [
          {
            label: loaded && statistics[0] ? statistics[0].name : '9',
            backgroundColor: '#00CCCC',
            data: loaded && statistics[0] ? statistics[0].statistics.extras.map((item) => item.value) : []
          },
          {
            label: loaded && statistics[1] ? statistics[1].name : '10',
            backgroundColor: '#FFE100',
            data: loaded && statistics[1] ? statistics[1].statistics.extras.map((item) => item.value) : []
          }
        ]
      };

      const data7 = {
        labels: loaded && statistics[0] ? statistics[0].statistics.runrates.map((item) => item.over) : [],
        datasets: [
          {
            label: loaded && statistics[0] ? statistics[0].name : '11',
            fill: false,
            lineTension: 0.1,
            borderColor: '#00CCCC',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#00CCCC',
            pointBackgroundColor: '#00CCCC',
            pointBorderWidth: 1,
            pointRadius: 3,
            pointHitRadius: 10,
            data: loaded && statistics[0] ? statistics[0].statistics.runrates.map((item) => item.runrate) : []
          },
          {
            label: loaded && statistics[1] ? statistics[1].name : '12',
            fill: false,
            lineTension: 0.1,
            borderColor: '#FFE100',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#FFE100',
            pointBackgroundColor: '#FFE100',
            pointBorderWidth: 1,
            pointRadius: 3,
            pointHitRadius: 10,
            data: loaded && statistics[1] ? statistics[1].statistics.runrates.map((item) => item.runrate) : []
          }
        ]
      };

    const options = {
        legend: {
            labels: {
                fontColor: "white",
            }
        },
        scales: {
            xAxes: [{
                // barThickness : 8,
                // categoryPercentage: 0.5,
                // barPercentage: 0.5,
                ticks: {
                    fontColor: "white",
                }
        
            }],
            yAxes: [{
                // barThickness : 8,
                // categoryPercentage: 0.5,
                // barPercentage: 0.5,
                ticks: {
                    fontColor: "white",
                }
            }]
        },
        maintainAspectRatio: true,
        cornerRadius: 100,
    }

    useEffect(() => {
        function getMatch() {
            axios.get("https://rest.entitysport.com/v2/matches/" + props.match.params.matchId + "/scorecard")
            .then((res) => {
                setMatch(res.data.response);
                getLive();
            });
        }
        function getLive() {
            axios.get("https://rest.entitysport.com/v2/matches/" + props.match.params.matchId + "/live")
            .then((res) => {
                setLive(res.data.response);
                getCommentary();
            });
        }
        function getCommentary() {
            axios.get("https://rest.entitysport.com/v2/matches/" + props.match.params.matchId + "/innings/1/commentary")
            .then((res) => {
                setCommentary1st(res.data.response.commentaries ? res.data.response.commentaries.reverse() : []);
            });
            axios.get("https://rest.entitysport.com/v2/matches/" + props.match.params.matchId + "/innings/2/commentary")
            .then((res) => {
                setCommentary2nd(res.data.response.commentaries ? res.data.response.commentaries.reverse() : []);
                getStatistics();
            });
        }
        function getStatistics() {
            axios.get("https://rest.entitysport.com/v2/matches/" + props.match.params.matchId + "/statistics")
            .then((res) => {
                setStatistics(res.data.response.innings);
                getSquad();
            });
        }
        function getSquad() {
            axios.get("https://rest.entitysport.com/v2/matches/" + props.match.params.matchId + "/squads")
            .then((res) => {
                setSquad(res.data.response);
                setLoaded(true);
            });
        }
        
        getMatch();
    }, [props.match.params.matchId]);
    
    return (
        <>
            <Helmet>
                <title>{loaded ? match.title+' - BDCricTime' : null}</title>
            </Helmet>
            <div className="news-content-area fx-padding r-cmntr">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="lins-up-inner-blk">
                        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
                                <div className="ln-top-main">
                                    <div className="ln-top-des-blk">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="lntop-left-des">
                                                    <h2>
                                                        <span className="shortName">
                                                            {loaded ? (
                                                                match.short_title
                                                            ) : (
                                                                <Skeleton
                                                                    width={100}
                                                                />
                                                            )}
                                                        </span>
                                                        <span className="fullName">
                                                            {loaded ? (
                                                                match.title
                                                            ) : (
                                                                <Skeleton
                                                                    width={150}
                                                                />
                                                            )}
                                                        </span>
                                                    </h2>
                                                    <div className="ln-des-info">
                                                        <span>
                                                            {loaded ? (
                                                                match.subtitle
                                                            ) : (
                                                                <Skeleton
                                                                    width={50}
                                                                />
                                                            )}
                                                        </span>
                                                        <span>
                                                            {loaded ? 
                                                                <Moment format="D-MMM-YYYY">{match.date_start}</Moment>
                                                            :
                                                                <Skeleton width="100px"/>
                                                            }
                                                        </span>
                                                        <span>
                                                            {loaded ? 
                                                                <Moment format="h:mm A">{match.date_start}</Moment>
                                                            :
                                                                <Skeleton width="100px"/>
                                                            }
                                                        </span>
                                                    </div>
                                                    <p>
                                                        {loaded ? (
                                                            match.venue.name
                                                        ) : (
                                                            <Skeleton
                                                                width={100}
                                                            />
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div style={{textAlign: 'right', marginTop:'15px'}}>
                                                
                                                {isMobile ? <Advertisement size={32050} imgstyle={{width:'100%'}}/> : <Advertisement size={320100} style={{marginBottom:'15px'}}/>}

                                                </div>
                                                {loaded &&
                                                match.status === 3 ? (
                                                    <div className="fx-inner-top-info">
                                                        <span>Live</span>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SkeletonTheme>
                                {loaded ? (
                                    <div
                                        className="line-ups-inner-all-info"
                                        style={{
                                            backgroundImage: "url(" + bg + ")",
                                        }}
                                    >
                                        <div className="row">
                                            <div className="col-md-7 col-lg-7 col-xl-7">
                                                <div className="line-up-inner-left-blk">
                                                    <div className="line-up-lft">
                                                        <div className="line-up-left-blk-single-row">
                                                            <img
                                                                src={
                                                                    match.teama
                                                                        .thumb_url
                                                                }
                                                                alt={
                                                                    match.teama
                                                                        .name
                                                                }
                                                            />
                                                            <h3>
                                                                {
                                                                    match.teama
                                                                        .name
                                                                }
                                                                {/*<img src="/assets/img/ball-golden.svg" alt=""/> <img src="/assets/img/bat-mian.svg" alt=""/>*/}
                                                            </h3>
                                                        </div>
                                                        <div className="line-up-rt-blk">
                                                            <h3>
                                                                {match.teama.scores ? match.teama.scores+" ("+match.teama.overs+")" : <small style={{opacity:".5"}}>To be played</small>}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="line-up-lft">
                                                        <div className="line-up-left-blk-single-row">
                                                            <img
                                                                src={
                                                                    match.teamb
                                                                        .thumb_url
                                                                }
                                                                alt={
                                                                    match.teamb
                                                                        .name
                                                                }
                                                            />
                                                            <h3>
                                                                {
                                                                    match.teamb
                                                                        .name
                                                                }
                                                                {/*<img src="/assets/img/ball-golden.svg" alt=""/> <img src="/assets/img/ball.svg" alt=""/>*/}
                                                            </h3>
                                                        </div>
                                                        <div className="line-up-rt-blk">
                                                            <h3>
                                                                {match.teamb.scores ? match.teamb.scores+" ("+match.teamb.overs+")" : <small style={{opacity:".5"}}>To be played</small>}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <p>{match.status_note}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-lg-5 col-xl-5">
                                                <div className="line-info-right-table">
                                                    <table className="table">
                                                        <tbody>
                                                            {loaded ? (
                                                                match.status ===
                                                                2 ? ( <>
                                                                    <tr>
                                                                        <td>
                                                                            Man of the match
                                                                        </td>
                                                                        <td className="text-right">
                                                                            {
                                                                                match
                                                                                    .man_of_the_match
                                                                                    .name
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Win Margin
                                                                        </td>
                                                                        <td className="text-right">
                                                                            {
                                                                                match.win_margin
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    </>
                                                                ) : null
                                                            ) : null}

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}

                                <div className="menu-tab-wrapper ">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tabContainer">
                                                <nav>
                                                    <div
                                                        className="nav nav-link-wrap bdr-btm-three"
                                                        id="nav-tab"
                                                        role="tablist"
                                                    >
                                                        {loaded && match.status === 3 ? (
                                                            <a
                                                            className="nav-item nav-link"
                                                            id="tbOne-tab"
                                                            data-toggle="tab"
                                                            href="#tbOne"
                                                            role="tab"
                                                            aria-controls="nav-home"
                                                            aria-selected="true"
                                                        >
                                                            Live
                                                        </a>
                                                        ) : null}

                                                        {loaded && match.status === 1 ? null : <>
                                                        <a
                                                            className="nav-item nav-link active"
                                                            id="tbTwo-tab"
                                                            data-toggle="tab"
                                                            href="#tbTwo"
                                                            role="tab"
                                                            aria-controls="nav-profile"
                                                            aria-selected="false"
                                                        >
                                                            Scorecard
                                                        </a>

                                                        <a
                                                            className="nav-item nav-link"
                                                            id="tbThree-tab"
                                                            data-toggle="tab"
                                                            href="#tbThree"
                                                            role="tab"
                                                            aria-controls="nav-contact"
                                                            aria-selected="false"
                                                            >
                                                            Commentary
                                                        </a>

                                                        <a
                                                            className="nav-item nav-link"
                                                            id="tbFour-tab"
                                                            data-toggle="tab"
                                                            href="#tbFour"
                                                            role="tab"
                                                            aria-controls="nav-contact"
                                                            aria-selected="false"
                                                            >
                                                            Statistics
                                                        </a>
                                                        </>
                                                        }

                                                        <a
                                                            className={match.status === 1 ? "nav-item nav-link active" : "nav-item nav-link"}
                                                            id="tbFive-tab"
                                                            data-toggle="tab"
                                                            href="#tbFive"
                                                            role="tab"
                                                            aria-controls="nav-contact"
                                                            aria-selected="false"
                                                        >
                                                            Line-Ups
                                                        </a>

                                                        <a
                                                            className="nav-item nav-link"
                                                            id="tbSix-tab"
                                                            data-toggle="tab"
                                                            href="#tbSix"
                                                            role="tab"
                                                            aria-controls="nav-contact"
                                                            aria-selected="false"
                                                        >
                                                            Info
                                                        </a>
                                                    </div>
                                                </nav>
                                                <div
                                                    className="tab-content"
                                                    id="nav-tabContent"
                                                >
                                                {loaded && match.status === 3 ? (
                                                    <div
                                                        className="tab-pane fade"
                                                        id="tbOne"
                                                        role="tabpanel"
                                                        aria-labelledby="tbOne-tab"
                                                    >
                                                        <div className="tb-content-wrap">
                                                            <Link
                                                                to="#"
                                                                className="bdr-btm-three btm-arrow-shape link-full"
                                                            >
                                                                {live.team_batting} -
                                                                In Play
                                                            </Link>
                                                            <div className="strike-table-wrap">
                                                                <table className="table strike-table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                Batsmen
                                                                            </th>
                                                                            <th className="text-center">
                                                                                R
                                                                            </th>
                                                                            <th className="text-center">
                                                                                B
                                                                            </th>
                                                                            <th className="text-center">
                                                                                4s
                                                                            </th>
                                                                            <th className="text-center">
                                                                                6s
                                                                            </th>
                                                                            <th className="text-center">
                                                                                SR
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {live.batsmen.map((item, index) =>
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <div className="player-name-img">
                                                                                    <img
                                                                                        src={avatar}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        {item.name}
                                                                                    </span>
                                                                                    {/* <span className="action-indicator">
                                                                                        <img
                                                                                            src="/assets/img/bat.svg"
                                                                                            alt=""
                                                                                        />
                                                                                    </span> */}
                                                                                </div>
                                                                            </td>
                                                                            <td className="text-center">
                                                                                <strong>
                                                                                    {item.runs}
                                                                                </strong>
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.balls_faced}
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.fours}
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.sixes}
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.strike_rate}
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                        <tr>
                                                                            <td>
                                                                                <strong>
                                                                                    Current
                                                                                    Partnership
                                                                                </strong>
                                                                            </td>
                                                                            <td colSpan="5">
                                                                                <strong>
                                                                                    {live.live_inning.current_partnership.runs}
                                                                                </strong>{" "}
                                                                                ({live.live_inning.current_partnership.balls})
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="strike-table-wrap">
                                                                <table className="table strike-table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                Bowler
                                                                            </th>
                                                                            <th className="text-center">
                                                                                O
                                                                            </th>
                                                                            <th className="text-center">
                                                                                M
                                                                            </th>
                                                                            <th className="text-center">
                                                                                R
                                                                            </th>
                                                                            <th className="text-center">
                                                                                W
                                                                            </th>
                                                                            <th className="text-center">
                                                                                ER
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {live.bowlers.map((item, index) =>
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <div className="player-name-img">
                                                                                    <img
                                                                                        src={avatar}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        {item.name}
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.overs}
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.maidens}
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.runs_conceded}
                                                                            </td>
                                                                            <td className="text-center">
                                                                                <strong>
                                                                                    {item.wickets}
                                                                                </strong>
                                                                            </td>
                                                                            <td className="text-center">
                                                                                {item.econ}
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            <div className="similar-blk mb-20">
                                                                <h3 className="tertiary-title">
                                                                    Recent
                                                                </h3>
                                                                <div className="over-wrap">
                                                                    <div className="single-over">
                                                                        <span className="ball-of-over">
                                                                            1
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            2
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            0
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            4
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            6
                                                                        </span>
                                                                        <span className="ball-of-over red-bg">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                    <div className="single-over">
                                                                        <span className="ball-of-over">
                                                                            1
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            2
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            0
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            4
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            6
                                                                        </span>
                                                                        <span className="ball-of-over red-bg">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                    <div className="single-over">
                                                                        <span className="ball-of-over">
                                                                            1
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            2
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            0
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            4
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            6
                                                                        </span>
                                                                        <span className="ball-of-over red-bg">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                    <div className="single-over">
                                                                        <span className="ball-of-over">
                                                                            1
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            2
                                                                        </span>
                                                                        <span className="ball-of-over">
                                                                            0
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            4
                                                                        </span>
                                                                        <span className="ball-of-over green-bg">
                                                                            6
                                                                        </span>
                                                                        <span className="ball-of-over red-bg">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="similar-blk mb-20">
                                                                <h3 className="tertiary-title mb-10">
                                                                    Live
                                                                    Commentary
                                                                </h3>
                                                                <div className="commentry-common-wrap">

                                                                    {live.commentaries.reverse().map((item, index) =>
                                                                        item.event === "overend" ?
                                                                            <div key={index} className="hybried-title mb-10">
                                                                                <div className="h-left-roudn">
                                                                                    <span className="end-of-over">
                                                                                        End of<br />over
                                                                                    </span>
                                                                                    <span className="round-ou">
                                                                                        <span className="round-in">
                                                                                            {item.over}
                                                                                        </span>
                                                                                    </span>
                                                                                </div>

                                                                                <div className="h-right-content">
                                                                                    <div className="top-bar">
                                                                                        <p>
                                                                                            {match.innings[0].short_name.replace(" Inning", "")} : {item.score}
                                                                                        </p>
                                                                                        <ul className="h-current-statistics">
                                                                                            <li>
                                                                                                {item.commentary}
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="bottom-bar">
                                                                                        <div className="btm-bar-left-p">
                                                                                            {
                                                                                                item.bats.map((batsman, index) =>
                                                                                                    <p key={index}>{findPlayer(batsman.batsman_id)} : {batsman.runs} ({batsman.balls_faced})</p>
                                                                                                )
                                                                                            }
                                                                                        </div>
                                                                                        <div className="btm-bar-right-p">
                                                                                            <p>
                                                                                                {findPlayer(item.bowls[0].bowler_id)} : {item.bowls[0].overs}-{item.bowls[0].wickets}-{item.bowls[0].runs_conceded}-{item.bowls[0].maidens}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                                <div key={index} className={item.event === "wicket" ? "single-comentry light-red-bgg" : item.score === 4 ? "single-comentry light-blue-bgg" : item.score === 6 ? "single-comentry light-green-bgg" : "single-comentry gray-bgg"}>
                                                                                <div className="left-trans-over">
                                                                                    {item.over+"."+item.ball}
                                                                                    <span className={item.event === "wicket" ? "over-oval red-bg" : item.score === 4 ? "over-oval blue-bg" : item.score === 6 ? "over-oval green-bg" : "over-oval"}>
                                                                                        {item.score}
                                                                                    </span>
                                                                                </div>
                                                                                <p>{item.commentary}
                                                                                </p>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>

                                                            <div className="middle-btn">
                                                                <Link
                                                                    to="#"
                                                                    className="round-btn"
                                                                >
                                                                    Watch full
                                                                    commentary
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null }
                                                {loaded && match.status === 1 ? null : <>
                                                    <div
                                                        className="tab-pane fade show active"
                                                        id="tbTwo"
                                                        role="tabpanel"
                                                        aria-labelledby="tbTwo-tab"
                                                    >
                                                        <div className="tb-content-wrap">
                                                            <div className="tabContainer-inner-1">
                                                                <nav>
                                                                    <div
                                                                        className="nav nav-link-wrap inner-1"
                                                                        id="nav-tab"
                                                                        role="tablist"
                                                                    >
                                                                        {loaded
                                                                            ? match.innings.map(
                                                                                  (
                                                                                      item,
                                                                                      index
                                                                                  ) => (
                                                                                      <a key={index}
                                                                                          className={
                                                                                              index <
                                                                                              1
                                                                                                  ? "nav-item nav-link active"
                                                                                                  : "nav-item nav-link"
                                                                                          }
                                                                                          id={"tbOne-line-" + index + "-tab"}
                                                                                          data-toggle="tab"
                                                                                          href={"#tbOne-card-"+index}
                                                                                          role="tab"
                                                                                          aria-controls="nav-home"
                                                                                          aria-selected="true"
                                                                                      >
                                                                                          <span className="fullName">
                                                                                              {
                                                                                                  item.name
                                                                                              }
                                                                                          </span>
                                                                                          <span className="shortName">
                                                                                              {
                                                                                                  item.short_name
                                                                                              }
                                                                                          </span>

                                                                                          <span className="extra-border"></span>
                                                                                      </a>
                                                                                  )
                                                                              )
                                                                            : null}
                                                                    </div>
                                                                </nav>
                                                                <div
                                                                    className="tab-content"
                                                                    id="nav-tabContent"
                                                                >
                                                                    {loaded
                                                                            ? match.innings.map(
                                                                                  (
                                                                                      item,
                                                                                      index
                                                                                  ) => (
                                                                    <div
                                                                         key={index}
                                                                        className={
                                                                            index <
                                                                            1
                                                                                ? "tab-pane fade show active"
                                                                                : "tab-pane fade show"
                                                                        }
                                                                        id={"tbOne-card-"+index}
                                                                        role="tabpanel"
                                                                        aria-labelledby={"tbOne-inner-"+index+"-tab"}
                                                                    >
                                                                        <div className="tb-content-wrap inner-1">
                                                                            <div className="strike-table-wrap under-scorecard">
                                                                                <table className="table strike-table">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>
                                                                                                Batsmen
                                                                                            </th>
                                                                                            <th className="d-n"></th>
                                                                                            <th className="text-center">
                                                                                                R
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                B
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                4s
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                6s
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                SR
                                                                                            </th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {item.batsmen.map((batsman, index) =>
                                                                                        
                                                                                            <tr key={index} className="b-btm-none">
                                                                                                <td>
                                                                                                    <div className="player-name-img">
                                                                                                        <Link to={"/player/profile/"+batsman.batsman_id+"/"+batsman.name.toLowerCase().replace(" ", "-")}>
                                                                                                            <img
                                                                                                                src={avatar}
                                                                                                                alt=""
                                                                                                            />
                                                                                                            <span>
                                                                                                                {batsman.name}
                                                                                                            </span>
                                                                                                        </Link>
                                                                                                    </div>
                                                                                                </td>

                                                                                                <td className="d-n">
                                                                                                    {batsman.how_out}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    <strong>
                                                                                                        {batsman.runs}
                                                                                                    </strong>
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {batsman.balls_faced}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {batsman.fours}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {batsman.sixes}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {batsman.strike_rate}
                                                                                                </td>
                                                                                            </tr>
                                                                                        )}
                                                                                        <tr className="b-tp-none">
                                                                                            <td colSpan="7">
                                                                                                <p className="d-block d-sm-none">
                                                                                                    c
                                                                                                    Fielder
                                                                                                    b
                                                                                                    Bowler
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr>
                                                                                            <td>
                                                                                                <strong>
                                                                                                    Extras
                                                                                                </strong>
                                                                                            </td>
                                                                                            <td colSpan="2">
                                                                                                (NB {item.extra_runs.noballs}, W {item.extra_runs.wides}, B {item.extra_runs.byes}, LB {item.extra_runs.legbyes})
                                                                                            </td>
                                                                                            <td colSpan="5">
                                                                                                <strong>
                                                                                                    {item.extra_runs.total}
                                                                                                </strong>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr className="total-table-count">
                                                                                            <td colSpan="2">
                                                                                                <strong>
                                                                                                    Total
                                                                                                </strong>
                                                                                            </td>
                                                                                            <td colSpan="5">
                                                                                                <strong>
                                                                                                    {item.scores}
                                                                                                </strong> ({item.equations.overs} Overs, RR: {item.equations.runrate})
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>

                                                                            <div className="similar-blk mb-20">
                                                                                <div style={{textAlign:'center'}}>
                                                                                    <Advertisement size={72890} style={{marginBottom:'15px'}}/>
                                                                                </div>

                                                                                <h3 className="tertiary-title">
                                                                                    Fall of Wickets
                                                                                </h3>
                                                                                <div className="fall-wicket-wrap">
                                                                                    <div className="fall-wicket-wrap-inner">
                                                                                        {item.fows.map((fow, index) =>
                                                                                            <div key={index} className="fall-item">
                                                                                                <span className="fall-run">
                                                                                                    {fow.number}-{fow.score_at_dismissal}
                                                                                                </span>
                                                                                                <p>
                                                                                                    {fow.name.substr(0,8)} <br/>at {fow.overs_at_dismissal} over
                                                                                                </p>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="strike-table-wrap under-scorecard">
                                                                                <table className="table strike-table table-responsive-sm">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>
                                                                                                Bowler
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                O
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                M
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                R
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                W
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                WD
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                NB
                                                                                            </th>
                                                                                            <th className="text-center">
                                                                                                ER
                                                                                            </th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {item.bowlers.map((bowler, index) =>
                                                                                            <tr key={index}>
                                                                                                <td>
                                                                                                    <div className="player-name-img">
                                                                                                        <Link to={"/player/profile/"+bowler.bowler_id+"/"+bowler.name.toLowerCase().replace(" ", "-")}>
                                                                                                            <img
                                                                                                                src={avatar}
                                                                                                                alt={bowler.name}
                                                                                                            />
                                                                                                            <span>
                                                                                                                {bowler.name}
                                                                                                            </span>
                                                                                                        </Link>
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {bowler.overs}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {bowler.maidens}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    <strong>
                                                                                                        {bowler.runs_conceded}
                                                                                                    </strong>
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {bowler.wickets}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {bowler.wides}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {bowler.noballs}
                                                                                                </td>
                                                                                                <td className="text-center">
                                                                                                    {bowler.econ}
                                                                                                </td>
                                                                                            </tr>
                                                                                        )}
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
{item.current_partnership.batsmen ? 
                                                                            <div className="similar-blk mb-20">
                                                                                <h3 className="tertiary-title">
                                                                                    Partnerships
                                                                                </h3>
                                                                                <div className="partnarship-f-wrap">
                                                                                    <div className="partnarship-single">
                                                                                        <div className="pt-left d-n">
                                                                                            <div className="player-name-img">
                                                                                                <img
                                                                                                    src={avatar}
                                                                                                    alt=""
                                                                                                />
                                                                                                <span>
                                                                                                    {item.current_partnership.batsmen[0].name}
                                                                                                    <span className="all-bol-and-run">
                                                                                                        {item.current_partnership.batsmen[0].runs}
                                                                                                        <span>
                                                                                                            ({item.current_partnership.batsmen[0].balls})
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="pt-middle">
                                                                                            <div className="player-dets-mb-wrp">
                                                                                                <div className="player-dets-mb-wrp-inner">
                                                                                                    <div className="player-dets-mb">
                                                                                                        <img
                                                                                                            src={avatar}
                                                                                                            alt=""
                                                                                                        />
                                                                                                        <span>
                                                                                                            Bowler
                                                                                                            Name{" "}
                                                                                                            <span className="all-bol-and-run">
                                                                                                                100{" "}
                                                                                                                <span>
                                                                                                                    (90)
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                    <div className="player-dets-mb">
                                                                                                        <img
                                                                                                            src={avatar}
                                                                                                            alt=""
                                                                                                        />
                                                                                                        <span>
                                                                                                            Bowler
                                                                                                            Name{" "}
                                                                                                            <span className="all-bol-and-run">
                                                                                                                100{" "}
                                                                                                                <span>
                                                                                                                    (90)
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <span className="fall-run style-2">
                                                                                                {item.current_partnership.runs}
                                                                                                ({item.current_partnership.balls})
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="pt-left right-reverse  d-n">
                                                                                            <div className="player-name-img">
                                                                                                <img
                                                                                                    src={avatar}
                                                                                                    alt=""
                                                                                                />
                                                                                                <span>
                                                                                                    {item.current_partnership.batsmen[1].name}
                                                                                                    <span className="all-bol-and-run">
                                                                                                        {item.current_partnership.batsmen[1].runs}
                                                                                                        <span>
                                                                                                            ({item.current_partnership.batsmen[1].balls})
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
: null
}
                                                                        </div>
                                                                    </div>
                                                                            )
                                                                        )
                                                                    : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane fade"
                                                        id="tbThree"
                                                        role="tabpanel"
                                                        aria-labelledby="tbThree-tab"
                                                    >
                                                        <div className="tb-content-wrap">
                                                            <div className="tabContainer-inner-1">
                                                                <nav>
                                                                    <div
                                                                        className="nav nav-link-wrap inner-1"
                                                                        id="nav-tab"
                                                                        role="tablist"
                                                                    >
                                                                        {loaded
                                                                            ? match.innings.map(
                                                                                  (
                                                                                      item,
                                                                                      index
                                                                                  ) => (
                                                                                      <a
                                                                                        key={index}
                                                                                          className={
                                                                                              index <
                                                                                              1
                                                                                                  ? "nav-item nav-link active"
                                                                                                  : "nav-item nav-link"
                                                                                          }
                                                                                          id={"tbOne-inner-" + index + "-tab"}
                                                                                          data-toggle="tab"
                                                                                          href={"#tbOne-inner-"+index}
                                                                                          role="tab"
                                                                                          aria-controls="nav-home"
                                                                                          aria-selected="true"
                                                                                      >
                                                                                          <span className="fullName">
                                                                                              {
                                                                                                  item.name
                                                                                              }
                                                                                          </span>
                                                                                          <span className="shortName">
                                                                                              {
                                                                                                  item.short_name
                                                                                              }
                                                                                          </span>

                                                                                          <span className="extra-border"></span>
                                                                                      </a>
                                                                                  )
                                                                              )
                                                                            : null
                                                                        }
                                                                    </div>
                                                                </nav>
                                                                <div
                                                                    className="tab-content"
                                                                    id="nav-tabContent"
                                                                >
                                                                    <div
                                                                        className="tab-pane fade show active"
                                                                        id="tbOne-inner-0"
                                                                        role="tabpanel"
                                                                        aria-labelledby="tbOne-inner-0-tab"
                                                                    >
                                                                        <div className="tb-content-wrap inner-1">
                                                                            <div className="similar-blk mb-20 mt-20">
                                                                                <div className="commentry-common-wrap">
                                                                                    <div style={{textAlign:'center'}}>
                                                                                        <Advertisement size={72890} style={{marginBottom:'15px'}}/>
                                                                                    </div>
                                                                                    {commentary1st.map((item, index) =>
                                                                                        item.event === "overend" ?
                                                                                            <div key={index} className="hybried-title mb-10">
                                                                                                <div className="h-left-roudn">
                                                                                                    <span className="end-of-over">
                                                                                                        End of<br />over
                                                                                                    </span>
                                                                                                    <span className="round-ou">
                                                                                                        <span className="round-in">
                                                                                                            {item.over}
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </div>
            
                                                                                                <div className="h-right-content">
                                                                                                    <div className="top-bar">
                                                                                                        <p>
                                                                                                            {match.innings[0].short_name.replace(" Inning", "")} : {item.score}
                                                                                                        </p>
                                                                                                        <ul className="h-current-statistics">
                                                                                                            <li>
                                                                                                                {item.commentary}
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                    <div className="bottom-bar">
                                                                                                        <div className="btm-bar-left-p">
                                                                                                            {
                                                                                                                item.bats.map((batsman, index) =>
                                                                                                                    <p key={index}>{findPlayer(batsman.batsman_id)} : {batsman.runs} ({batsman.balls_faced})</p>
                                                                                                                )
                                                                                                            }
                                                                                                        </div>
                                                                                                        <div className="btm-bar-right-p">
                                                                                                            <p>
                                                                                                                {findPlayer(item.bowls[0].bowler_id)} : {item.bowls[0].overs}-{item.bowls[0].wickets}-{item.bowls[0].runs_conceded}-{item.bowls[0].maidens}
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            :
                                                                                                <div key={index} className={item.event === "wicket" ? "single-comentry light-red-bgg" : item.run === 4 ? "single-comentry light-blue-bgg" : item.run === 6 ? "single-comentry light-green-bgg" : "single-comentry gray-bgg"}>
                                                                                                <div className="left-trans-over">
                                                                                                    {item.over+"."+item.ball}
                                                                                                    <span className={item.event === "wicket" ? "over-oval red-bg" : item.run === 4 ? "over-oval blue-bg" : item.run === 6 ? "over-oval green-bg" : "over-oval"}>
                                                                                                        {item.score}
                                                                                                    </span>
                                                                                                </div>
                                                                                                <p>{item.commentary}
                                                                                                </p>
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        className="tab-pane fade"
                                                                        id="tbOne-inner-1"
                                                                        role="tabpanel"
                                                                        aria-labelledby="tbOne-inner-1-tab"
                                                                    >
                                                                        <div className="tb-content-wrap inner-1">
                                                                            <div className="similar-blk mb-20 mt-20">
                                                                                <div className="commentry-common-wrap">
                                                                                    {commentary2nd.map((item, index) =>
                                                                                        item.event === "overend" ?
                                                                                            <div key={index} className="hybried-title mb-10">
                                                                                                <div className="h-left-roudn">
                                                                                                    <span className="end-of-over">
                                                                                                        End of<br />over
                                                                                                    </span>
                                                                                                    <span className="round-ou">
                                                                                                        <span className="round-in">
                                                                                                            {item.over}
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </div>
            
                                                                                                <div className="h-right-content">
                                                                                                    <div className="top-bar">
                                                                                                        <p>
                                                                                                            {match.innings[1].short_name.replace(" Inning", "")} : {item.score}
                                                                                                        </p>
                                                                                                        <ul className="h-current-statistics">
                                                                                                            <li>
                                                                                                                {item.commentary}
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                    <div className="bottom-bar">
                                                                                                        <div className="btm-bar-left-p">
                                                                                                            {
                                                                                                                item.bats.map((batsman, index) =>
                                                                                                                    <p key={index}>{findPlayer(batsman.batsman_id)} : {batsman.runs} ({batsman.balls_faced})</p>
                                                                                                                )
                                                                                                            }
                                                                                                        </div>
                                                                                                        {item.bowls[0] ? 
                                                                                                        <div className="btm-bar-right-p">
                                                                                                            <p>
                                                                                                                {findPlayer(item.bowls[0].bowler_id)} : {item.bowls[0].overs}-{item.bowls[0].wickets}-{item.bowls[0].runs_conceded}-{item.bowls[0].maidens}
                                                                                                            </p>
                                                                                                        </div> : null
                                                                                                        }
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            :
                                                                                                <div key={index} className={item.event === "wicket" ? "single-comentry light-red-bgg" : item.run === 4 ? "single-comentry light-blue-bgg" : item.run === 6 ? "single-comentry light-green-bgg" : "single-comentry gray-bgg"}>
                                                                                                <div className="left-trans-over">
                                                                                                    {item.over+"."+item.ball}
                                                                                                    <span className={item.event === "wicket" ? "over-oval red-bg" : item.run === 4 ? "over-oval blue-bg" : item.run === 6 ? "over-oval green-bg" : "over-oval"}>
                                                                                                        {item.score}
                                                                                                    </span>
                                                                                                </div>
                                                                                                <p>{item.commentary}
                                                                                                </p>
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="tab-pane fade"
                                                        id="tbFour"
                                                        role="tabpanel"
                                                        aria-labelledby="tbFour-tab"
                                                    >
                                                        <div className="tb-content-wrap">
                                                            <div className="tabContainer-inner-1">
                                                                <div
                                                                    className="tab-content"
                                                                    id="nav-tabContent"
                                                                >
                                                                    <div
                                                                        className="tab-pane fade show active"
                                                                        id="tbOne-inner-11"
                                                                        role="tabpanel"
                                                                        aria-labelledby="tbOne-inner-11-tab"
                                                                    >
                                                                        <div className="tb-content-wrap inner-1">
                                                                            <div className="tabContainer-inner-1">
                                                                                <nav>
                                                                                    <div
                                                                                        className="nav nav-link-wrap inner-2"
                                                                                        id="nav-tab"
                                                                                        role="tablist"
                                                                                    >
                                                                                        <a
                                                                                            className="nav-item nav-link active"
                                                                                            id="tbOne-11-tab"
                                                                                            data-toggle="tab"
                                                                                            href="#tbOne-11"
                                                                                            role="tab"
                                                                                            aria-controls="nav-home"
                                                                                            aria-selected="true"
                                                                                        >
                                                                                            Manhattan
                                                                                        </a>

                                                                                        <a
                                                                                            className="nav-item nav-link"
                                                                                            id="tbTwo-22-tab"
                                                                                            data-toggle="tab"
                                                                                            href="#tbTwo-22"
                                                                                            role="tab"
                                                                                            aria-controls="nav-profile"
                                                                                            aria-selected="false"
                                                                                        >
                                                                                            Worm
                                                                                        </a>

                                                                                        {/* <a
                                                                                            className="nav-item nav-link"
                                                                                            id="tbTwo-23-tab"
                                                                                            data-toggle="tab"
                                                                                            href="#tbTwo-23"
                                                                                            role="tab"
                                                                                            aria-controls="nav-profile"
                                                                                            aria-selected="false"
                                                                                        >
                                                                                            Player
                                                                                            vs
                                                                                            Player
                                                                                        </a> */}

                                                                                        <a
                                                                                            className="nav-item nav-link"
                                                                                            id="tbTwo-24-tab"
                                                                                            data-toggle="tab"
                                                                                            href="#tbTwo-24"
                                                                                            role="tab"
                                                                                            aria-controls="nav-profile"
                                                                                            aria-selected="false"
                                                                                        >
                                                                                            Runs
                                                                                        </a>

                                                                                        <a
                                                                                            className="nav-item nav-link"
                                                                                            id="tbTwo-25-tab"
                                                                                            data-toggle="tab"
                                                                                            href="#tbTwo-25"
                                                                                            role="tab"
                                                                                            aria-controls="nav-profile"
                                                                                            aria-selected="false"
                                                                                        >
                                                                                            Wickets
                                                                                        </a>

                                                                                        <a
                                                                                            className="nav-item nav-link"
                                                                                            id="tbTwo-26-tab"
                                                                                            data-toggle="tab"
                                                                                            href="#tbTwo-26"
                                                                                            role="tab"
                                                                                            aria-controls="nav-profile"
                                                                                            aria-selected="false"
                                                                                        >
                                                                                            Extras
                                                                                        </a>

                                                                                        <a
                                                                                            className="nav-item nav-link"
                                                                                            id="tbTwo-27-tab"
                                                                                            data-toggle="tab"
                                                                                            href="#tbTwo-27"
                                                                                            role="tab"
                                                                                            aria-controls="nav-profile"
                                                                                            aria-selected="false"
                                                                                        >
                                                                                            Run
                                                                                            Rates
                                                                                        </a>
                                                                                    </div>
                                                                                </nav>
                                                                                <div
                                                                                    className="tab-content"
                                                                                    id="nav-tabContent"
                                                                                >
                                                                                    <div
                                                                                        className="tab-pane fade show active"
                                                                                        id="tbOne-11"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="tbOne-11-tab"
                                                                                    >
                                                                                        <div className="tb-content-wrap inner-2">
                                                                                            <div className="chart-wrap mb-20">
                                                                                                <div className="chart-title">
                                                                                                    <h4>
                                                                                                        MANHATTAN
                                                                                                    </h4>

                                                                                                    <div className="chart-trans-info">
                                                                                                    {loaded
                                                                                                        ? match.innings.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <p key={index}>
                                                                                                                    {item.name} <span className={index === 0 ? "dott" : "dott yellow"}></span>
                                                                                                                </p>
                                                                                                            )
                                                                                                        ) : null
                                                                                                    }
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="cart-img">
                                                                                                    <Bar
                                                                                                        data={data}
                                                                                                        width={100}
                                                                                                        height={40}
                                                                                                        options={options}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="tab-pane fade"
                                                                                        id="tbTwo-22"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="tbTwo-22-tab"
                                                                                    >
                                                                                        <div className="tb-content-wrap inner-2">
                                                                                            <div className="chart-wrap mb-20">
                                                                                                <div className="chart-title">
                                                                                                    <h4>
                                                                                                        Worm
                                                                                                    </h4>

                                                                                                    <div className="chart-trans-info">
                                                                                                    {loaded
                                                                                                        ? match.innings.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <p key={index}>
                                                                                                                    {item.name} <span className={index === 0 ? "dott" : "dott yellow"}></span>
                                                                                                                </p>
                                                                                                            )
                                                                                                        ) : null
                                                                                                    }
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="cart-img">
                                                                                                    <Line
                                                                                                        data={data2}
                                                                                                        width={100}
                                                                                                        height={40}
                                                                                                        options={options}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <div
                                                                                        className="tab-pane fade"
                                                                                        id="tbTwo-23"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="tbOne-23-tab"
                                                                                    >
                                                                                        <div className="tb-content-wrap inner-2">
                                                                                        <div className="chart-wrap mb-20">
                                                                                                <div className="chart-title">
                                                                                                    <h4>
                                                                                                        PLAYER
                                                                                                        VS
                                                                                                        PLAYER
                                                                                                    </h4>

                                                                                                    <div className="chart-trans-info">
                                                                                                    {loaded
                                                                                                        ? match.innings.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <p key={index}>
                                                                                                                    {item.name} <span className={index === 0 ? "dott" : "dott yellow"}></span>
                                                                                                                </p>
                                                                                                            )
                                                                                                        ) : null
                                                                                                    }
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="cart-img">
                                                                                                    <HorizontalBar
                                                                                                        data={data3}
                                                                                                        width={100}
                                                                                                        height={100}
                                                                                                        options={options}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div> */}
                                                                                    <div
                                                                                        className="tab-pane fade"
                                                                                        id="tbTwo-24"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="tbOne-24-tab"
                                                                                    >
                                                                                        <div className="tb-content-wrap inner-2">
                                                                                            <div className="chart-wrap mb-20">
                                                                                                <div className="chart-title">
                                                                                                    <h4>
                                                                                                        Runs
                                                                                                    </h4>

                                                                                                    <div className="chart-trans-info">
                                                                                                    {loaded
                                                                                                        ? match.innings.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <p key={index}>
                                                                                                                    {item.name} <span className={index === 0 ? "dott" : "dott yellow"}></span>
                                                                                                                </p>
                                                                                                            )
                                                                                                        ) : null
                                                                                                    }
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="cart-img">
                                                                                                    <HorizontalBar
                                                                                                        data={data4}
                                                                                                        width={100}
                                                                                                        height={40}
                                                                                                        options={options}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="tab-pane fade"
                                                                                        id="tbTwo-25"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="tbOne-25-tab"
                                                                                    >
                                                                                        <div className="tb-content-wrap inner-2">
                                                                                            <div className="chart-wrap mb-20">
                                                                                                <div className="chart-title">
                                                                                                    <h4>
                                                                                                        Wickets
                                                                                                    </h4>

                                                                                                    <div className="chart-trans-info">
                                                                                                    {loaded
                                                                                                        ? match.innings.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <p key={index}>
                                                                                                                    {item.name} <span className={index === 0 ? "dott" : "dott yellow"}></span>
                                                                                                                </p>
                                                                                                            )
                                                                                                        ) : null
                                                                                                    }
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="cart-img">
                                                                                                    <HorizontalBar
                                                                                                        data={data5}
                                                                                                        width={100}
                                                                                                        height={40}
                                                                                                        options={options}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="tab-pane fade"
                                                                                        id="tbTwo-26"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="tbOne-26-tab"
                                                                                    >
                                                                                        <div className="tb-content-wrap inner-2">
                                                                                            <div className="chart-wrap mb-20">
                                                                                                <div className="chart-title">
                                                                                                    <h4>
                                                                                                        Extras
                                                                                                    </h4>

                                                                                                    <div className="chart-trans-info">
                                                                                                    {loaded
                                                                                                        ? match.innings.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <p key={index}>
                                                                                                                    {item.name} <span className={index === 0 ? "dott" : "dott yellow"}></span>
                                                                                                                </p>
                                                                                                            )
                                                                                                        ) : null
                                                                                                    }
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="cart-img">
                                                                                                    <HorizontalBar
                                                                                                        data={data6}
                                                                                                        width={100}
                                                                                                        height={40}
                                                                                                        options={options}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="tab-pane fade"
                                                                                        id="tbTwo-27"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="tbOne-27-tab"
                                                                                    >
                                                                                        <div className="tb-content-wrap inner-2">
                                                                                            <div className="chart-wrap mb-20">
                                                                                                <div className="chart-title">
                                                                                                    <h4>
                                                                                                        Run
                                                                                                        Rate
                                                                                                    </h4>

                                                                                                    <div className="chart-trans-info">
                                                                                                    {loaded
                                                                                                        ? match.innings.map(
                                                                                                            (
                                                                                                                item,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <p key={index}>
                                                                                                                    {item.name} <span className={index === 0 ? "dott" : "dott yellow"}></span>
                                                                                                                </p>
                                                                                                            )
                                                                                                        ) : null
                                                                                                    }
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="cart-img">
                                                                                                    <Line
                                                                                                        data={data7}
                                                                                                        width={100}
                                                                                                        height={40}
                                                                                                        options={options}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="tab-pane fade"
                                                                        id="tbTwo-inner-22"
                                                                        role="tabpanel"
                                                                        aria-labelledby="tbTwo-inner-22-tab"
                                                                    >
                                                                        <div className="tb-content-wrap inner-1">
                                                                            ...
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>}

                                                    <div
                                                        className={match.status === 1 ? "tab-pane fade active show" : "tab-pane fade"}
                                                        id="tbFive"
                                                        role="tabpanel"
                                                        aria-labelledby="tbFive-tab"
                                                    >
                                                        <div className="tb-content-wrap">
                                                            <div className="tabContainer-inner-1">
                                                                <nav>
                                                                    <div
                                                                        className="nav nav-link-wrap inner-1"
                                                                        id="nav-tab"
                                                                        role="tablist"
                                                                    >
                                                                        {loaded
                                                                            ? <>
                                                                                <a
                                                                                    className="nav-item nav-link active"
                                                                                    id="tbOne-line-150-tab"
                                                                                    data-toggle="tab"
                                                                                    href="#tbOne-line-150"
                                                                                    role="tab"
                                                                                    aria-controls="nav-home"
                                                                                    aria-selected="true"
                                                                                >
                                                                                    {match.teama.name}
                                                                                    <span className="extra-border"></span>
                                                                                </a>
                                                                                <a
                                                                                    className="nav-item nav-link"
                                                                                    id="tbOne-line-151-tab"
                                                                                    data-toggle="tab"
                                                                                    href="#tbOne-line-151"
                                                                                    role="tab"
                                                                                    aria-controls="nav-home"
                                                                                    aria-selected="true"
                                                                                >
                                                                                    {match.teamb.name}
                                                                                    <span className="extra-border"></span>
                                                                                </a>
                                                                            </> : null
                                                                        }
                                                                   </div>
                                                                </nav>
                                                                <div
                                                                    className="tab-content"
                                                                    id="nav-tabContent"
                                                                >
                                                                    {loaded ? <>
                                                                        <div
                                                                            className="tab-pane fade show active"
                                                                            id="tbOne-line-150"
                                                                            role="tabpanel"
                                                                            aria-labelledby="tbOne-line-150-tab"
                                                                        >
                                                                            <div className="tb-content-wrap inner-1">
                                                                                <div className="innings-player">
                                                                                    <div className="row">
                                                                                        {squad.teama.squads.map((player, index) =>
                                                                                            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                                                                                <PlayerCard id={player.player_id} format="mini" name={player.name} role_str={player.role_str} role={player.role} playing={player.playing11}/>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div> 
                                                                        <div
                                                                            className="tab-pane fade show"
                                                                            id="tbOne-line-151"
                                                                            role="tabpanel"
                                                                            aria-labelledby="tbOne-line-151-tab"
                                                                        >
                                                                            <div className="tb-content-wrap inner-1">
                                                                                <div className="innings-player">
                                                                                    <div className="row">
                                                                                        {squad.teamb.squads.map((player, index) =>
                                                                                            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                                                                                <PlayerCard id={player.player_id} format="mini" name={player.name} role_str={player.role_str} role={player.role} playing={player.playing11}/>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div> 
                                                                        
                                                                        </> :null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="tab-pane fade"
                                                        id="tbSix"
                                                        role="tabpanel"
                                                        aria-labelledby="tbSix-tab"
                                                    >
                                                        <div className="tb-content-wrap">
                                                            <div className="innings-player">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                                                        <div className="single-player-blk s-info">
                                                                            <div className="pl-img-wrap">
                                                                                <img
                                                                                    src="/assets/img/k-1.png"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <h4>
                                                                                Toss
                                                                            </h4>
                                                                            <p>
                                                                                {loaded ? match.toss.text ? match.toss.text : 'To be decided' : <Skeleton count={3} width={75}/>}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                                                        <div className="single-player-blk s-info">
                                                                            <div className="pl-img-wrap">
                                                                                <img
                                                                                    src="/assets/img/k-2.png"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <h4>
                                                                                Venue
                                                                            </h4>
                                                                            <p>
                                                                                {loaded ? match.venue.name : <Skeleton count={3} width={75}/>}
                                                                                <br />
                                                                                {loaded ? match.venue.location : <Skeleton count={3} width={50}/>}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                                                        <div className="single-player-blk s-info">
                                                                            <div className="pl-img-wrap">
                                                                                <img
                                                                                    src="/assets/img/k-3.png"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <h4>
                                                                                Umpires
                                                                            </h4>
                                                                            <p>
                                                                                {loaded ? match.umpires ? match.umpires : 'To be decided' : <Skeleton count={3} width={75}/>}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                                                        <div className="single-player-blk s-info">
                                                                            <div className="pl-img-wrap">
                                                                                <img
                                                                                    src="/assets/img/k-3.png"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <h4>
                                                                                Match
                                                                                Referee
                                                                            </h4>
                                                                            <p>
                                                                                {loaded ? match.referee ? match.referee : 'To be decided' : <Skeleton count={3} width={75}/>}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar-widget-wrapper">
                                <Advertisement size={320100} style={{marginBottom:'15px'}}/>
                                <LatestNews/>
                                <MostPopular/>
                                <ICCTeamRanking/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(MatchDetails);
