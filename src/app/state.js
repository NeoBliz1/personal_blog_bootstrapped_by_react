import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [imgsRendered, setImgsRendered] = useState(false);
	const [spinnerIsShowing, setSpinnerIsShowing] = useState(true);
	const [childRootIsShowing, setChildRootIsShowing] = useState(false);
	const [pageTitle, setPageTitle] = useState('Code Adventures Reminder');

	const imgsRenderedSetState = () => {
		setImgsRendered(true);
	};

	const spinnerIsShowingSetState = () => {
		setSpinnerIsShowing(false);
	};

	const childRootIsShowingSetState = () => {
		setChildRootIsShowing(true);
	};

	return (
		<StateContext.Provider
			value={{
				imgsRendered,
				imgsRenderedSetState,
				spinnerIsShowing,
				spinnerIsShowingSetState,
				childRootIsShowing,
				childRootIsShowingSetState,
				pageTitle,
				setPageTitle,
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
