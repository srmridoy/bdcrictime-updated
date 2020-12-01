import React, { useState, useEffect } from 'react';
import axios from 'axios';
import he from 'he';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/img/post-thumbnail.svg';
import NewsCards from '../../Components/NewsCards';

function LeadSection() {

    const [leadNews, setLeadNews] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Headline');

    
    useEffect(() => {  
        function getLeadNews() {
            axios.get('https://www.bdcrictime.com/wp-json/acf/v3/posts/152839')
            .then((res)=> {  
                axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts/'+res.data.acf.top_news[0]+'?_embed')
                .then((res2)=> {  
                    setLeadNews(res2.data);
                    setLoaded(true);
                })
            })
        }
        getLeadNews()
    }, [loaded]);
    
    return (
        <>
            <div className="news-tabs">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab">
                    <Link onClick={() => setActiveMenu('Headline')} className={activeMenu === 'Headline' ? "nav-item nav-link active" : "nav-item nav-link"} id="nav-home-tab" data-toggle="tab" to="#">Headline</Link>
                    <Link onClick={() => setActiveMenu('Latest News')} className={activeMenu === 'Latest News' ? "nav-item nav-link active" : "nav-item nav-link"} id="nav-profile-tab" data-toggle="tab" to="#">Latest News</Link>
                    <Link onClick={() => setActiveMenu('Popular News')} className={activeMenu === 'Popular News' ? "nav-item nav-link active" : "nav-item nav-link"} id="nav-contact-tab" data-toggle="tab" to="#">Popular News</Link>
                    </div>
                </nav>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="nav-1">
                        {
                            activeMenu === 'Headline' ?
                                <NewsCards format="lead" id={leadNews.id} slug={leadNews.slug} thumbnail={loaded ? leadNews._embedded['wp:featuredmedia'][0].source_url: thumbnail} headline={loaded ? he.decode(leadNews.title.rendered) : null} leadText={loaded ? leadNews.acf.lead_text ? leadNews.acf.lead_text : he.decode(leadNews.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")) : null}/>
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeadSection;
