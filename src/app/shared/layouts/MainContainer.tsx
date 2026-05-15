import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { checkImgsRender } from 'app/utils/fucnForApp';
import { useStateContext } from 'app/context/AppStateContext';
import { ShareBar } from '../components/ShareBarFC';
import { GenericGridProps } from 'app/types/typesIndex';
import { POSTS_DATA } from 'app/blog/postsData';

const BLOG_PATH = '/personal_blog_bootstrapped_by_react/';

const HeaderComponent: React.FC = () => {
	const [headerSrc] = useState(require('app/styles/imgs/header_img.png'));
	return (
		<img
			src={headerSrc}
			className="p-0 position-relative headerImg"
			id="headersImg"
			alt="header_img"
		/>
	);
};

export const MainContainer: React.FC = () => {
	const location = useLocation().pathname;
	const pageTopRef = useRef<HTMLDivElement>(null);
	const {
		imgsRendered,
		imgsRenderedSetState,
		spinnerIsShowingSetState,
		pageTitle,
	} = useStateContext();

	useEffect(() => {
		pageTopRef.current?.scrollIntoView(true);
	}, [location]);

	useLayoutEffect(() => {
		if (imgsRendered) return;
		console.log('img checked');
		document.body.style.overflow = 'hidden';
		const imgArr = document.getElementsByTagName('img');
		console.log(imgArr.length);

		checkImgsRender(imgArr).then((value) => {
			if (value) {
				imgsRenderedSetState();
				spinnerIsShowingSetState();
				document.body.style.overflow = 'auto';
			}
		});
	}, [location, imgsRendered, imgsRenderedSetState, spinnerIsShowingSetState]);

	return (
		<div ref={pageTopRef} id="container" className="mainContainer">
			<Link to={BLOG_PATH}>
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
			</Link>
			<nav id="navigationPanel" className="justify-content-between mx-1 px-3">
				<div id="navBar" className="navBar mt-2">
					<div id="linkLocation" className="d-flex mb-1 linkLocation">
						<h3 className={'mb-0 linkLocation'}>{pageTitle}</h3>
					</div>
					<div
						id="groupPostsNavigation"
						className="d-flex align-items-end justify-content-end">
						{location !== BLOG_PATH && (
							<Link to={BLOG_PATH}>
								<h6 className={'me-4 navLink'} style={{ color: '#0d6efd' }}>
									{'<- Recent posts'}
								</h6>
							</Link>
						)}
						{location !== '/AllPosts' && (
							<Link to="/AllPosts">
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
			</section>
		</div>
	);
};

export const NotFound: React.FC = () => {
	const { setPageTitle } = useStateContext();
	const pageTitle = 'Code Adventures Reminder';
	useEffect(() => {
		setPageTitle(pageTitle);
	}, [setPageTitle]);
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

const PostGrid: React.FC<GenericGridProps> = ({
																								pageTitle,
																								posts,
																								defaultLayoutClass,
																								applyCustomLayouts = false,
																							}) => {
	const { setPageTitle } = useStateContext();

	useEffect(() => {
		setPageTitle(pageTitle);
	}, [pageTitle, setPageTitle]);

	return (
		<div className="cardContainer px-3">
			{posts.map((post) => {
				const layoutClass = applyCustomLayouts && post.layoutClasses
					? post.layoutClasses
					: defaultLayoutClass;

				return (
					<div key={post.id} className={`m-2 ${layoutClass}`}>
						<Link
							to={`${BLOG_PATH}${post.path}`}
							className="text-dark text-decoration-none"
						>
							<div className="card">
								<div className="overflow-hidden card-img-top imgContainer">
									<img
										alt={post.altText}
										className="cardImg img-fluid"
										id={`img-${post.id}`}
										src={post.imgSrc}
									/>
								</div>
								<div className="card-body">
									<p className="card-title">{post.title}</p>
									<p className="card-text">{post.description}</p>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export const RecentPosts: React.FC = () => {
	const recentPosts = POSTS_DATA.slice(-4).reverse();

	return (
		<PostGrid
			pageTitle="Recent posts"
			posts={recentPosts}
			defaultLayoutClass="col-11 col-sm-5 col-lg-4 col-xxl-3 smallCard"
			applyCustomLayouts={true}
		/>
	);
};

export const AllPosts: React.FC = () => {
	const allPosts = [...POSTS_DATA].reverse();

	return (
		<PostGrid
			pageTitle="All posts"
			posts={allPosts}
			defaultLayoutClass="col-11 col-sm-5 col-lg-4 col-xxl-3"
			applyCustomLayouts={false}
		/>
	);
};
