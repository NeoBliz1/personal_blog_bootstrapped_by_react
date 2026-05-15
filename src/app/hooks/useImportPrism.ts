import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Prism from 'prismjs';

// Extend the Window interface to include Prism
declare global {
	interface Window {
		Prism: typeof Prism;
	}
}

//custom hook for adding prism JS from node_modules
export const useImportPrism = (setPrismLoaded: Dispatch<SetStateAction<boolean>>) => {
	const setLoadedRef = useRef(setPrismLoaded);

	useEffect(() => {
		setLoadedRef.current = setPrismLoaded;
	}, [setPrismLoaded]);

	useEffect(() => {
		if (window.Prism) {
			setLoadedRef.current(true);
			return;
		}

		let isMounted = true;
		setLoadedRef.current(false);

		const loadPrism = async () => {
			try {
				await import('prismjs/themes/prism-tomorrow.css');
				await import('prismjs/plugins/line-numbers/prism-line-numbers.css');

				window.Prism = (await import('prismjs')).default;

				await Promise.all([
					import('prismjs/components/prism-clike'),
					import('prismjs/components/prism-markup'),
					import('prismjs/components/prism-javascript'),
					import('prismjs/plugins/line-numbers/prism-line-numbers'),
				]);

				await Promise.all([
					import('prismjs/components/prism-jsx'),
					import('prismjs/components/prism-python'),
					import('prismjs/components/prism-typescript'),
					import('prismjs/components/prism-tsx'),
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
	}, []);
};
