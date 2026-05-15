import React, { MouseEvent, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { CgProfile } from 'react-icons/cg';
import { FaLink } from 'react-icons/fa6';
import 'animate.css';
import ThemeToggleButton from './ThemeToggleButton';

interface AlertState {
	top: string;
	left: string;
	animationClass: string;
	isOpen: boolean;
}

export const ShareBar: React.FC = () => {
	const refBlogPostLink = useRef<HTMLButtonElement>(null);
	const refAlert = useRef<HTMLDivElement>(null);

	const [alertState, setAlertState] = useState<AlertState>({
		top: '0px',
		left: '0px',
		animationClass: '',
		isOpen: false,
	});

	const blogPostLinkHandler = () => {
		navigator.clipboard.writeText(window.location.href);

		let calculatedTop = '0px';
		let calculatedLeft = '0px';

		if (refBlogPostLink.current) {
			const linkRect = refBlogPostLink.current.getBoundingClientRect();
			const alertWidth = refAlert.current ? refAlert.current.getBoundingClientRect().width : 220;

			calculatedTop = `${linkRect.y + window.scrollY - 240}px`;
			calculatedLeft = `${linkRect.x + window.scrollX - alertWidth - 30}px`;
		}

		setAlertState({
			top: calculatedTop,
			left: calculatedLeft,
			animationClass: 'animate__fadeIn',
			isOpen: true,
		});

		setTimeout(() => {
			setAlertState((prevState) => ({
				...prevState,
				animationClass: 'animate__fadeOut',
			}));
		}, 2000);
	};

	const handleAnimationEnd = () => {
		if (alertState.animationClass === 'animate__fadeOut') {
			setAlertState((prevState) => ({
				...prevState,
				isOpen: false,
				animationClass: '',
			}));
		}
	};

	const handleProfileClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		window.open('https://neobliz1.github.io/oldschool_profile_page/', '_blank');
	};

	return (
		<div className="d-grid gap-2 d-flex justify-content-end mb-2 position-relative">
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
					onAnimationEnd={handleAnimationEnd}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="bi flex-shrink-0 me-2"
						role="img"
						aria-label="Success:"
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						fill="currentColor"
					>
						<path
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
					</svg>
					<div>Link successfully copied</div>
				</div>
			)}
			<ThemeToggleButton />
			<IconContext.Provider value={{ size: '1.5em' }}>
				<button
					id="blogPostLink"
					aria-label="Copy current link"
					ref={refBlogPostLink}
					className="mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon"
					onClick={blogPostLinkHandler}
				>
					<FaLink />
				</button>
				<button
					id="linkToProfile"
					aria-label="Profile page"
					className="mr-2 btn btn-outline-dark rounded-circle shareBarProfileIcon"
					onClick={handleProfileClick}
				>
					<CgProfile />
				</button>
			</IconContext.Provider>
		</div>
	);
};
