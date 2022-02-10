import { createSlice } from '@reduxjs/toolkit';
import { removeSpinnerLoader } from '../app/fucnForApp.js'

export const slice = createSlice({
  name: 'imgsRenderedState',
  initialState: {
    imgRenderedNum: 0,
  },
  reducers: {
    chckedImgRender: state => {
      //get img collection from page
      const imgArr = document.getElementsByTagName('img');
      state.imgRenderedNum += 1;
      if (imgArr.length == state.imgRenderedNum) {
        const getChildRoot = document.querySelector('#childRoot');
        getChildRoot.className += ' animate__animated animate__fadeIn fast';
        getChildRoot.onanimationend = () => {
          removeSpinnerLoader();          
        };
        /*console.log('if executed');*/ 
      }
      /*console.log('function executed');*/
    },
  }
})

export const selectImgState = state => state.imgsRenderedState.imgRenderedNum;

export const { chckedImgRender } = slice.actions;

export default slice.reducer;