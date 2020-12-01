import React from 'react';
import advertisement from '../assets/advertisement/ad-970x90.png';
import advertisement2 from '../assets/advertisement/ad-320x100.png';
import advertisement3 from '../assets/advertisement/ad-468x60.png';
import advertisement4 from '../assets/advertisement/ad-728x90.png';
import advertisement5 from '../assets/advertisement/ad-320x50.png';
import advertisement6 from '../assets/advertisement/ad-728x90.png';

function Advertisement(props) {

    return (
        <>
        {
        props.size === 970 ? 
            <div style={props.style}>
                <img src={advertisement} alt="ad" style={props.imgstyle}/>
            </div>
        : props.size === 728 ? 
        <div style={props.style}>
            <img src={advertisement6} alt="ad" style={props.imgstyle}/>
        </div>
        : props.size === 32050 ? 
            <div style={props.style}>
                <img src={advertisement5} alt="ad" style={props.imgstyle}/>
            </div>
        : props.size === 320100 ? 
            <div style={props.style}>
                <img src={advertisement2} alt="ad" style={props.imgstyle}/>
            </div>
        : props.size === 46860 ? 
            <div style={props.style}>
                <img src={advertisement3} alt="ad" style={props.imgstyle}/>
            </div>
        : props.size === 72890 ? 
            <div style={props.style}>
                <img src={advertisement4} alt="ad" style={props.imgstyle}/>
            </div>
        : null
        }
        </>
    );
}

export default Advertisement;
