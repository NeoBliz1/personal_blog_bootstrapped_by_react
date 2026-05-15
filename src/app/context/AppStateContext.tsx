import React, { createContext, ReactNode, useContext, useState } from 'react';
import type { StateContextType } from '../types/typesIndex';

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider = ({ children }: { children: ReactNode }) => {
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

export const useStateContext = () => {
	const context = useContext(StateContext);
	if (context === undefined) {
		throw new Error('useStateContext must be used within a StateProvider');
	}
	return context;
};
