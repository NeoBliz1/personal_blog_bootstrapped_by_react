
//remove loader from the DOM function
export const removeSpinnerLoader = () => {
  const spinnerLoader = document.querySelector('#spinnerLoader');  
  spinnerLoader.className += ' animate__animated animate__fadeOut fast';
  spinnerLoader.onanimationend = () => {
    spinnerLoader.remove();
    /*console.log('Transition ended');*/
  };  
}

//check Img rendering state
export const checkImgHeight = (img) => {
  return new Promise((resolve,reject) => {
    let imgHeigt = 0;  
    const checkFunc = () => {
      if (imgHeigt == img.naturalHeight) {
        clearInterval(fName);        
        resolve(true);         
      }
      else {
        imgHeigt=img.naturalHeight
      }     
      /*console.log(imgHeigt);*/
    }  
    let fName = setInterval(() => {checkFunc(img)}, 100);
  });   
}