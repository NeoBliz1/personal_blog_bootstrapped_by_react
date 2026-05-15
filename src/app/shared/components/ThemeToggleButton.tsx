import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ThemeToggleButton: React.FC = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		setTheme(prefersDark ? 'dark' : 'light');
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme');
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<IconContext.Provider value={{ size: '1.5em' }}>
			<button
				aria-label="Toggle theme"
				className="mr-2 btn btn-outline-dark border-0 rounded-circle shareBarIcon"
				onClick={toggleTheme}
			>
				{theme === 'light' ? <FaMoon /> : <FaSun />}
			</button>
		</IconContext.Provider>
	);
};

export default ThemeToggleButton;
