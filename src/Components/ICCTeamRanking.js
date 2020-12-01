import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ICCTeamRanking() {
    const [odiRanking, setOdiRanking] = useState([{},{},{},{},{}]);
    const [t20Ranking, setT20Ranking] = useState([{},{},{},{},{}]);
    const [testRanking, setTestRanking] = useState([{},{},{},{},{}]);
    const [loaded, setLoaded] = useState(false);

    async function getRank() {
        axios.get('https://rest.entitysport.com/v2/iccranks')
        .then((res)=> {  
            setOdiRanking(res.data.response.ranks.teams.odis);
            setT20Ranking(res.data.response.ranks.teams.tests);
            setTestRanking(res.data.response.ranks.teams.t20s);
            setLoaded(true);
        })
    }

    useEffect(() => {  
        getRank()
    }, []);

    return (
        <>
            <div className="sidebar-widget rank-widget">
                <h4 className="heading-title">ICC TEAM RANKING</h4>

                <div>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" data-toggle="tab" href="#nav-4">ODI</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#nav-5">T20</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#nav-6">TEST</a>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-4">
                        <nav>
                            <ul>
                                <li>
                                    <ol>
                                        <li>
                                            <p>Pos</p>
                                        </li>
                                        <li>
                                            <p>Team</p>
                                        </li>
                                        <li>
                                            <p>Rating</p>
                                        </li>
                                    </ol>

                                </li>
                                {loaded ? 
                                odiRanking.map((item, index) => 
                                index < 5 ?
                                    <li key={index}>
                                        <ol>
                                            <li>
                                                <p>{item.rank}</p>
                                            </li>
                                            <li>
                                                <p>{item.team}</p>
                                            </li>
                                            <li>
                                                <p>{item.points}</p>
                                            </li>
                                        </ol>

                                    </li>
                                : null
                                )
                                : null}
                                <li><Link to="/ranking">Watch full ranking</Link></li>
                            </ul>
                        </nav>

                    </div>
                    <div className="tab-pane fade" id="nav-5">
                    <nav>
                            <ul>
                                <li>
                                    <ol>
                                        <li>
                                            <p>Pos</p>
                                        </li>
                                        <li>
                                            <p>Team</p>
                                        </li>
                                        <li>
                                            <p>Rating</p>
                                        </li>
                                    </ol>

                                </li>
                                {loaded ? 
                                t20Ranking.map((item, index) => 
                                index < 5 ?
                                    <li key={index}>
                                        <ol>
                                            <li>
                                                <p>{item.rank}</p>
                                            </li>
                                            <li>
                                                <p>{item.team}</p>
                                            </li>
                                            <li>
                                                <p>{item.points}</p>
                                            </li>
                                        </ol>

                                    </li>
                                : null
                                )
                                : null}
                                <li><Link to="/ranking">Watch full ranking</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="tab-pane fade" id="nav-6">
                    <nav>
                            <ul>
                                <li>
                                    <ol>
                                        <li>
                                            <p>Pos</p>
                                        </li>
                                        <li>
                                            <p>Team</p>
                                        </li>
                                        <li>
                                            <p>Rating</p>
                                        </li>
                                    </ol>

                                </li>
                                {loaded ? 
                                testRanking.map((item, index) => 
                                index < 5 ?
                                    <li key={index}>
                                        <ol>
                                            <li>
                                                <p>{item.rank}</p>
                                            </li>
                                            <li>
                                                <p>{item.team}</p>
                                            </li>
                                            <li>
                                                <p>{item.points}</p>
                                            </li>
                                        </ol>

                                    </li>
                                    : null
                                )
                                : null}
                                <li><Link to="/ranking">Watch full ranking</Link></li>
                            </ul>
                        </nav>

                    </div>
                </div>





            </div>
        </>
    );
}

export default ICCTeamRanking;