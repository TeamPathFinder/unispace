// MobileNavbar.js
import React from 'react';
import './MobileNavbar.css';

const UniSpaceSloganLogo = () => {
	return (
		<img
			className="mobile-navbar-slogan-logo"
			src={require('../../../assets/Unispace_Logos_Slogan_Logo_Black.png')}
			alt="Unispace Logo"
		/>
	);
};

const MobileNavLinks = () => {
	return <div className="Mobile-NavLink-text">Internship {'>'}</div>;
};

const MobileSidebar = () => {
	return <div>Sidebar goes here</div>;
};

const MobileNavPhrase = () => {
	return (
		<p className="mobile-navbar-phrase">
			{' '}
			Your Space for upcoming <strong>2024 Summer Internships</strong>{' '}
		</p>
	);
};

const MobileNavbar = () => {
	// Mobile navbar specific logic and layout
	return (
		<div className="mobile-navbar-container">
			<div className="mobile-navbar">
				<div className="mobile-navbar-logo">
					<UniSpaceSloganLogo />
				</div>
				<div className="mobile-navbar-links">
					<MobileNavLinks />
				</div>
			</div>
			<div className="mobile-navbar-phrase-container">
				<MobileNavPhrase />
			</div>
		</div>
	);
};

export default MobileNavbar;
