import React from "react";

/**
 * Banner Entries:
 * @param {string} title - title of the interview post
 * @param {string} category - either Life Space, Work Space, Team Space, Study Space
 * @param {string} date - raw string date, e.g. 2023-07-17T04:59:46.012392Z
 * @param {string} image - link of the image
 */

const Banner = ({ title, category, date, image }) => {
    const dateFormatted = new Date(date)
    const titleFormatted = title
        .split('/')
        .map((item, i, arr) =>
            i === arr.length - 1 ? item : [item, <br key={Math.floor(i / 2)} />])

    // TODO: add responsive design

    return <div className="bannerContainer" style={{ backgroundImage: `url(${image})` }}>
        <div className="gridBannerInfo">
            <div className="bannerCategory">{category}</div>
            <div className="bannerCoffeeChatReq">*게시글을 읽고 커피챗 요청을 보내보세요!</div>
            <div className="bannerTitle">{titleFormatted}</div>
            <div className="bannerDate">{dateFormatted.toISOString().slice(0, 10).replaceAll("-", ".")}</div>
        </div>
    </div>
}

export default Banner;