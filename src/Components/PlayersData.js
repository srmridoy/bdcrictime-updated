import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import icon from '../assets/img/player-img.svg';
import axios from 'axios';

function PlayersData() {
    const [players, setPlayers] = useState([{},{},{},{}]);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const fireSearch = (event) => {
        event.preventDefault()
        if(search) {
            setPlayers([{},{},{},{}]);
            axios.get('https://rest.entitysport.com/v2/players?search='+search+'&paged=1&per_page=10')
            .then(function (res) {
                setPlayers(res.data.response.items)
            })
        }
    };

    async function getPlayers() {
        
            axios.get('https://rest.entitysport.com/v2/players?country=bd')
            .then((res)=> {  
                setPlayers(res.data.response.items);
            })
        
    }

    useEffect(() => {  
        getPlayers()
    }, []);

    return (
        <>
            <div className="sidebar-widget player-widget">
                <h4 className="heading-title">Players Data</h4>

                <nav>
                    <div className="top-search-bar">
                        <form onSubmit={fireSearch}>
                            <button type="submit"><i className="fal fa-search"></i></button>
                            <input type="text" placeholder="Search player" value={search} onChange={handleSearch}/>
                        </form>
                    </div>
                    <ul>
                    {players.map((item, index) =>
                        <li key={index}>
                            {item.title ?
                                <>
                                    <span><img src={icon} alt={item.title} /></span>
                                    <Link to={"/player/profile/"+item.pid+"/"+item.title.toLowerCase().replace(" ", "-")}>
                                        <p style={{marginLeft:"15px"}}>{item.title}</p>
                                    </Link>
                                </>
                            :
                                <>
                                    <span><img src={icon} alt="" /></span>
                                    <p style={{marginLeft:"15px"}}><Skeleton width={150}/></p>
                                </>
                            }
                        </li>
                    )}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default PlayersData;