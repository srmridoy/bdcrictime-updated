import React from 'react';
import { withRouter, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import ScrollToTop from './ScrollToTop';

import './assets/css/bootstrap.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/slick.css'
import './assets/css/owl.carousel.css'
import './assets/css/animate.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/default.css'

import Homepage from './Pages/Homepage';
import News from './Pages/News';
import LiveScore from './Pages/LiveScore';
import Fixtures from './Pages/Fixtures';
import Results from './Pages/Results';
import NewsDetails from './Pages/NewsDetails';
import MatchDetails from './Pages/MatchDetails';
import Ranking from './Pages/Ranking';
import Team from './Pages/Team';
import Player from './Pages/Player';
import Series from './Pages/Series';
import Stats from './Pages/Stats';
import SeriesDetails from './Pages/SeriesDetails';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import Tags from './Pages/Tags';
import Author from './Pages/Author';
// import NewsCards from './Components/NewsCards';
// import MatchCards from './Components/MatchCards';
// import Heros from './Components/Heros';
// import Highlights from './Components/Highlights';
// import Player from './Components/Player';
// import RankingTable from './Components/RankingTable';
// import MatchInfo from './Components/MatchInfo';
// import GroupTable from './Components/GroupTable';
// import QuickFacts from './Components/QuickFacts';
// import Trending from './Components/Trending';
// import RecentSeries from './Components/RecentSeries';
// import ICCTeamRanking from './Components/ICCTeamRanking';
// import MostPopular from './Components/MostPopular';
// import LatestNews from './Components/LatestNews';

function Routes(props) {

    axios.interceptors.request.use((config) => {
        if(config.url.includes("https://rest.entitysport.com/")){
            config.params = {token: '437214169d9be2a73e91d22f76f68b52'}
        }
        return config
    })

  return (
    <>
        <Router>
            <ScrollToTop>
                <Header/>
                <Switch>
                    <Route path="/" exact={true}>
                        <Homepage/>
                    </Route>
                    <Route path="/news" exact={true}>
                        <News/>
                    </Route>
                    <Route path="/live-score" exact={true}>
                        <LiveScore/>
                    </Route>
                    <Route path="/fixtures" exact={true}>
                        <Fixtures/>
                    </Route>
                    <Route path="/results" exact={true}>
                        <Results/>
                    </Route>
                    <Route path="/series" exact={true}>
                        <Series/>
                    </Route>
                    <Route path="/news/tag/:tagId/:tag">
                        <Tags/>
                    </Route>
                    <Route path="/news/author/:authorId/:author">
                        <Author/>
                    </Route>
                    <Route path="/match/details/:matchId/:matchSlug">
                        <MatchDetails/>
                    </Route>
                    <Route path="/series/:seriesId/:seriesSlug">
                        <SeriesDetails/>
                    </Route>
                    <Route path="/stats" exact={true}>
                        <Stats/>
                    </Route>
                    <Route path="/ranking" exact={true}>
                        <Ranking/>
                    </Route>
                    <Route path="/team/:teamId/:teamName" exact={true}>
                        <Team/>
                    </Route>
                    <Route path="/player/profile/:playerId/:playerName" exact={true}>
                        <Player/>
                    </Route>
                    <Route path="/login" exact={true}>
                        <Login/>
                    </Route>
                    <Route path="/profile" exact={true}>
                        <Profile/>
                    </Route>
                    <Route path="/signup" exact={true}>
                        <Signup/>
                    </Route>
                    <Route path="/:newsSlug">
                        <NewsDetails/>
                    </Route>
                    <Route path='/bangla' component={() => { 
                        window.location.href = 'https://bn.bdcrictime.com'; 
                        return null;
                    }}/>
                    <Route path='/redirect' component={(props) => { 
                        window.location.href = props.location.search.substring(5);
                        return null;
                    }}/>
                </Switch>
                <Footer/>
            </ScrollToTop>
        </Router>
    </>
  );
}

export default withRouter(Routes);
