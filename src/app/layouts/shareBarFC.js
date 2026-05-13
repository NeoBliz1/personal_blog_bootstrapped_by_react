import React, { useRef, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaLink } from 'react-icons/fa';
import 'animate.css';

export const ShareBar = (props) => {
	const refBlogPostLink = useRef();
	const refAlert = useRef();

	const [alertState, setAlertState] = useState({
		top: '0px',
		left: '0px',
		animationClass: '',
		isOpen: false, // Tracks structural mounting state
	});

	const blogPostLinkHandler = () => {
		navigator.clipboard.writeText(window.location.href);

		let calculatedTop = '0px';
		let calculatedLeft = '0px';

		if (refBlogPostLink.current) {
			const linkRect = refBlogPostLink.current.getBoundingClientRect();
			const alertWidth = refAlert.current ? refAlert.current.getBoundingClientRect().width : 220;

			calculatedTop = (linkRect.y + window.scrollY) - 240 + 'px';
			calculatedLeft = (linkRect.x + window.scrollX) - alertWidth - 30 + 'px';
		}

		setAlertState({
			top: calculatedTop,
			left: calculatedLeft,
			animationClass: 'animate__fadeIn',
			isOpen: true,
		});

		setTimeout(function () {
			setAlertState((prevState) => ({
				...prevState,
				animationClass: 'animate__fadeOut',
			}));
		}, 2000);
	};

	// Unmount the alert from the page structure when fadeOut completes
	const handleAnimationEnd = () => {
		if (alertState.animationClass === 'animate__fadeOut') {
			setAlertState((prevState) => ({
				...prevState,
				isOpen: false,
				animationClass: '',
			}));
		}
	};

	return (
		<div className="d-grid gap-2 d-flex justify-content-end mb-2 position-relative">
			{/* Conditional expression rendering layout blocks dynamically */}
			{alertState.isOpen && (
				<div
					id="linkSuccessCopy"
					className={`position-absolute alert alert-success d-flex align-items-center animate__animated fast ${alertState.animationClass}`}
					role="alert"
					ref={refAlert}
					style={{
						top: alertState.top,
						left: alertState.left,
						zIndex: 1050,
					}}
					onAnimationEnd={handleAnimationEnd}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="bi flex-shrink-0 me-2"
						role="img"
						aria-label="Success:">
						<path
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
					</svg>
					<div>Link successful copied</div>
				</div>
			)}
			<button
				id="blogPostLink"
				aria-label="Copy current link"
				ref={refBlogPostLink}
				className="mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon"
				onClick={blogPostLinkHandler}>
				<FaLink />
			</button>
			<button
				id="linkToProfile"
				aria-label="Profile page"
				className="mr-2 btn btn-outline-dark rounded-circle shareBarProfileIcon"
				onClick={(e) => {
					e.preventDefault();
					window.open('https://github.io', '_blank');
				}}>
				<CgProfile />
			</button>
		</div>
	);
};
