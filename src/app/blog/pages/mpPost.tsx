import React, { ReactNode, useState } from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';

const MarkdownPreviewerFullArticle: React.FC = () => {
	const pageTitle = 'Markdown Previewer Project';
	const [imgAsset] = useState<ReactNode>(
		<img
			src={require('../../styles/imgs/lyman-hansel-gerona-C3POunsplash_tiny.jpg')}
			className="RQMpostImg position-absolute start-50 translate-middle"
			alt="Markdown Previewer"
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
							cloud IDE. This mini-application features two components and
							demonstrates state transfer between parent and child components. The
							project was deployed from CodeSandbox using npm{' '}
							<code>gh-pages</code>.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://neobliz1.github.io/Markdown_Previewer/">
							View Project on GitHub Pages
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
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default MarkdownPreviewerFullArticle;
