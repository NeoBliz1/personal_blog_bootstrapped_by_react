import { configureStore } from '@reduxjs/toolkit';
import appStatesReducer from '../features/imgStateSlice.js';

export default configureStore({
	reducer: {
		appStates: appStatesReducer,
	},
});
