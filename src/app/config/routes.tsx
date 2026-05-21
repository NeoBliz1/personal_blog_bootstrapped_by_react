import { RouteObject, useLocation, useRoutes } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { SpinnerLoader } from 'app/shared/components/SpinnerLoader';
import { AllPosts, MainContainer, NotFound, RecentPosts } from '../shared/layouts/MainContainer';
import PostContainer from 'app/shared/layouts/PostContainer';
import { useNavigate } from 'react-router';

export default function Router() {
	const location = useLocation();
	const navigate = useNavigate();

	// Intercept query parameters on initial reload and translate them to routing paths
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const redirectTarget = searchParams.get('redirect');

		if (redirectTarget) {
			const targetPath = redirectTarget === 'AllPosts'
				? '/AllPosts'
				: `/personal_blog_bootstrapped_by_react/${redirectTarget}`;
			navigate(targetPath, { replace: true });
		}
	}, [location, navigate]);
	const routes: RouteObject[] = [
		{
			element: <MainContainer />,
			children: [
				{ path: '/', element: <RecentPosts /> },
				{ path: '/personal_blog_bootstrapped_by_react', element: <RecentPosts /> },
				{
					path: '/personal_blog_bootstrapped_by_react/:postId',
					element: (
						<Suspense fallback={<SpinnerLoader />}>
							<PostContainer />
						</Suspense>
					),
				},
				{
					path: '/AllPosts',
					element: <AllPosts />,
				},
				{ path: '*', element: <NotFound /> },
			],
		},
	];

	return useRoutes(routes);
}
