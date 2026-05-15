import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/config/App';
import { StateProvider } from './app/context/AppStateContext';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<StateProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StateProvider>,
);
