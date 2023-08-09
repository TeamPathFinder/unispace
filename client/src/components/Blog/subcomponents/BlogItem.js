import React from "react"
import LinkContainer from "react-router-bootstrap/LinkContainer";

const BlogItem = ({id, image, category, title}) => {
    const thumbnailImg = image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover' } : { backgroundColor: 'pink' };
    console.log("id is: " + id);
    return (
        <LinkContainer to={`/interview/${id}`}>
            <div className="flex fd-col blogItem">
                <div style={thumbnailImg} className="blogThumbnail"> </div>
                <div className="blogItemCategory"> <a> {category} </a> </div>
                <div className="blogItemTitle"> <a> {title} </a></div>
            </div>
        </LinkContainer>
    );
}

export default BlogItem