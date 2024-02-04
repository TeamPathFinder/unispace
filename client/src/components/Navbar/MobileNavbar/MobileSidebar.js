import React, { useState } from 'react';
import './MobileSidebar.css';
import { ReactComponent as LinkIcon } from '../../../assets/link.svg';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const MobileSlidebarLink = ({ href, onClick, children }) => {
	const location = useLocation(); // Get the current location
	const isActive = location.pathname === href;

	return (
		<LinkContainer to={href} onClick={onClick}>
			<div className={`mobile-sidebar-link ${isActive ? 'active' : ''}`}>
				<div className="mobile-sidebar-link-text">{children}</div>
				{isActive && (
					<img
						src={require('../../../assets/right_arrow.png')}
						alt="Right Arrow"
						className="mobile-sidebar-link-icon"
					/>
				)}
			</div>
		</LinkContainer>
	);
};

async function copyToClipboard(text) {
	// Use the Clipboard API to copy the text to the clipboard
	await navigator.clipboard.writeText(text);
}

const MobileSidebar = ({ isOpen, onClose }) => {
	// If the sidebar is closed, return null
	if (!isOpen) return null;
	const emailAddress = 'askteam.pathfinder@gmail.com';

	const handleInviteClick = () => {
		const url = window.location.href; // Get the current URL
		copyToClipboard(url); // Copy the URL to the clipboard
	};

	return (
		<div className="mobile-sidebar">
			{/* Logo and close button */}
			<div className="mobile-sidebar-header">
				<img
					src={require('../../../assets/Unispace_Logos_Basic_Logo_Black.png')}
					alt="Unispace Logo"
					className="mobile-sidebar-logo"
				/>
				<button onClick={onClose} className="mobile-sidebar-close-button">
					<img
						src={require('../../../assets/close_icon.png')}
						alt="Close"
						className="close-icon"
					/>
				</button>
			</div>

			{/* Links */}
			<div className="mobile-sidebar-links">
				<MobileSlidebarLink href="/en/internship" onClick={onClose}>
					Internship
				</MobileSlidebarLink>
				<MobileSlidebarLink href="/en/coffee_chat" onClick={onClose}>
					Coffee Chat
				</MobileSlidebarLink>
				<MobileSlidebarLink href="/en/career" onClick={onClose}>
					Career
				</MobileSlidebarLink>
				<MobileSlidebarLink href="/en/blog" onClick={onClose}>
					Blog
				</MobileSlidebarLink>
			</div>

			<div className="mobile-sidebar-bottom">
				{/* Invite your friends */}
				<div className="mobile-sidebar-invite-friends">
					<button className="invite-button" onClick={handleInviteClick}>
						<LinkIcon className="invite-icon" />
						Invite Your Friends
					</button>
				</div>

				{/* Additional links */}
				<div className="mobile-sidebar-additional-links">
					<a href={`mailto:${emailAddress}`} className="additional-link">
						Email
					</a>
					<a
						href="https://www.instagram.com/unispace.world/"
						className="additional-link"
					>
						Instagram
					</a>
					<a
						href="https://www.linkedin.com/company/teamunispace/about/"
						className="additional-link"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default MobileSidebar;
