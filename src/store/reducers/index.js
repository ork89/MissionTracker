import { combineReducers } from 'redux';
import trackerReducer from './trackerReducer';
import projectsReducer from './projectsReducer';

const allReducers = combineReducers({
	tasks: trackerReducer,
	projects: projectsReducer,
});

export default allReducers;
