import React, { useState } from 'react';
import { PostLayout } from '../layouts/postLayout';

const DrumMachineFullArticle = () => {
	const pageTitle = 'Drum Machine project.';
	const [imgAsset] = useState(
		<img
			src={require('../../imgs/yianni-mathioudakis-drum_pad-unsplash_tiny.jpg')}
			className="RQMpostImg position-absolute start-50 translate-middle"
			alt="Today was a good day"
		/>,
	);

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/drum_machine/main/src/App.js"
			imgModule={imgAsset}
			lang="jsx"
		>
			<article className="d-flex justify-content-center">
				<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-12">
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
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default DrumMachineFullArticle;
