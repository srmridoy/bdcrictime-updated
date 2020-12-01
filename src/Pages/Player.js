import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import age from 's-age';
import axios from 'axios';
import PlayerCard from '../Components/PlayerCard'
import LatestNews from '../Components/LatestNews';
import MostPopular from '../Components/MostPopular';
import ICCTeamRanking from '../Components/ICCTeamRanking';
import { Helmet } from 'react-helmet';

function Player(props) {
    
    const [player, setPlayer] = useState(null);
    const [all, setAll] = useState(null);
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {  
        async function getPlayer() {
            axios.get('https://rest.entitysport.com/v2/players/'+props.match.params.playerId+'/stats')
            .then((res)=> {  
                setPlayer(res.data.response.player);
                setAll(res.data.response);
                setLoaded(true);
            })
        }
        getPlayer()
    }, [props.match.params.playerId]);

    const data = loaded ? 
    {
        "BATTING": {
            "TEST": {
                "matches" : all.batting.test ? all.batting.test.matches : "Not Available",
                "innings" : all.batting.test ? all.batting.test.innings : "Not Available",
                "notout" : all.batting.test ? all.batting.test.notout : "Not Available",
                "runs" : all.batting.test ? all.batting.test.runs : "Not Available",
                "balls" : all.batting.test ? all.batting.test.balls : "Not Available",
                "high score" : all.batting.test ? all.batting.test.highest : "Not Available",
                "average" : all.batting.test ? all.batting.test.average : "Not Available",
                "strike rate" : all.batting.test ? all.batting.test.strike : "Not Available",
                "100s" : all.batting.test ? all.batting.test.run100 : "Not Available",
                "50s" : all.batting.test ? all.batting.test.run50 : "Not Available",
                "No. of 4" : all.batting.test ? all.batting.test.run4 : "Not Available",
                "No. of 6" : all.batting.test ? all.batting.test.run6 : "Not Available",
                "Catches" : all.batting.test ? all.batting.test.catches : "Not Available",
                "stumpings" : all.batting.test ? all.batting.test.stumpings : "Not Available",
            },
            "ODI": {
                "matches" : all.batting.odi ? all.batting.odi.matches : "Not Available",
                "innings" : all.batting.odi ? all.batting.odi.innings : "Not Available",
                "notout" : all.batting.odi ? all.batting.odi.notout : "Not Available",
                "runs" : all.batting.odi ? all.batting.odi.runs : "Not Available",
                "balls" : all.batting.odi ? all.batting.odi.balls : "Not Available",
                "high score" : all.batting.odi ? all.batting.odi.highest : "Not Available",
                "average" : all.batting.odi ? all.batting.odi.average : "Not Available",
                "strike rate" : all.batting.odi ? all.batting.odi.strike : "Not Available",
                "100s" : all.batting.odi ? all.batting.odi.run100 : "Not Available",
                "50s" : all.batting.odi ? all.batting.odi.run50 : "Not Available",
                "No. of 4" : all.batting.odi ? all.batting.odi.run4 : "Not Available",
                "No. of 6" : all.batting.odi ? all.batting.odi.run6 : "Not Available",
                "Catches" : all.batting.odi ? all.batting.odi.catches : "Not Available",
                "stumpings" : all.batting.odi ? all.batting.odi.stumpings : "Not Available",
            },
            "T20I": {
                "matches" : all.batting.t20i ? all.batting.t20i.matches : "Not Available",
                "innings" : all.batting.t20i ? all.batting.t20i.innings : "Not Available",
                "notout" : all.batting.t20i ? all.batting.t20i.notout : "Not Available",
                "runs" : all.batting.t20i ? all.batting.t20i.runs : "Not Available",
                "balls" : all.batting.t20i ? all.batting.t20i.balls : "Not Available",
                "high score" : all.batting.t20i ? all.batting.t20i.highest : "Not Available",
                "average" : all.batting.t20i ? all.batting.t20i.average : "Not Available",
                "strike rate" : all.batting.t20i ? all.batting.t20i.strike : "Not Available",
                "100s" : all.batting.t20i ? all.batting.t20i.run100 : "Not Available",
                "50s" : all.batting.t20i ? all.batting.t20i.run50 : "Not Available",
                "No. of 4" : all.batting.t20i ? all.batting.t20i.run4 : "Not Available",
                "No. of 6" : all.batting.t20i ? all.batting.t20i.run6 : "Not Available",
                "Catches" : all.batting.t20i ? all.batting.t20i.catches : "Not Available",
                "stumpings" : all.batting.t20i ? all.batting.t20i.stumpings : "Not Available",
            },
            "T20": {
                "matches" : all.batting.t20 ? all.batting.t20.matches : "Not Available",
                "innings" : all.batting.t20 ? all.batting.t20.innings : "Not Available",
                "notout" : all.batting.t20 ? all.batting.t20.notout : "Not Available",
                "runs" : all.batting.t20 ? all.batting.t20.runs : "Not Available",
                "balls" : all.batting.t20 ? all.batting.t20.balls : "Not Available",
                "high score" : all.batting.t20 ? all.batting.t20.highest : "Not Available",
                "average" : all.batting.t20 ? all.batting.t20.average : "Not Available",
                "strike rate" : all.batting.t20 ? all.batting.t20.strike : "Not Available",
                "100s" : all.batting.t20 ? all.batting.t20.run100 : "Not Available",
                "50s" : all.batting.t20 ? all.batting.t20.run50 : "Not Available",
                "No. of 4" : all.batting.t20 ? all.batting.t20.run4 : "Not Available",
                "No. of 6" : all.batting.t20 ? all.batting.t20.run6 : "Not Available",
                "Catches" : all.batting.t20 ? all.batting.t20.catches : "Not Available",
                "stumpings" : all.batting.t20 ? all.batting.t20.stumpings : "Not Available",
            },
            "LIST A": {
                "matches" : all.batting.lista ? all.batting.lista.matches : "Not Available",
                "innings" : all.batting.lista ? all.batting.lista.innings : "Not Available",
                "notout" : all.batting.lista ? all.batting.lista.notout : "Not Available",
                "runs" : all.batting.lista ? all.batting.lista.runs : "Not Available",
                "balls" : all.batting.lista ? all.batting.lista.balls : "Not Available",
                "high score" : all.batting.lista ? all.batting.lista.highest : "Not Available",
                "average" : all.batting.lista ? all.batting.lista.average : "Not Available",
                "strike rate" : all.batting.lista ? all.batting.lista.strike : "Not Available",
                "100s" : all.batting.lista ? all.batting.lista.run100 : "Not Available",
                "50s" : all.batting.lista ? all.batting.lista.run50 : "Not Available",
                "No. of 4" : all.batting.lista ? all.batting.lista.run4 : "Not Available",
                "No. of 6" : all.batting.lista ? all.batting.lista.run6 : "Not Available",
                "Catches" : all.batting.lista ? all.batting.lista.catches : "Not Available",
                "stumpings" : all.batting.lista ? all.batting.lista.stumpings : "Not Available",
            },
            "1ST CLASS": {
                "matches" : all.batting.firstclass ? all.batting.firstclass.matches : "Not Available",
                "innings" : all.batting.firstclass ? all.batting.firstclass.innings : "Not Available",
                "notout" : all.batting.firstclass ? all.batting.firstclass.notout : "Not Available",
                "runs" : all.batting.firstclass ? all.batting.firstclass.runs : "Not Available",
                "balls" : all.batting.firstclass ? all.batting.firstclass.balls : "Not Available",
                "high score" : all.batting.firstclass ? all.batting.firstclass.highest : "Not Available",
                "average" : all.batting.firstclass ? all.batting.firstclass.average : "Not Available",
                "strike rate" : all.batting.firstclass ? all.batting.firstclass.strike : "Not Available",
                "100s" : all.batting.firstclass ? all.batting.firstclass.run100 : "Not Available",
                "50s" : all.batting.firstclass ? all.batting.firstclass.run50 : "Not Available",
                "No. of 4" : all.batting.firstclass ? all.batting.firstclass.run4 : "Not Available",
                "No. of 6" : all.batting.firstclass ? all.batting.firstclass.run6 : "Not Available",
                "Catches" : all.batting.firstclass ? all.batting.firstclass.catches : "Not Available",
                "stumpings" : all.batting.firstclass ? all.batting.firstclass.stumpings : "Not Available",
            }
        },
        "BOWLING": {
            "TEST": {
                "matches" : all.bowling.test ? all.bowling.test.matches : "Not Available",
                "innings" : all.bowling.test ? all.bowling.test.innings : "Not Available",
                "balls" : all.bowling.test ? all.bowling.test.balls : "Not Available",
                "overs" : all.bowling.test ? all.bowling.test.overs : "Not Available",
                "runs" : all.bowling.test ? all.bowling.test.runs : "Not Available",
                "wickets" : all.bowling.test ? all.bowling.test.wickets : "Not Available",
                "best inning" : all.bowling.test ? all.bowling.test.bestinning : "Not Available",
                "best match" : all.bowling.test ? all.bowling.test.bestmatch : "Not Available",
                "economy" : all.bowling.test ? all.bowling.test.econ : "Not Available",
                "average" : all.bowling.test ? all.bowling.test.average : "Not Available",
                "wicket 4i" : all.bowling.test ? all.bowling.test.wicket4i : "Not Available",
                "wicket 5i" : all.bowling.test ? all.bowling.test.wicket5i : "Not Available",
                "wicket 10m" : all.bowling.test ? all.bowling.test.wicket10m : "Not Available",
                "maidens" : all.bowling.test ? all.bowling.test.maidens : "Not Available",
                "dot" : all.bowling.test ? all.bowling.test.dot : "Not Available",
            },
            "ODI": {
                "matches" : all.bowling.test ? all.bowling.test.matches : "Not Available",
                "innings" : all.bowling.test ? all.bowling.test.innings : "Not Available",
                "balls" : all.bowling.test ? all.bowling.test.balls : "Not Available",
                "overs" : all.bowling.test ? all.bowling.test.overs : "Not Available",
                "runs" : all.bowling.test ? all.bowling.test.runs : "Not Available",
                "wickets" : all.bowling.test ? all.bowling.test.wickets : "Not Available",
                "best inning" : all.bowling.test ? all.bowling.test.bestinning : "Not Available",
                "best match" : all.bowling.test ? all.bowling.test.bestmatch : "Not Available",
                "economy" : all.bowling.test ? all.bowling.test.econ : "Not Available",
                "average" : all.bowling.test ? all.bowling.test.average : "Not Available",
                "wicket 4i" : all.bowling.test ? all.bowling.test.wicket4i : "Not Available",
                "wicket 5i" : all.bowling.test ? all.bowling.test.wicket5i : "Not Available",
                "wicket 10m" : all.bowling.test ? all.bowling.test.wicket10m : "Not Available",
                "maidens" : all.bowling.test ? all.bowling.test.maidens : "Not Available",
                "dot" : all.bowling.test ? all.bowling.test.dot : "Not Available",
            },
            "T20I": {
                "matches" : all.bowling.test ? all.bowling.test.matches : "Not Available",
                "innings" : all.bowling.test ? all.bowling.test.innings : "Not Available",
                "balls" : all.bowling.test ? all.bowling.test.balls : "Not Available",
                "overs" : all.bowling.test ? all.bowling.test.overs : "Not Available",
                "runs" : all.bowling.test ? all.bowling.test.runs : "Not Available",
                "wickets" : all.bowling.test ? all.bowling.test.wickets : "Not Available",
                "best inning" : all.bowling.test ? all.bowling.test.bestinning : "Not Available",
                "best match" : all.bowling.test ? all.bowling.test.bestmatch : "Not Available",
                "economy" : all.bowling.test ? all.bowling.test.econ : "Not Available",
                "average" : all.bowling.test ? all.bowling.test.average : "Not Available",
                "wicket 4i" : all.bowling.test ? all.bowling.test.wicket4i : "Not Available",
                "wicket 5i" : all.bowling.test ? all.bowling.test.wicket5i : "Not Available",
                "wicket 10m" : all.bowling.test ? all.bowling.test.wicket10m : "Not Available",
                "maidens" : all.bowling.test ? all.bowling.test.maidens : "Not Available",
                "dot" : all.bowling.test ? all.bowling.test.dot : "Not Available",
            },
            "T20": {
                "matches" : all.bowling.t20 ? all.bowling.t20.matches : "Not Available",
                "innings" : all.bowling.t20 ? all.bowling.t20.innings : "Not Available",
                "balls" : all.bowling.t20 ? all.bowling.t20.balls : "Not Available",
                "overs" : all.bowling.t20 ? all.bowling.t20.overs : "Not Available",
                "runs" : all.bowling.t20 ? all.bowling.t20.runs : "Not Available",
                "wickets" : all.bowling.t20 ? all.bowling.t20.wickets : "Not Available",
                "best inning" : all.bowling.t20 ? all.bowling.t20.bestinning : "Not Available",
                "best match" : all.bowling.t20 ? all.bowling.t20.bestmatch : "Not Available",
                "economy" : all.bowling.t20 ? all.bowling.t20.econ : "Not Available",
                "average" : all.bowling.t20 ? all.bowling.t20.average : "Not Available",
                "wicket 4i" : all.bowling.t20 ? all.bowling.t20.wicket4i : "Not Available",
                "wicket 5i" : all.bowling.t20 ? all.bowling.t20.wicket5i : "Not Available",
                "wicket 10m" : all.bowling.t20 ? all.bowling.t20.wicket10m : "Not Available",
                "maidens" : all.bowling.t20 ? all.bowling.t20.maidens : "Not Available",
                "dot" : all.bowling.t20 ? all.bowling.t20.dot : "Not Available",
            },
            "LIST A": {
                "matches" : all.bowling.lista ? all.bowling.lista.matches : "Not Available",
                "innings" : all.bowling.lista ? all.bowling.lista.innings : "Not Available",
                "balls" : all.bowling.lista ? all.bowling.lista.balls : "Not Available",
                "overs" : all.bowling.lista ? all.bowling.lista.overs : "Not Available",
                "runs" : all.bowling.lista ? all.bowling.lista.runs : "Not Available",
                "wickets" : all.bowling.lista ? all.bowling.lista.wickets : "Not Available",
                "best inning" : all.bowling.lista ? all.bowling.lista.bestinning : "Not Available",
                "best match" : all.bowling.lista ? all.bowling.lista.bestmatch : "Not Available",
                "economy" : all.bowling.lista ? all.bowling.lista.econ : "Not Available",
                "average" : all.bowling.lista ? all.bowling.lista.average : "Not Available",
                "wicket 4i" : all.bowling.lista ? all.bowling.lista.wicket4i : "Not Available",
                "wicket 5i" : all.bowling.lista ? all.bowling.lista.wicket5i : "Not Available",
                "wicket 10m" : all.bowling.lista ? all.bowling.lista.wicket10m : "Not Available",
                "maidens" : all.bowling.lista ? all.bowling.lista.maidens : "Not Available",
                "dot" : all.bowling.lista ? all.bowling.lista.dot : "Not Available",
            },
            "1ST CLASS": {
                "matches" : all.bowling.firstclass ? all.bowling.firstclass.matches : "Not Available",
                "innings" : all.bowling.firstclass ? all.bowling.firstclass.innings : "Not Available",
                "balls" : all.bowling.firstclass ? all.bowling.firstclass.balls : "Not Available",
                "overs" : all.bowling.firstclass ? all.bowling.firstclass.overs : "Not Available",
                "runs" : all.bowling.firstclass ? all.bowling.firstclass.runs : "Not Available",
                "wickets" : all.bowling.firstclass ? all.bowling.firstclass.wickets : "Not Available",
                "best inning" : all.bowling.firstclass ? all.bowling.firstclass.bestinning : "Not Available",
                "best match" : all.bowling.firstclass ? all.bowling.firstclass.bestmatch : "Not Available",
                "economy" : all.bowling.firstclass ? all.bowling.firstclass.econ : "Not Available",
                "average" : all.bowling.firstclass ? all.bowling.firstclass.average : "Not Available",
                "wicket 4i" : all.bowling.firstclass ? all.bowling.firstclass.wicket4i : "Not Available",
                "wicket 5i" : all.bowling.firstclass ? all.bowling.firstclass.wicket5i : "Not Available",
                "wicket 10m" : all.bowling.firstclass ? all.bowling.firstclass.wicket10m : "Not Available",
                "maidens" : all.bowling.firstclass ? all.bowling.firstclass.maidens : "Not Available",
                "dot" : all.bowling.firstclass ? all.bowling.firstclass.dot : "Not Available",
            }
        }
    }
        : null;

    
    return (
        <>
            <Helmet>
                <title>{loaded ? player.title+' - BDCricTime' : null}</title>
            </Helmet>
            <div className="news-content-area fx-padding">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-9">
                        <div className="profile-inner-blk">
                        <div className="row">
                            <div className="col-lg-4">
                            <PlayerCard format="default" 
                                name={loaded ? player.title : null}
                                nationality={loaded ? player.nationality : null}
                                role={loaded ? player.playing_role : null}
                                dob={loaded ? player.birthdate : null}
                                age={loaded ? age(player.birthdate)+" Year" : null}
                                battingStyle={loaded ? player.batting_style : null}
                                bowlingStyle={loaded ? player.bowling_style : null}
                            />
                            </div>
                            <div className="col-lg-8">
                            <PlayerCard format="stats" data={data}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="palyer-all-des">
                                <Skeleton/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="sidebar-widget-wrapper">
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

export default withRouter(Player);
