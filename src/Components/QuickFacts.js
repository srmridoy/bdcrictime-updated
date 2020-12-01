import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import logo from '../assets/img/tiger-img.svg'

function QuickFacts(props) {

    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="sidebar-widget rank-widget fct-wd">
                <h4 className="heading-title">Quick Facts</h4>

                <div className="facts-info">
                    <h5>Association</h5>
                    <div className="inner-facts-texts">
                        <img src={props.logo ? props.logo : logo} alt=""/>
                        <p>{props.team ? props.team : <Skeleton width={200}/>}</p>
                    </div>
                    <div className="nk-name">
                        <h5>Nickname</h5>
                        <p>{props.teamNickname ? props.teamNickname : <Skeleton width={150}/>}</p>
                    </div>
                    <div className="captine">
                        <h5>Captain</h5>
                        <div className="cpt-list-items">
                            <p>{props.testCaptain ? <><span>Test</span>{props.testCaptain}</> : <Skeleton width={250} />}</p>
                            <p>{props.odiCaptain ? <><span>ODI</span>{props.odiCaptain}</> : <Skeleton width={250} />}</p>
                            <p>{props.t20Captain ? <><span>T20</span>{props.t20Captain}</> : <Skeleton width={250} />}</p>
                            <p>{props.coach ? <><span>Coach</span>{props.coach}</> : <Skeleton width={250} />}</p>
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
                                        <th><span className="gp"></span></th>
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
        </SkeletonTheme>
        </>
    );
}

export default QuickFacts;