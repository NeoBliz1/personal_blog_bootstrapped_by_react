import React from 'react';
import { PostLayout } from '../../shared/layouts/PostLayout';
import { useStateContext } from '../../context/AppStateContext';

const TwentyFivePlusFiveCClock: React.FC = () => {
	const { pageTitle, imgSrc, imgAlt } = useStateContext();

	return (
		<PostLayout
			pageTitle={pageTitle}
			fetchUrl="https://raw.githubusercontent.com/NeoBliz1/25Plus5Clock/refs/heads/main/src/ui.c"
			imgModule={
				<img
					src={imgSrc}
					className="postImg position-absolute top-50 start-50 translate-middle w-100"
					alt={imgAlt}
				/>
			}
			lang="clike"
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
							The goal for this project was to build a lightweight, sub-2MB native Linux desktop reference application
							using C and{' '}
							<a href="https://www.gtk.org/" target="_blank" rel="noreferrer">
								GTK3
							</a>{' '}
							to mitigate physical sedentary fatigue and back pain. Standard software alerts are easily dismissed or
							lost in background
							workspaces, failing to disrupt deep task focus or motivate therapeutic physical stretching. To solve this,
							the core architecture
							implements a high-priority modal focus-inversion feature. When transitioning from a work session to a
							recovery break, the application
							forcefully shifts the active window state to a permanent, non-dismissible full-screen layout anchored
							directly on the desktop's top-plane layer (
							<a href="https://developer.gnome.org/gtk3/stable/GtkWindow.html#gtk-window-set-keep-above" target="_blank"
								 rel="noreferrer">
								gtk_window_set_keep_above
							</a>
							). Because the operating system workspace blocks standard window switching commands, a user cannot simply
							alt-tab away;
							they are forced to either consciously pause the countdown or close the session. This intentional
							disruption breaks cognitive
							inertia and visually commands the user to stand up, stretch, and perform active exercises.
						</p>
						<p>
							On the reliability front, I focused on data persistence across application runs via the{' '}
							<a href="https://developer.gnome.org/gio/stable/GSettings.html" target="_blank" rel="noreferrer">
								GSettings API
							</a>
							. I structured the application’s underlying state model to track intervals in raw seconds. A key
							architectural
							element is the serialization flow within the <code>update_if_active</code> interface; it synchronizes
							memory variables
							(<code>app-{'>'}session_total_seconds</code>) and commits them directly to disk via{' '}
							<a href="https://developer.gnome.org/gio/stable/GSettings.html#g-settings-set-int" target="_blank"
								 rel="noreferrer">
								g_settings_set_int
							</a>
							. This dual-channel update guarantees that user modifications are persisted immediately without blocking
							the main
							UI thread or risking data loss during an unexpected application shutdown.
						</p>
						<p>
							For automation, the project relies on a multi-tier{' '}
							<a href="https://cmake.org/cmake/help/latest/guide/tutorial/index.html" target="_blank" rel="noreferrer">
								CMakeLists.txt
							</a>{' '}
							build pipeline to handle external toolkit discovery through{' '}
							<a href="https://www.freedesktop.org/wiki/Software/pkg-config/" target="_blank" rel="noreferrer">
								PkgConfig
							</a>{' '}
							and manage asset compilation. A critical step in this setup is handling the GSettings XML schema
							blueprints.
							Unlike standard static resources, schemas must be compiled into a binary format
							(<code>gschemas.compiled</code>) to be recognized by the host OS.
							I automated this by introducing sequential lifecycle hooks: a PRE_BUILD step copies the
							raw <code>.gschema.xml</code> file into
							the active sandbox build folder, and a POST_BUILD step immediately triggers{' '}
							<a href="https://developer.gnome.org/gio/stable/glib-compile-schemas.html" target="_blank"
								 rel="noreferrer">
								glib-compile-schemas
							</a>{' '}
							to generate the required binary schema catalog right beside the target executable.
						</p>
						<p>
							The entire setup is validated by a suite of headless integration tests using the{' '}
							<a href="https://cmake.org/cmake/help/latest/module/CTest.html" target="_blank" rel="noreferrer">
								CTest
							</a>{' '}
							framework. Running graphical desktop logic in automated environments (such as a remote server or a{' '}
							<a href="https://github.com/features/actions" target="_blank" rel="noreferrer">
								GitHub Actions
							</a>{' '}
							CI pipeline) introduces strict environment dependencies. The test runners solve this by initializing an
							isolated, in-memory configuration database via{' '}
							<a href="https://developer.gnome.org/glib/stable/glib-Miscellaneous-Utility-Functions.html#g-setenv"
								 target="_blank" rel="noreferrer">
								g_setenv("G_SETTINGS_BACKEND", "memory", TRUE)
							</a>
							, ensuring that tests can verify data states and reset loops cleanly without overwriting the developer's
							permanent local settings.
							To validate the interactive state machine without a physical display screen, the tests utilize{' '}
							<a href="https://developer.gnome.org/gtk3/stable/gtk3-General.html#gtk-init-check" target="_blank"
								 rel="noreferrer">
								gtk_init_check
							</a>{' '}
							to safely establish a headless graphical layout and inject mock widget nodes (such as{' '}
							<a href="https://developer.gnome.org/gtk3/stable/GtkLabel.html#gtk-label-new" target="_blank"
								 rel="noreferrer">
								gtk_label_new
							</a>
							), managing their lifecycles through explicit GLib reference count operations ({' '}
							<a href="https://developer.gnome.org/gobject/stable/gobject-memory.html#g-object-ref-sink" target="_blank"
								 rel="noreferrer">
								g_object_ref_sink
							</a>
							).
						</p>
						<p>
							The final build step utilizes{' '}
							<a href="https://cmake.org/cpack/" target="_blank" rel="noreferrer">
								CPack
							</a>{' '}
							to bundle the binaries, icons, launcher files, and compiled schemas into standard GNU installation paths,
							outputting a native distribution-ready{' '}
							<a href="https://www.debian.org/doc/debian-policy/ch-binary.html" target="_blank" rel="noreferrer">
								Debian package (.deb)
							</a>
							.
						</p>
						<a
							className="mx-1"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/NeoBliz1/25Plus5Clock">
							View Repository on GitHub
						</a>
					</div>
				</div>
			</article>
		</PostLayout>
	);
};

export default TwentyFivePlusFiveCClock;
