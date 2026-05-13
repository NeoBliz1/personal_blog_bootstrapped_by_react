import React, { useRef } from 'react';
import { CustomModal } from './modal';
import { usePostData, zoomHandler } from '../fucnForApp.js';
import { useStateContext } from '../state';
import { BsFullscreen } from 'react-icons/bs';
import { HiZoomIn, HiZoomOut } from 'react-icons/hi';

export const PostLayout = ({ pageTitle, fetchUrl, imgModule, lang, children }) => {
	const codeBlock = useRef(null);
	const example1CodeBlock = useRef(null);
	const codeBlockModal = useRef(null);
	const preCodeBlock = useRef(null);

	const { setPageTitle } = useStateContext();

	// Load asynchronous code data configurations using our unified hook
	const projectCode = usePostData({
		fetchUrl,
		pageTitle,
		setPageTitle,
		highlightRefs: [codeBlock, example1CodeBlock, codeBlockModal],
	});

	return (
		<article className="d-flex justify-content-center">
			<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-6">
				<h4 className="h4">{pageTitle}</h4>

				<div className="overflow-hidden position-relative MPPostImgContainer">
					{imgModule}
				</div>
				{/* Unique article text, subheadings, and iframes injected here */}
				<div className="article-body-content mt-3">
					{children}
				</div>

				{/* Shared syntax block UI display interface control tools */}
				<div className="modal-content mt-4">
					<div className="modal-header codeModalHeader">
						<button
							type="button"
							className="btn btn-dark modalCntrlBtn"
							data-bs-toggle="modal"
							data-bs-target="#codeModal">
							<BsFullscreen />
						</button>
					</div>
					<div className="modal-header codeZoomHeader">
						<button
							type="button"
							className="btn btn-dark modalCntrlBtn"
							onClick={() => zoomHandler(preCodeBlock, 1)}>
							<HiZoomIn />
						</button>
						<button
							type="button"
							className="btn btn-dark modalCntrlBtn"
							onClick={() => zoomHandler(preCodeBlock, -1)}>
							<HiZoomOut />
						</button>
					</div>
					<pre className="line-numbers" ref={preCodeBlock} style={{ maxHeight: '800px' }}>
						<code ref={codeBlock} className={'language-' + lang}>
							{projectCode}
						</code>
					</pre>
				</div>

				<CustomModal
					codeBlock={projectCode}
					refCodeBlockModal={codeBlockModal}
					lang={lang}
				/>
			</div>
		</article>
	);
};
