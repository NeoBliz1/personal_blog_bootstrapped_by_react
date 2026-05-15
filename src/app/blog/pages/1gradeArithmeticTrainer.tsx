import React from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';
import { useStateContext } from '../../context/AppStateContext';

const FirstGradeArithmeticTrainer: React.FC = () => {
	const { pageTitle, imgSrc, imgAlt } = useStateContext();

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/arithmetic_first_grade_trainer/main/src/App.tsx"
			imgModule={
				<img
					src={imgSrc}
					className="RQMpostImg position-absolute top-50 start-50 translate-middle w-100"
					alt={imgAlt}
				/>
			}
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
							This is the second application I've built using TypeScript, React,
							and Bootstrap. It was developed in the
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
							With my son starting school soon, I wanted to give him some
							arithmetic practice. After searching online, I found that most
							arithmetic simulators were not free. This inspired me to create my
							own app: the First Grade Arithmetic Trainer. <br />
							<span className="ps-5">
								Key takeaways about TypeScript from this project:
							</span>
							<ul className="list-group list-group-flush">
								<li className="list-group-item" style={{ textIndent: '0' }}>
									Whenever possible, let TypeScript's type inference
									automatically determine the type of a variable. This keeps the
									code cleaner.
								</li>

								<li className="list-group-item" style={{ textIndent: '0' }}>
									Types can be extended using utility types like <code>Omit</code>{' '}
									or by using intersection types with the <code>&</code> symbol.
									For example:{' '}
									<code>type NewType = OldType & {'{ newProp: string; }'}</code>
								</li>
								<li className="list-group-item" style={{ textIndent: '0' }}>
									When handling a React synthetic event, the base{' '}
									<code>EventTarget</code> doesn't have a <code>value</code>{' '}
									property. To access it, you need to perform a type assertion to
									let TypeScript know it's an <code>HTMLInputElement</code>:{' '}
									<code>(event.target as HTMLInputElement).value</code>.
								</li>
							</ul>
							The project was deployed from CodeSandbox using npm{' '}
							<code>gh-pages</code>.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/arithmetic_first_grade_trainer/">
							View Project on GitHub Pages
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
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default FirstGradeArithmeticTrainer;
