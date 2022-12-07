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
const DMPostFullArticle = React.lazy(() => import('./posts/dmPost'));
const JSCPostFullArticle = React.lazy(() => import('./posts/calcPost'));

export default function Router() {
	const redirectLocation = useLocation().search;
	const redirectFunction = () => {
		if (redirectLocation === '?redirect=javsScript_calculator') {
			return (
				<React.Suspense fallback={<SpinnerLoader />}>
					<JSCPostFullArticle />
				</React.Suspense>
			);
		} else if (redirectLocation === '?redirect=random_quote_machine') {
			return (
				<React.Suspense fallback={<SpinnerLoader />}>
					<RQMostFullArticle />
				</React.Suspense>
			);
		} else if (redirectLocation === '?redirect=drum_machine') {
			return (
				<React.Suspense fallback={<SpinnerLoader />}>
					<DMPostFullArticle />
				</React.Suspense>
			);
		} else if (redirectLocation === '?redirect=markdown_previewer') {
			return (
				<React.Suspense fallback={<SpinnerLoader />}>
					<MPPostFullArticle />
				</React.Suspense>
			);
		} else if (redirectLocation === '?redirect=blogPostAboutWebchat') {
			return (
				<React.Suspense fallback={<SpinnerLoader />}>
					<WCPostFullArticle />
				</React.Suspense>
			);
		} else if (redirectLocation === '?redirect=AllPosts') {
			return <AllPosts />;
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
				// {
				// 	path: '/recentPosts',
				// 	element: <RecentPosts />,
				// },
				// { path: '/allPosts', element: <AllPosts /> },
				// {
				// 	path: '/personal_blog_bootstrapped_by_react/blogPostAboutWebchat',
				// 	element: (
				// 		<React.Suspense fallback={<SpinnerLoader />}>
				// 			<WCPostFullArticle />
				// 		</React.Suspense>
				// 	),
				// },
				// {
				// 	path: '/personal_blog_bootstrapped_by_react/?redirect=RQM',
				// 	element: (
				// 		<React.Suspense fallback={<SpinnerLoader />}>
				// 			<RQMostFullArticle />
				// 		</React.Suspense>
				// 	),
				// },
				// {
				// 	path: '/personal_blog_bootstrapped_by_react/markdown_previewer',
				// 	element: (
				// 		<React.Suspense fallback={<SpinnerLoader />}>
				// 			<MPPostFullArticle />
				// 		</React.Suspense>
				// 	),
				// },
				{ path: '*', element: <NotFound /> },
			],
		},
	]);
	return element;
}
