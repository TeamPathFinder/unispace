import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {
<<<<<<< HEAD

    const [selectedCat, setSelectedCat] = useState([0, 0, 0, 0, 0])

    const handle_change_cat = (i) => {
        const temp = [0, 0, 0, 0, 0];
        temp[i] = 1;
        setSelectedCat(temp);
    }

    const cat_style = ["flex nav-category", "flex nav-category-selected"]

    return (

        <div className='navbar-underline'>
            <div className="navbar-container">
                <LinkContainer to="/" style={{ cursor: "pointer" }}>
                    <UniSpaceLogo className="logo" />
                </LinkContainer>
                <div className='flex fd-row nav-category-container'>

                    <LinkContainer
                        to="/interviews"
                        className={cat_style[selectedCat[0]]}
                        onClick={() => handle_change_cat(0)}
                    ><a>커피챗</a></LinkContainer>
                    <LinkContainer
                        to="/"
                        className={cat_style[selectedCat[1]]}
                        onClick={() => handle_change_cat(1)}
                    ><a>리소스</a></LinkContainer>
                    <LinkContainer
                        to="/"
                        className={cat_style[selectedCat[2]]}
                        onClick={() => handle_change_cat(2)}
                    ><a>팀빌딩</a></LinkContainer>
                    <LinkContainer
                        to="/"
                        className={cat_style[selectedCat[3]]}
                        onClick={() => handle_change_cat(3)}
                    ><a>챌린지</a></LinkContainer>
                    <LinkContainer
                        to="/"
                        className={cat_style[selectedCat[4]]}
                        onClick={() => handle_change_cat(4)}><a>블로그</a></LinkContainer>

                </div>

                <div className="startButton">
                    <a> 시작하기 </a>
                </div>
=======
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
                    <li className={activateLink('interviews')}><Link to="/interviews">커피챗</Link></li>
                    <li><Link><a>리소스</a></Link></li>
                    <li><Link><a>팀빌딩</a></Link></li>
                    <li><Link><a>챌린지</a></Link></li>
                    <li className={activateLink('blog')}><Link to="/blog">블로그</Link></li>
                </ul>
            </nav>
>>>>>>> a0eca7a9c686b6d6cd50cb2f97eb6c821407cd4f

            </div>
        </div>
    );
}

export default Navbar;