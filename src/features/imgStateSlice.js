import { createSlice } from '@reduxjs/toolkit';
import { removeSpinnerLoader } from '../app/fucnForApp.js'


//use redux for track imgs rendered state
export const slice = createSlice({
  name: 'imgsRenderedState',
  initialState: {
    imgsRendered: false,
    spinnerIsShowing: true,
    childRootIsShowing: false,
  },
  reducers: {
    //togglers for states
    imgsRenderedSetState: state => {
      if (state.imgsRendered) {
        state.imgsRendered = false;
      }
      else {
        state.imgsRendered = true;
      }
    },
    spinnerIsShowingSetState: state => {
      if (state.spinnerIsShowing) {
        state.spinnerIsShowing = false;
      } 
      else {
        state.spinnerIsShowing = true;
      }                 
    },
    childRootIsShowingSetState: state => {
      if (state.childRootIsShowing) {
        state.childRootIsShowing = false; 
      } 
      else {
        state.childRootIsShowing = true; 
      }           
    },
  }
})

export const selectImgsRendered = state => state.imgsRenderedState.imgsRendered;
export const selectSpinnerIsShowing = state => state.imgsRenderedState.spinnerIsShowing;
export const selectChildRootIsShowing = state => state.imgsRenderedState.childRootIsShowing;

export const { imgsRenderedSetState,spinnerIsShowingSetState,childRootIsShowingSetState } = slice.actions;

export default slice.reducer;