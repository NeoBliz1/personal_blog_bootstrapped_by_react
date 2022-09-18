import React, { useState, useLayoutEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkImgsRender, wordSplit } from '../fucnForApp.js';
import {
	imgsRenderedSetState,
	spinnerIsShowingSetState,
	childRootIsShowingSetState,
	selectImgsRendered,
} from '../../features/imgStateSlice';

import { ShareBar } from './shareBarFC';

//create header component
const HeaderComponent = () => {
	const [headerSrc] = useState(require('../../imgs/header_img.png'));
	return (
		<img
			src={headerSrc}
			className="p-0 position-relative headerImg"
			id="headersImg"
			alt="header_img"
		/>
	);
};
//main container component
export const MainContainer = () => {
	//imgs rendered handler
	let location = useLocation().pathname;
	const imgsRendered = useSelector(selectImgsRendered);
	const dispatch = useDispatch();

	//img check handler
	useLayoutEffect(() => {
		console.log('img checked');
		//disable scrolling while content is loading
		document.body.style.overflow = 'hidden';
		//get img collection from current page
		const imgArr = document.getElementsByTagName('img');
		//if imgRender have already checked, and location changed
		//then toggle img and loader states
		if (imgsRendered) {
			dispatch(imgsRenderedSetState());
			dispatch(spinnerIsShowingSetState());
			dispatch(childRootIsShowingSetState());
		}
		//execute promise for each img on the page, check if imgs rendered
		checkImgsRender(imgArr).then((value) => {
			value && dispatch(imgsRenderedSetState());
		});
	}, [location]);

	return (
		<div id="container" className="mainContainer">
			<div
				id="header"
				className="justify-content-center header"
				style={{ minHeight: '100px' }}>
				<HeaderComponent />
				<div className="position-absolute header headerOverlay p-0 d-flex align-items-center">
					<h2 className={'ms-4 mt-1 star-robot-font mw-100 headerFontSize'}>
						Code Adventures Reminder
					</h2>
				</div>
			</div>
			<div id="navigationPanel" className="justify-content-between mx-1 px-3">
				<div id="navBar" className="navBar mt-2">
					<div id="linkLocation" className="d-flex mb-1 linkLocation">
						<h3 className={'mb-0 linkLocation'}>{wordSplit(location)}</h3>
					</div>
					<div
						id="groupPostsNavigation"
						className="d-flex align-items-end justify-content-end">
						{
							//conditional rendering
							location !== '/' && location !== '/personal_blog_on_react' && (
								<Link to="personal_blog_on_react">
									<h6 className={'me-4 navLink'} style={{ color: '#0d6efd' }}>
										{'<- Recent posts'}
									</h6>
								</Link>
							)
						}
						<Link to="allPosts">
							<h6 className="navLink" style={{ color: '#0d6efd' }}>
								View all posts -{'>'}
							</h6>
						</Link>
					</div>
				</div>
				<hr />
				<ShareBar />
			</div>
			<div className="m-0 p-0" id="postContainer">
				<Outlet />
				{/*pass context props to outlet*/}
			</div>
		</div>
	);
};
export const NotFound = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-6">
				<h2>Nothing to see here!</h2>
				<h2>
					<Link to="/">Go to the recent posts</Link>
				</h2>
			</div>
		</div>
	);
};
//create recent posts component
export const RecentPosts = () => {
	return (
		<div className="cardContainer px-3">
			<div className="m-2 col-11 col-sm-11 col-lg-6 col-xxl-5">
				<RandomQuoteMachine />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3 smallCard">
				<WCPost />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3 smallCard">
				<MerryChristmasPost />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3 smallCard">
				<MerryChristmasPost />
			</div>
		</div>
	);
};
//create recent posts component
export const AllPosts = () => {
	return (
		<div className="cardContainer px-3">
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<RandomQuoteMachine />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<WCPost />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<MerryChristmasPost />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<MerryChristmasPost />
			</div>
		</div>
	);
};
const RandomQuoteMachine = () => {
	const [cardImgSrc] = useState(require('../../imgs/today_was_a_good_day.jpg')); //setImg src

	return (
		<Link to="/random_quote_machine" className="text-dark text-decoration-none">
			<div className="card">
				<div className="overflow-hidden card-img-top imgContainer">
					<img
						alt="today was a good day"
						variant="top"
						className="cardImg img-fluid"
						id="simpleImg1"
						src={cardImgSrc}
					/>
				</div>
				<div className="card-body">
					<p className="card-title">Some quotes can save lives.</p>
					<p className="card-text">FreeCodeCamp Project.</p>
				</div>
			</div>
		</Link>
	);
};
//first blogpost about website chat via telegramm (cpmponent)
const WCPost = () => {
	const [cardImgSrc] = useState(require('../../imgs/simple.jpg')); //setImg src

	return (
		<Link to="/blogPostAboutWebchat" className="text-dark text-decoration-none">
			<div className="card">
				<div className="overflow-hidden card-img-top imgContainer">
					<img
						alt="simple"
						variant="top"
						className="cardImg img-fluid"
						id="simpleImg1"
						src={cardImgSrc}
					/>
				</div>
				<div className="card-body">
					<p className="card-title">Website chat.</p>
					<p className="card-text">Messages via telegram.</p>
				</div>
			</div>
		</Link>
	);
};
//create merry crhrystmass post component
const MerryChristmasPost = () => {
	const [cardImgSrc] = useState(require('../../imgs/2554.jpg'));

	return (
		<Link to="/wrong_way" className="text-dark text-decoration-none">
			<div className="card">
				<div className="overflow-hidden card-img-top imgContainer">
					<img
						alt="merry Christmas"
						variant="top"
						src={cardImgSrc}
						className="cardImg img-fluid"
						id="christmasImg"
					/>
				</div>
				<div className="card-body">
					<p className="card-title">Merry Christmas</p>
					<p className="card-text">and happy new</p>
				</div>
			</div>
		</Link>
	);
};
