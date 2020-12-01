import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

function SeriesBox(props) {

    const [series, setSeries] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {  
        async function filterFormat() {
    
            var filtered = props.data.filter(function(item) {
                return item.category === props.title && item.status === props.format
            });
    
            setSeries(filtered);
            setLoaded(true);
        }
        filterFormat()
    }, [props.format, props.data, props.title]);
    
    return (
        <>
        {series[0] ? 
            <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="scr-signle-item">
                <h3>{props.title}</h3>
                <div className="row">
                    {series.map((item, index) =>
                        loaded ? index < 20 ?
                            <Link to={"/series/"+item.cid+"/"+item.abbr} key={index} className="col-md-6">
                                <div className="single-item-scr-blk">
                                <h4>{item.title} <span><Moment format="D MMM">{item.datestart}</Moment> - <Moment format="D MMM, YYYY">{item.dateend}</Moment></span></h4>
                                </div>
                            </Link>
                            : null
                        : 
                            <div className="col-md-6">
                                <div className="single-item-scr-blk">
                                <h4><Skeleton width="50%"/> <span> <Skeleton width="40%"/></span></h4>
                                </div>
                            </div>
                    )}
                </div>
            </div>
            </SkeletonTheme>
        : null}
        </>
    );
}

export default SeriesBox;
