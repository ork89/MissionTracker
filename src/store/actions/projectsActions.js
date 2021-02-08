import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const createNewProjectStart = () => {
	return {
		type: actionTypes.SAVE_NEW_PROJECT_START,
	};
};

export const saveNewProjectSuccess = (id, newProject) => {
	return {
		type: actionTypes.SAVE_NEW_PROJECT_SUCCESS,
		projectId: id,
		newProject,
	};
};

export const saveNewProjectFailed = error => {
	return {
		type: actionTypes.SAVE_NEW_PROJECT_FAILED,
		error,
	};
};

export const fetchProjectsStart = () => {
	return {
		type: actionTypes.FETCH_PROJECTS_START,
	};
};

export const fetchProjectsSuccess = projects => {
	return {
		type: actionTypes.FETCH_PROJECTS_SUCCESS,
		projects,
	};
};

export const fetchProjectsFailed = error => {
	return {
		type: actionTypes.FETCH_PROJECTS_FAILED,
		error,
	};
};

export const fetchProjects = () => {
	return dispatch => {
		dispatch(fetchProjectsStart());
		axios
			.get(
				'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/projects.json'
			)
			.then(response => {
				const fetchedProjects = [];
				const fetchedProjectsObj = Object.entries(response.data);

				fetchedProjectsObj.forEach(el => fetchedProjects.push({ ...el[1], id: el[0] }));
				dispatch(fetchProjectsSuccess(fetchedProjects));
			})
			.catch(error => dispatch(fetchProjectsFailed(error)));
	};
};

export const saveProjectInDB = (projectName, clientName) => {
	const newProject = {
		name: projectName,
		totalTime: '00:00:00',
		client: clientName,
		status: 'Created',
	};

	return dispatch => {
		dispatch(createNewProjectStart());
		axios
			.post('/projects.json', newProject)
			.then(response => {
				dispatch(saveNewProjectSuccess(response.data.name, newProject));
			})
			.catch(error => dispatch(saveNewProjectFailed(error)));
	};
};
