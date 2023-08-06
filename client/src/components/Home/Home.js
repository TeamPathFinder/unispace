import React, { useState, useEffect } from 'react';
import './Home.css';
import { ReactComponent as NavLeftArrow } from '../../assets/navLeftArrow.svg';
import { ReactComponent as NavRightArrow } from '../../assets/navRightArrow.svg';
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';
import PopularItem from './subcomponents/PopularItem';
import ContentItem from './subcomponents/ContentItem';
import axios from 'axios';

const Home = () => {

    //variables to keep tracking of arrow nav of popular items section
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3);
    const [selectedData, setSelectedData] = useState([]);
    const [focusedEllipse, setFocusedEllipse] = useState(0);
    const [selectedSpace, setSelectedSpace] = useState([true, false, false, false])
    const MAX_POPULAR_ITEMS_LENGTH = 12;
    //   TODO: dev environment & published environment differ
    const baseURL = 'http://127.0.0.1:8000'

    //handle next on popular item arrow nav
    const handleNext = () => {
        if (endIndex + 4 < MAX_POPULAR_ITEMS_LENGTH) {
            setStartIndex(startIndex + 4);
            setEndIndex(endIndex + 4);
            setFocusedEllipse(focusedEllipse + 1);
        }
    };

    //handle going back on popular item arrow nav
    const handlePrevious = () => {
        if (startIndex - 4 >= 0) {
            setStartIndex(startIndex - 4);
            setEndIndex(endIndex - 4);
            setFocusedEllipse(focusedEllipse - 1)
        }
    };

    //helper function used by .map to map popular items from list
    const renderPopularItem = (item, index) => {
        if (index === 0) {
            return <PopularItem
                size="large"
                enumeration={startIndex + 1}
                title={item.title}
                author={item.author}
                location={item.location}
            />;
        } else if (index === 1) {
            return <PopularItem
                size="medium"
                enumeration={startIndex + index + 1}
                title={item.title}
                author={item.author}
                location={item.location}
            />;
        } else {
            return <PopularItem
                size="small"
                enumeration={startIndex + index + 1}
                title={item.title}
                author={item.author}
                location={item.location}
            />;
        }
    };

    const handleSpaceSelectBorder = () => {
        if (selectedSpace[0]) {
            return { "borderLeft": "0" }
        } else if (selectedSpace[3]) {
            return { "borderRight": "0" }
        } else {
            return { "display": "flex" }
        }
    }

    // **** Render popular contents in home page ****

    const getPopularContents = () => {
        axios.get(`${baseURL}/api/contents/popular-contents/?num=${MAX_POPULAR_ITEMS_LENGTH}`)
            .then(response => response.data.map((data, index) => {
                return {
                    enumeration: '' + index,
                    title: data.title,
                    author: data.userInfo.name, // TODO: name or nickname?
                    location: 'South Korea', // info not in DB
                    id: data.id
                }
            }))
            .then(result => {
                const selectedData = result.slice(startIndex, endIndex + 1)
                setSelectedData(selectedData)
            })
        // .catch(error => console.log('error', error));
    }

    // **** Render today's pick content in home page ****

    // TODO: should not get id, but title
    const [todayPick, setTodayPick] = useState([])

    const getTodayPickContent = () => {
        axios.get(`${baseURL}/api/contents/today-pick/`)
            .then(response => response.data)
            .then(arr => {
                // TODO: should get image URL to show
                if (arr.length > 0) {
                    // TEMPORARILY SHOWING POST ID
                    setTodayPick(arr[0].content)
                }
            })
    }

    // **** Render main content in home page ****

    const [contentDisplayed, setContentDisplayed] = useState([])

    const getContent = (category, pageNo) => {
        axios.get(`${baseURL}/api/contents/contents-list/?category=${category}&page=${pageNo}`)
            .then(response => {
                setContentDisplayed(response.data.results);
            })
    }

    useEffect(() => {
        getPopularContents();
        getTodayPickContent();
        getContent("Work Space", "1");
    }, [startIndex, endIndex])


    return (
        <div className="container gradient">
            <div className="flex slogan">
                <h4>
                    Connect in our space, <a href="#">unispace</a>
                </h4>
            </div>
            <div className="gridContainer todayPopularColumns">
                <div className="col todaysPick">
                    <h2>Today's Pick</h2>
                    <a href="#" style={{ backgroundImage: '' }}>
                        <div className="featuredArticle">
                            <h3>{`Today's Pick Post ID: ${todayPick}`}</h3>
                        </div>
                    </a>
                </div>
                {/* Popular Items Section */}
                <div className="col popular">
                    <h2 className='block'>What's <span className="highlight">Popular</span> This Week</h2>
                    <div className="flex popularItemsContainer">

                        {selectedData.map((item, index) => (
                            <React.Fragment key={item.id}>
                                {renderPopularItem(item, index)}
                            </React.Fragment>
                        ))}

                    </div>
                    <div className='flex popularItemsNav'>
                        <div onClick={handlePrevious}>
                            <NavLeftArrow className="popularItemsNavArrow" />
                        </div>
                        <Ellipse className={focusedEllipse === 0 ? "popularItemsEllipseFocused" : "popularItemsEllipseUnfocused"} />
                        <Ellipse className={focusedEllipse === 1 ? "popularItemsEllipseFocused" : "popularItemsEllipseUnfocused"} />
                        <Ellipse className={focusedEllipse === 2 ? "popularItemsEllipseFocused" : "popularItemsEllipseUnfocused"} />
                        <div onClick={handleNext}>
                            <NavRightArrow className="popularItemsNavArrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mainArticles">
                <div className="flex contentSpaceSelection" style={handleSpaceSelectBorder()}>
                    <div className={selectedSpace[0] ? "contentSpaceSelected" : "contentSpaceUnselected"}
                        onClick={() => {
                            const array = [false, false, false, false];
                            array[0] = true;
                            setSelectedSpace(array);
                            getContent("Work Space", "1");
                        }}>
                        <a>
                            Work Space
                        </a>
                    </div>

                    <div className={selectedSpace[1] ? "contentSpaceSelected" : "contentSpaceUnselected"}
                        onClick={() => {
                            const array = [false, false, false, false];
                            array[1] = true;
                            setSelectedSpace(array);
                            getContent("Study Space", "1");
                        }}>
                        <a>
                            Study Space
                        </a>
                    </div>

                    <div className={selectedSpace[2] ? "contentSpaceSelected" : "contentSpaceUnselected"}
                        onClick={() => {
                            const array = [false, false, false, false];
                            array[2] = true;
                            setSelectedSpace(array);
                            getContent("Life Space", "1");
                        }}>
                        <a>
                            Life Space
                        </a>
                    </div>

                    <div className={selectedSpace[3] ? "contentSpaceSelected" : "contentSpaceUnselected"}
                        onClick={() => {
                            const array = [false, false, false, false];
                            array[3] = true;
                            setSelectedSpace(array);
                            getContent("Team Space", "1");
                        }}>
                        <a>
                            Team Space
                        </a>
                    </div>
                </div>
                <div className="grid-content-container">
                    {
                        contentDisplayed.map(item => {
                            return (
                                <React.Fragment key={item.id}>
                                    {<ContentItem
                                        title={item.title}
                                        image={item.image}
                                        author={item.userInfo.name}
                                        id={item.id}
                                        location={item.location}
                                        subCategory={item.category} // this doesn't exist yet, putting in category for now
                                        views={item.views}
                                    />}
                                </React.Fragment>
                            );
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;
