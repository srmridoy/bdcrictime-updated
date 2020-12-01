import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import he from 'he';

import MostPopular from '../Components/MostPopular';
import LatestNews from '../Components/LatestNews';
import NewsCards from '../Components/NewsCards';
import { Helmet } from 'react-helmet';

function Tags(props) {

    const [news, setNews] = useState([{},{},{},{}]);
    const [totalNews, setTotalNews] = useState(0);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {  
        async function getNews() {
            axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?tags='+props.match.params.tagId+'&_embed')
            .then((res)=> {  
                setNews(res.data);
                setTotalNews(res.headers['x-wp-total']);
                setLoaded(true);
            })
        }
        getNews();

        return () => {
            setLoaded(false)
            setNews([{},{},{},{}])
        }
    }, [props.match.params.tagId]);
    
    return (
        <>
            <Helmet>
                <title>'{props.match.params.tag.replace(/-/g, ' ').toUpperCase()}' Related News - BDCricTime</title>
            </Helmet>
            <div className="news-content-area fx-padding">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-9">
                        <div className="news-widget">
                            <div className="title mb-0">
                                <div className="left">
                                    <h6>"{props.match.params.tag.replace(/-/g, ' ')}" Related News</h6><span>Total News: {totalNews}</span>
                                </div>
                            </div>
                        </div>
                        <div className="news-main-content">
                        <div className="news-widget">
                            {news[0] ? <>
                                <div className="row">
                                {news.map((news, index) =>
                                    index < 3 ?
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <NewsCards format="boxed-down" headline={loaded ? news.title.rendered : null} thumbnail={loaded ? news._embedded['wp:featuredmedia'][0].source_url : null} leadText={loaded ? news.acf.lead_text ? news.acf.lead_text : he.decode(news.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")) : null} id={news.id} slug={news.slug}/>
                                    </div>
                                    : null
                                )}
                                </div>
                                {news.map((news, index) =>
                                    index > 2 ?
                                    <NewsCards key={index} format="boxed-side" headline={loaded ? news.title.rendered : null} thumbnail={loaded ? news._embedded['wp:featuredmedia'][0].source_url : null} leadText={loaded ? news.acf.lead_text ? news.acf.lead_text : he.decode(news.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")) : null} id={news.id} slug={news.slug}/>
                                    : null
                                )}
                            </> : <div style={{fontWeight:'bold', fontSize:'30px', color:'#cccccc', textAlign:'center', padding:'100px'}}>NO NEWS IN THIS CATEGORY</div>}
                            {/* <div className="seemore-btn-inner">
                            <Link to="" className="ld-more-btn">Load More</Link>
                            </div> */}
                        </div>
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

export default withRouter(Tags);
