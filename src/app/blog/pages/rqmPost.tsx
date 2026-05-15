import React, { ReactNode, useState } from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';

const RandomQuoteMachineFullArticle: React.FC = () => {
	const pageTitle = 'Random Quote Machine Project';
	const [imgAsset] = useState<ReactNode>(
		<img
			src={require('../../styles/imgs/today_was_a_good_day.jpg')}
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
							This is the first app from the freeCodeCamp "Front End
							Development Libraries"
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
								training course.
							</a>
							It was created with React and styled with Bootstrap for easy
							CSS management, including <code>styles.css</code> and inline
							styles. The project was developed in the cloud-based
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://codesandbox.io/u/NeoBliz1">
								CodeSandbox IDE.
							</a>
							The full source code is available on
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://github.com/NeoBliz1/rand0m_qu0te_machine">
								my GitHub,
							</a>
							and the project was deployed using npm <code>gh-pages</code>.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/rand0m_qu0te_machine/">
							View Project on GitHub Pages
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
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default RandomQuoteMachineFullArticle;
