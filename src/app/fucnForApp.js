import { useState, useEffect } from 'react';

//check Img rendering state
const checkImgHeight = (img) => {
	return new Promise((resolve) => {
		let imgHeigt = 0;
		const checkFunc = () => {
			if (imgHeigt === img.naturalHeight) {
				clearInterval(fName);
				resolve(true);
			} else {
				imgHeigt = img.naturalHeight;
			}
			/*console.log(imgHeigt);*/
		};
		let fName = setInterval(() => {
			checkFunc(img);
		}, 100);
	});
};

//check all images on the page have fully rendered or not
export const checkImgsRender = (imgArr) => {
	return new Promise((resolve, reject) => {
		let arrOfPromises = [];
		Object.entries(imgArr).forEach(([key, img]) => {
			arrOfPromises.push(checkImgHeight(img));
		});
		Promise.all(arrOfPromises).then((value) => resolve(true));
	});
};

//word split function
export const wordSplit = (phrase) => {
	//return modifying string like: 'toUpperCase' => 'To upper case'
	const modifyCase = (wordArr) => {
		const string = wordArr.join(' ');
		const lowerCaseString = string.replace(/(?:^|\s)\S/g, function (a) {
			return a.toLowerCase();
		});
		return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
	};
	const locationWithoutSlash = phrase.slice(1);
	if (locationWithoutSlash.length === 0) {
		//conditional meaning root location
		return 'Recent posts';
	} else if (/[^a-zA-Z]/.test(locationWithoutSlash)) {
		const stringSplitBySymbol = locationWithoutSlash.split(/[^a-zA-Z]/);
		return modifyCase(stringSplitBySymbol);
	} else {
		const stringSplitByUpperCase = locationWithoutSlash.split(/(?=[A-Z])/);
		return modifyCase(stringSplitByUpperCase);
	}
};

//custom hook for get window width
const getWidth = () => window.innerWidth;

export const useCurrentWidth = () => {
	// save current window width in the state object
	let [width, setWidth] = useState(getWidth());

	// in this case useEffect will execute only once because
	// it does not have any dependencies.
	useEffect(() => {
		// timeoutId for debounce mechanism
		let timeoutId = null;
		const resizeListener = () => {
			// prevent execution of previous setTimeout
			clearTimeout(timeoutId);
			// change width from the state object after 150 milliseconds
			timeoutId = setTimeout(() => setWidth(getWidth()), 150);
		};
		// set resize listener
		window.addEventListener('resize', resizeListener);

		// clean up function
		return () => {
			// remove resize listener
			window.removeEventListener('resize', resizeListener);
		};
	}, []);

	return width;
};

//custom hook for adding some prism JS
export const useImportScript = (urlArr, integrityArr, setScriptsLoaded) => {
	let fName;
	//check prism scripts on the page have fully loaded or not
	const checkPrismScriptLoad = (arrString) => {
		return new Promise((resolve) => {
			//console.log('promise started');
			//console.log(arrString.length);
			const checkFunc = () => {
				if (arrString.length === 1 && arrString[0] in window) {
					//console.log('first stage');
					//console.log(arrString[0] in window);
					clearInterval(fName);
					resolve(true);
				} else if (
					arrString.length === 3 &&
					arrString[2] in window[arrString[0]][arrString[1]]
				) {
					//console.log('second stage');
					//console.log(arrString[2] in window[arrString[0]][arrString[1]]);
					clearInterval(fName);
					resolve(true);
				}
			};
			fName = setInterval(() => {
				checkFunc();
			}, 100);
		});
	};
	//func for add script on web page
	const addScriptOnPage = (resourceUrl, integrity, someScript, dataManual) => {
		someScript.src = resourceUrl;
		someScript.integrity = integrity;
		someScript.setAttribute('crossorigin', 'anonymous');
		someScript.setAttribute('referrerpolicy', 'no-referrer');
		someScript.dataset.scryptType = 'prismScript';
		if (dataManual) {
			someScript.dataset.manual = true;
		}
		someScript.async = true;
		document.body.appendChild(someScript);
	};

	useEffect(() => {
		setScriptsLoaded(false);
		const prismCore = document.createElement('script');
		const prismAutoloader = document.createElement('script');
		const prismLineNumber = document.createElement('script');

		//add prism core script on webpage
		addScriptOnPage(urlArr[0], integrityArr[0], prismCore, true);
		checkPrismScriptLoad(['Prism']).then(() => {
			//add prism autoloader script on webpage
			addScriptOnPage(urlArr[1], integrityArr[1], prismAutoloader);
			checkPrismScriptLoad(['Prism', 'plugins', 'autoloader']).then((value) => {
				//add prism line number script on webpage
				addScriptOnPage(urlArr[2], integrityArr[2], prismLineNumber);
				checkPrismScriptLoad(['Prism', 'plugins', 'lineNumbers']).then(
					(value) => {
						//set scriptsLoaded prop to true
						setScriptsLoaded(value);
					},
				);
			});
		});

		return () => {
			clearInterval(fName);
			document.body.removeChild(prismCore);
			document.body.removeChild(prismAutoloader);
			document.body.removeChild(prismLineNumber);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

//custom hook for adding some side CSS
export const useImportStylesheet = (
	resourceUrl,
	integrity,
	crossorigin,
	referrerpolicy,
) => {
	useEffect(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = resourceUrl;
		link.integrity = integrity;
		link.setAttribute('crossorigin', crossorigin);
		link.setAttribute('referrerpolicy', referrerpolicy);
		link.async = true;
		document.head.appendChild(link);
		return () => {
			document.head.removeChild(link);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resourceUrl]);
};

//font zoomIn zoomOut, pass -1 for subtracting ot 1 for adding
export const zoomHandler = (ref, operator) => {
	const currFontSize = window
		.getComputedStyle(ref.current, null)
		.getPropertyValue('font-size')
		.slice(0, -2);
	const newFontSize = parseInt(currFontSize) + 2 * operator;
	ref.current.style.fontSize = newFontSize + 'px';
};
