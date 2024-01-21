import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import './Career.css';

// Set API URL according to environment
let baseURL;
if (process.env.REACT_APP_NODE_ENV === 'production') {
	baseURL = process.env.REACT_APP_UNISPACE_API_URL;
} else {
	baseURL = process.env.REACT_APP_BASE_API_URL;
}

// ResourceCard Component
function ResourceCard({ resource }) {
	return (
		<div
			className="resource-card"
			style={{
				backgroundImage: `url(${baseURL + resource.image})`,
			}}
			onClick={() => {
				window.open(resource.link);
			}}
		>
			<div className="resource-info-container">
				<h2 className="resource-info">{resource.title}</h2>
				<p className="resource-info">{resource.description}</p>
				<p className="resource-info">{resource.hashtags}</p>
			</div>
		</div>
	);
}

// CategorySection Component
function CategorySection({ category }) {
	const [progressWidth, setProgressWidth] = useState(
		Math.floor((1 / category.resources.length) * 100)
	);

	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		swipeToSlide: true,
		afterChange: function (index) {
			setProgressWidth(
				Math.floor(((index + 1) / category.resources.length) * 100)
			);
		},
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<div className="career-slider">
			<h2> {category.name} </h2>
			<div className="progress-bar-container">
				<div className="progress-bar" style={{ width: `${progressWidth}%` }} />
			</div>
			<Slider {...settings}>
				{category.resources.map((resource) => (
					<ResourceCard key={resource.id} resource={resource} />
				))}
			</Slider>
		</div>
	);
}

const Career = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get(`${baseURL}/api/career/categories`)
			.then((res) => {
				console.log(res.data);
				setCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="internship-container flex fd-col">
			<div className="flex fd-col internship-content-container">
				<div className="flex fd-col internship-header-container">
					<h2> 커리어 </h2>
					<a>유학생을 위한 모든 정보를 모아 둔 space</a>
				</div>
				<div className="career-body-container">
					{categories.map((category) => (
						<CategorySection key={category.id} category={category} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Career;
