import React from 'react';
import { Link } from 'react-router-dom';

function MostPopular() {    
    return (
        <>
            <div className="sidebar-widget popular-widget">
                <h4 className="heading-title">Most Popular</h4>
                <div>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Link className="nav-item nav-link active" data-toggle="tab" to="#nav-7">Today</Link>
                    <Link className="nav-item nav-link" data-toggle="tab" to="#nav-8">Last 7 Days</Link>
                    <Link className="nav-item nav-link" data-toggle="tab" to="#nav-9">Last 30 Days</Link>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-7">
                    <nav>
                        <ul>
                        <li>
                            <span>1</span>
                            <Link to="#">
                            <p>Lorem Ipsum is simply dummy ..</p>
                            </Link>
                        </li>
                        <li>
                            <span>3</span>
                            <Link to="#">
                            <p>Lorem int and typesetting int and typesetting int and typesetting int and typesetting...</p>
                            </Link>
                        </li>
                        </ul>
                    </nav>
                    </div>
                    <div className="tab-pane fade" id="nav-8">
                    </div>
                    <div className="tab-pane fade" id="nav-9">
                    </div>
                </div>
            </div>
        </>
    );
}

export default MostPopular;
