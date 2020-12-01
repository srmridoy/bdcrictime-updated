import React from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import CompareDiv from '../assets/img/compare-div.svg';
import Moment from 'react-moment';

function MatchCards(props) {
    
    return (
        <>
            {
                props.format === "slider-item" ? <SliderItem {...props}/> 
                : props.format === "default" ? <Default {...props}/> 
                : "Please Insert Card Format"
            }
        </>
    );
}

function SliderItem(props) {
    return (
        <>
            <Link to={props.id ? "/match/details/"+props.id : ""}>
                <div className="item">
                    {props.id && props.team1 && props.team1Logo && props.team1Score && props.team1Over && props.team2 && props.team2Logo && props.team2Score && props.team2Over && props.status ? 
                        <div className="live-match-item">
                            <div className="title">
                            <h5>{props.series}</h5>
                            </div>
                            <div className="compare-country">
                            <span className="country-logo"><img src={props.team1Logo} alt={props.team1} /></span>
                            <span className="country-vs">
                                <p>VS</p>
                            </span>
                            <span className="country-logo"><img src={props.team2Logo} alt={props.team2} /></span>
                            </div>
                            <div className="compare-run">
                            <div className="run">
                                <h4>{props.team1ShortName} {props.team1Score} <span>{props.team1Over} {props.team1Over > 1 ? 'OVERS' : 'OVER'}</span></h4>
                            </div>
                            <div className="div"> <img src={CompareDiv} alt="" /> </div>
                            <div className="run">
                                <h4>{props.team2ShortName} {props.team2Score} <span>{props.team2Over} {props.team2Over > 1 ? 'OVERS' : 'OVER'}</span> </h4>
                            </div>
                            </div>
                            <div className="compare-match">
                            <p>{props.status}</p>
                            </div>
                        </div>
                    : 
                        <Link to="/">
                            <div className="item">
                                <div className="live-match-item" style={{padding: "70px"}}>
                                    <Loader type="Oval" color="white" height={30} width={30} style={{margin:"auto"}} />
                                </div>
                            </div>
                        </Link>
                    }
                </div>
            </Link>
        </>
    )
}


function Default(props) {
    return (
        <>
            <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
                <div className="single-fixture-blk">
                <Link to={props.id ? '/match/details/'+props.id+'/'+props.title.toLowerCase().split(' ').join('-'): ''}>
                    <div className="fx-top-blk">
                        <h4>{props.series ? props.series : <Skeleton width="300px"/>}</h4>
                        <div className="fx-top-right-info">
                            <span>{props.matchName ? props.matchName : <Skeleton width="100px" />}</span>
                            <span>
                                {props.startTime ? 
                                    <Moment format="D-MMM-YYYY">{props.startTime}</Moment>
                                :
                                    <Skeleton width="100px"/>
                                }
                            </span>
                            <span>
                                {props.startTime ? 
                                    <Moment format="h:mm A">{props.startTime}</Moment>
                                :
                                    <Skeleton width="100px"/>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="fx-inner-part">
                        {props.statusCode ? 
                            <>
                                <div className={props.statusCode === 3 ? "fx-inner-top-info" : "fx-inner-top-info up-c"}>
                                    <span>{props.state}</span>
                                </div>

                                <div className="fx-inner-main-part">
                                    <div className="single-team-info">
                                        <img className="fx-flag-img" src={props.team1Logo} alt={props.team1}/>
                                        <h3>
                                            {/* <img src="assets/img/ball.png" alt=""/>  */}
                                            <span className="shortName">{props.team1ShortName}</span><span className="fullName">{props.team1}</span></h3>
                                        <p>{props.team1Score ? <>{props.team1Score} <br/> <span>({props.team1Over} {props.team1Over > 1 ? 'OVERS' : 'OVER'})</span></> : <small style={{color:"#999"}}>To be played</small>}</p>
                                    </div>
                                    <div className="vs">
                                        <h3>-VS-</h3>
                                    </div>
                                    <div className="single-team-info rt-blk">
                                        <img className="fx-flag-img" src={props.team2Logo} alt={props.team2}/>
                                        <h3>
                                            {/* <img src="assets/img/ball.png" alt=""/>  */}
                                            <span className="shortName">{props.team2ShortName}</span><span className="fullName">{props.team2}</span></h3>
                                        <p>{props.team2Score ? <>{props.team2Score} <br/> <span>({props.team2Over} {props.team2Over > 1 ? 'OVERS' : 'OVER'})</span></> : <small style={{color:"#999"}}>To be played</small>}</p>
                                    </div>
                                </div>
                            </>
                        : 
                            <div className="fx-inner-top-info up-c" style={{padding:'30px'}}>
                                <Loader type="Bars" color="white" height={50} width={50} style={{margin:"auto"}} />
                            </div>
                        }
                    </div>
                    <p className="para-des">{props.status}</p>
                    <div className="fx-bottom-blk">
                        <div>{props.id ? 'View match details' : <Skeleton width="20%"/>}</div>
                    </div>
                </Link>
                </div>
            </SkeletonTheme>
        </>
    )
}


export default MatchCards;
