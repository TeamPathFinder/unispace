import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000';

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