import React, {useState, useEffect} from 'react';
import NewsCards from '../../Components/NewsCards';
import axios from 'axios';

function RelatedNews() {    
    const [news, setNews] = useState([{},{}]);
    const [loaded, setLoaded] = useState(false);

    async function getNews() {
        
            axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?per_page=8&_embed')
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
            <div className="news-widget pb-0">
                <div className="title">
                    <div className="left">
                    <h6>Related News</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="row">
                        {news.map((news, index) =>
                        index > 1 ?
                            <NewsCards key={index} format="small-down" headline={loaded ? news.title.rendered : null} thumbnail={loaded ? news._embedded['wp:featuredmedia'][0].source_url : null} id={news.id} slug={news.slug} published={news.date}/>
                        : null)}
                    </div>
                    </div>
                </div>
                </div>

        </>
    );
}

export default RelatedNews;
