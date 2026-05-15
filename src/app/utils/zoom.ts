import { RefObject } from 'react';

//font zoomIn zoomOut, pass -1 for subtracting ot 1 for adding
export const zoomHandler = (ref: RefObject<HTMLElement>, operator: 1 | -1) => {
	if (!ref.current) return;
	const currFontSize = window
		.getComputedStyle(ref.current, null)
		.getPropertyValue('font-size')
		.slice(0, -2);
	let newFontSize = parseInt(currFontSize);
	if (newFontSize <= 2 && operator === -1) {
		console.log('fontsize zero');
	} else {
		newFontSize = newFontSize + 2 * operator;
	}

	ref.current.style.fontSize = newFontSize + 'px';
};
