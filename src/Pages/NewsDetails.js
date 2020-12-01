import React, {useState, useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import dateformat from 'dateformat';
import he from 'he'
import Advertisement from '../Components/Advertisement';
import LiveScoreSlider from '../Components/LiveScoreSlider';
import RelatedNews from './Components/RelatedNews';

import thumbnail from '../assets/img/post-thumbnail.svg'
import avatar from '../assets/img/avater.svg'
import facebook from '../assets/img/fb_share.svg'
import twitter from '../assets/img/twitte.svg'
import sortIcon from '../assets/img/srt.svg'

import ICCTeamRanking from '../Components/ICCTeamRanking';
import MostPopular from '../Components/MostPopular';
import Trending from '../Components/Trending';
import PlayersData from '../Components/PlayersData';
import LatestNews from '../Components/LatestNews';
import { Helmet } from 'react-helmet';
import {isMobile} from 'react-device-detect';

function NewsDetails(props) {

    const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [commntsLoaded, setCommentsLoaded] = useState(false);

    const [commentSort, setCommentSort] = useState("new");
    const [comment, setComment] = useState(null);
    const [comments, setComments] = useState(null);

    
    
    useEffect(() => {  
        async function getNews() {
            axios.get('https://www.bdcrictime.com/wp-json/wp/v2/posts?slug='+props.match.params.newsSlug+'&_embed')
            .then((res2)=> {  
                setNews(res2.data[0]);
                setLoaded(true);
            })
    
            axios.get('https://api.shadowbangladesh.com/get_comment', {
                params: {
                  url: props.location.pathname,
                }
              })
              .then((res)=> {  
                  setComments(res.data);
                  setCommentsLoaded(true);
              })
        }
        getNews()
    }, [props.location.pathname, props.match.params.newsSlug]);

    const handleComment = ((event) => {
        setComment(event.target.value)
    });

    const handleCommentSubmit = ((event) => {
        axios.get('https://api.shadowbangladesh.com/post_comment', {
            params: {
              name: "Unknown",
              url: props.location.pathname,
              comment : comment,
              parent : null
            }
          })
        .then((res)=> {  
            setComments(res.data);
        })
    })
    
    

    return (
        <>
            <Helmet>
                <title>{loaded ? he.decode(news.title.rendered)+' - BDCricTime' : null}</title>
            </Helmet>
            <LiveScoreSlider/>
            <div className="news-content-area fx-padding">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-3 order-2 order-lg-1">
                    <div className="sidebar-widget-wrapper">
                        {isMobile ? <RelatedNews/> : null}
                        {isMobile ? null : <Trending/>}
                        {isMobile ? null : <ICCTeamRanking/>}
                        {isMobile ? null : <PlayersData/>}
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <div className="news-main-content">
                    {/* Post content start */}
                    <div className="post-content-inner-blk">
                        <div className="sigle-post-wrp">
                        <div className="single-post-top-blk">
                            <h3>{loaded ? he.decode(news.title.rendered) : <Skeleton count={2}/>}</h3>
                            <p>{loaded ? he.decode(news.acf.lead_text ? news.acf.lead_text : news.excerpt.rendered.replace(/<[^>]*>?/gm, '')) : <Skeleton count={3}/>}</p>
                            <div style={{textAlign:'center', marginTop:'20px'}}>
                                {isMobile ? <Advertisement size={320100} imgstyle={{width:'100%'}}/> : <Advertisement size={46860}/>}
                            </div>
                        </div>
                        <div className="single-post-tm">
                            <img src={loaded ? news._embedded['wp:featuredmedia'][0].source_url : thumbnail} alt="" />
                            <p>{loaded ? he.decode(news._embedded['wp:featuredmedia'][0].caption.rendered.replace( /(<([^>]+)>)/ig, '')) : null}</p>
                        </div>
                        <div className="post-writer-blk">
                            <div className="post-writer-info">
                            <div className="row">
                                <div className="col-md-5">
                                <div className="pst-w-left-blk">
                                    <img src={loaded ? news.acf.avatar ? news.acf.avatar : avatar : avatar} alt="" />
                                    <div className="post-auth-info">
                                    <h3>{loaded ? news.acf.reporter_name ? news.acf.reporter_name : news._embedded.author[0].name : <Skeleton width={100}/>}
                                        <span>{loaded ? news.acf.designation : <Skeleton width={60}/>}</span></h3>
                                    <p>{loaded ? "BDCricTime English" : <Skeleton width={80}/>}</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-7">
                                <div className="pst-w-right-blk">
                                    <p>{loaded ? <>Editor - <Link to={"/news/author/"+news.author+"/"+news._embedded.author[0].name}>{news._embedded.author[0].name}</Link></> : <Skeleton width="70%"/>}</p>
                                    <p>{loaded ? "Posted - "+dateformat(news.date, "mmmm dd, yyyy hh:MM TT") : <Skeleton width="70%"/>}</p>
                                    <p>{loaded ? "Updated - "+dateformat(news.modified, "mmmm dd, yyyy hh:MM TT") : <Skeleton width="70%"/>}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="post-main-content-all">
                            <div className="row">
                                <div className="col-lg-12">
                                {loaded ? 
                                    news.acf.highlights ?
                                    <div className="hlt-text">
                                        <h4>Highlights</h4>
                                        <div className="hlt-text-list">
                                            {news.acf.highlights.map((news, index) => 
                                                
                                                <li><Link to={"/"+news.post_name}>{news.post_title}</Link></li>
                                            )}
                                        </div>
                                    </div>
                                    : null
                                :
                                    null
                                }
                                {loaded ? 
                                <div dangerouslySetInnerHTML={{ __html: news.content.rendered}} />
                                : <Skeleton count={7}/>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="share-btn">
                                    {loaded ? 
                                    <><Link target="_blank" to={"/redirect?url=https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000"+props.location.pathname}><img src={facebook} alt="" /></Link>
                                    <Link target="_blank" to={"/redirect?url=http://twitter.com/share?text="+news.acf.lead_text ? news.acf.lead_text : news.excerpt.rendered+"&url="+props.location.pathname+"&hashtags=bdcrictime"}><img src={twitter} alt="" /></Link></>
                                    : null}
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="tags-btn">
                                    {loaded && news._embedded['wp:term'][1][0] ?
                                        <><span>Tags</span>
                                        {news._embedded['wp:term'][1].map((tag, index) => 
                                        index < 4 ?
                                            <Link key={index} to={"/news/tag/"+tag.id+"/"+tag.slug}>{tag.name}</Link>
                                        : null
                                        )}
                                        </>
                                        :
                                        null
                                    }
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="comment-wrp">
                                    <div className="comment-box">
                                    <form action="">
                                        <textarea cols={30} rows={10} placeholder="Type your comment here..." defaultValue="" onChange={handleComment}>{comment}</textarea>
                                        <div className="bottom-action-btns">
                                        {/* To post a comment please
                                        <Link to="/login">Login</Link>
                                        or  */}
                                        <button type="button" onClick={handleCommentSubmit}>Post as anonymous</button>
                                        </div>
                                    </form>
                                    </div>
                                    <div className="comment-main-blk">
                                        {commntsLoaded && comments[0] ?
                                        <>
                                            <h3 style={{cursor:'pointer'}} onClick={() => setCommentSort(commentSort === "new" ? "old" : "new")} ><img src={sortIcon} style={{transform:commentSort === 'old' ? "rotate(180deg)" : null}} alt="" />Sort by {commentSort === "new" ? "New" : "Old"}</h3>
                                            {comments.map((comment) => 
                                                <div className="comment-text-blk">
                                                    <div className="cm-user">
                                                    <img src={avatar} alt="" />
                                                    <div className="cm-info">
                                                        <h4>{comment.name} <span>20 mar 2020</span></h4>
                                                    </div>
                                                    </div>
                                                    <p>{comment.comment}</p>
                                                    <div className="comment-actions">
                                                    <Link to="">Delete</Link>
                                                    <Link to="">Reply</Link>
                                                    <Link to="" className="t-up"><i className="fas fa-thumbs-up" /> <span>10</span></Link>
                                                    <Link to="" className="t-dn"><i className="fas fa-thumbs-down" /> <span>10</span></Link>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                            : null
                                        }
                                    </div>
                                </div>
                                {/* <div className="ld-more-btn cmnt">
                                    <Link to="">Lode More <i className="fal fa-angle-down" /></Link>
                                </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 order-3 order-lg-3">
                    <div className="sidebar-widget-wrapper">
                    <Advertisement size={320100} style={{marginBottom:'15px'}}/>
                    <LatestNews/>
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

export default withRouter(NewsDetails);
