import React, { useState } from 'react';
import { PostLayout } from '../layouts/postLayout';

const MarkdownPreviewerFullArticle = () => {
	const pageTitle = 'Markdown Previewer project.';
	const [imgAsset] = useState(
		<img
			src={require('../../imgs/lyman-hansel-gerona-C3POunsplash_tiny.jpg')}
			className="RQMpostImg position-absolute start-50 translate-middle"
			alt="Today was a good day"
		/>,
	);

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/Markdown_Previewer/main/src/App.js"
			imgModule={imgAsset}
			lang="jsx"
		>
			<article className="d-flex justify-content-center">
				<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-12">
					<div className="d-flex justify-content-center linkToAuthor">
						<a
							href="https://unsplash.com/@lhgerona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							rel="noreferrer"
							className="me-1 text-secondary">
							Photo: Lyman Hansel Gerona
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
							This is the second app in the "Front End Development Libraries"
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux:~:text=Front%20End%20Development%20Libraries%20Projects">
								training course
							</a>
							from freeCodeCamp. The app created with React, I used the Bootstrap
							framework to make it easy to work with CSS. Regular styles.css and
							inline styles managed by React as plugin technologies. As a
							development environment was chosen cloud service the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://codesandbox.io/u/NeoBliz1">
								Codesandbox.
							</a>
							This mini-application is based on two components. The difference
							between this project and the previous one is the transfer of states
							via component props in both directions, parent-child and
							child-parent. The project deployed with npm gh-pages from the
							codesandbox.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/Markdown_Previewer/">
							Link to the project on the Github pages
						</a>
						<iframe
							src="https://neobliz1.github.io/Markdown_Previewer/"
							height={1430}
							sandbox="allow-scripts"
							rel="noreferrer"
							loading="lazy"
							title="random quote machine iframe"
							style={{ width: '100%' }}></iframe>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/NeoBliz1/Markdown_Previewer">
							Link to the project repository on the Github
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default MarkdownPreviewerFullArticle;
