import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
//import bootstrap JS
import 'bootstrap/js/dist/modal';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkImgsRender } from '../fucnForApp.js';
//import Redux actions and selectors
import {
	imgsRenderedSetState,
	spinnerIsShowingSetState,
	childRootIsShowingSetState,
	selectImgsRendered,
	selectpageTitle,
	setPageTitle,
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
export const MainContainer = (props) => {
	const location = useLocation().pathname;
	const redirectLocation = useLocation().search;
	const pageTopRef = useRef(null);
	//imgs rendered handler
	const imgsRendered = useSelector(selectImgsRendered);
	const dispatch = useDispatch();

	//scroll top scroll to the top of the page
	useEffect(() => {
		pageTopRef.current.scrollIntoView(true);
	}, [location]);

	//img check handler
	useLayoutEffect(() => {
		console.log('img checked');
		//disable scrolling while content is loading
		document.body.style.overflow = 'hidden';
		//get img collection from current page
		const imgArr = document.getElementsByTagName('img');
		console.log(imgArr.length);
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<div ref={pageTopRef} id="container" className="mainContainer">
			<header
				id="header"
				className="justify-content-center header"
				style={{ minHeight: '100px' }}>
				<HeaderComponent />
				<div className="position-absolute header headerOverlay p-0 d-flex align-items-center">
					<h2 className={'ms-4 mt-1 star-robot-font mw-100 headerFontSize'}>
						Code Adventures Reminder
					</h2>
				</div>
			</header>
			<nav id="navigationPanel" className="justify-content-between mx-1 px-3">
				<div id="navBar" className="navBar mt-2">
					<div id="linkLocation" className="d-flex mb-1 linkLocation">
						<h3 className={'mb-0 linkLocation'}>
							{useSelector(selectpageTitle)}
						</h3>
					</div>
					<div
						id="groupPostsNavigation"
						className="d-flex align-items-end justify-content-end">
						{
							//conditional rendering
							redirectLocation !== '' && (
								<Link to="/personal_blog_bootstrapped_by_react">
									<h6 className={'me-4 navLink'} style={{ color: '#0d6efd' }}>
										{'<- Recent posts'}
									</h6>
								</Link>
							)
						}
						{redirectLocation !== '?redirect=AllPosts' && (
							<Link to="/personal_blog_bootstrapped_by_react/?redirect=AllPosts">
								<h6 className="navLink" style={{ color: '#0d6efd' }}>
									View all posts -{'>'}
								</h6>
							</Link>
						)}
					</div>
				</div>
				<hr />
				<ShareBar />
			</nav>
			<section className="m-0 p-0" id="postContainer">
				<Outlet />
				{/*pass context props to outlet*/}
			</section>
		</div>
	);
};

export const NotFound = () => {
	const dispatch = useDispatch();
	const pageTitle = 'Code Adventures Reminder';
	//dispatch page title
	useEffect(() => {
		dispatch(setPageTitle(pageTitle));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
//shows only 4 last posts
export const RecentPosts = () => {
	const dispatch = useDispatch();
	const pageTitle = 'Recent posts';

	//dispatch page title
	useEffect(() => {
		dispatch(setPageTitle(pageTitle));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="cardContainer px-3">
			<div className="m-2 col-11 col-sm-11 col-lg-6 col-xxl-5">
				<FirstGradeArithmeticTrainer />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3 smallCard">
				<TwentyFivePlusFiveClock />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3 smallCard">
				<JavaScriptCalculator />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3 smallCard">
				<DrumMachinePost />
			</div>
		</div>
	);
};
//create recent posts component
export const AllPosts = () => {
	const dispatch = useDispatch();
	const pageTitle = 'All posts';
	//dispatch page title
	useEffect(() => {
		dispatch(setPageTitle(pageTitle));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="cardContainer px-3">
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<FirstGradeArithmeticTrainer />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<TwentyFivePlusFiveClock />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<JavaScriptCalculator />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<DrumMachinePost />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<MarkdownPreviewerPost />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<RandomQuoteMachine />
			</div>
			<div className="m-2 col-11 col-sm-5 col-lg-4 col-xxl-3">
				<WCPost />
			</div>
		</div>
	);
};
const FirstGradeArithmeticTrainer = () => {
	const [cardImgSrc] = useState(
		require('../../imgs/DALL·E_2023_01_13_06_30_13_Arithmetic_simulator_for_first_grade_tiny.png'),
	); //setImg src

	return (
		<Link
			to="/personal_blog_bootstrapped_by_react/?redirect=first_grade_arithmetic_trainer"
			className="text-dark text-decoration-none">
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
					<p>Money likes counting.</p>
					<p className="card-text">Pet Project.</p>
				</div>
			</div>
		</Link>
	);
};
const TwentyFivePlusFiveClock = () => {
	const [cardImgSrc] = useState(
		require('../../imgs/jessica-delp-_25+5clock-unsplash_tiny.jpg'),
	); //setImg src

	return (
		<Link
			to="/personal_blog_bootstrapped_by_react/?redirect=twenty_five_plus_five_clock"
			className="text-dark text-decoration-none">
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
					<p>Time and Tide waits for none.</p>
					<p className="card-text">FreeCodeCamp Project.</p>
				</div>
			</div>
		</Link>
	);
};
const JavaScriptCalculator = () => {
	const [cardImgSrc] = useState(
		require('../../imgs/recha-oktaviani-calculator-unsplash_tiny.jpg'),
	); //setImg src

	return (
		<Link
			to="/personal_blog_bootstrapped_by_react/?redirect=javaScript_calculator"
			className="text-dark text-decoration-none">
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
					<p className="card-title">Calculations - it's simple.</p>
					<p className="card-text">FreeCodeCamp Project.</p>
				</div>
			</div>
		</Link>
	);
};
const DrumMachinePost = () => {
	const [cardImgSrc] = useState(
		require('../../imgs/yianni-mathioudakis-drum_pad-unsplash_tiny.jpg'),
	); //setImg src

	return (
		<Link
			to="/personal_blog_bootstrapped_by_react/?redirect=drum_machine"
			className="text-dark text-decoration-none">
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
					<p className="card-title">Set drum make fun.</p>
					<p className="card-text">FreeCodeCamp Project.</p>
				</div>
			</div>
		</Link>
	);
};
const MarkdownPreviewerPost = () => {
	const [cardImgSrc] = useState(
		require('../../imgs/lyman-hansel-gerona-C3POunsplash_tiny.jpg'),
	); //setImg src

	return (
		<Link
			to="/personal_blog_bootstrapped_by_react/?redirect=markdown_previewer"
			className="text-dark text-decoration-none">
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
					<p className="card-title">Parsing & Interpreting making it easy.</p>
					<p className="card-text">FreeCodeCamp Project.</p>
				</div>
			</div>
		</Link>
	);
};
const RandomQuoteMachine = () => {
	const [cardImgSrc] = useState(require('../../imgs/today_was_a_good_day.jpg')); //setImg src

	return (
		<Link
			to="/personal_blog_bootstrapped_by_react/?redirect=random_quote_machine"
			className="text-dark text-decoration-none">
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
		<Link
			to="/personal_blog_bootstrapped_by_react/?redirect=blogPostAboutWebchat"
			className="text-dark text-decoration-none">
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
