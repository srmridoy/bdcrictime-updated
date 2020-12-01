import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Left from '../assets/img/left.svg';
import Right from '../assets/img/right.svg';
import divider from '../assets/img/compare-div.svg';
import $ from 'jquery';
import 'slick-carousel';
import dateFormat from 'dateformat';

function LiveScoreSlider() {

    const [liveMatches, setLiveMatches] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const date = new Date();
        const tomorrow = dateFormat(date.setDate(date.getDate() + 1), 'yyyy-mm-dd');
        const yesterday = dateFormat(date.setDate(date.getDate() - 1), 'yyyy-mm-dd');
        function getLiveMatches(firstReq) {
            axios.get('https://rest.entitysport.com/v2/matches/?per_page=100&date='+yesterday+'_'+tomorrow)
            .then((res)=> {
                var filtered = res.data.response.items.filter(function(item) {
                    return item.competition.country === "int" || item.competition.country === "in" || item.competition.country === "au" || item.competition.country === "pk"
                });
                var final = filtered.length > 3 ? filtered : res.data.response.items
                setLiveMatches(final.reverse());
                setLoaded(true);

                if(firstReq) {
                    $('.live-match-slider').slick({
                        dots: false,
                        centerMode: true,
                        arrows: true,
                        centerPadding: '50px',
                        initialSlide: 1,
                        slidesToShow: 5,
                        prevArrow: '<button class="prev"><img src='+Left+' alt="logo"></button>',
                        nextArrow: '<button class="next"><img src='+Right+' alt="logo"></button>',
                        responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                centerMode: true,
                                centerPadding: '50px',
                                slidesToShow: 5
                            }
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                centerMode: true,
                                centerPadding: '50px',
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                centerMode: true,
                                centerPadding: '50px',
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                centerMode: true,
                                centerPadding: '50px',
                                slidesToShow: 1
                            }
                        }]
                    });
                }
            })
        }
        getLiveMatches(true);
        const interval = setInterval(() => {
            getLiveMatches(false);
        }, 5000);

        return () => clearInterval(interval);
      }, []);
    
    return (
        <>
            {loaded ?
            <div className="live-match-area">
                <div>
                    <div className="live-match-slider">
                        {liveMatches.map((item, index) =>
                        <Link key={index} to={"/match/details/"+item.match_id+"/"+item.title.toLowerCase().split(' ').join('-')}>
                            <div className="item">
                                <div className="live-match-item">
                                    <div className="title">
                                    <h5>{item.competition.title}</h5>
                                    </div>
                                    <div className="compare-country">
                                    <span className="country-logo"><img src={item.teama.logo_url} alt={item.teama.name} /></span>
                                    <span className="country-vs">
                                        <p>VS</p>
                                    </span>
                                    <span className="country-logo"><img src={item.teamb.logo_url} alt={item.teamb.name} /></span>
                                    </div>
                                    <div className="compare-run">
                                    <div className="run">
                                        <h4>{item.teama.short_name} {item.teama.scores ? item.teama.scores : "0/0"} <span>{item.teamb.overs ? item.teama.overs+" OVERS" : "0 OVER"}</span></h4>
                                    </div>
                                    <div className="div"> <img src={divider} alt="svg" /> </div>
                                    <div className="run">
                                        <h4>{item.teamb.short_name} {item.teamb.scores ? item.teama.scores : "0/0"} <span>{item.teamb.overs ? item.teamb.overs+" OVERS" : "0 OVER"}</span> </h4>
                                    </div>
                                    </div>
                                    <div className="compare-match">
                                    <p>{item.status_note ? item.status_note : "To be played"}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        )}
                    </div>
                </div>
            </div>
            : null}
        </>
    );
}

export default LiveScoreSlider;