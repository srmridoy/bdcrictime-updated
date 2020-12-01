import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/img/trending thumbnail.png';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import NewsCards from '../../Components/NewsCards';

function Trending() {

    const [news, setNews] = useState([{},{}]);
    const [loaded, setLoaded] = useState(false);
    async function getNews() {
        axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts/?per_page=2&_embed')
        .then((res)=> {
            setNews(res.data)
            setLoaded(true)
        })
    }

    useEffect(() => {
        getNews()
    }, [loaded])

    console.log(news);

    return (
        <>
            <div className="sidebar-widget trend-widget">
                <h4 className="heading-title">Trending Now</h4>
                <nav>
                    <ul>
                    {news.map((item, index) =>
                        <NewsCards 
                            key={index} 
                            id={item.id} 
                            slug={item.slug} 
                            format="small-side" 
                            thumbnail={loaded ? item._embedded["wp:featuredmedia"][0].source_url : null} 
                            headline={loaded ? item.title.rendered : null}
                        />
                    )}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Trending;
