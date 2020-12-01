import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/img/player-img.png';

function PlayersData() {    
    return (
        <>
            <div className="sidebar-widget player-widget">
                <h4 className="heading-title">Players Data</h4>
                <nav>
                    <div className="top-search-bar">
                    <button type="submit"><i className="fal fa-search" /></button>
                    <input type="text" placeholder="Search player" />
                    </div>
                    <ul>
                    <li><span><img src={Avatar} alt="" /></span><Link to="#">
                        <p>Shakib Al Hasan</p>
                        </Link></li>
                    <li><span><img src={Avatar} alt="" /></span><Link to="#">
                        <p>Shakib Al Hasan</p>
                        </Link></li>
                    <li><span><img src={Avatar} alt="" /></span><Link to="#">
                        <p>Shakib Al Hasan</p>
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default PlayersData;
