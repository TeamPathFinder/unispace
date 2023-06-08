import React from 'react';
import './Home.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { ReactComponent as WriteSymbol } from '../../assets/WriteSymbol.svg';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className= "container gradient" >
            <div className="flex slogan">
                <h2>Connect to our space, <a>unispace </a></h2>
            </div>
            <div className="gridContainer">
                
                <div className='col popular'>
                    <a> Today's picks goes here</a>
                </div>
                
                <div className='col todayPicks'>
                    
                    <a>Popular goes here, make another grid</a>
                </div>
            </div>
            <div className='flex content'>
                <a> articles come here, make another grid for the articles </a>
            </div>
        </div>
    );
}

export default Home