import React from 'react';
import './Navbar.css';
import {ReactComponent as UniSpaceLogo} from '../../assets/UnispaceLogo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <div className="navbar container">
            <UniSpaceLogo className = "logo"/>
            <nav>
                <ul>
                    <li><Link to="/interviews"><a>커피챗</a></Link></li>
                    <li><a>리소스</a></li>
                    <li><a>팀빌딩</a></li>
                    <li><a>챌린지</a></li>
                    <li><a>블로그</a></li>
                </ul>
            </nav>

            <div className="startButton"> 
                <a> 시작하기 </a>
            </div>
            
        </div>
    );
}

export default Navbar;