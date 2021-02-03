import { combineReducers } from 'redux';
import trackerReducer from './trackerReducer';
import projectsReducer from './projectsReducer';

const allReducers = combineReducers({
	tasksReduce: trackerReducer,
	projectsReduce: projectsReducer,
});

export default allReducers;
