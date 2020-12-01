import React, {useState, useEffect} from 'react';
import axios from 'axios';
import he from 'he';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import NewsCards from '../../Components/NewsCards';

function FeaturedCategory() {  
    const [news, setNews] = useState([{},{},{},{}]);
    const [loaded, setLoaded] = useState(false);

    async function getNews() {
        axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?tags=53759&_embed')
        .then((res)=> {  
            setNews(res.data);
            setLoaded(true);
        })
    }


    useEffect(() => {  
        getNews()
    }, [loaded]);
    
    return (
        <>
            <div className="news-widget">
                <div className="title">
                    <div className="left">
                    <h6>BCB President's Cup 2020</h6><span><Moment format="DD MMMM YYYY"></Moment></span>
                    </div>
                    <div className="right"><Link to="#" className="see-all">See All</Link></div>
                </div>
                {
                    news.map((item, index) =>
                    index < 4 ?
                        <NewsCards key={index} format="boxed-side" id={item.id} slug={item.slug} thumbnail={loaded ? item._embedded['wp:featuredmedia'][0].source_url : null} headline={loaded ? item.title.rendered : null} leadText={loaded ? item.acf.lead_text ? item.acf.lead_text : he.decode(item.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")) : null}/>
                    : null)
                }
            </div>
        </>
    );
}

export default FeaturedCategory;
