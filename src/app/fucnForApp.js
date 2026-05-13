import { useEffect, useRef, useState } from 'react';

//check Img rendering state
const checkImgLoaded = (img) => {
	return new Promise((resolve) => {
		if (img.complete) {
			return resolve(true);
		}
		const onLoad = () => {
			img.removeEventListener('load', onLoad);
			img.removeEventListener('error', onError);
			resolve(true);
		};
		const onError = () => {
			img.removeEventListener('load', onLoad);
			img.removeEventListener('error', onError);
			resolve(true); // Resolve true even on error to not block the UI
		};
		img.addEventListener('load', onLoad);
		img.addEventListener('error', onError);
	});
};

//check all images on the page have fully rendered or not
export const checkImgsRender = (imgArr) => {
	return new Promise((resolve, reject) => {
		const arrOfPromises = Array.from(imgArr).map((img) =>
			checkImgLoaded(img),
		);
		Promise.all(arrOfPromises).then((value) => resolve(true));
	});
};

//custom hook for adding prism JS from node_modules
export const useImportPrism = (setPrismLoaded) => {
	// Use a ref to avoid recreating the load function if the setter changes
	const setLoadedRef = useRef(setPrismLoaded);

	useEffect(() => {
		setLoadedRef.current = setPrismLoaded;
	}, [setPrismLoaded]);

	useEffect(() => {
		// Check if Prism is already globally available
		if (window.Prism) {
			setLoadedRef.current(true);
			return;
		}

		let isMounted = true;
		setLoadedRef.current(false);

		const loadPrism = async () => {
			try {
				// 1. Load core and standard styles in parallel
				const [PrismModule] = await Promise.all([
					import('prismjs'),
					import('prismjs/themes/prism-tomorrow.css'),
					import('prismjs/plugins/line-numbers/prism-line-numbers.css'),
				]);

				// 2. Attach Prism to the window object safely
				window.Prism = PrismModule.default || PrismModule;

				// 3. Load basic structural languages and the line numbers plugin
				await Promise.all([
					import('prismjs/components/prism-clike'),
					import('prismjs/components/prism-markup'),
					import('prismjs/components/prism-javascript'),
					import('prismjs/plugins/line-numbers/prism-line-numbers'),
				]);

				// 4. Load dependent languages
				await Promise.all([
					import('prismjs/components/prism-jsx'),
					import('prismjs/components/prism-python'),
				]);

				if (isMounted) {
					setLoadedRef.current(true);
				}
			} catch (error) {
				console.error('Failed to asynchronously load Prism:', error);
				if (isMounted) {
					setLoadedRef.current(false);
				}
			}
		};

		loadPrism();

		return () => {
			isMounted = false;
		};
	}, []); // Empty dependency array prevents redundant re-runs
};


//font zoomIn zoomOut, pass -1 for subtracting ot 1 for adding
export const zoomHandler = (ref, operator) => {
	const currFontSize = window
		.getComputedStyle(ref.current, null)
		.getPropertyValue('font-size')
		.slice(0, -2);
	console.log(currFontSize);
	let newFontSize = currFontSize;
	if (newFontSize <= 2 && operator === -1) {
		console.log('fontsize zero');
	} else {
		newFontSize = parseInt(currFontSize) + 2 * operator;
	}

	ref.current.style.fontSize = newFontSize + 'px';
};

export const usePostData = ({ fetchUrl, pageTitle, setPageTitle, highlightRefs }) => {
	const [projectCode, setProjectCode] = useState('Loading source code...');
	const [prismLoaded, setPrismLoaded] = useState(false);

	// 1. Set page title when the view loads
	useEffect(() => {
		setPageTitle(pageTitle);
	}, [pageTitle, setPageTitle]);

	// 2. Initialize dynamic Prism code/plugin injections
	useImportPrism(setPrismLoaded);

	// 3. Securely fetch raw source code text asynchronously
	useEffect(() => {
		let isMounted = true;
		fetch(fetchUrl)
			.then((res) => res.text())
			.then((data) => {
				if (isMounted) setProjectCode(data);
			})
			.catch((err) => console.error('Error fetching project source:', err));

		return () => {
			isMounted = false;
		};
	}, [fetchUrl]);

	// 4. Highlight code blocks manually across arbitrary element structures
	useEffect(() => {
		if (prismLoaded && window.Prism) {
			highlightRefs.forEach((ref) => {
				if (ref.current) {
					window.Prism.highlightElement(ref.current);
				}
			});
		}
	}, [prismLoaded, projectCode, highlightRefs]);

	return projectCode;
};
