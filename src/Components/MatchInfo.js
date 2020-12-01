import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import Moment from 'react-moment';
import bat from '../assets/img/bat-main.svg'
import ball from '../assets/img/ball.svg'

function MatchInfo(props) {

    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="ln-top-main">
                <div className="ln-top-des-blk">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="lntop-left-des">
                                <h2>
                                    {props.team1 && props.team1ShortName && props.team2 && props.team2ShortName ? 
                                        <><span className="full-text">{props.team1}</span><span className="srt-text">{props.team1ShortName}</span> vs <span className="full-text">{props.team2}</span><span className="srt-text">{props.team2ShortName}</span></>
                                    :
                                        <Skeleton width={350}/>
                                    }
                                </h2>
                                <div className="ln-des-info">
                                {props.matchName && props.startTime ?
                                    <>
                                        <span>{props.matchName}</span>
                                        <span><Moment format="D-MMM-YYYY">{props.startTime}</Moment></span>
                                        <span><Moment format="h:mm A">{props.startTime}</Moment></span>
                                    </>
                                :
                                    <Skeleton width={200} style={{borderRight:'none'}}/>
                                }
                                </div>
                                <p>{props.venue ? props.venue : <Skeleton width={300}/>}</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="fx-inner-top-info">
                                <span>Live</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-ups-inner-all-info" style={{backgroundImage: 'url(assets/img/l-info-img.jpg)'}}>
                <div className="row">
                    <div className="col-md-7 col-lg-7 col-xl-7">
                        <div className="line-up-inner-left-blk">
                            <div className="line-up-lft">
                                <div className="line-up-left-blk-single-row">
                                    {props.team1flag ? <img src={props.team1flag} alt=""/> : null}
                                    <h3>{props.team1 ? props.team1 : <Skeleton width={120}/>} {props.team1bowling ? <img src={ball} alt=""/> : null} {props.team1batting ? <img src={bat} alt=""/> : null}</h3>
                                </div>
                                <div className="line-up-rt-blk">
                                    <h3>{props.team1score ? props.team1score : null} {props.team1over ? '('+props.team1over+')' : null}</h3>
                                </div>
                            </div>
                            <div className="line-up-lft">
                                <div className="line-up-left-blk-single-row">
                                {props.team2flag ? <img src={props.team2flag} alt=""/> : null}
                                    <h3>{props.team2 ? props.team2 : <Skeleton width={100}/>} {props.team2bowling ? <img src={ball} alt=""/> : null} {props.team2batting ? <img src={bat} alt=""/> : null}</h3>
                                </div>
                                <div className="line-up-rt-blk">
                                    <h3>{props.team2score ? props.team2score : null} {props.team2over ? '('+props.team2over+')' : null}</h3>
                                </div>
                            </div>
                            <p>{props.status ? props.status : <Skeleton width={50}/>}</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 col-xl-5">
                        <div className="line-info-right-table">
                            <table className="table">

                                <tbody>
                                    <tr>
                                        <td>{props.runrate ? 'Current Run Rate' : null}</td>
                                        <td className="text-right">{props.runrate ? props.runrate : <Skeleton width={70}/>}</td>
                                    </tr>
                                    <tr>
                                        <td>{props. requiredrunrate ? 'Required Run Rate' : null}</td>
                                        <td className="text-right">{props.requiredrunrate ? props.requiredrunrate : <Skeleton width={60}/>}</td>
                                    </tr>
                                    <tr>
                                        <td>Last 5 Over</td>
                                        <td className="text-right">45/0 (RR: 9.00)</td>
                                    </tr>
                                    <tr>
                                        <td>At this stage India were</td>
                                        <td className="text-right">160/4</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
        </>
    );
}

export default MatchInfo;