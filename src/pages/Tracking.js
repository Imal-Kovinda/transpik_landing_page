import React from 'react';
import tracking from "../styles/tracking.css";

function Tracking(){
    return (
        <div className='container'>
            <div className='nav-bar'>
                {/* <h2>for Navbar</h2> */}
            </div>
            <div className='box'>
                <div className='heding'>
                    <h2 className='track_header'>Track your order</h2>
                </div>
                <div className='discribe'>
                    <p>Enter your order ID here to track your order.</p>
                </div>
                <div className='active_part'>
                    <input type='text' className='id' placeholder='Order ID'></input>
                    <button className='track' type='button'>Track</button>
                </div>
            </div>
        </div>
        
    )

}
export default Tracking