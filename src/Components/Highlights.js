import React from 'react';
import { Link } from 'react-router-dom';

function Highlights(props) {
    return (
        <>
            <div className="hlt-text">
                <h4>Highlights</h4>
                <div className="hlt-text-list">
                    {props.news && props.news[0] ? props.news.map((news, index) => 
                        <li><Link to={"/"+news.post_name}>{news.post_title}</Link></li>
                    ) : "Please provide at least one news"}
                </div>
            </div>
        </>
    );
}

export default Highlights;
