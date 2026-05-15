import React from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';
import { useStateContext } from '../../context/AppStateContext';

const JavaScriptCalculator: React.FC = () => {
	const { pageTitle, imgSrc, imgAlt } = useStateContext();

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/javaScript_calculator/main/src/App.js"
			imgModule={
				<img
					src={imgSrc}
					className="RQMpostImg position-absolute start-50 translate-middle"
					alt={imgAlt}
				/>
			}
			lang="jsx"
		>
			<article className="d-flex justify-content-center">
				<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-12">
					<div className="d-flex justify-content-center linkToAuthor">
						<a
							href="https://unsplash.com/@rechaoktaviani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							rel="noreferrer"
							className="me-1 text-secondary">
							Photo: Recha Oktaviani
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
							This is the fourth app in the "Front End Development Libraries"
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
								training course
							</a>
							from freeCodeCamp. It was created with React and styled with
							Bootstrap for easy styling. The project uses <code>styles.css</code>{' '}
							and inline styles managed by React, and was developed in the
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
							Leveraging my experience from previous projects, I focused on
							building the calculation logic, which proved to be complex at
							times. This project highlighted the importance of using explicit
							function and variable names and writing clear comments. The key
							takeaways were:
							<ul className="list-group list-group-flush">
								<li className="list-group-item" style={{ textIndent: '0' }}>
									To access the previous state when setting a new state, use the
									functional update form of <code>setState</code> to ensure you
									are working with the most current state value.
									<br />
									<span className="text-primary ps-5">
										setState(prevState ={'>'} prevState + 1)
									</span>
								</li>

								<li className="list-group-item" style={{ textIndent: '0' }}>
									The component re-renders every time its state is updated via{' '}
									<code>setState</code>.
								</li>
							</ul>
							The project was deployed from CodeSandbox using npm{' '}
							<code>gh-pages</code>.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/javaScript_calculator/">
							View Project on GitHub Pages
						</a>
						<iframe
							src="https://neobliz1.github.io/javaScript_calculator/"
							height={500}
							sandbox="allow-scripts"
							rel="noreferrer"
							loading="lazy"
							title="drum machine iframe"
							style={{ width: '100%' }}></iframe>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/NeoBliz1/javaScript_calculator/">
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default JavaScriptCalculator;
