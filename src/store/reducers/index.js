import { combineReducers } from 'redux';
import trackerReducer from './trackerReducer';
import projectsReducer from './projectsReducer';
import authReducer from './auth';

const allReducers = combineReducers({
	tasks: trackerReducer,
	projects: projectsReducer,
	auth: authReducer,
});

export default allReducers;
