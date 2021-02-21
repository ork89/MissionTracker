import React, { useEffect, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import WelcomeScreen from './containers/Welcome/WelcomeScreen';

import AuthContextProvider from './authContext';
import * as actions from './store/actions/index';

import './App.css';

const Tracker = React.lazy(() => {
	return import('./containers/Tracker/Tracker');
});

const Projects = React.lazy(() => {
	return import('./containers/Projects/Projects');
});

const Reports = React.lazy(() => {
	return import('./containers/Reports/Reports');
});

const Login = React.lazy(() => {
	return import('./containers/Authentication/Login');
});

const Signup = React.lazy(() => {
	return import('./containers/Authentication/Signup');
});

const App = props => {
	const isLoggedIn = useSelector(state => state.auth.token);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.authCheckState());
	}, []);

	let routes = (
		<Switch>
			<Route path='/' exact component={WelcomeScreen} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			<Redirect to='/' />
		</Switch>
	);

	if (isLoggedIn)
		routes = (
			<Switch>
				<Route path='/tracker' component={Tracker} />
				<Route path='/signup' component={Signup} />
				<Route path='/projects' component={Projects} />
				<Route path='/reports' component={Reports} />
				<Route path='/login' component={Login} />
				<Route path='/' exact component={WelcomeScreen} />
				<Redirect to='/' />
			</Switch>
		);

	return (
		<div className='App'>
			<AuthContextProvider value={isLoggedIn}>
				<Layout>
					<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
				</Layout>
			</AuthContextProvider>
		</div>
	);
};

export default App;
