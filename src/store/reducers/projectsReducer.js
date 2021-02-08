import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
	projects: [],
	loading: false,
};

const fetchProjectsStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchProjectsSuccess = (state, action) => {
	return updateObject(state, {
		projects: action.projects,
		loading: false,
	});
};

const fetchProjectsFailed = (state, action) => {
	return updateObject(state, {
		loading: false,
	});
};

const saveNewProjectStart = (state, action) => {
	return updateObject(state, {
		loading: true,
	});
};
const saveNewProjectSuccess = (state, action) => {
	const newProject = updateObject(action.newProject, { id: action.id });
	return updateObject(state, {
		loading: false,
		projects: state.projects.concat(newProject),
	});
};
const saveNewProjectFailed = (state, action) => {
	return updateObject(state, { loading: false });
};

const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PROJECTS_START:
			return fetchProjectsStart(state, action);
		case actionTypes.FETCH_PROJECTS_SUCCESS:
			return fetchProjectsSuccess(state, action);
		case actionTypes.FETCH_PROJECTS_FAILED:
			return fetchProjectsFailed(state, action);
		case actionTypes.SAVE_NEW_PROJECT_START:
			return saveNewProjectStart(state, action);
		case actionTypes.SAVE_NEW_PROJECT_SUCCESS:
			return saveNewProjectSuccess(state, action);
		case actionTypes.SAVE_NEW_PROJECT_FAILED:
			return saveNewProjectFailed(state, action);
		default:
			return state;
	}
};

export default projectsReducer;
