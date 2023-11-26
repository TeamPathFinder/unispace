import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { ReactComponent as English } from '../../assets/english.svg';
import { ReactComponent as Korean } from '../../assets/korean.svg';
import { Link, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLanguage } from "../../LanguageContext";


const Navbar = () => {

    // let { isEnglish } = useLanguage();

    const [isEnglish, setIsEnglish] = useState(true);

    let topLocation = useLocation().pathname.split('/')[1];

    const activateLink = location => {
        console.log(topLocation);
        return location === topLocation ? 'flex nav-category-selected' : 'flex nav-category';
    }

    useEffect(()=>{
        if (topLocation == 'en'){
            setIsEnglish(true);
        } else {
            setIsEnglish(false);
        }
    }, [topLocation])

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

                <div className="languageButtons">
                    {console.log(isEnglish)}
                    <LinkContainer to="/kr/internship" style={{height: '100%', width:'20px'}}>
                        <Korean 
                        style={{height: '20px'}}
                        className={isEnglish ? "language": "language active"}
                        // stroke={isEnglish ? "#FFFFFF": "#111111"}
                        />
                    </LinkContainer>
                    <LinkContainer to="/en/internship" style={{height: '100%', width:'20px'}}>
                        <English 
                        style={{height: '20px'}}
                        className={isEnglish ? "language active": "language"}
                        />
                    </LinkContainer>
                </div>

            </div>
        </div>
    );
}

export default Navbar;