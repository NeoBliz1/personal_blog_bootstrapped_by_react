import React, { useState } from 'react';
import { PostLayout } from '../layouts/postLayout';

const FirstGradeArithmeticTrainer = () => {
	const pageTitle = 'First grade arithmetic trainer';
	const [imgAsset] = useState(
		<img
			src={require('../../imgs/DALL·E_2023_01_13_06_30_13_Arithmetic_simulator_for_first_grade_tiny.png')}
			className="RQMpostImg position-absolute start-50 translate-middle"
			alt="Today was a good day"
		/>,
	);

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/arithmetic_first_grade_trainer/main/src/App.tsx"
			imgModule={imgAsset}
			lang="tsx"
		>
			<article className="d-flex justify-content-center">
				<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-12">
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
							<span className="ps-5">
							Important things from this project about TypeScript:
						</span>
							<ul className="list-group list-group-flush">
								<li className="list-group-item" style={{ textIndent: '0' }}>
									If possible, let the TypeScript compiler automatically set the
									type for the variables.
								</li>

								<li className="list-group-item" style={{ textIndent: '0' }}>
									The type can be extended with other types using the Omit or &
									symbol, for example:
									<br />

								</li>
								<li className="list-group-item" style={{ textIndent: '0' }}>
									When working with a React synthetic event, it has no "value"
									attribute. Because of this we have to define the event type as
									follows:
									<br />
									<span className="ps-5">event.target</span>
									<span className="text-primary px-2">as</span>
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
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default FirstGradeArithmeticTrainer;
