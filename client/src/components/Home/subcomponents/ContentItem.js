import React, { useState } from 'react';
import '../Home.css';
import authorImg from '../../../assets/unispace_planet_oceania.png';
import { ReactComponent as MapPin } from '../../../assets/map_pin.svg';
import { ReactComponent as ViewsIcon } from '../../../assets/views_icon.svg';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

/**
 * This is one of the popular item entries. 
 * @param {int} id - id
 * @param {string} title - title of popular item
 * @param {string} author - author
 * @param {string} location - location
 * @param {int} views - views
 * @param {string} subCategory - category of content, e.g. Work & Job, Know - How, etc
 * @param {string} image - path url to image
 */

const ContentItem = ({ id, title, author, location, views, subCategory, image }) => {

    const thumbnailImg = image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover' } : { backgroundColor: 'pink' };

    return (
        <LinkContainer to={`/interviews/${id}`}>
            <div className="grid-item verticalFlex">
                <div className="flex contentThumbnail"
                    style={thumbnailImg}
                />
                <div className="verticalFlex contentInfo">
                    <div className="verticalFlex contentCategory">
                        <a> {subCategory ? subCategory : "Know-How !"}</a>
                    </div>
                    <div className='flex contentItemTitle'>
                        <h3 style={{ margin: '0' }}> {title ? title : "Lorem Ipsum"} </h3>
                    </div>

                    <div className="flex popularItemsLastRow">
                        <div className="flex authorName">
                            <img className="authorImg" src={authorImg} style={{ height: '20px', marginRight: '8px' }}></img>
                            <a> {author ? author : "writer"} </a>
                        </div>

                        <div className="flex contentItemLocation">
                            <MapPin className="mapPin" style={{ marginRight: '3px' }}></MapPin>
                            <a> {location ? location : "france"} </a>
                        </div>
                        <div className="flex contentItemLocation">
                            <ViewsIcon className="contentIcons"></ViewsIcon>
                            <a> {views ? views : "3.5K"}</a>
                        </div>

                    </div>

                </div>
            </div>
        </LinkContainer>
    )
}

export default ContentItem