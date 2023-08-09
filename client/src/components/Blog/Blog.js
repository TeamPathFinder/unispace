import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Blog.css'
import BlogItem from './subcomponents/BlogItem';

const baseURL = 'http://127.0.0.1:8000'


const Blog = () => {
    const [blogTitle, blogSubtitle] = ['블로그', '우리의 이야기를 담은 space'];
    const [category, setCategory] = useState('전체');
    const [categoryID, setCategoryID] = useState('all');

    const [categoryList, setCategoryList] = useState([{
        "id": 'all',
        "name": "전체"
    }])

    const [blogListData, setBlogListData] = useState([]);

    const getCategories = () => {
        axios.get(`${baseURL}/api/contents/categories`)
            .then(response => response.data)
            .then(categoryData => {
                if (categoryData.length > 0) {
                    setCategoryList(categoryList.concat(categoryData))
                }
            })
    }

    const getBlogListData = () => {
        const blogContentAPICALL = categoryID === '0'
            ? `${baseURL}/api/contents/blogs`
            : `${baseURL}/api/contents/blogs?category=${categoryID}`;


        axios.get(blogContentAPICALL)
            .then(result => result.data)
            .then(blogListData => {
                setBlogListData(blogListData);
            })
    }

    const handleNavChange = (e, id) => {
        setCategory(e.target.outerText);
        setCategoryID(id);
    }

    // to get category list from server
    useEffect(() => {
        getCategories();
    }, [])

    // to update what blogs are shown
    useEffect(() => {
        getBlogListData();
    }, [categoryID])

    return <div className="blogContainer">
        <div className="blogTitle">{blogTitle}</div>
        <div className="blogSubtitle">{blogSubtitle}</div>
        <div className="blogContent">
            <div className="blogNavbar">
                <ul>
                    {categoryList.map((item) => {
                        return (<li
                            key={item.id}
                            className={category === item.name ? 'active' : ''}
                            onClick={e => { handleNavChange(e, item.id) }}> {item.name} </li>);
                    })}

                </ul>
            </div>
            <div className="blogItemContainer">
                {blogListData.map((item) => {
                    console.log(item);
                    console.log(item.id)
                    return (<BlogItem
                        key={item.id}
                        id={item.id}
                        category={item.category?.name}
                        image={item.image}
                        title={item.title}
                    />)
                })}
                {/* <BlogItem category="가나다라" title="마바사 askfasjkhfkj ashfkjsh"></BlogItem>
                <BlogItem category="가나다라" title="마바사"></BlogItem>
                <BlogItem category="가나다라" title="마바사"></BlogItem>
                <BlogItem category="가나다라" title="마바사"></BlogItem>
                <BlogItem category="가나다라" title="마바사"></BlogItem>
                <BlogItem category="가나다라" title="마바사"></BlogItem> */}
            </div>
        </div>
    </div>
}

export default Blog;