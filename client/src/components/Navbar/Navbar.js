import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {
    const topLocation = useLocation().pathname.split('/')[1];

    const activateLink = location => location === topLocation ? 'flex nav-category-selected' : 'flex nav-category';

    return (
        <div className='navbar-underline'>
            <div className="navbar-container">
                <LinkContainer to="/" style={{ cursor: "pointer" }}>
                    <UniSpaceLogo className="logo" />
                </LinkContainer>
                <div className='flex fd-row nav-category-container'>

                    <LinkContainer
                        to="/"
                        className={activateLink("coffeechats")}
                    >
                        <a>커피챗</a>
                    </LinkContainer>

                    <LinkContainer
                        to="/internship"
                        className={activateLink("internship")}
                    >
                        <a>인턴십</a>
                    </LinkContainer>

                    <LinkContainer
                        to="/"
                        className={activateLink("teambuilding")}
                    >
                        <a>팀빌딩</a>
                    </LinkContainer>

                    <LinkContainer
                        to="/"
                        className={activateLink("challenge")}
                    >
                        <a>챌린지</a>
                    </LinkContainer>

                    <LinkContainer
                        to="/blog"
                        className={activateLink("blog")}
                    >
                        <a>블로그</a>
                    </LinkContainer>

                </div>

                <div className="startButton">
                    <a> 시작하기 </a>
                </div>

            </div>
        </div>
    );
}

export default Navbar;