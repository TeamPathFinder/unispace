import React from "react"
import "../Interview.css"
import { ReactComponent as MapPin } from '../../../assets/map_pin.svg';
import { ReactComponent as ViewsIcon } from '../../../assets/views_icon.svg';


/**
 * This is title/information box of the interview page.
 * @param {string} category - category
 * @param {string} title - title 
 * @param {string} location - location
 * @param {string} views - number of views
 * @param {string} author - author name
 */

const InterviewTitle = ({ category, title, location, views, author }) => {
    // TODO: link <a> tags to appropriate pages after implementation

    return (
        <div className="titleContainer">
            <a className="interviewCategory">{category}</a>
            <a className="interviewTitle">{title}</a>
            <div className="titleLastRow" style={{ fontSize: '16px', fontWeight: '500' }}>
                <div className="flex contentItemLocation">
                    <MapPin className="mapPin" style={{ marginRight: '6px' }}></MapPin>
                    {/* TODO: update the icons */}
                    <a> {location} </a>
                </div>
                <div className="flex contentItemLocation" style={{ marginLeft: '3vw' }}>
                    <ViewsIcon className="contentIcons" style={{ marginRight: '6px' }}></ViewsIcon>
                    <a> {views}</a>
                </div>
                <a style={{ display: 'flex', marginLeft: 'auto' }}>by. {author ? author : 'Writer'}</a>
            </div>
        </div>
    );
}

export default InterviewTitle