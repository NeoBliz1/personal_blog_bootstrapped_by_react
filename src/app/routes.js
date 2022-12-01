import { useRoutes } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SpinnerLoader } from './layouts/spinnerLoader';
import {
	MainContainer,
	RecentPosts,
	AllPosts,
	NotFound,
} from './layouts/mainContainer';
// import WCPostFullArticle from './posts/wcPost';
// import RQMostFullArticle from './posts/random_quote_machine';

// Lazy-loaded posts
const WCPostFullArticle = React.lazy(() => import('./posts/wcPost')); // Lazy-loaded
const RQMostFullArticle = React.lazy(() => import('./posts/rqmPost'));
const MPPostFullArticle = React.lazy(() => import('./posts/mpPost'));

export default function Router() {
	const redirectLocation = useLocation().search;
	const redirectFunction = () => {
		if (redirectLocation === '?redirect=RQM') {
			return <RQMostFullArticle />;
		} else if (redirectLocation === '?redirect=MP') {
			return <MPPostFullArticle />;
		} else {
			return <RecentPosts />;
		}
	};

	let element = useRoutes([
		{
			element: <MainContainer />,
			children: [
				{ path: '/', element: <RecentPosts /> },
				{
					path: '/personal_blog_bootstrapped_by_react',
					element: redirectFunction(),
				},
				{
					path: '/recentPosts',
					element: <RecentPosts />,
				},
				{ path: '/allPosts', element: <AllPosts /> },
				{
					path: '/personal_blog_bootstrapped_by_react/blogPostAboutWebchat',
					element: (
						<React.Suspense fallback={<SpinnerLoader />}>
							<WCPostFullArticle />
						</React.Suspense>
					),
				},
				{
					path: '/personal_blog_bootstrapped_by_react/random_quote_machine',
					element: (
						<React.Suspense fallback={<SpinnerLoader />}>
							<RQMostFullArticle />
						</React.Suspense>
					),
				},
				{
					path: '/personal_blog_bootstrapped_by_react/markdown_previewer',
					element: (
						<React.Suspense fallback={<SpinnerLoader />}>
							<MPPostFullArticle />
						</React.Suspense>
					),
				},
				{ path: '*', element: <NotFound /> },
			],
		},
	]);
	return element;
}
