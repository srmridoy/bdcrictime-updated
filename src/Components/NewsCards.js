import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import thumbnail from '../assets/img/post-thumbnail.svg';
import thumbnail2 from '../assets/img/newsupdate thumbnail.svg';
import thumbnail3 from '../assets/img/post-img2.svg';
import thumbnail4 from '../assets/img/post-img3.svg';
import he from 'he'
import Moment from 'react-moment';

function NewsCards(props) {
    return (
        <>
            {
                props.format === "lead" ? <Lead {...props}/> 
                : props.format === "boxed-down" ? <BoxedDown {...props}/>
                : props.format === "boxed-side" ? <BoxedSide {...props}/>
                : props.format === "small-down" ? <SmallDown {...props}/>
                : props.format === "small-side" ? <SmallSide {...props}/>
                : props.format === "with-count" ? <WithCount {...props}/>
                : "Please Insert Card Format"
            }
        </>
    );
}

function Lead(props) {
    return (
        <>
            <div className="post">
                <div className="img"><Link to={props.id && props.slug ? props.slug : ''}><img src={props.thumbnail ? props.thumbnail : thumbnail} alt={props.imageAlt ? props.imageAlt : ''} /></Link></div>
                <div className="content">
                    <Link to={props.id && props.slug ? props.slug : ''}>
                        <h4>{props.headline ? he.decode(props.headline) : <Skeleton/>}</h4>
                    </Link>
                    <p>
                        {props.leadText ? 
                            <>{props.leadText}... <Link to={props.id && props.slug ? props.slug : ''} className="read-more">Read Ful Article</Link></>
                        : <Skeleton count={3}/>}
                    </p>
                </div>
            </div>
        </>
    )
}


function BoxedDown(props) {
    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="post2">
                <div className="img"><Link to={props.id && props.slug ? props.slug : ''}><img src={props.thumbnail ? props.thumbnail : thumbnail2} alt={props.imageAlt ? props.imageAlt : ''} /></Link></div>
                <div className="content">
                    <Link to={props.id && props.slug ? props.slug : ''}>
                        <h5>{props.headline ? he.decode(props.headline) : <Skeleton count={2}/>}</h5>
                    </Link>
                    <p>{props.leadText ? props.leadText.slice(0, 240)+'...' : <Skeleton count={7}/>}</p>
                    {props.leadText ? <Link to={props.id && props.slug ? props.slug : ''} className="read-more">READ MORE</Link> : null}
                </div>
            </div>
        </SkeletonTheme>
        </>
    )
}

function BoxedSide(props) {
    return (
        <>
        <SkeletonTheme color="rgba(255, 255, 255, .1)" highlightColor="rgba(255, 255, 255, .05)">
            <div className="post3 ">
                <div className="row" style={{width:"110%"}}>
                <div className=" col-sm-4">
                    <div className="img">
                    <Link to={props.id && props.slug ? props.slug : ''}><img src={props.thumbnail ? props.thumbnail : thumbnail3} alt={props.imageAlt ? props.imageAlt : ''} /></Link>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="content">
                    <Link to={props.id && props.slug ? props.slug : ''}>
                        <h5>{props.headline ? he.decode(props.headline) : <Skeleton/>}</h5>
                    </Link>
                    <p>{props.leadText ? props.leadText+'...' : <Skeleton count={4}/>}</p>
                    <Link to={props.id && props.slug ? props.slug : ''} className="read-more">READ MORE</Link>
                    </div>
                </div>
                </div>
            </div>
        </SkeletonTheme>
        </>
    )
}

function SmallDown(props) {
    return (
        <>
            <div className="post4 col-md-4 col-6">
                <div className="img"><Link to={props.id && props.slug ? props.slug : ''}><img src={props.thumbnail ? props.thumbnail : thumbnail4} alt={props.imageAlt ? props.imageAlt : ''} /></Link></div>
                <div className="content">
                    <Link to={props.id && props.slug ? props.slug : ''}>
                        <h6>{props.headline ? he.decode(props.headline) : <Skeleton count={2}/>}</h6>
                    </Link>
                    <span style={{textTransform: 'uppercase'}}>
                        {props.published ? 
                            <Moment format="DD MMM YYYY">{props.published}</Moment>
                        : 
                            <Skeleton/>
                        }
                    </span>
                </div>

            </div>
        </>
    )
}

function SmallSide(props) {
    return (
        <>
            <li>
                <div className="img">
                    <Link to={props.id && props.slug ? props.slug : ''}>
                        {props.thumbnail ?
                            <img src={props.thumbnail} alt={props.imageAlt ? props.imageAlt : ''} />
                        :
                            <Skeleton height={"50px"} width={"50px"}/>
                        }
                    </Link>
                </div>
                <div className="content">
                    <Link to={props.id && props.slug ? props.slug : ''}>
                        <p>{props.headline ? he.decode(props.headline) : <Skeleton count={2} width={"80%"}/>}</p>
                    </Link>
                </div>
            </li>
        </>
    )
}

function WithCount(props) {
    return (
        <>
            <li>
                <span>{props.count ? props.count : <Skeleton width="30px" height="30px"/>}</span>
                <Link to={props.id && props.slug ? props.slug : ''}>
                    <p>{props.headline ? he.decode(props.headline) : <Skeleton count={2} width={"80%"}/>}</p>
                </Link>
            </li>
        </>
    )
}

export default NewsCards;
