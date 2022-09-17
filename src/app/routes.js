import { useRoutes } from 'react-router-dom';
import React from 'react';
import { SpinnerLoader } from './layouts/spinnerLoader';
import {
	MainContainer,
	RecentPosts,
	AllPosts,
	NotFound
} from './layouts/mainContainer';

const WCPostFullArticle = React.lazy(() => import('./posts/wcPost')); // Lazy-loaded
const RQMostFullArticle = React.lazy(() =>
	import('./posts/random_quote_machine')
); // Lazy-loaded

export default function Router() {
	let element = useRoutes([
		{
			element: <MainContainer />,
			children: [
				{ path: '/', element: <RecentPosts /> },
				{ path: 'personal_blog_on_react', element: <RecentPosts /> },
				{ path: 'allPosts', element: <AllPosts /> },
				{
					path: 'blogPostAboutWebchat',
					element: (
						<React.Suspense fallback={<SpinnerLoader />}>
							<WCPostFullArticle />
						</React.Suspense>
					)
				},
				{
					path: 'random_quote_machine',
					element: (
						<React.Suspense fallback={<SpinnerLoader />}>
							<RQMostFullArticle />
						</React.Suspense>
					)
				},
				{ path: '*', element: <NotFound /> }
			]
		}
	]);
	return element;
}
