import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/config/App';
import { StateProvider } from './app/context/AppStateContext';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
	<StateProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StateProvider>,
);
