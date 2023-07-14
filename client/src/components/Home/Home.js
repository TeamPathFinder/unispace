import React, { useState, useEffect } from 'react';
import './Home.css';
import { ReactComponent as NavLeftArrow } from '../../assets/navLeftArrow.svg';
import { ReactComponent as NavRightArrow } from '../../assets/navRightArrow.svg';
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';
import PopularItem from './subcomponents/PopularItem';
import ContentItem from './subcomponents/ContentItem';

import dummyData from './dummyData';

const Home = () => {

    //variables to keep tracking of arrow nav of popular items section
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3);
    const [selectedData, setSelectedData] = useState([]);
    const [focusedEllipse, setFocusedEllipse] = useState(0);
    const [selectedSpace, setSelectedSpace] = useState([true, false, false, false])

    //handle next on popular item arrow nav
    const handleNext = () => {
        if (endIndex + 4 < dummyData.length) {
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
            />;;
        } else {
            return <PopularItem
                size="small"
                enumeration={startIndex + index + 1}
                title={item.title}
                author={item.author}
                location={item.location}
            />;;
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

    useEffect(() => {
        const newData = dummyData.slice(startIndex, endIndex + 1);
        setSelectedData(newData);
    }, [dummyData, startIndex, endIndex]);

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
                            <h3>Featured Article Title</h3>
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
                            {
                                const array = [false, false, false, false];
                                array[0] = true;
                                setSelectedSpace(array);
                            }
                        }}>
                        <a>
                            Work Space
                        </a>
                    </div>

                    <div className={selectedSpace[1] ? "contentSpaceSelected" : "contentSpaceUnselected"}
                        onClick={() => {
                            {
                                const array = [false, false, false, false];
                                array[1] = true;
                                setSelectedSpace(array);
                            }
                        }}>
                        <a>
                            Study Space
                        </a>
                    </div>

                    <div className={selectedSpace[2] ? "contentSpaceSelected" : "contentSpaceUnselected"}
                        onClick={() => {
                            {
                                const array = [false, false, false, false];
                                array[2] = true;
                                setSelectedSpace(array);
                            }
                        }}>
                        <a>
                            Life Space
                        </a>
                    </div>

                    <div className={selectedSpace[3] ? "contentSpaceSelected" : "contentSpaceUnselected"}
                        onClick={() => {
                            {
                                const array = [false, false, false, false];
                                array[3] = true;
                                setSelectedSpace(array);
                            }
                        }}>
                        <a>
                            Team Space
                        </a>
                    </div>
                </div>
                <div class="grid-content-container">
                    <ContentItem/>
                    <ContentItem/>
                    <ContentItem/>
                    <ContentItem/>
                    <ContentItem/>
                    <ContentItem/>
                </div>
            </div>
        </div>
    );
};

export default Home;
