import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from './App';
import allReducers from './store/reducers';

import './index.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#affff2',
			main: '#7cdfbf',
			dark: '#49ad8f',
			contrastText: '#fff',
		},
		secondary: {
			light: '#95ffb3',
			main: '#5cf482',
			dark: '#00c053',
			contrastText: '#000',
		},
	},
});

const composeEnhancers =
	(process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
	compose;

const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);
