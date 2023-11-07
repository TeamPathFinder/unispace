

const InternshipListing = ({ company, position, city, country, viewCount, isNew , url }) => {
    return (
			<a href={url} target="_blank">
				<div className="internship-listing-container">
					<div
						className={`internship-listing-grid ${
							isNew ? 'with-decoration' : ''
						}`}
					>
						<a className="fw-500">{company}</a>
						<a className="fw-800">{position}</a>
						<a>{`${city}, ${country}`}</a>
						<a className="view-count">
							<div className="view-count-num"> {viewCount} </div>
							<div>Viewed</div>
						</a>
					</div>
				</div>
			</a>
		);
};

export default InternshipListing;