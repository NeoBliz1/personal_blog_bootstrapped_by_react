import { useRoutes } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';
// import { SpinnerLoader } from './layouts/spinnerLoader';
import {
	MainContainer,
	RecentPosts,
	AllPosts,
	NotFound,
} from './layouts/mainContainer';
import WCPostFullArticle from './posts/wcPost';
import RQMostFullArticle from './posts/random_quote_machine';

// const WCPostFullArticle = React.lazy(() => import('./posts/wcPost')); // Lazy-loaded
// const RQMostFullArticle = React.lazy(() =>
// 	import('./posts/random_quote_machine'),
// ); // Lazy-loaded

export default function Router() {
	const redirectLocation = useLocation().search;
	//console.log(redirectLocation);

	// if (redirectLocation === '?redirect=RQM') {
	// 	console.log('redirectLocation');
	// 	navigate('/personal_blog_bootstrapped_by_react/random_quote_machine');
	// 	//navigate('../', { replace: true });
	// }
	let element = useRoutes([
		{
			element: <MainContainer />,
			children: [
				{ path: '/', element: <RecentPosts /> },
				{
					path: '/personal_blog_bootstrapped_by_react',
					element:
						redirectLocation === '?redirect=RQM' ? (
							<RQMostFullArticle />
						) : (
							<RecentPosts />
						),
				},
				{
					path: '/recentPosts',
					element: <RecentPosts />,
				},
				{ path: '/allPosts', element: <AllPosts /> },
				{
					path: '/personal_blog_bootstrapped_by_react/blogPostAboutWebchat',
					element: (
						// <React.Suspense fallback={<SpinnerLoader />}>
						<WCPostFullArticle />
						// </React.Suspense>
					),
				},
				{
					path: '/personal_blog_bootstrapped_by_react/random_quote_machine',
					element: (
						// <React.Suspense fallback={<SpinnerLoader />}>
						<RQMostFullArticle />
						// </React.Suspense>
					),
				},
				{ path: '*', element: <NotFound /> },
			],
		},
	]);
	return element;
}
