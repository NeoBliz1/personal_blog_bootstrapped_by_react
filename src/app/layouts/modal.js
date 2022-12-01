import { HiZoomIn, HiZoomOut } from 'react-icons/hi';
import { zoomHandler } from '../fucnForApp.js';

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
					{/* <div className="modal-header codeZoomHeaderModal">
						
					</div> */}
					<div className="modal-body">
						<pre ref={refPreCodeBlockModal} className="line-numbers">
							<code ref={refCodeBlockModal} className="language-jsx">
								{codeBlock}
							</code>
						</pre>
					</div>
					<div className="modal-footer codeModalFooter">
						<button
							id="zoomInCodeBlock"
							type="button"
							className="btn btn-dark modalCntrlBtn"
							onClick={() => {
								zoomHandler(refPreCodeBlockModal, 1);
							}}>
							<HiZoomIn />
						</button>
						<button
							id="zoomOutCodeBlock"
							type="button"
							className="btn btn-dark modalCntrlBtn"
							onClick={() => {
								zoomHandler(refPreCodeBlockModal, -1);
							}}>
							<HiZoomOut />
						</button>
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
