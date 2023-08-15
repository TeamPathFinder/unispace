

const InternshipListing = ({ company, position, location, isPaid, postTime, isNew }) => {
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
                <a>
                    {isPaid ? 'Paid' : 'Unpaid'}
                </a>
                <a className="fw-800" style={{color: 'rgba(0,0,0,0.5)'}}>
                    {postTime}
                </a>
            </div>
        </div>
    );
}

export default InternshipListing;