import React from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';
import { useStateContext } from '../../context/AppStateContext';

const TwentyFivePlusFiveClock: React.FC = () => {
	const { pageTitle, imgSrc, imgAlt } = useStateContext();

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/twenty_five_plus_five_clock/main/src/App.tsx"
			imgModule={
				<img
					src={imgSrc}
					className="RQMpostImg position-absolute top-25 start-50 translate-middle w-100"
					alt={imgAlt}
				/>
			}
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
							This is the final app in the "Front End Development Libraries"
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
							This project was more complex than the previous ones, primarily
							because I used TypeScript. While the full benefits of TypeScript
							are most apparent in large-scale applications, using it in this
							small project was a valuable learning experience. <br />
							<span className="ps-5">
								Key takeaways about TypeScript from this project:
							</span>
							<ul className="list-group list-group-flush">
								<li className="list-group-item" style={{ textIndent: '0' }}>
									All variables, function arguments, and state values must have a
									defined type.
								</li>

								<li className="list-group-item" style={{ textIndent: '0' }}>
									Interfaces are ideal for defining the shape of objects and can
									be extended by other interfaces or combined with types.
								</li>
								<li className="list-group-item" style={{ textIndent: '0' }}>
									The non-null assertion operator (<code>!</code>) tells the
									compiler to treat a value as non-nullable (<code>null</code> or{' '}
									<code>undefined</code>), even if its type suggests it could be.
									For example, <code>name!</code> asserts that name is not null
									or undefined. This should be used with caution as it can hide
									potential runtime errors.
								</li>
								<li className="list-group-item" style={{ textIndent: '0' }}>
									The optional property modifier (<code>?</code>) marks a property
									as optional, allowing it to be <code>undefined</code>. For
									example, <code>id?: string</code> means the id property can be
									a string or <code>undefined</code>.
								</li>
							</ul>
							The project was deployed from CodeSandbox using npm{' '}
							<code>gh-pages</code>.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/twenty_five_plus_five_clock/">
							View Project on GitHub Pages
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
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default TwentyFivePlusFiveClock;
