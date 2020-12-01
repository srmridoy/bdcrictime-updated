import React from 'react';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/img/trending thumbnail.png';

function LatestNews() {    
    return (
        <>
            <div className="sidebar-widget trend-widget">
                <h4 className="heading-title">Latest News</h4>
                <nav>
                <ul>
                    <li>
                    <div className="img"><Link to="#"><img src={thumbnail} alt="" /></Link></div>
                    <div className="content"><Link to="#">
                        <p>Lorem Ipsum is simply dummy text to print ...</p>
                        </Link></div>
                    </li>
                    <li>
                    <div className="img"><Link to="#"><img src={thumbnail} alt="" /></Link></div>
                    <div className="content"><Link to="#">
                        <p>Lorem Ipsum is simply dummy text to print ...</p>
                        </Link></div>
                    </li>
                    <li>
                    <div className="img"><Link to="#"><img src={thumbnail} alt="" /></Link></div>
                    <div className="content"><Link to="#">
                        <p>Lorem Ipsum is simply dummy text to print ...</p>
                        </Link></div>
                    </li>
                    <li>
                    <div className="img"><Link to="#"><img src={thumbnail} alt="" /></Link></div>
                    <div className="content"><Link to="#">
                        <p>Lorem Ipsum is simply dummy text to print ...</p>
                        </Link></div>
                    </li>
                    <li>
                    <div className="img"><Link to="#"><img src={thumbnail} alt="" /></Link></div>
                    <div className="content"><Link to="#">
                        <p>Lorem Ipsum is simply dummy text to print ...</p>
                        </Link></div>
                    </li>
                </ul>
                </nav>
                <Link to className="ld-more-btn">Load More</Link>
            </div>
        </>
    );
}

export default LatestNews;
