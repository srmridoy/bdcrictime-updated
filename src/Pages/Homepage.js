import React from 'react';
// import LiveScoreSlider from './Components/LiveScoreSlider';
import Trending from '../Components/Trending';
import LiveScoreSlider from '../Components/LiveScoreSlider';
import RecentSeries from '../Components/RecentSeries';
import PlayersData from '../Components/PlayersData';
import LeadSection from './Components/LeadSection';
import NewsUpdates from './Components/NewsUpdates';
import FeaturedCategory from './Components/FeaturedCategory';
import RelatedNews from './Components/RelatedNews';
import ICCTeamRanking from '../Components/ICCTeamRanking';
import MostPopular from './Components/MostPopular';
import { Helmet } from 'react-helmet';
import Advertisement from '../Components/Advertisement';

function Homepage() {
        
    return (
        <>
            <Helmet>
                <title>Live Cricket Scores, Latest News of Bangladesh and International Cricket - BDCricTime</title> 
            </Helmet>
            <LiveScoreSlider/>
            {/* news content area start */}
            <div className="news-content-area fx-padding">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 order-2 order-lg-1">
                    <div className="sidebar-widget-wrapper sticky">
                        <Trending/>
                        <RecentSeries/>
                        <PlayersData/>
                    </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                    <div className="news-main-content">
                        <LeadSection/>
                        <div className="news-widget">
                            <div className="title mb-0">
                                <Advertisement size={46860} style={{marginLeft:'auto', marginRight:'auto'}}/>
                            </div>
                        </div>
                        <NewsUpdates/>
                        <FeaturedCategory/>
                        <RelatedNews/>
                    </div>
                    </div>
                    <div className="col-lg-3 order-3 order-lg-3">
                    <div className="sidebar-widget-wrapper sticky">
                        <Advertisement size={320100} style={{marginBottom:'15px'}} imgstyle={{width:'100%'}}/>
                        <ICCTeamRanking/>
                        <MostPopular/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* news content area end */}
        </>
    );
}

export default Homepage;
