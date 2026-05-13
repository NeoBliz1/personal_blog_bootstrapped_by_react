import React, { useState } from 'react';
import { PostLayout } from '../layouts/postLayout';

const JavaScriptCalculator = () => {
	const pageTitle = 'JavsScript Calculator project.';
	const [imgAsset] = useState(
		<img
			src={require('../../imgs/recha-oktaviani-calculator-unsplash_tiny.jpg')}
			className="RQMpostImg position-absolute start-50 translate-middle"
			alt="Today was a good day"
		/>,
	);

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/javaScript_calculator/main/src/App.js"
			imgModule={imgAsset}
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
							That's the fourth app in the "Front End Development Libraries"
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
								training course
							</a>
							from freeCodeCamp. The app created with React, I used the Bootstrap
							framework to make it easy styling. Regular styles.css and inline
							styles managed by React as plugin technologies. Development
							environment - cloud service the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://codesandbox.io/u/NeoBliz1">
								Codesandbox.
							</a>
						</p>
						<p>
							To make it easy, in this project I used my experience from previous
							projects. There are no new framework features here. It was just
							interesting to create calculation algorithms, sometimes the
							algorithms were a bit confusing. I realized that I needed to rename
							all functions and variables more explicitly and leave more comments
							to the code. The important things I need to pay attention to are:
							<ul class="list-group list-group-flush">
								<li class="list-group-item" style={{ textIndent: '0' }}>
									access to the current state is only possible before rendering,
									after rendering it is possible by assigning states <br />
									<span class="text-primary ps-5">setState</span>
									((prevState)=>(prevState+1))
								</li>

								<li class="list-group-item" style={{ textIndent: '0' }}>
									The application is re-rendered every time the state is set.
								</li>
							</ul>
							The project deployed with npm gh-pages from the codesandbox.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/javaScript_calculator/">
							Link to the project on the Github pages
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
							Link to the project repository on the Github
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default JavaScriptCalculator;
