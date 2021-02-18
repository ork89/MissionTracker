import React, { Suspense, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import Login from './containers/Authentication/Login';
import Signup from './containers/Authentication/Signup';
import AuthContextProvider from './authContext';

import './App.css';

const tracker = React.lazy(() => {
	return import('./containers/Tracker/Tracker');
});

const projects = React.lazy(() => {
	return import('./containers/Projects/Projects');
});

const reports = React.lazy(() => {
	return import('./containers/Reports/Reports');
});

const App = () => {
	const isLoggedIn = useSelector(state => state.auth.token);
	const routes = (
		<Switch>
			{/* <Route path='/' exact component={tracker} /> */}
			<Route path='/login' exact component={Login} />
			<Route path='/' exact component={tracker} />
			<Route path='/signup' component={Signup} />
			<Route path='/projects' component={projects} />
			<Route path='/reports' component={reports} />
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
