import React, {useState, useEffect} from 'react';
import NewsCards from '../Components/NewsCards';
import axios from 'axios';
import {Link} from 'react-router-dom';

function LatestNews() {
    const [news, setNews] = useState([{},{},{},{}, {}]);
    const [loaded, setLoaded] = useState(false);

    async function getNews() {
        
            axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?per_page=5&_embed')
            .then((res)=> {  
                setNews(res.data);
                setLoaded(true);
            })
        
    }

    useEffect(() => {  
        getNews()
    }, []);
    

    return (
        <>
            <div className="sidebar-widget trend-widget">
                <h4 className="heading-title">Latest News</h4>

                <nav>
                    <ul>
                        {news.map((news, index) =>
                            <NewsCards key={index} format="small-side" headline={loaded ? news.title.rendered : null} thumbnail={loaded ? news._embedded['wp:featuredmedia'][0].source_url : null} id={news.id} slug={news.slug}/>
                        )}
                    </ul>
                </nav>
                <Link to="/news" className="ld-more-btn">Load More</Link>
            </div>
        </>
    );
}

export default LatestNews;