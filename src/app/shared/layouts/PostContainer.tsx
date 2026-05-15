import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { POSTS_DATA } from 'app/blog/postsData';
import { useStateContext } from 'app/context/AppStateContext';

export const PostContainer: React.FC = () => {
	const { postId } = useParams<{ postId: string }>();
	const { setPageTitle, setImgSrc, setImgAlt } = useStateContext();

	const currentPost = POSTS_DATA.find((post) => post.path === postId);

	useEffect(() => {
		if (currentPost) {
			setPageTitle(currentPost.title);
			setImgSrc(currentPost.imgSrc);
			setImgAlt(currentPost.altText);
		}
	}, [currentPost, setPageTitle, setImgSrc, setImgAlt]);

	if (!postId || !currentPost) {
		return (
			<div className="alert alert-danger m-4">
				Blog post "{postId || 'Unknown'}" not found.
			</div>
		);
	}

	const ActivePostComponent = currentPost.component;

	return (
		<div className="postContainer-wrapper position-relative">
			<div className="post-content-body pt-5">
				<ActivePostComponent />
			</div>
		</div>
	);
};

export default PostContainer;
