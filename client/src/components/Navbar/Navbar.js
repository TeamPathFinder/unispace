import React, { useEffect, useState } from 'react';
import './Navbar.css';
import MobileNavbar from './MobileNavbar/MobileNavbar';

import { ReactComponent as UniSpaceLogo } from '../../assets/UnispaceLogo.svg';
import { ReactComponent as English } from '../../assets/english.svg';
import { ReactComponent as Korean } from '../../assets/korean.svg';
import { Link, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLanguage } from '../../LanguageContext';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 991 });
	return isMobile ? children : null;
};

const NavigationLinks = ({ isEnglish, activateLink, topLocation }) => {
	return (
		<div className="flex fd-row nav-category-container">
			<LinkContainer
				to={isEnglish ? '/en/coffee_chat' : '/kr/coffee_chat'}
				className={activateLink('coffee_chat')}
			>
				<a>{isEnglish ? 'Coffee Chat' : '커피챗'}</a>
			</LinkContainer>

			<LinkContainer
				to={isEnglish ? '/en/internship' : '/kr/internship'}
				className={activateLink('internship')}
			>
				<a>{isEnglish ? 'Internship' : '인턴십'}</a>
			</LinkContainer>

			<LinkContainer
				to={isEnglish ? '/en/career' : '/kr/career'}
				className={activateLink('career')}
			>
				<a>{isEnglish ? 'Career' : '커리어'}</a>
			</LinkContainer>

			<LinkContainer
				to={isEnglish ? '/en/blog' : '/kr/blog'}
				className={activateLink('blog')}
			>
				<a>{isEnglish ? 'Blog' : '블로그'}</a>
			</LinkContainer>
		</div>
	);
};

const DesktopNavbar = ({ isEnglish, activateLink, topLocation }) => {
	return (
		<div className="navbar-underline">
			<div className="navbar-container">
				<LinkContainer
					to={isEnglish ? '/en' : '/kr'}
					style={{ cursor: 'pointer' }}
				>
					<UniSpaceLogo className="logo" />
				</LinkContainer>
				<NavigationLinks
					isEnglish={isEnglish}
					activateLink={activateLink}
					topLocation={topLocation}
				/>
				<div className="languageButtons">
					{console.log(isEnglish)}
					<LinkContainer
						to={`/kr/${topLocation}`}
						style={{ height: '100%', width: '20px' }}
					>
						<Korean
							style={{ height: '20px' }}
							className={isEnglish ? 'language' : 'language active'}
							// stroke={isEnglish ? "#FFFFFF": "#111111"}
						/>
					</LinkContainer>
					<LinkContainer
						to={`/en/${topLocation}`}
						style={{ height: '100%', width: '20px' }}
					>
						<English
							style={{ height: '20px' }}
							className={isEnglish ? 'language active' : 'language'}
						/>
					</LinkContainer>
				</div>
			</div>
		</div>
	);
};

const Navbar = () => {
	// let { isEnglish } = useLanguage();
	const isMobile = useMediaQuery({ maxWidth: 600 });
	const [isEnglish, setIsEnglish] = useState(true);
	let selectedLanguage = useLocation().pathname.split('/')[1];
	let topLocation = useLocation().pathname.split('/')[2];

	// default to empty string when routing to homepage
	if (!topLocation) {
		topLocation = '';
	}

	const activateLink = (location) => {
		return location === topLocation
			? 'flex nav-category-selected'
			: 'flex nav-category';
	};

	useEffect(() => {
		if (selectedLanguage == 'en') {
			setIsEnglish(true);
		} else {
			setIsEnglish(false);
		}
	}, [selectedLanguage]);

	return (
		<>
			<Desktop>
				<DesktopNavbar
					isEnglish={isEnglish}
					activateLink={activateLink}
					topLocation={topLocation}
				/>
			</Desktop>
			<Mobile>
				<MobileNavbar />
			</Mobile>
		</>
	);
};

export default Navbar;
