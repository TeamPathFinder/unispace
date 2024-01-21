import axios from 'axios';

// Set API URL according to environment
let baseURL;
if (process.env.REACT_APP_NODE_ENV === 'production') {
	baseURL = process.env.REACT_APP_UNISPACE_API_URL;
} else {
	baseURL = process.env.REACT_APP_BASE_API_URL;
}

const handleJobClick = (job_id) => {
    axios.post(`${baseURL}/api/internship/increase-view-count/`, {
        id: job_id
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}

const InternshipListing = ({ job_id, company, position, city, country, viewCount, isNew , url }) => {
    const onClick = () => {
		handleJobClick(job_id);
	};

    return (
			<a href={url} onClick={onClick} target="_blank" rel="noopener noreferrer">
				<div className="internship-listing-container">
					<div
						className={`internship-listing-grid ${
							isNew ? 'with-decoration' : ''
						}`}
					>
						<p className="fw-500 textWithEllipsis">{company}</p>
						<p className="fw-800">{position}</p>
						<p>{city != 'Remote' ? `${city}, ${country}` : 'Remote'}</p>
						<p className="view-count">
							<div className="view-count-num"> {viewCount} </div>
							<div>Viewed</div>
						</p>
					</div>
				</div>
			</a>
		);
};

export default InternshipListing;