import React, { useState, useEffect, useRef } from 'react';
import { CustomModal } from '../layouts/modal';
//import { useOutletContext } from 'react-router-dom'
import { useImportScript, useImportStylesheet } from '../fucnForApp.js';
import { useDispatch } from 'react-redux';
//import Redux action
import { setPageTitle } from '../../features/imgStateSlice';
import { BsFullscreen } from 'react-icons/bs';
import { HiZoomIn, HiZoomOut } from 'react-icons/hi';

//app wrap
const RandomQuoteMachineFullArticle = () => {
	//const outletContextProps = useOutletContext();
	//create ref for get codeBlock fo higlight by prism
	const codeBlock = useRef();
	const codeBlockModal = useRef();

	const initialCode = `
    const foo = 'foo'; 
    const bar = 'bar';
    console.log(foo + bar);
  `.trim();
	const [RQMcode, setRQMcode] = useState(initialCode);
	const [scriptsLoaded, setScriptsLoaded] = useState(false);
	const [cardImgSrc] = useState(require('../../imgs/today_was_a_good_day.jpg')); //setImg src

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

	//fetch App.py code from git
	fetch(
		'https://raw.githubusercontent.com/NeoBliz1/rand0m_qu0te_machine/main/src/App.js',
	)
		.then((response) => response.text())
		.then((data) => setRQMcode(data));

	//if scriptsLoaded or flaskAppCode have changed useEffect executed
	useEffect(() => {
		//console.log(`scriptsLoaded is ${scriptsLoaded}`)
		if (scriptsLoaded) {
			//console.log(typeof window.Prism !== 'undefined')
			//console.log(typeof window.Prism.plugins.autoloader !== 'undefined')
			//console.log(typeof window.Prism.plugins.lineNumbers !== 'undefined')
			//console.log('highlight')
			window.Prism.highlightElement(codeBlock.current);
			window.Prism.highlightElement(codeBlockModal.current);
		}
		//console.log(window.Prism)
		//if prismjs core and plugin line numbers have executed then start code highlight
	}, [scriptsLoaded, RQMcode]);

	const dispatch = useDispatch();
	const pageTitle = 'Random citation machine project.';
	//dispatch page title
	useEffect(() => {
		dispatch(setPageTitle(pageTitle));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="d-flex justify-content-center">
			<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-6">
				<h4 className="h4">{pageTitle}</h4>
				<div
					className="overflow-hidden position-relative postImgContainer"
					style={{ height: '16rem' }}>
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
						href="https://unsplash.com/photos/n-vxsHr9jZA"
						target="_blank"
						rel="noreferrer"
						className="me-1 text-secondary">
						Photo: Patrick Tomasso
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
						This is the first simple application from the Front End Development
						Libraries
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
							training course
						</a>
						from freeCodeCamp. The application was created using React, I used
						the Bootstrap framework to make it easier to work with CSS, with the
						usual styles.css and inline styles managed by React as plugin
						technologies. The cloud-based
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://codesandbox.io/u/NeoBliz1">
							codesandbox IDE
						</a>
						was chosen as the development environment. The full source code can
						be viewed on
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/NeoBliz1">
							codesandbox IDE
						</a>
						my Github , the project was deployed using npm gh-pages from a local
						machine.
					</p>
					<a
						className="mx-1"
						target="_blank"
						rel="noreferrer"
						href="https://neobliz1.github.io/rand0m_qu0te_machine/">
						Link to the project on the Github pages
					</a>
					<iframe
						src="https://neobliz1.github.io/rand0m_qu0te_machine/"
						height={500}
						sandbox="allow-scripts"
						rel="noreferrer"
						loading="lazy"
						title="random quote machine iframe"
						style={{ width: '100%' }}></iframe>
					<a
						className="mx-1"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/NeoBliz1/rand0m_qu0te_machine">
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
							<button type="button" className="btn btn-dark modalCntrlBtn">
								<HiZoomIn />
							</button>
							<button type="button" className="btn btn-dark modalCntrlBtn">
								<HiZoomOut />
							</button>
						</div>
						<pre className="line-numbers" style={{ maxHeight: '800px' }}>
							<code ref={codeBlock} className="language-jsx">
								{RQMcode}
							</code>
						</pre>
					</div>
					<CustomModal codeBlock={RQMcode} refCodeBlockModal={codeBlockModal} />
				</div>
			</div>
		</div>
	);
};

export default RandomQuoteMachineFullArticle;
