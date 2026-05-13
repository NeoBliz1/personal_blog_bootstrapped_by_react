import React, { useState } from 'react';
import { PostLayout } from '../layouts/postLayout';

const RandomQuoteMachineFullArticle = () => {
	const pageTitle = 'Random citation machine project.';
	const [imgAsset] = useState(
		<img
			src={require('../../imgs/today_was_a_good_day.jpg')}
			className="RQMpostImg position-absolute start-50 translate-middle variant-alpha"
			alt={pageTitle}
		/>,
	);

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/rand0m_qu0te_machine/main/src/App.js"
			imgModule={imgAsset}
			lang="jsx"
		>
			<article className="d-flex justify-content-center">
				<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-12">
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
							This is the first simple app in the "Front End Development
							Libraries"
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
								training course
							</a>
							from freeCodeCamp. The app created using React. I used the Bootstrap
							framework to make it easy to work with CSS. Regular styles.css and
							inline styles managed by React as plugin technologies. As
							development environment chosen the cloud-based
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
								href="https://github.com/NeoBliz1/rand0m_qu0te_machine">
								my Github.
							</a>
							The project was deployed using npm gh-pages from a local machine.
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
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default RandomQuoteMachineFullArticle;
