import React, {useState, useEffect} from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import axios from 'axios';
import thumbnail from '../assets/img/pl-thumb.svg';
import bowlerIcon from '../assets/img/ball-main.svg';
import batsmanIcon from '../assets/img/bat-main.svg';
import avatar from '../assets/img/player-img-m.svg';
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';

function PlayerCard(props) { 
    return (
        <>
            {
                props.format === "default" ? <Default {...props}/> 
                : props.format === "mini" ? <Mini {...props}/> 
                : props.format === "stats" ? <Stats {...props}/> 
                : "Please Insert Card Format"
            }
        </>
    );
}

function Default(props) {

    const [imageAvailable, setImageAvailable] = useState(false);

    useEffect(() => {
        function getLogo() {
            if(props.name) {
                axios.get('https://images.shadowbangladesh.com/v2/player/'+props.name+'.png')
                .then((res2) => {
                    setImageAvailable(true);
                })
            }
        }
        getLogo();
    }, [props.name]);
    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="profiles-main-tm-blk">
                <h4>{props.name ? props.name : <Skeleton width="50%"/>}</h4>
                <div className="main-pl-tm-img">
                    <img src={imageAvailable ? 'https://images.shadowbangladesh.com/v2/player/'+props.name+'.png' : thumbnail} alt={props.name ? props.name : ''}/>
                </div>
                <div className="player-info-table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Nationality</td>
                                <td>{props.nationality ? props.nationality : <Skeleton width={50}/>}</td>
                            </tr>
                            <tr>
                                <td>Role</td>
                                <td>{props.role ? props.role : <Skeleton width={50}/>}</td>
                            </tr>
                            <tr>
                                <td>Born</td>
                                <td>{props.dob ? props.dob : <Skeleton width={50}/>}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{props.age ? props.age : <Skeleton width={50}/>}</td>
                            </tr>
                            <tr>
                                <td>Batting Style</td>
                                <td>{props.battingStyle ? props.battingStyle : <Skeleton width={50}/>}</td>
                            </tr>
                            <tr>
                                <td>Bowling Style</td>
                                <td>{props.bowlingStyle ? props.bowlingStyle : <Skeleton width={50}/>}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </SkeletonTheme>
        </>
    )
}

function Mini(props) {

    console.log(props);

    
    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="single-player-blk">
                <div className="palyer-blk-top-blk">
                    <div className="main-player-img">
                        <img src={props.avatar ? props.avatar : avatar} alt=""/>
                    </div>
                    {props.bowler || props.allrounder ? <span><img src={bowlerIcon} alt=""/></span> : null}
                    {props.batsman || props.allrounder ? <span><img src={batsmanIcon} alt=""/></span> : null}
                </div>
                <div className="player-all-info">
                    <div className="player-title">
                        <h3><Link to={"/player/profile/"+props.id+"/"+props.name.toLowerCase().replace(" ", "-")}>{props.name ? props.name : <Skeleton width={150}/>} {props.role_str ? props.role_str : null}</Link></h3>
                        <p>{props.role ? props.role === 'bat' ? 'Batsman' : props.role === 'bowl' ? 'Bowler' : props.role === 'all' ? 'All Rounder' : props.role === 'wk' ? 'Wicketkeeper' : props.role === 'wkbat' ? 'Wicketkeeper' : null : <Skeleton width={100}/>}</p>
                    </div>
                    {/* <div className="palyber-main-info">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Innings:</td>
                                    <td className="text-right">{props.innings ? props.innings : <Skeleton width={50}/>}</td>
                                </tr>
                                <tr>
                                    <td>Runs:</td>
                                    <td className="text-right">{props.runs ? props.runs : <Skeleton width={50}/>}</td>
                                </tr>
                                <tr>
                                    <td>Wickets:</td>
                                    <td className="text-right">{props.wickets ? props.wickets : <Skeleton width={50}/>}</td>
                                </tr>
                                <tr>
                                    <td>Strike Rate:</td>
                                    <td className="text-right">{props.strikeRage ? props.strikeRage : <Skeleton width={50}/>}</td>
                                </tr>
                                <tr>
                                    <td>Econ. Rate:</td>
                                    <td className="text-right">{props.economy ? props.economy : <Skeleton width={50}/>}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        </SkeletonTheme>
        </>
    )
}



function Stats(props) {

    return (
        <>
            {props.data ? 
                <div className="prof-tab">
                    <div className="tabContainer">
                        <nav>
                            <div className="nav nav-link-wrap bdr-btm-three rds" id="nav-tab" role="tablist">
                                {Object.keys(props.data).map((child, index) => 
                                    <a key={index} className={index > 0 ? "nav-item nav-link" : "nav-item nav-link active"} id={child} data-toggle="tab" href={"#"+child+index} role="tab" aria-controls="nav-profile" aria-selected="false">{child}</a>
                                )}

                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">

                            {Object.keys(props.data).map((child, index) => 
                                <div key={index} className={index > 0 ? "tab-pane fade show" : "tab-pane fade show active"} id={child+index} role="tabpanel" aria-labelledby={child}>
                                    <div className="tb-content-wrap">
                                        <div className="tabContainer-inner-0">
                                            <nav>
                                                <div className="nav nav-link-wrap inner-1" id="nav-tab" role="tablist">
                                                    {Object.keys(props.data[child]).map((child, index2) => 
                                                        <a key={index2} className={index2 > 0 ? "nav-item nav-link" : "nav-item nav-link active"} id={"tb-line-"+index+index2+"-tab"} data-toggle="tab" href={"#tb-card-"+index+index2} role="tab" aria-controls="nav-home" aria-selected="true">{child}</a>
                                                    )}
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                {Object.keys(props.data[child]).map((child2, index2) => 
                                                    <div key={index2} className={index2 > 0 ? "tab-pane fade" : "tab-pane fade show active"} id={"tb-card-"+index+index2} role="tabpanel" aria-labelledby={"tb-line-"+index+index2+"-tab"}>
                                                        
                                                        <div className="prf-table-inner">
                                                            <div className="pl-table-info-all">
                                                                <table className="table">
                                                                    <tbody>
                                                                        {Object.keys(props.data[child][child2]).map((child3, index) => 
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    {child3}
                                                                                </td>
                                                                                <td>
                                                                                    {props.data[child][child2][child3]}
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            : <div className="prof-tab text-center" style={{padding:"190px"}}><Loader type="Oval" color="white" height={50} width={50} style={{margin:"auto"}} /></div>}
        </>
    )
}

export default PlayerCard;