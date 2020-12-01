import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import Loader from 'react-loader-spinner';

function GroupTable(props) {

    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="single-group-list grp">
                <h3 className="grp-title">{props.title ? props.title : <Skeleton width={250}/>}</h3>
                <div className="grp-table">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Matches</th>
                                <th className="d-n">Won</th>
                                <th className="d-n">Lost</th>
                                <th className="">N/R</th>
                                <th className="d-n">Tied</th>
                                <th className="d-n">Net RR</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data ? 
                                props.data.map((item, index) => 
                                    <tr>
                                        <td>{index++}</td>
                                        <td><Link to=""><img src={item.flag} alt={item.team}/><strong><span className="full-text">{item.team}</span><span className="srt-text">{item.teamNameShort}</span></strong></Link></td>
                                        <td>{item.matches}</td>
                                        <td className="d-n">{item.won}</td>
                                        <td className="d-n">{item.lost}</td>
                                        <td className="d-n">{item.nr}</td>
                                        <td className="">{item.tied}</td>
                                        <td className="d-n">{item.netrr}</td>
                                        <td><strong>{item.points}</strong></td>
                                    </tr>
                                )
                            :
                                <tr>
                                    <td colSpan={9}>
                                        <Loader type="Oval" color="white" height={50} width={50} style={{margin:"auto", padding:"180px"}} />
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </SkeletonTheme>
        </>
    );
}

export default GroupTable;