import { RouteObject, useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { SpinnerLoader } from 'app/shared/components/SpinnerLoader';
import { AllPosts, MainContainer, NotFound, RecentPosts } from '../shared/layouts/MainContainer';
import PostContainer from 'app/shared/layouts/PostContainer';

export default function Router() {
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
