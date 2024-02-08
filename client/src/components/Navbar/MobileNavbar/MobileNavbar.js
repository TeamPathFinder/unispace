// MobileNavbar.js
import React, { useState } from 'react';
import './MobileNavbar.css';
import { useLocation } from 'react-router-dom';
import MobileSidebar from './MobileSidebar';

const UnispaceSloganLogo = () => {
	return (
		<img
			className="mobile-navbar-slogan-logo"
			src={require('../../../assets/Unispace_Logos_Slogan_Logo_Black.png')}
			alt="Unispace Slogan Logo"
		/>
	);
};

const MobileNavbar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();

	const getButtonText = (pathname) => {
		switch (pathname) {
			case '/en/internship':
			case '/kr/internship':
				return 'Internship';
			case '/en/coffee_chat':
			case '/kr/coffee_chat':
				return 'Coffee Chat';
			case '/en/career':
			case '/kr/career':
				return 'Career';
			case '/en/blog':
			case '/kr/blog':
				return 'Blog';
			default:
				return 'Links';
		}
	};

	// Get the button text based on the current location
	const currLocation = getButtonText(location.pathname);

	return (
		<>
			<div className="mobile-navbar-container">
				<div className="mobile-navbar">
					<div className="mobile-navbar-logo">
						<UnispaceSloganLogo />
					</div>
					<div className="mobile-navbar-links">
						<button
							onClick={() => setSidebarOpen(true)}
							className="mobile-navbar-links-button"
						>
							{currLocation}{' '}
							<img
								src={require('../../../assets/right_arrow.png')}
								alt="Right Arrow"
								className="mobile-navbar-links-button-icon"
							/>
						</button>
					</div>
				</div>
			</div>
			<MobileSidebar
				isOpen={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>
		</>
	);
};

export default MobileNavbar;
