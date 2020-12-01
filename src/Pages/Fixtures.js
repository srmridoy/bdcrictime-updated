import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import dateFormat from 'dateformat';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import ICCTeamRanking from '../Components/ICCTeamRanking';
import LatestNews from '../Components/LatestNews';
import MatchCards from '../Components/MatchCards';
import MostPopular from './Components/MostPopular';


function Fixtures() {

    const [matches, setMatches] = useState([{},{},{},{}]);
    const [loaded, setLoaded] = useState(false);
    async function getMatches() {
        axios.get('https://rest.entitysport.com/v2/matches/?status=1&per_page=20&paged=1')
        .then((res)=> {  
            setMatches(res.data.response.items);
            setLoaded(true);
        })
    }

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

    useEffect(() => {  
        getMatches()
    }, []); 

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
    
    return (
        <>
            <Helmet>
                <title>Fixtures - BDCricTime</title>
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
                            <h2>FIXTURES OF UPCOMING MATCHES WORLDWIDE</h2>
                            <p>Here you can get the fixtures of the every upcoming international cricket match as well as domestic cricket
                                matches including Bangladesh domestic matches. bdcrictime.com brought to you fixtures with expert analysis.</p>
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
                            {matches[0] ? matches.map((item, index) => 
                                <MatchCards key={index} format="default" 
                                    id={loaded ? item.match_id : null} 
                                    team1={loaded ? item.teama.name : null} 
                                    team1ShortName={loaded ? item.teama.short_name : null} 
                                    team1Logo={loaded ? item.teama.logo_url : null} 
                                    team1Score='0/0' 
                                    team1Over={0} 
                                    team2={loaded ? item.teamb.name : null} 
                                    team2ShortName={loaded ? item.teamb.short_name : null} 
                                    team2Logo={loaded ? item.teamb.logo_url : null} 
                                    team2Score='0/0' 
                                    team2Over={0}
                                    status={loaded ? item.status_note : null} 
				     title={loaded ? item.title : null} 
                                    state={loaded ? item.status_str : null} 
                                    series={loaded ? item.competition.title : null} 
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

export default Fixtures;
