

const InternshipListing = ({ company, position, location, viewCount, isNew }) => {
    return (
        <div className="internship-listing-container">
            <div className={`internship-listing-grid ${isNew ? 'with-decoration' : ''}`}>
                <a className="fw-500">
                    {company}
                </a>
                <a className="fw-800">
                    {position}
                </a>
                <a>
                    {location}
                </a>
                <a className="view-count">
					<div className="view-count-num"> {viewCount} </div>
					<div>Viewed</div>
				</a>
            </div>
        </div>
    );
};

export default InternshipListing;