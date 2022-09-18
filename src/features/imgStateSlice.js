import { createSlice } from '@reduxjs/toolkit';

//use redux for track imgs rendered state
export const slice = createSlice({
	name: 'appStates',
	initialState: {
		imgsRendered: false,
		spinnerIsShowing: true,
		childRootIsShowing: false,
		pageTitle: 'Code Adventures Reminder',
	},
	reducers: {
		//togglers for states
		imgsRenderedSetState: (state) => {
			if (state.imgsRendered) {
				state.imgsRendered = false;
			} else {
				state.imgsRendered = true;
			}
		},
		spinnerIsShowingSetState: (state) => {
			if (state.spinnerIsShowing) {
				state.spinnerIsShowing = false;
			} else {
				state.spinnerIsShowing = true;
			}
		},
		childRootIsShowingSetState: (state) => {
			if (state.childRootIsShowing) {
				state.childRootIsShowing = false;
			} else {
				state.childRootIsShowing = true;
			}
		},
		setPageTitle: (state, title) => {
			state.pageTitle = title.payload;
		},
	},
});
//export selectors
export const selectImgsRendered = (state) => state.appStates.imgsRendered;
export const selectSpinnerIsShowing = (state) =>
	state.appStates.spinnerIsShowing;
export const selectChildRootIsShowing = (state) =>
	state.appStates.childRootIsShowing;
export const selectpageTitle = (state) => state.appStates.pageTitle;

//export actions
export const {
	imgsRenderedSetState,
	spinnerIsShowingSetState,
	childRootIsShowingSetState,
	setPageTitle,
} = slice.actions;

export default slice.reducer;
