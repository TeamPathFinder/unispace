import React from 'react';
import './Navbar.css';
import {ReactComponent as UniSpaceLogo} from '../../assets/UnispaceLogo.svg';

const Navbar = () => {
    return (
        
        <div className="navbar container">
            <UniSpaceLogo className = "logo"/>
            <nav>
                <ul>
                    <li><a href="#">커피챗</a></li>
                    <li><a href="#">리소스</a></li>
                    <li><a href="#">팀빌딩</a></li>
                    <li><a href="#">챌린지</a></li>
                    <li><a href="#">블로그</a></li>
                </ul>
            </nav>

            <div className="startButton"> 
                <a> 시작하기 </a>
            </div>
            
        </div>
    );
}

export default Navbar;