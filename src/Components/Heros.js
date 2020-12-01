import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import bgImage from '../assets/img/event-page.jpg';
import logo from '../assets/img/ev-logo.svg';

function Heros(props) {
    return (
        <>
            {
                props.format === "default" ? <Default {...props}/> 
                : "Please Insert Card Format"
            }
        </>
    );
}

function Default(props) {
    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="inner-page-hero-area  fx-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-page-hero-content" style={{backgroundImage: 'url('+bgImage+')'}}>
                                <div className="ev-iiner">
                                <img src={props.logo ? props.logo : logo} alt=""/>
                                    <h2>{props.title ? props.title : <Skeleton width={500}/>}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
        </>
    )
}

export default Heros;
