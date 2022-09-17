import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	spinnerIsShowingSetState,
	selectChildRootIsShowing,
} from '../../features/imgStateSlice';

//create spinner loader component
export const SpinnerLoader = () => {
	const dispatch = useDispatch();
	const spinnerLoaderStyle = {
		width: '6vh',
		height: '6vh',
	};
	const childRootIsShowing = useSelector(selectChildRootIsShowing);
	const spinnerClass =
		'd-flex align-items-center justify-content-center vw-100 vh-100 position-absolute top-0 start-0 bg-light';
	//spinner animation func
	const toggleSpinnerClass = () => {
		if (childRootIsShowing) {
			document.body.style.overflow = 'auto';
			return spinnerClass + ' animate__animated animate__fadeOut fast';
		} else {
			return spinnerClass;
		}
	};
	return (
		<div
			className={toggleSpinnerClass()}
			id="spinnerLoader"
			onAnimationEnd={() => {
				dispatch(spinnerIsShowingSetState());
			}}>
			<div
				className="spinner-grow text-primary"
				role="status"
				style={spinnerLoaderStyle}
			/>
			<span className="ms-3 sr-only text-dark position-relative w-auto h-auto">
				Loading...
			</span>
		</div>
	);
};
