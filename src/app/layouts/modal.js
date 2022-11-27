export const CustomModal = (props) => {
	const { codeBlock, refCodeBlockModal } = props;
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
					{/* <div className="modal-header"></div> */}
					<div className="modal-body">
						<pre className="line-numbers">
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
