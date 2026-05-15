import React, { ReactNode, useState } from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';

const DrumMachineFullArticle: React.FC = () => {
	const pageTitle = 'Drum Machine Project';
	const [imgAsset] = useState<ReactNode>(
		<img
			src={require('../../styles/imgs/yianni-mathioudakis-drum_pad-unsplash_tiny.jpg')}
			className="RQMpostImg position-absolute start-50 translate-middle"
			alt="Drum Machine"
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
							This is the third app in the "Front End Development Libraries"
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
								training course
							</a>
							from freeCodeCamp. It was created with React and styled with
							Bootstrap for easy CSS management, including <code>styles.css</code>
							and inline styles. The project was developed in the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://codesandbox.io/u/NeoBliz1">
								CodeSandbox
							</a>
							cloud IDE.
						</p>
						<p>
							Similar to the previous app, this one also contains two components
							and uses the same principles of prop transfer. I delved deeper into
							React's render process, realizing that re-renders propagate from
							the parent component down to the modified child. New features in
							this project include deploying pad components from an object and
							adding listeners inside the <code>useEffect</code> hook. The main
							challenge was using two different objects with elements that shared
							the same identifiers. Every time the sound bank was changed, the
							keyboard pads would re-render, and the <code>keypress</code> event
							listeners were removed and re-added within the{' '}
							<code>useEffect</code> hook. However, because two elements in each
							object had the same identifier, only seven listeners were updated
							correctly, causing the 'S' key to re-render when the 'D' key was
							pressed. The issue was resolved by adding unique identifiers to
							each object. The project was deployed from CodeSandbox using npm{' '}
							<code>gh-pages</code>.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/drum_machine/">
							View Project on GitHub Pages
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
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default DrumMachineFullArticle;
