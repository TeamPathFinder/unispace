import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLanguage } from "../../LanguageContext";

const Navbar = () => {

    let { isEnglish } = useLanguage();

    const topLocation = useLocation().pathname.split('/')[1];

    const activateLink = location => location === topLocation ? 'flex nav-category-selected' : 'flex nav-category';

    return (
        <div className='navbar-underline'>
            <div className="navbar-container">
                <LinkContainer to={isEnglish ? '/en' : '/kr'} style={{ cursor: "pointer" }}>
                    <UniSpaceLogo className="logo" />
                </LinkContainer>
                <div className='flex fd-row nav-category-container'>

                    <LinkContainer
                        to="/"
                        className={activateLink("coffeechats")}
                        style={isEnglish? {'display': 'none'}: {'display':'flex'}}
                    >
                        <a>커피챗</a>
                    </LinkContainer>

                    <LinkContainer
                        to={isEnglish ? '/en/internship' : '/kr/internship'} 
                        className={activateLink("internship")}
                    >
                        <a>{isEnglish ? 'Internship': '인턴십'}</a>
                    </LinkContainer>

                    <LinkContainer
                        to="/"
                        className={activateLink("teambuilding")}
                    >
                        <a>{isEnglish ? 'Team Building': '팀빌딩'}</a>
                    </LinkContainer>

                    <LinkContainer
                        to="/"
                        className={activateLink("challenge")}
                    >
                        <a>{isEnglish ? 'Challenge': '챌린지'}</a>
                    </LinkContainer>

                    <LinkContainer
                        to={isEnglish ? '/en/blog' : '/kr/blog'}
                        className={activateLink("blog")}
                    >
                        <a>{isEnglish ? 'Blog': '블로그'}</a>
                    </LinkContainer>

                </div>

                <div className="startButton">
                    <a> {isEnglish ? 'Start': '시작하기'} </a>
                </div>

            </div>
        </div>
    );
}

export default Navbar;