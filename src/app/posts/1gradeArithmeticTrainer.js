import React, { useState, useEffect, useRef } from 'react';
import { CustomModal } from '../layouts/modal';
//import { useOutletContext } from 'react-router-dom'
import {
	useImportScript,
	useImportStylesheet,
	zoomHandler,
} from '../fucnForApp.js';
import { useDispatch } from 'react-redux';
//import Redux action
import { setPageTitle } from '../../features/imgStateSlice';
import { BsFullscreen } from 'react-icons/bs';
import { HiZoomIn, HiZoomOut } from 'react-icons/hi';

//app wrap
const TwentyFivePlusFiveClock = () => {
	//const outletContextProps = useOutletContext();
	//create ref for get codeBlock fo higlight by prism
	const codeBlock = useRef();
	const example1CodeBlock = useRef();
	const codeBlockModal = useRef();
	const preCodeBlock = useRef();
	const preCodeBlockModal = useRef();

	const initialCode = `
    const foo = 'foo'; 
    const bar = 'bar';
    console.log(foo + bar);
  `.trim();
	const [projectCode, setProjectCode] = useState(initialCode);
	const [scriptsLoaded, setScriptsLoaded] = useState(false);
	const [cardImgSrc] = useState(
		require('../../imgs/DALL·E_2023_01_13_06_30_13_Arithmetic_simulator_for_first_grade_tiny.png'),
	); //setImg src
	//import pirsm CSS from CDN
	useImportStylesheet(
		'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-okaidia.min.css',
		'sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==',
		'anonymous',
		'no-referrer',
	);
	//import pirsm-lineNumber-jsPlugin CSS from CDN
	useImportStylesheet(
		'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-numbers/prism-line-numbers.min.css',
		'sha512-cbQXwDFK7lj2Fqfkuxbo5iD1dSbLlJGXGpfTDqbggqjHJeyzx88I3rfwjS38WJag/ihH7lzuGlGHpDBymLirZQ==',
		'anonymous',
		'no-referrer',
	);

	const arrPrismJsSrc = [
		'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/prism-core.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/autoloader/prism-autoloader.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-numbers/prism-line-numbers.min.js',
	];
	const arrSHA512Sums = [
		'sha512-LCKPTo0gtJ74zCNMbWw04ltmujpzSR4oW+fgN+Y1YclhM5ZrHCZQAJE4quEodcI/G122sRhSGU2BsSRUZ2Gu3w==',
		'sha512-GP4x8UWxWyh4BMbyJGOGneiTbkrWEF5izsVJByzVLodP8CuJH/n936+yQDMJJrOPUHLgyPbLiGw2rXmdvGdXHA==',
		'sha512-dubtf8xMHSQlExGRQ5R7toxHLgSDZ0K7AunqPWHXmJQ8XyVIG19S1T95gBxlAeGOK02P4Da2RTnQz0Za0H0ebQ==',
	];

	//import pirsmJS from CDN
	useImportScript(arrPrismJsSrc, arrSHA512Sums, setScriptsLoaded);

	//fetch App code from git
	fetch(
		'https://raw.githubusercontent.com/NeoBliz1/arithmetic_first_grade_trainer/main/src/App.tsx',
	)
		.then((response) => response.text())
		.then((data) => setProjectCode(data));

	//if scriptsLoaded or flaskAppCode have changed useEffect executed
	useEffect(() => {
		if (scriptsLoaded) {
			window.Prism.highlightElement(codeBlock.current);
			window.Prism.highlightElement(example1CodeBlock.current);
			window.Prism.highlightElement(codeBlockModal.current);
		}
	}, [scriptsLoaded, projectCode]);

	const dispatch = useDispatch();
	const pageTitle = 'First grade arithmetic trainer';
	//dispatch page title
	useEffect(() => {
		dispatch(setPageTitle(pageTitle));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<article className="d-flex justify-content-center">
			<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-6">
				<h4 className="h4">{pageTitle}</h4>
				<div className="overflow-hidden position-relative MPPostImgContainer">
					{/************************************************************
          									header image 
          			***************************************************************/}
					<img
						src={cardImgSrc}
						className="RQMpostImg position-absolute start-50 translate-middle"
						alt="Today was a good day"
					/>
				</div>
				<div className="d-flex justify-content-center linkToAuthor">
					<a
						href="https://openai.com/dall-e-2/"
						target="_blank"
						rel="noreferrer"
						className="me-1 text-secondary">
						Image created by: DALL·E 2 AI
					</a>
				</div>
				<div>
					<p>
						This is the second application built on the
						TypeScript+React+Bottstrap stack. Development environment - cloud
						service the
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://codesandbox.io/u/NeoBliz1">
							Codesandbox.
						</a>
					</p>
					<p>
						Since my son is going to school in the fall, he needs arithmetic
						practice. After googling for a while, I found some useful online
						arithmetic simulators. But they were not free. So I created my own
						app called Arithmetic Simulator for First Grade. <br />
						<span class="ps-5">
							Important things from this project about TypeScript:
						</span>
						<ul class="list-group list-group-flush">
							<li class="list-group-item" style={{ textIndent: '0' }}>
								If possible, let the TypeScript compiler automatically set the
								type for the variables.
							</li>

							<li class="list-group-item" style={{ textIndent: '0' }}>
								The type can be extended with other types using the Omit or &
								symbol, for example:
								<br />
								<pre className="line-numbers">
									<code ref={example1CodeBlock} className="language-tsx">
										{`type buttonPropType = {
  id: string;
  num: string | number;
  keyPressedValue: keyPressedValueType;
  keystrokesNumber: keystrokesNumberType;
  startStopState: startStopStateType;
  setPadPanelProps: setPadPanelPropsType;
};
type buttonsPanelPropType = Omit<buttonPropType, "id" | "num"> & {
  padPanelPropsObj: PadPanelPropsInterface;
  setPadPanelProps: setPadPanelPropsType;
};`}
									</code>
								</pre>
							</li>
							<li class="list-group-item" style={{ textIndent: '0' }}>
								When working with a React synthetic event, it has no "value"
								attribute. Because of this we have to define the event type as
								follows:
								<br />
								<span className="ps-5">event.target</span>
								<span class="text-primary px-2">as</span>
								HTMLInputElement;
								<br />
								Which has value attribute.
							</li>
						</ul>
						The project deployed with npm gh-pages from the codesandbox.
					</p>
					<a
						className="mx-1"
						target="_blank"
						rel="noreferrer"
						href="https://neobliz1.github.io/arithmetic_first_grade_trainer/">
						Link to the project on the Github pages
					</a>
					<iframe
						src="https://neobliz1.github.io/arithmetic_first_grade_trainer/"
						height={500}
						sandbox="allow-scripts"
						rel="noreferrer"
						loading="lazy"
						title="arithmetic trainer"
						style={{ width: '100%' }}></iframe>
					<a
						className="mx-1"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/NeoBliz1/arithmetic_first_grade_trainer">
						Link to the project repository on the Github
					</a>
					<div className="modal-content">
						<div className="modal-header codeModalHeader">
							{/* Button trigger modal */}
							<button
								type="button"
								className="btn btn-dark modalCntrlBtn"
								data-bs-toggle="modal"
								data-bs-target="#codeModal">
								<BsFullscreen />
							</button>
						</div>
						<div className="modal-header codeZoomHeader">
							{/* Button trigger modal */}
							<button
								id="zoomInCodeBlock"
								type="button"
								className="btn btn-dark modalCntrlBtn"
								onClick={() => {
									zoomHandler(preCodeBlock, 1);
								}}>
								<HiZoomIn />
							</button>
							<button
								id="zoomOutCodeBlock"
								type="button"
								className="btn btn-dark modalCntrlBtn"
								onClick={() => {
									zoomHandler(preCodeBlock, -1);
								}}>
								<HiZoomOut />
							</button>
						</div>
						<pre
							className="line-numbers"
							ref={preCodeBlock}
							style={{ maxHeight: '800px' }}>
							<code ref={codeBlock} className="language-tsx">
								{projectCode}
							</code>
						</pre>
					</div>
					<CustomModal
						codeBlock={projectCode}
						refCodeBlockModal={codeBlockModal}
						refPreCodeBlockModal={preCodeBlockModal}
						lang={'tsx'}
					/>
				</div>
			</div>
		</article>
	);
};

export default TwentyFivePlusFiveClock;
