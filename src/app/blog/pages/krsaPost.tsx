import React from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';
import { useStateContext } from '../../context/AppStateContext';

const KRSAPostFullArticle: React.FC = () => {
	const { pageTitle, imgSrc, imgAlt } = useStateContext();

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/kafka-raft-scram-demo/refs/heads/main/kafka/docker-compose-scram-auth-kafka.yml"
			imgModule={
				<img
					src={imgSrc}
					className="postImg position-absolute top-100 start-50 translate-middle w-100"
					alt={imgAlt}
				/>
			}
			lang="bash"
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
							The goal for this project was to build a practical reference for
							integrating{' '}
							<a
								href="https://spring.io/projects/spring-boot"
								target="_blank"
								rel="noreferrer">
								Spring Boot
							</a>{' '}
							with{' '}
							<a href="https://kafka.apache.org/" target="_blank" rel="noreferrer">
								Kafka
							</a>
							, focusing on the areas that are critical for production: delivery
							guarantees and security.
						</p>
						<p>
							On the reliability front, I focused on testing different delivery
							semantics under adverse conditions.<br /> I simulated network partitions
							with{' '}
							<a
								href="https://github.com/Shopify/toxiproxy"
								target="_blank"
								rel="noreferrer">
								ToxiProxy
							</a>{' '}
							to validate our "at-most-once" configuration, ensuring that a
							connection drop during a produce request results in potential data
							loss, but never a duplicate message. <br /> I also built a test case to
							highlight a common pitfall in "exactly-once" systems by simulating
							a failure between the Kafka commit and the database commit in a{' '}
							<a
								href="https://microservices.io/patterns/data/transactional-outbox.html"
								target="_blank"
								rel="noreferrer">
								transactional outbox pattern.
							</a>
							This demonstrates how a naive recovery process can still lead to
							duplicates, even with an idempotent producer.
						</p>
						<p>
							For security, the implementation uses{' '}
							<a
								href="https://docs.confluent.io/platform/current/kafka/authentication/sasl/scram-sasl.html"
								target="_blank"
								rel="noreferrer">
								SASL/SCRAM-SHA-512.
							</a>
							A key moment in this setup is the custom startup command for the
							Kafka service in{' '}
							<a
								href="https://docs.docker.com/compose/"
								target="_blank"
								rel="noreferrer">
								Docker Compose.
							</a>
							Instead of just running the default entrypoint, we use a
							multi-step shell command to bootstrap the cluster with security
							enabled from the very beginning. First, a temporary{' '}
							<code>/tmp/kraft.properties</code> file is created. This file is
							crucial because the <code>kafka-storage format</code> command needs
							a minimal configuration to identify the cluster and its roles.
							Without it, the formatting process would fail.
						</p>
						<p>
							With that properties file in place, the{' '}
							<code>kafka-storage format</code> command is executed. This is where
							we implement a best practice for production-like environments:
							pre-seeding users. The <code>--add-scram</code> flags create an
							admin user for operational tasks and a client user for the
							application, embedding their credentials directly into the broker's
							metadata. This ensures that from the moment the cluster starts,
							it's already secured and has the necessary users provisioned.
							Finally, <code>exec /etc/confluent/docker/run</code> passes control
							to the standard Confluent startup script, which then launches the
							now fully-configured and secured Kafka broker.
						</p>
						<p>
							Client-side configuration in Spring Boot is handled through the{' '}
							<code>application.yml</code>. The key is to define the correct SASL
							properties for the producer and consumer. This involves setting the{' '}
							<code>security.protocol</code> to <code>SASL_PLAINTEXT</code> and
							the <code>sasl.mechanism</code> to <code>SCRAM-SHA-512</code>. The
							core of the authentication is the <code>sasl.jaas.config</code>{' '}
							property, which provides the login module and the client's username
							and password.
						</p>
						<p>
							The entire setup is validated by a suite of integration tests using{' '}
							<a
								href="https://www.testcontainers.org/"
								target="_blank"
								rel="noreferrer">
								Testcontainers.
							</a>
							The{' '}
							<code>
								WeatherIngestionControllerTestContainerWithScramAuthTest,
							</code>
							for example, validate the entire setup under realistic conditions. For instance,
							the test runs a full Docker Compose environment with SCRAM enabled to perform
							end-to-end testing. This demonstrates that the application successfully authenticates,
							produces, and consumes messages.
							The result is a production-tested model ready to serve as a robust foundation
							for any production messaging architecture.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/NeoBliz1/kafka-raft-scram-demo">
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default KRSAPostFullArticle;
