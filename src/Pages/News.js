import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import he from 'he';

import MostPopular from '../Components/MostPopular';
import LatestNews from '../Components/LatestNews';
import NewsCards from '../Components/NewsCards';
import { Helmet } from 'react-helmet';

function News() {

    const [menus, setMenus] = useState([]);
    const [activeMenu, setactiveMenu] = useState(null);
    const [news, setNews] = useState([{},{},{},{}]);
    const [loaded, setLoaded] = useState(false);
    
    async function getMenus() {
        axios.get('https://www.bdcrictime.com/wp-json/wp/v2/menus')
        .then((res)=> {  
            setMenus(res.data);
            setactiveMenu(res.data[0].object_id);
        })
    }

    
    useEffect(() => {  
        getMenus()
    }, []);
    
    useEffect(() => {  
        async function getNews() {
            if(activeMenu) {
                axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?categories='+activeMenu+'&_embed')
                .then((res)=> {  
                    setNews(res.data);
                    setLoaded(true);
                })
            }
        }
        getNews();

        return () => {
            setLoaded(false)
            setNews([{},{},{},{}])
        }
    }, [activeMenu]);
    
    return (
        <>
            <Helmet>
                <title>News - BDCricTime</title>
            </Helmet>
            <div className="news-content-area fx-padding">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-9">
                        {menus[0] ? 
                            <div className="page-inner-content mb-10">
                            <div className="team-menu">
                                <ul>
                                    {menus.map((menu, index) => 
                                        <li key={index}><Link onClick={() => setactiveMenu(menu.object_id)} className={menu.object_id === activeMenu ? "active-menu" : null} to="#">{menu.title}</Link></li>
                                    )}
                                </ul>
                            </div>
                            </div>
                        : null}
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

export default News;
