import React from 'react';
import './Home.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { ReactComponent as WriteSymbol } from '../../assets/WriteSymbol.svg';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className= "container" >
            <div className="gridContainer">
                
                <div className='col popular'>
                    <a>Popular goes here</a>
                </div>
                
                <div className='col todayPicks'>
                    <a> Today's picks goes here, make another grid</a>
                </div>
            </div>
            <div className='content container'>
                <a> articles come here, make another grid for the articles </a>
            </div>
        </div>
    );
}

export default Home