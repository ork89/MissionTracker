import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

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
	const routes = (
		<Switch>
			<Route path='/' exact component={tracker} />
			<Route path='/projects' component={projects} />
			<Route path='/reports' component={reports} />
			<Redirect to='/' />
		</Switch>
	);

	return (
		<div className='App'>
			<Layout>
				<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
			</Layout>
		</div>
	);
};

export default App;
