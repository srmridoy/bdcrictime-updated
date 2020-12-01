import React from 'react';

import ICCTeamRanking from '../Components/ICCTeamRanking';
import MostPopular from '../Components/MostPopular';
import LatestNews from '../Components/LatestNews';
import RankingTable from '../Components/RankingTable';
import { Helmet } from 'react-helmet';

function Ranking() {    

    return (
        <>
            <Helmet>
                <title>Ranking - BDCricTime</title>
            </Helmet>
            {/* news content area start */}
            <div className="news-content-area fx-padding ranking-page">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-9">
                    <div className="profile-inner-blk">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="top-title-text">
                            <h2>ICC RANKINGS - TEST, ODI, T20</h2>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <RankingTable title="Men's Ranking"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="sidebar-widget-wrapper">
                    <LatestNews/>
                    <MostPopular/>
                    <ICCTeamRanking/>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* news content area end */}

        </>
    );
}

export default Ranking;
