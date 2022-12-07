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
const DrumMachineFullArticle = () => {
	//const outletContextProps = useOutletContext();
	//create ref for get codeBlock fo higlight by prism
	const codeBlock = useRef();
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
		require('../../imgs/yianni-mathioudakis-drum_pad-unsplash_tiny.jpg'),
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
		'https://raw.githubusercontent.com/NeoBliz1/drum_machine/main/src/App.js',
	)
		.then((response) => response.text())
		.then((data) => setProjectCode(data));

	//if scriptsLoaded or flaskAppCode have changed useEffect executed
	useEffect(() => {
		if (scriptsLoaded) {
			window.Prism.highlightElement(codeBlock.current);
			window.Prism.highlightElement(codeBlockModal.current);
		}
	}, [scriptsLoaded, projectCode]);

	const dispatch = useDispatch();
	const pageTitle = 'Drum Machine project.';
	//dispatch page title
	useEffect(() => {
		dispatch(setPageTitle(pageTitle));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="d-flex justify-content-center">
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
						href="https://unsplash.com/@yiannifive?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						target="_blank"
						rel="noreferrer"
						className="me-1 text-secondary">
						Photo: Yianni Mathioudakis
					</a>
					<a
						href="https://unsplash.com/license"
						target="_blank"
						rel="noreferrer"
						className="text-secondary">
						(Unsplash License)
					</a>
				</div>
				<div>
					<p>
						That's the third app in the "Front End Development Libraries"
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
							training course
						</a>
						from freeCodeCamp. The app created with React, I used the Bootstrap
						framework to make it easy to work with CSS. Regular styles.css and
						inline styles managed by React as plugin technologies. As
						development environment was chosen cloud service the
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://codesandbox.io/u/NeoBliz1">
							Codesandbox.
						</a>
					</p>
					<p>
						Like the previous application, this also contains two components and
						uses the same principles of prop transfer. I dug deeper into how
						React render works and realized that re-render is called from top to
						bottom, from the parent component containing the modified child
						component down to the child component. New features of the project
						are deploying pad components from an object and adding listeners
						inside the 'useEffect' hook. My main stumbling block in this project
						was using two different objects with two elements that had the same
						identifiers. Every time the sound bank was changed, the keyboard
						pads were re-rendered, inside the useEffect hook the 'keypress'
						event listeners were removed and added back in. But because the
						identifiers of the two elements in each object were the same, only 7
						listeners were updated, and because of that the 'S' key was
						re-rendered when the 'D' key was pressed. It finally has worked
						correctly after I added unique identifiers for each object. The
						project deployed with npm gh-pages from the codesandbox.
					</p>
					<a
						className="mx-1"
						target="_blank"
						rel="noreferrer"
						href="https://neobliz1.github.io/drum_machine/">
						Link to the project on the Github pages
					</a>
					<iframe
						src="https://neobliz1.github.io/drum_machine/"
						height={430}
						sandbox="allow-scripts"
						rel="noreferrer"
						loading="lazy"
						title="drum machine iframe"
						style={{ width: '100%' }}></iframe>
					<a
						className="mx-1"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/NeoBliz1/drum_machine/">
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
							<code ref={codeBlock} className="language-jsx">
								{projectCode}
							</code>
						</pre>
					</div>
					<CustomModal
						codeBlock={projectCode}
						refCodeBlockModal={codeBlockModal}
						refPreCodeBlockModal={preCodeBlockModal}
					/>
				</div>
			</div>
		</div>
	);
};

export default DrumMachineFullArticle;
