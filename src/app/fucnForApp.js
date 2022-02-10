
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
        imgHeigt = img.naturalHeight
      }     
      /*console.log(imgHeigt);*/
    }  
    let fName = setInterval(() => {checkFunc(img)}, 100);
  });   
}

//word split function
export const wordSplit = (phrase) => {
  //return modifying string like: 'toUpperCase' => 'To upper case'
  const modifyCase = (wordArr) => {
    const string = wordArr.join(' ');
    const lowerCaseString = string.replace(/(?:^|\s)\S/g, function(a) { return a.toLowerCase(); });
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
  }
  const locationWithoutSlash = phrase.slice(1);  
  if (locationWithoutSlash.length === 0) {
    //conditional meaning root location
    return 'Recent posts'
  }
  else if (/[^a-zA-Z]/.test(locationWithoutSlash)) {
    const stringSplitBySymbol = locationWithoutSlash.split(/[^a-zA-Z]/);
    return modifyCase(stringSplitBySymbol)
  }
  else {
    const stringSplitByUpperCase = locationWithoutSlash.split(/(?=[A-Z])/);
    return modifyCase(stringSplitByUpperCase)
  }  
}