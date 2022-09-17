import { configureStore } from '@reduxjs/toolkit';
import imgReducer from '../features/imgStateSlice.js';

export default configureStore({
	reducer: {
		imgsRenderedState: imgReducer
	}
});
