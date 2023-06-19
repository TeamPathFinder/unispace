import React, { useState, useEffect } from 'react';
import './Home.css';
import { ReactComponent as NavLeftArrow } from '../../assets/navLeftArrow.svg';
import { ReactComponent as NavRightArrow } from '../../assets/navRightArrow.svg';
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';
import PopularItem from './subcomponents/PopularItem';

import dummyData from './dummyData';

const Home = () => {

    //variables to keep tracking of arrow nav of popular items section
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3);
    const [selectedData, setSelectedData] = useState([]);
    const [focusedEllipse, setFocusedEllipse] = useState(0);

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
                        <Ellipse className={focusedEllipse===0 ? "popularItemsEllipseFocused" : "popularItemsEllipseUnfocused"} />
                        <Ellipse className={focusedEllipse===1 ? "popularItemsEllipseFocused" : "popularItemsEllipseUnfocused"} />
                        <Ellipse className={focusedEllipse===2 ? "popularItemsEllipseFocused" : "popularItemsEllipseUnfocused"} />
                        <div onClick={handleNext}>
                        <NavRightArrow className="popularItemsNavArrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mainArticles">
                <a> articles come here, make another grid for the articles </a>
            </div>
        </div>
    );
};

export default Home;
