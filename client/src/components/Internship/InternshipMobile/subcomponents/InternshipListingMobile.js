import axios from 'axios';
import '../InternshipMobile.css'

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

const InternshipListing = ({ job_id, company, position, city, country, viewCount, isNew, url }) => {
	const onClick = () => {
		handleJobClick(job_id);
	};

	return (
		<a href={url} onClick={onClick} target="_blank" rel="noopener noreferrer" key={job_id} style={{ display: 'contents' }}>
			<div className="mobile-internship-listing-container">
				<div
					className={`mobile-internship-listing-grid ${isNew ? 'with-decoration' : ''
						}`}
				>
					<div style={{display: 'flex', paddingTop:'10px', overflow:'hidden'}}>
						<p style={{margin:'0px', fontSize:'14px'}}className="fw-500 textWithEllipsis">{company}</p>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', paddingTop:'10px', overflow:'hidden'}}>
						<p className="textWithEllipsis" style={{margin:'0px', fontSize:'14px', fontWeight:'600', marginBottom:'4px'}}>{position}</p>
						<p style={{margin:'0px', fontSize:'12px', marginBottom:'3px'}} >{city != 'Remote' ? `${city}, ${country}` : 'Remote'}</p>
						<p style={{margin:'0px', fontSize:'10px', opacity:'50%'}} className="mobile-view-count">
							{viewCount} viewed
						</p>
					</div>
				</div>
			</div>
		</a>
	);
};

export default InternshipListing;
