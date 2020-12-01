import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/img/recent-svg.svg';

function RecentSeries() {    
    return (
        <>
            <div className="sidebar-widget recend-widget">
                <h4 className="heading-title">Recent Series</h4>
                <nav>
                    <ul>
                    <li><span><img src={Icon} alt="" /></span><Link to="#">
                        <p>India v Bangladesh</p>
                        </Link></li>
                    <li><span><img src={Icon} alt="" /></span><Link to="#">
                        <p>India v Bangladesh</p>
                        </Link></li>
                    <li><span><img src={Icon} alt="" /></span><Link to="#">
                        <p>India v Bangladesh</p>
                        </Link></li>
                    <li><span><img src={Icon} alt="" /></span><Link to="#">
                        <p>India v Bangladesh</p>
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default RecentSeries;
