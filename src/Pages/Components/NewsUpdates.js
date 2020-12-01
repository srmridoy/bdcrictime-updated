import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import CardFetchById from './CardFetchById';

function NewsUpdates() {
    const [news, setNews] = useState([{},{},{},{}]);
    
    useEffect(() => {  
        function getNews() {
            axios.get('https://www.bdcrictime.com/wp-json/acf/v3/posts/152839')
            .then((res)=> {
                setNews(res.data.acf.top_news)
            })
        }
        getNews()
    }, []);
    
    return (
        <>
            <div className="news-widget">
                <div className="title">
                    <div className="left">
                    <h6>News Updates</h6><span><Moment format="DD MMMM YYYY"></Moment></span>
                    </div>
                    <div className="right"><Link to="/news" className="see-all">See All</Link></div>
                </div>
                <div className="row">
                    {
                        news.map((item, index) =>
                        index > 0 && index < 3 ? 
                            <div key={index} className="col-lg-6 col-md-6">
                                <CardFetchById id={item} format="boxed-down"/>
                            </div>
                        : null
                        )
                    }
                </div>
                {
                    news.map((item, index) =>
                    index > 2 && index < 5 ? 
                        <CardFetchById key={index} id={item} format="boxed-side"/>
                    : null
                    )
                }
            </div>
        </>
    );
}

export default NewsUpdates;
