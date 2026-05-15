import { RefObject, useEffect, useState } from 'react';
import { useImportPrism } from './useImportPrism';

interface UsePostDataParams {
	fetchUrl: string;
	pageTitle: string;
	setPageTitle: (title: string) => void;
	highlightRefs: RefObject<HTMLElement>[];
}

export const usePostData = ({ fetchUrl, pageTitle, setPageTitle, highlightRefs }: UsePostDataParams) => {
	const [projectCode, setProjectCode] = useState('Loading source code...');
	const [prismLoaded, setPrismLoaded] = useState(false);

	useEffect(() => {
		setPageTitle(pageTitle);
	}, [pageTitle, setPageTitle]);

	useImportPrism(setPrismLoaded);

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
