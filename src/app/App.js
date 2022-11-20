import '../styles/App.scss';

// import { BrowserRouter } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import Router from './routes';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerLoader } from './layouts/spinnerLoader';
import {
	childRootIsShowingSetState,
	selectImgsRendered,
	selectSpinnerIsShowing,
} from '../features/imgStateSlice';

//app wrap
const BlogApp = () => {
	//state from Redux
	const imgsRendered = useSelector(selectImgsRendered); //get imgsRendered state from redux
	const spinnerIsShowing = useSelector(selectSpinnerIsShowing); //get spinnerIsShowing state from redux
	const dispatch = useDispatch();
	// let navigate = useNavigate();
	// const redirectLocation = useLocation().search;

	// redirectLocation handler
	// useEffect(() => {
	// 	if (redirectLocation === '?redirect=RQM') {
	// 		console.log('redirectLocation');
	// 		//navigate('/personal_blog_bootstrapped_by_react/random_quote_machine');
	// 		navigate('../', { replace: true });
	// 	}
	// }, [redirectLocation]);

	return (
		<div
			id="childRoot"
			onAnimationEnd={() => {
				dispatch(childRootIsShowingSetState());
			}}
			style={{ opacity: 0 }}
			className={
				imgsRendered ? 'animate__animated animate__fadeIn fast' : null
			}>
			{/* <BrowserRouter> */}
			<Router />
			{/* </BrowserRouter> */}
			{
				//if imgsIsRendered false then showSpinnerLoader,
				//shows spinner while imgs are rendering
				//spinner loader animation includes in component <SpinnerLoader /> in mainContainer
				spinnerIsShowing && <SpinnerLoader />
			}
		</div>
	);
};

export default BlogApp;
