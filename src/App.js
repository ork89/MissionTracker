import Layout from './hoc/Layout/Layout';
import Task from './containers/Task/Task';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faPlayCircle, faStopCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faPlayCircle, faStopCircle, faPauseCircle);

const App = props => {
	return (
		<div className='App'>
			<Task />			
			<Layout />
			
		</div>
	);
};

export default App;
