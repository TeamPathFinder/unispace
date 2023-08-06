import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    const [blogTitle, blogSubtitle] = ['블로그', '우리의 이야기를 담은 space'];
    const [category, setCategory] = useState('전체');

    const activateCategory = e => {
        setCategory(e.target.outerText);
    }

    return <div className="blogContainer">
        <div className="blogTitle">{blogTitle}</div>
        <div className="blogSubtitle">{blogSubtitle}</div>
        <div className="blogContent">
            <div className="blogNavbar">
                <ul>
                    {/* TODO: generate categories based on an array */}
                    <li className={category === '전체' ? 'active' : ''} onClick={activateCategory}>전체</li>
                    <li className={category === '가나다라' ? 'active' : ''} onClick={activateCategory}>가나다라</li>
                    <li className={category === '마바사' ? 'active' : ''} onClick={activateCategory}>마바사</li>
                    <li className={category === '아자차' ? 'active' : ''} onClick={activateCategory}>아자차</li>
                    <li className={category === '카타파하' ? 'active' : ''} onClick={activateCategory}>카타파하</li>
                </ul>
            </div>
            <div className="blogItemContainer">
                {/* TODO: make it into a subcomponent */}
                <div className="blogItem">
                    <Link>
                        <div className="blogItemImage" />
                    </Link>
                    <div className="blogItemCategory"> 가나다 </div>
                    <div className="blogItemTitle"> 마나담다</div>
                </div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
        </div>
    </div>
}

export default Blog;