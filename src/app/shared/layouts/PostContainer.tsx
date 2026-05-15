import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { POSTS_DATA } from 'app/blog/postsData';
import { useStateContext } from 'app/context/AppStateContext';

export const PostContainer: React.FC = () => {
	const { postId } = useParams<{ postId: string }>();
	const { setPageTitle } = useStateContext();

	// 1. Extract both metadata and the component reference in a single loop step
	const currentPost = POSTS_DATA.find((post) => post.path === postId);

	// 2. Keep layout framework titles in sync with global application layout contexts
	useEffect(() => {
		if (currentPost) {
			setPageTitle(currentPost.title);
		}
	}, [currentPost, setPageTitle]);

	// 3. Fallback check: handles non-existent pages safely
	if (!postId || !currentPost) {
		return (
			<div className="alert alert-danger m-4">
				Blog post "{postId || 'Unknown'}" not found.
			</div>
		);
	}

	// 4. Assign the extracted component reference to a capitalized variable name to render as JSX
	const ActivePostComponent = currentPost.component;

	return (
		<div className="postContainer-wrapper position-relative">
			{/* Application Interactive Interface Workspace */}
			<div className="post-content-body pt-5">
				<ActivePostComponent />
			</div>
		</div>
	);
};

export default PostContainer;
