import React, { useState } from 'react';
import '../Home.css';
import authorImg from '../../../assets/unispace_planet_oceania.png';
import { ReactComponent as MapPin } from '../../../assets/map_pin.svg';
import { ReactComponent as ViewsIcon } from '../../../assets/views_icon.svg';

/**
 * This is one of the popular item entries. 
 * @param {string} title - title of popular item
 * @param {string} author - author
 * @param {string} location - location
 * @param {int} views - views
 * @param {string} category - category of content, e.g. Work & Job, Know - How, etc
 */

const ContentItem = () => {
    return (
        <div className="grid-item verticalFlex">
            <div className="flex contentThumbnail">

            </div>
            <div className="verticalFlex contentInfo">
                <div className="verticalFlex contentCategory">
                    <a> Know-How !</a>
                </div>
                <div className='flex contentItemTitle'>
                    <h3 style={{ margin: '0' }}> Lorem Ipsum </h3>
                </div>

                <div className="flex popularItemsLastRow">
                    <div className="flex authorName">
                        <img className="authorImg" src={authorImg} style={{height: '20px', marginRight:'8px'}}></img>
                        <a> yoink </a>
                    </div>

                    <div className="flex contentItemLocation">
                        <MapPin className="mapPin" style={{marginRight: '3px'}}></MapPin>
                        <a> France </a>
                    </div>
                    <div className="flex contentItemLocation">
                        <ViewsIcon className="contentIcons"></ViewsIcon>
                        <a> 3.5K</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContentItem