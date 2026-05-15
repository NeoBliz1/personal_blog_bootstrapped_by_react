//check Img rendering state
const checkImgLoaded = (img: HTMLImageElement): Promise<boolean> => {
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
export const checkImgsRender = (imgArr: HTMLCollectionOf<HTMLImageElement>): Promise<boolean> => {
	return new Promise((resolve) => {
		const arrOfPromises = Array.from(imgArr).map((img) =>
			checkImgLoaded(img),
		);
		Promise.all(arrOfPromises).then(() => resolve(true));
	});
};
