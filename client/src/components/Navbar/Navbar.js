import React from 'react';
import './Navbar.css';
import {ReactComponent as UniSpaceLogo} from '../../assets/UnispaceLogo.svg';
import {ReactComponent as WriteSymbol} from '../../assets/WriteSymbol.svg';

const Navbar = () => {
    return (
        
        <div className="navbar container">
            <UniSpaceLogo className = "logo"/>
            <nav>
                <ul>
                    <li><WriteSymbol className = "writeSymbol"/></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Navbar;