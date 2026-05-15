import React, { ReactNode, useState } from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';

const WCPostFullArticle: React.FC = () => {
	const pageTitle = 'Website Chat with Telegram Messaging';
	const [imgAsset] = useState<ReactNode>(
		<img
			src={require('../../styles/imgs/5940816324_14dc1e5197_b.png')}
			className="postImg position-absolute top-50 start-50 translate-middle"
			alt="The easy way is hard enough"
		/>,
	);

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/t-msg-bot/master/app.py"
			imgModule={imgAsset}
			lang="python"
		>
			<article className="d-flex justify-content-center">
				<div className="m-2 col-10 col-sm-9 col-lg-8 col-xxl-12">
					<div className="d-flex justify-content-center linkToAuthor">
						<a
							href="https://flic.kr/p/a3YeHE"
							target="_blank"
							rel="noreferrer"
							className="me-1 text-secondary">
							Photo: Nicolás Boullosa
						</a>
						<a
							href="https://creativecommons.org/licenses/by/2.0/"
							target="_blank"
							rel="noreferrer"
							className="text-secondary">
							(CC BY 2.0)
						</a>
					</div>
					<div>
						<p>
							I started by researching existing Telegram chat applications, but
							they were either paid or unsuitable for my website. I decided to
							build my own, seeing it as a valuable learning experience. The
							front-end was built with the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://jqueryui.com/dialog/">
								JQuery UI
							</a>
							framework and the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://jquery.com/">
								JQuery
							</a>
							library. The logic is simple: while the chat window is open, it
							polls the server for new messages every five seconds.
						</p>
						<p>
							For the server-side implementation, I followed a helpful
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://aliabdelaal.medium.com/telegram-bot-tutoria-using-python-and-flask-1fc634da9522">
								article by Ali
							</a>
							. Based on the article, I built the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://github.com/NeoBliz1/t-msg-bot/blob/master/app.py">
								application
							</a>
							using Python and the Flask framework. I began by learning about
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://flask.palletsprojects.com/en/2.0.x/quickstart/#routing">
								Flask routes
							</a>
							and the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://docs.python-requests.org/en/latest/user/quickstart/#make-a-request">
								requests
							</a>
							library, which was sufficient to get started.
						</p>
						<p>
							While developing on my local machine, I encountered issues with
							requests being rejected when sent from the local server to a
							different port. This led me to deploy the application on the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://www.heroku.com/">
								Heroku cloud service
							</a>
							, which seemed like a good solution based on Ali's article. Heroku
							is user-friendly, especially for beginners, and offers a free tier
							for small projects. I followed the
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://devcenter.heroku.com/articles/getting-started-with-python">
								deployment manual
							</a>
							and installed the Heroku CLI on my PC using the Ubuntu terminal.
						</p>
						<p>
							After deploying, I ran into a 'Cross-Origin Request Blocked' error.
							After researching CORS, I found a
							<a
								className="mx-1"
								target="_blank"
								rel="noreferrer"
								href="https://flask-cors.readthedocs.io/en/latest/">
								Flask extension
							</a>
							for handling Cross-Origin Resource Sharing (CORS). Integrating
							<code>Flask-CORS</code> into my app resolved the issue, allowing
							AJAX requests to reach the server. While Heroku is convenient for
							small projects, it doesn't offer free SSL certificates, which I had
							attempted to set up using Cloudflare.
						</p>
						<p>
							Telegram's
							<a
								className="mx-1"
								href="https://core.telegram.org/bots/webhooks#the-short-version"
								target="_blank"
								rel="noreferrer">
								webhook
							</a>
							feature is incredibly useful, as it allows the server to receive
							messages from Telegram in real-time. However, this feature requires
							an
							<a
								className="mx-1"
								href="https://core.telegram.org/bots/webhooks#ssl-needs-a-certificate"
								target="_blank"
								rel="noreferrer">
								SSL certificate
							</a>
							. After some research, I discovered that I could get a free SSL
							certificate from Cloudflare. This prompted me to rent an affordable
							Ubuntu server and configure my application there. I used a
							<a
								className="mx-1"
								href="https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-20-04"
								target="_blank"
								rel="noreferrer">
								guide from DigitalOcean
							</a>
							to help with the server setup.
						</p>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default WCPostFullArticle;
