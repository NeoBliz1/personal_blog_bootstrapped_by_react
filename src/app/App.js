import '../styles/App.scss';

import Router from './routes';
import { SpinnerLoader } from './layouts/spinnerLoader';
import { useStateContext } from './state';

//app wrap
const BlogApp = () => {
	const {
		imgsRendered,
		spinnerIsShowing,
		childRootIsShowingSetState,
	} = useStateContext();

	return (
		<div
			id="childRoot"
			onAnimationEnd={() => {
				childRootIsShowingSetState();
			}}
			className={
				imgsRendered
					? 'animate__animated animate__fadeIn fast'
					: 'opacity-0'
			}>
			<Router />
			{spinnerIsShowing && <SpinnerLoader />}
		</div>
	);
};

export default BlogApp;
