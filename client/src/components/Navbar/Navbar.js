import React from 'react';
import './Navbar.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {
    return (

        <div className="navbar container">
            <LinkContainer to="/" style={{cursor: "pointer"}}>
                <UniSpaceLogo className="logo" />
            </LinkContainer>
            <nav>
                <ul>
                    <li><Link to="/interviews"><a>커피챗</a></Link></li>
                    <li><Link><a>리소스</a></Link></li>
                    <li><Link><a>팀빌딩</a></Link></li>
                    <li><Link><a>챌린지</a></Link></li>
                    <li><Link><a>블로그</a></Link></li>
                </ul>
            </nav>

            <div className="startButton">
                <a> 시작하기 </a>
            </div>

        </div>
    );
}

export default Navbar;