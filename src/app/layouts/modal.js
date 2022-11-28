import { HiZoomIn, HiZoomOut } from 'react-icons/hi';

export const CustomModal = (props) => {
	const { codeBlock, refCodeBlockModal, refPreCodeBlockModal } = props;
	return (
		<div
			className="modal fade"
			data-bs-backdrop="false"
			id="codeModal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div className="modal-dialog modal-fullscreen">
				<div className="modal-content">
					<div className="modal-header codeZoomHeader">
						{/* Button trigger modal */}
						<button
							id="zoomInCodeBlock"
							type="button"
							className="btn btn-dark modalCntrlBtn"
							onClick={() => {
								const currFontSize = window
									.getComputedStyle(refPreCodeBlockModal.current, null)
									.getPropertyValue('font-size')
									.slice(0, -2);
								const newFontSize = parseInt(currFontSize) + 5;
								refPreCodeBlockModal.current.style.fontSize =
									newFontSize + 'px';
								console.log();
							}}>
							<HiZoomIn />
						</button>
						<button
							id="zoomOutCodeBlock"
							type="button"
							className="btn btn-dark modalCntrlBtn"
							onClick={() => {
								const currFontSize = window
									.getComputedStyle(refPreCodeBlockModal.current, null)
									.getPropertyValue('font-size')
									.slice(0, -2);
								const newFontSize = parseInt(currFontSize) - 5;
								refPreCodeBlockModal.current.style.fontSize =
									newFontSize + 'px';
								console.log();
							}}>
							<HiZoomOut />
						</button>
					</div>
					<div className="modal-body">
						<pre ref={refPreCodeBlockModal} className="line-numbers">
							<code ref={refCodeBlockModal} className="language-jsx">
								{codeBlock}
							</code>
						</pre>
					</div>
					<div className="modal-footer codeModalFooter">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
