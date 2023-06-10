import React from 'react';
import './Home.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { ReactComponent as WriteSymbol } from '../../assets/WriteSymbol.svg';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    return (
        <div className="container gradient">
            <div className="flex slogan">
                <h4>
                    Connect to our space, <a href="#">unispace</a>
                </h4>
            </div>
            <div className="gridContainer">
                <div className="col todaysPick">
                    <h2>Today's Pick</h2>
                    <a href="#" style={{ backgroundImage: ''}}>
                        <div className="featuredArticle">
                            <h3>Featured Article Title</h3>
                        </div>
                    </a>
                </div>
                <div className="col popular">
                    <h2>What's <span className="highlight">Popular</span> This Week</h2>
                    <a>Popular goes here, make another grid</a>
                </div>
            </div>
            <div className="flex content">
                <a> articles come here, make another grid for the articles </a>
            </div>
        </div>
    );
};

export default Home;
