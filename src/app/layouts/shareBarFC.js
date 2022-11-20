import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
//import Redux selector
import { selectpageTitle } from '../../features/imgStateSlice';
import { CgProfile } from 'react-icons/cg';
import { ImTumblr } from 'react-icons/im';
import { FaLink, FaTwitter } from 'react-icons/fa';

export const ShareBar = (props) => {
	const pageTitle = useSelector(selectpageTitle);
	const twitLink =
		'https://twitter.com/intent/tweet?&related=freeCodeCamp&text=';
	const twitterShareLink =
		twitLink +
		encodeURIComponent(pageTitle + ' by @neobliz1 ' + window.location.href);

	const tumblrLink =
		'https://www.tumblr.com/widgets/share/tool?posttype=link&tags=profileBlog&caption=';
	const tumblrShareSourceLink = '&canonicalUrl=' + window.location.href;
	const tumblrShareLink =
		tumblrLink +
		encodeURIComponent(pageTitle + ' by @neobliz1 ') +
		'&content=' +
		tumblrShareSourceLink;

	//get link elemen position
	const refBlogPostLink = useRef();
	const refAlert = useRef();
	const [alertStyle, setAlertStyle] = useState({
		top: 0,
		left: 0,
		visibilityStyle: 'invisible',
	});
	//fade in link copy successful
	const blogPostLinkHandler = () => {
		//copy link
		navigator.clipboard.writeText(window.location.href);
		//get link icon width
		const alertWidth = refAlert.current.getBoundingClientRect().width;
		setAlertStyle({
			top: refBlogPostLink.current.getBoundingClientRect().y - 10 + 'px',
			left:
				refBlogPostLink.current.getBoundingClientRect().x -
				alertWidth -
				10 +
				'px',
			visibilityStyle: 'animate__fadeIn',
		});
		setTimeout(function () {
			setAlertStyle((prevState) => ({
				top: prevState.top,
				left: prevState.left,
				visibilityStyle: 'animate__fadeOut',
			}));
		}, 2000);
	};

	const alertResetStyle = () => {
		if (alertStyle.visibilityStyle === 'animate__fadeOut') {
			setAlertStyle((prevState) => ({
				top: 0,
				left: 0,
				visibilityStyle: prevState.visibilityStyle,
			}));
		}
	};

	return (
		<div className="d-grid gap-2 d-flex justify-content-end mb-2">
			<div
				id="linkSuccessCopy"
				className={
					'position-absolute alert alert-success d-flex align-items-center animate__animated fast ' +
					alertStyle.visibilityStyle
				}
				role="alert"
				ref={refAlert}
				style={{
					top: alertStyle.top,
					left: alertStyle.left,
				}}
				onAnimationEnd={alertResetStyle}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="bi flex-shrink-0 me-2"
					role="img"
					aria-label="Success:">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
				</svg>
				<div>Link successful copied</div>
			</div>
			<button
				id="blogPostLink"
				ref={refBlogPostLink}
				className={
					'mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon'
				}
				onClick={blogPostLinkHandler}>
				<FaLink />
			</button>
			<button
				id="tumblrLink"
				className={
					'mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon'
				}
				onClick={(e) => {
					e.preventDefault();
					window.open(tumblrShareLink, '_blank');
				}}>
				<ImTumblr />
			</button>
			<button
				id="twitterLink"
				className={
					'mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon'
				}
				// + fontSizes.p}

				onClick={(e) => {
					e.preventDefault();
					window.open(twitterShareLink, '_blank');
				}}>
				<FaTwitter />
			</button>
			<button
				id="linkToProfile"
				className={
					'mr-2 btn btn-outline-dark rounded-circle shareBarProfileIcon'
				}
				onClick={(e) => {
					e.preventDefault();
					window.open('https://neobliz1.github.io/', '_blank');
				}}>
				<CgProfile />
			</button>
		</div>
	);
};
