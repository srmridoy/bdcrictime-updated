import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ICCTeamRanking from '../Components/ICCTeamRanking';
import MostPopular from '../Components/MostPopular';
import LatestNews from '../Components/LatestNews';
import MatchCards from '../Components/MatchCards';
import { Helmet } from 'react-helmet';
import dateFormat from 'dateformat';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons';


function Results() {

    const [matches, setMatches] = useState([{},{},{},{}]);
    const [loaded, setLoaded] = useState(false);

    const previous = [...Array(15)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d
    })
    const next = [...Array(15)].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() + i)
        return d
    })

    const selectedDate = new Date(2000, 1, 29);

    const responsive= {
        0: {
            items: 1,
            startPosition:1
        },
        450: {
            items: 3,
            startPosition:14
        },
        600: {
            items: 5,
        },
        1366: {
            items: 8,
        },
    }

    
    
    async function getMatches() {
        axios.get('https://rest.entitysport.com/v2/matches/?status=2&per_page=20&paged=1')
        .then((res)=> {  
            setMatches(res.data.response.items);
            setLoaded(true);
        })
    }

    useEffect(() => {  
        getMatches()
    }, []); 
    return (
        <>
            <Helmet>
                <title>Results - BDCricTime</title>
            </Helmet>
            {/* news content area start */}
            <div className="news-content-area fx-padding">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-9">
                    <div className="news-main-content">
                    <div className="news-widget">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="live-sc-top-blk">
                            <h2>DETAILED SCORES OF COMPLETED MATCHES</h2>
                            <p>Here you can get the detailed scores of the every international cricket match as well as domestic cricket
                                matches including Bangladesh domestic matches. bdcrictime.com brought to you live cricket score
                                updates with commentary.</p>
                            <p>You can get live streaming link to watch the match live here as well. For your any suggestion or
                                inquiry you are feel free to contact with us. Contact email: contact@bdcricteam.com.</p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <div class="calender mb-20">
                                <div class="calenderIcon"><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon></div>
                                {/* <div class="controlIcon" style={{marginRight:'auto'}}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div> */}
                                <OwlCarousel
                                    className="owl-theme dates"
                                    items={7}
                                    dots={false}
                                    startPosition={12}
                                    responsive={responsive}
                                >
                                    {previous.reverse().map((date, index) =>
                                        <div key={index} className={index === 14 ? "item active" : "item"}>{dateFormat(date, 'd mmm')}<br/>{dateFormat(date, 'ddd')}</div>
                                    )}
                                    {next.map((date, index) =>
                                        index > 0 ?
                                            <div key={index} className="item">{dateFormat(date, 'd mmm')}<br/>{dateFormat(date, 'ddd')}</div>
                                        : null
                                    )}
                                </OwlCarousel>
                                {/* <div class="controlIcon" style={{marginLeft:'auto'}}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div> */}
                            </div>

                            {/* <div className="calender mb-20">
                                <div className="dateIcon"><img src={calender} alt="icon"/></div>
                                <div className="arrowIcon"><img src={left} alt="icon"/></div>
                                <OwlCarousel
                                className="owl-theme"
                                items={9}
                                dots={false}
                                loop
                                margin={10}
                                >
                                    {today.reverse().map((date, index) =>
                                        <div key={index} className="item datebox">{dateFormat(date, 'd mmm')}<br/>{dateFormat(date, 'ddd')}</div>
                                    )}
                                </OwlCarousel>
                                <div className="arrowIcon"><img src={right} alt="icon"/></div>
                            </div> */}
                            {matches[0] ? matches.map((item, index) => 
                                <MatchCards format="default" 
                                    id={loaded ? item.match_id : null} 
                                    team1={loaded ? item.teama.name : null} 
                                    team1ShortName={loaded ? item.teama.short_name : null} 
                                    team1Logo={loaded ? item.teama.logo_url : null} 
                                    team1Score={loaded ? item.teama.scores : null} 
                                    team1Over={loaded ? item.teama.overs : null} 
                                    team2={loaded ? item.teamb.name : null} 
                                    team2ShortName={loaded ? item.teamb.short_name : null} 
                                    team2Logo={loaded ? item.teamb.logo_url : null} 
                                    team2Score={loaded ? item.teamb.scores : null} 
                                    team2Over={loaded ? item.teamb.overs : null} 
                                    status={loaded ? item.status_note : null} 
                                    state={loaded ? item.status_str : null} 
                                    series={loaded ? item.competition.title : null} 
				     title={loaded ? item.title : null} 
                                    matchName={loaded ? item.short_title : null} 
                                    startTime={loaded ? item.date_start : null} 
                                    statusCode={loaded ? item.status : null}/>
                            ) : <div style={{fontWeight:'bold', fontSize:'30px', color:'#cccccc', textAlign:'center', padding:'100px'}}>NO MATCH IS LIVE NOW</div>}
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
            {/* news content area end */}


        </>
    );
}

export default Results;
