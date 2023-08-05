import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {

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

            </div>
        </div>
    );
}

export default Navbar;