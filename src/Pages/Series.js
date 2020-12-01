import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import ReactTypingEffect from 'react-typing-effect';

import MostPopular from '../Components/MostPopular';
import LatestNews from '../Components/LatestNews';
import SeriesBox from './SeriesBox';
import { Helmet } from 'react-helmet';

function Series() {
    const [series, setSeries] = useState([]);
    const [format, setFormat] = useState("live");
    const [loaded, setLoaded] = useState(false);
    
    async function getSeries() {
        axios.get('https://rest.entitysport.com/v2/competitions?per_page=500&paged=1')
        .then((res)=> {
            setSeries(res.data.response.items.reverse());
            setLoaded(true);
        })
    }

    useEffect(() => {  
        getSeries()
    }, []);
    
    return (
        <>
            <Helmet>
                <title>Series - BDCricTime</title>
            </Helmet>
            <div className="news-content-area fx-padding">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-9">
                        <div className="serise-inner-blk">
                        <div className="src-top-menu">
                            <ul>
                            <li><Link to="#" onClick={() => setFormat("live")} className={format === 'live' ? "acttive-serise-menu" : null}>Current</Link></li>
                            <li><Link to="#" onClick={() => setFormat("fixture")} className={format === 'fixture' ? "acttive-serise-menu" : null}>Upcoming</Link></li>
                            <li><Link to="#" onClick={() => setFormat("result")} className={format === 'result' ? "acttive-serise-menu" : null}>Completed</Link></li>
                            </ul>
                        </div>
                        
                        {loaded ? 
                        <>
                            <SeriesBox title="international" data={series} format={format}/>
                            <SeriesBox title="domestic" data={series} format={format}/>
                        </>
                        : <div style={{fontWeight:'bold', fontSize:'30px', color:'#cccccc', textAlign:'center', padding:'100px'}}><Loader type="Audio" color="#cccccc" height={30} width={30} style={{display:"inline", marginTop:"0px", marginRight:"15px"}} /><ReactTypingEffect typingDelay={0} speed={200} eraseDelay={1000} text={["LOADING", "PLEASE WAIT..."]} /></div>}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="sidebar-widget-wrapper">
                        <LatestNews/>
                        <MostPopular/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>




        </>
    );
}

export default Series;
