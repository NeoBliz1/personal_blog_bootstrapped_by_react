import React, { useState } from 'react';
import { PostLayout } from '../layouts/postLayout';

const TwentyFivePlusFiveClock = () => {
	const pageTitle = 'Twenty five plus five clock project.';
	const [imgAsset] = useState(
		<img
			src={require('../../imgs/jessica-delp-_25+5clock-unsplash_tiny.jpg')}
			className="RQMpostImg position-absolute start-50 translate-middle"
			alt="Today was a good day"
		/>,
	);

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/twenty_five_plus_five_clock/main/src/App.tsx"
			imgModule={imgAsset}
			lang="tsx"
		>
			<article className="d-flex justify-content-center">
				<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-12">
					<div className="d-flex justify-content-center linkToAuthor">
						<a
							href="https://unsplash.com/@jfdelp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							rel="noreferrer"
							className="me-1 text-secondary">
							Photo: Jessica Delp
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
							That's the finall app in the "Front End Development Libraries"
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
							This project is more complicated than the previous ones. First of
							all, because I used TypeScript. I suppose that all the benefits of
							TypeScript are revealed in large applications such as Slack, Medium,
							etc. In my small application, it doesn't bring many positive
							features, but it was a positive experience. <br />
							<span className="ps-5">
								Important things from this project about TypeScript:
							</span>
							<ul className="list-group list-group-flush">
								<li className="list-group-item" style={{ textIndent: '0' }}>
									all variables and function states must have a type.
								</li>

								<li className="list-group-item" style={{ textIndent: '0' }}>
									interfaces are useful for objects, interfaces can be assimilated
									into types and other interfaces.
								</li>
								<li className="list-group-item" style={{ textIndent: '0' }}>
									Sign "!" can disable null or undefined compiler warning: <br />
									<span className="text-primary ps-5">name!</span>:string;
									<br />
									String is the only valid type for name, "null" and "undefined"
									are not allowed. But this will keep the compiler silent about
									the assignment error.
								</li>
								<li className="list-group-item" style={{ textIndent: '0' }}>
									Sign "?" allow "undefined" types: <br />
									<span className="text-primary ps-5">id?</span>:string;
									<br />
									The id property can be "undefined".
								</li>
							</ul>
							The project deployed with npm gh-pages from the codesandbox.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/twenty_five_plus_five_clock/">
							Link to the project on the Github pages
						</a>
						<iframe
							src="https://neobliz1.github.io/twenty_five_plus_five_clock/"
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
							href="https://github.com/NeoBliz1/twenty_five_plus_five_clock/">
							Link to the project repository on the Github
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default TwentyFivePlusFiveClock;
