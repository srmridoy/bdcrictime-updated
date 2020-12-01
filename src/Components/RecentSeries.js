import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import icon from '../assets/img/recent-svg.svg';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

function RecentSeries() {
    const [series, setSeries] = useState([{},{},{},{}]);

    
    useEffect(() => {  
        function getSeries() {    
            axios.get('https://rest.entitysport.com/v2/seasons/2020/competitions')
            .then((res)=> {  
                setSeries(res.data.response.items);
            })
        }
        getSeries()
    }, []);

    return (
        <>
            <div className="sidebar-widget recend-widget">
                <h4 className="heading-title">Recent Series</h4>
                <nav>
                    <ul>
                        {series.map((item, index) =>
                            <li key={index}>
                                <span><img src={icon} alt="" /></span>
                                <Link to={"/series/"+item.cid+"/"+item.abbr}>
                                    <p>{item.title ? item.title : <Skeleton width={200}/>}</p>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default RecentSeries;