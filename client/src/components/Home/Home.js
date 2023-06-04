import React from 'react';
import './Home.css';
import {ReactComponent as UniSpaceLogo} from '../../assets/UnispaceLogo.svg';
import {ReactComponent as WriteSymbol} from '../../assets/WriteSymbol.svg';

const Home = () => {
    return (
        
        <div className="container">
            <UniSpaceLogo className = "logo"/>
            <nav>
                <ul>
                    <li><WriteSymbol className = "writeSymbol"/></li>
                    <li><a href="#">Write</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Home