import React from 'react';
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
	// const tumblrLink =
	//   "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=";
	// const tumblrShareSourceLink = "&canonicalUrl=" + window.location.href;

	const twitterShareLink =
		twitLink +
		encodeURIComponent(pageTitle + ' by @neobliz1 ' + window.location.href);
	// const [tumblrShareLink, setTumblrShareLink] = useState(
	//   tumblrLink +
	//     encodeURIComponent(author) +
	//     "&content=" +
	//     encodeURIComponent(quotation) +
	//     tumblrShareSourceLink
	// );

	return (
		<div className="d-grid gap-2 d-flex justify-content-end mb-2">
			<button
				id="blogPostLink"
				className={
					'mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon'
				}
				onClick={(e) => {
					e.preventDefault();
					window.open('https://neobliz1.github.io/', '_blank');
				}}>
				<FaLink />
			</button>
			<button
				id="tumblrLink"
				className={
					'mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon'
				}
				onClick={(e) => {
					e.preventDefault();
					window.open('https://neobliz1.github.io/', '_blank');
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
