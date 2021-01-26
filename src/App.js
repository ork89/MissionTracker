import React, { useEffect, Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import TaskItemList from './containers/TaskItemList/TaskItemList';
import Projects from './containers/Projects/Projects';

import './App.css';

const projects = React.lazy(() => {
	return import('./containers/Projects/Projects');
});

const App = props => {
	let routes = (
		<Switch>
			<Route path='/' exact component={TaskItemList} />
			<Route path='/Projects' component={Projects} />
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
