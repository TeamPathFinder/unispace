import React from 'react';
import './Navbar.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {
    const topLocation = useLocation().pathname.split('/')[1];
    console.log(topLocation);
    const activateLink = location => location === topLocation ? 'active' : '';

    return (

        <div className="navbar container">
            <LinkContainer to="/" style={{ cursor: "pointer" }}>
                <UniSpaceLogo className="logo" />
            </LinkContainer>
            <nav>
                <ul>
                    <li className={activateLink('interviews')}><Link to="/interviews"><a>커피챗</a></Link></li>
                    <li><Link><a>리소스</a></Link></li>
                    <li><Link><a>팀빌딩</a></Link></li>
                    <li><Link><a>챌린지</a></Link></li>
                    <li className={activateLink('blog')}><Link to="/blog"><a>블로그</a></Link></li>
                </ul>
            </nav>

            <div className="startButton">
                <a> 시작하기 </a>
            </div>

        </div>
    );
}

export default Navbar;