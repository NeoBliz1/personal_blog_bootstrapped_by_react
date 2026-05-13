import { useLocation, useRoutes } from 'react-router-dom';
import React from 'react';
import { SpinnerLoader } from './layouts/spinnerLoader';
import { AllPosts, MainContainer, NotFound, RecentPosts } from './layouts/mainContainer';

// Lazy-loaded posts
const WCPostFullArticle = React.lazy(() => import('./posts/wcPost')); // Lazy-loaded
const RQMostFullArticle = React.lazy(() => import('./posts/rqmPost'));
const MPPostFullArticle = React.lazy(() => import('./posts/mpPost'));
const DMPostFullArticle = React.lazy(() => import('./posts/dmPost'));
const JSCPostFullArticle = React.lazy(() => import('./posts/calcPost'));
const TFPFCPostFullArticle = React.lazy(() =>
	import('./posts/25plus5clockPost'),
);
const FGATPostFullArticle = React.lazy(() =>
	import('./posts/1gradeArithmeticTrainer'),
);

export default function Router() {
	const redirectLocation = useLocation().search;
	const redirectFunction = () => {
		if (redirectLocation === '?redirect=first_grade_arithmetic_trainer') {
			return (
				<React.Suspense fallback={<SpinnerLoader />}>
					<FGATPostFullArticle />
				</React.Suspense>
			);
		} else if (redirectLocation === '?redirect=twenty_five_plus_five_clock') {
			return (
				<React.Suspense fallback={<SpinnerLoader />}>
					<TFPFCPostFullArticle />
				</React.Suspense>
			);
		} else if (redirectLocation === '?redirect=javaScript_calculator') {
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

	return useRoutes([
		{
			element: <MainContainer />,
			children: [
				{ path: '/', element: <RecentPosts /> },
				{
					path: '/personal_blog_bootstrapped_by_react',
					element: redirectFunction(),
				},
				{ path: '*', element: <NotFound /> },
			],
		},
	]);
}
