import React, { useEffect, useState } from 'react';
import '../Home.css';
import { ReactComponent as MapPin } from '../../../assets/map_pin.svg';
import authorImg from '../../../assets/unispace_planet_oceania.png';
import { ReactComponent as ArrowImg } from '../../../assets/arrow.svg';
import { Link } from "react-router-dom";

/**
 * This is one of the popular item entries. 
 * @param {string} size - either big, medium, or small.
 * @param {int} enumeration - number on left of popularItem
 * @param {string} title - title of popular item
 * @param {string} author - author
 * @param {string} location - location
 */
const PopularItem = ({ size, enumeration, title, author, location }) => {

    //dimensions of the container itself
    const [dimensions, setDimensions] = useState({
        height: '55%',
        width: '55%',
    });

    //inline style change to align the line between the number and content, 
    //as width changes mean they are no longer aligned in a row.
    const [enumerationWidth, setEnumerationWidth] = useState({
        'flexBasis': '10%'
    });

    const [contentWidth, setContentWidth] = useState({
        'flexBasis': '80%'
    });

    const [headerFontSize, setHeaderFontSize] = useState({
        'fontSize': '1.5vw'
    });

    const [titleOptions, setTitleOptions] = useState({
        'height': '33%'
    })

    // to dynamically change css at runtime depending whether we need big, medium, or small popular item
    useEffect(() => {
        if (size === 'medium') {
            setDimensions({
                'height': '55%',
                'width': '40%',
            });
            setHeaderFontSize({
                'fontSize': '1.3vw'
            });
        } else if (size === 'small') {
            setDimensions({
                'height': '15%',
                'width': '100%',
            });
            setTitleOptions({
                'height': '60%',
                'display': 'flex',
                'marginTop': 'auto',
                'marginBottom': 'auto',
                'alignItems': 'center'
            });
            setEnumerationWidth({
                'flexBasis': '5%',
                'alignItems': 'center',
                'alignContent': 'center',
                'justifyContent': 'center',
                'justifyItems': 'center',
            });
            setContentWidth({
                'flexBasis': '89.2%',
                'marginTop': '0',
                'flexDirection': 'row',
                'justifyContent': 'space-between',
                'marginRight': '2%'
            });
            setHeaderFontSize({
                'fontSize': '1.1vw',
                'marginTop': 'auto',
                'marginBottom': 'auto'
            });
        }
    }, [size]);

    return (
        <>
            {size !== "small" ? //if size is medium or large, return this
                <>
                    <div className="flex popularItem" style={dimensions}>
                        <Link to="/somewhere" style={{ "textDecoration": "none", "margin": "0", "padding": "0", "height": "100%", "width": "100%", "display": "contents" }}>
                            <div className="flex popularItemNumber" style={enumerationWidth}>
                                <a> {enumeration} </a>
                            </div>
                            <div className="flex popularItemInfo" style={contentWidth}>
                                {/* title */}
                                <div className="flex popularItemTitle" style={titleOptions}>
                                    <h3 style={headerFontSize}> {title} </h3>
                                </div>
                                {/* location */}
                                <div className="flex popularItemLocation">
                                    <MapPin className="mapPin"></MapPin>
                                    <a> {location} </a>
                                </div>
                                {/* last row containing author name and read button */}
                                <div className="flex popularItemsLastRow">
                                    <div className="flex authorName">
                                        <img className="authorImg" src={authorImg}></img>
                                        <a> {author} </a>
                                    </div>

                                    <div className="popularItemReadButton">
                                        <a> Read </a>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>

                </> : // if size is small, return this:
                <>
                    <div className="flex popularItem" style={dimensions}>
                        <Link to="/another-page" style={{ "textDecoration": "none", "margin": "0", "padding": "0", "height": "100%", "width": "100%", "display": "contents" }}>
                            <div className="flex popularItemNumber" style={enumerationWidth}>
                                <a> {enumeration} </a>
                            </div>
                            <div className="flex popularItemInfo" style={contentWidth}>
                                {/* title */}
                                <div className="flex popularItemTitle" style={titleOptions}>
                                    <h3 style={headerFontSize}> {title} </h3>
                                </div>

                                {/* last row containing location and read button */}
                                <div className="popularItemsLastRow flex" style={
                                    {
                                        'width': '40%',
                                        'alignItems': 'center',
                                        'margin': '0',
                                        'height': '100%',
                                        'justifyContent': 'flex-end'
                                    }}>
                                    <div className="flex popularItemLocation" style={{ 'margin': '0', 'alignSelf': 'center', 'alignItems': 'center' }}>
                                        <MapPin className="mapPin"></MapPin>
                                        <a> {location} </a>
                                    </div>

                                    <div className="flex popularItemArrowButton">
                                        <ArrowImg className="arrowSvg"></ArrowImg>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                </>
            }
        </>
    );
}

export default PopularItem