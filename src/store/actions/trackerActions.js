import * as actions from './actionTypes';
import axios from '../../axios';
import totalProjectTimeCalc from '../../helpers/TotalProjectTimeCalc';

export const fetchTasksStart = () => {
	return {
		type: actions.FETCH_TASKS_START,
	};
};

export const fetchTasksSuccess = tasks => {
	return {
		type: actions.FETCH_TASKS_SUCCESS,
		tasks,
	};
};

export const fetchTasksFail = error => {
	return {
		type: actions.FETCH_TASKS_FAIL,
		error,
	};
};

export const saveNewTaskStart = () => {
	return {
		type: actions.SAVE_NEW_TASK_START,
	};
};

export const saveNewTaskSuccess = (id, newTask) => {
	return {
		type: actions.SAVE_NEW_TASK_SUCCESS,
		taskId: id,
		newTask,
	};
};

export const saveNewTaskFailed = error => {
	return {
		type: actions.SAVE_NEW_TASK_FAILED,
		error,
	};
};

export const deleteTaskStart = () => {
	return {
		type: actions.DELETE_TASK_START,
	};
};

export const deleteTaskSuccess = id => {
	return {
		type: actions.DELETE_TASK_SUCCESS,
		id,
	};
};

export const deleteTaskFailed = error => {
	return {
		type: actions.DELETE_TASK_FAILED,
		error,
	};
};

const url = 'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/tasks';
const projectsUrl =
	'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/projects';

export const fetchTasksList = token => {
	return dispatch => {
		dispatch(fetchTasksStart());
		axios
			.get(`${url}.json?auth=${token}`)
			.then(response => {
				const fetchedTasks = [];
				const fetchedTasksObject = Object.entries(response.data);
				fetchedTasksObject.forEach(el => fetchedTasks.push({ ...el[1], id: el[0] }));

				dispatch(fetchTasksSuccess(fetchedTasks));
			})
			.catch(error => dispatch(fetchTasksFail(error)));
	};
};

const doUpdate = (updatedTotalTime, id, token) => {
	axios
		.patch(`${projectsUrl}/${id}.json?auth=${token}`, { totalTime: updatedTotalTime })
		.then(res => console.log(res.data))
		.catch(error => console.log(error));
};

const updateProjectTotalTime = (projectName, totalTime, token) => {
	const queryParams = `?auth=${token}&orderBy="name"&equalTo=${projectName}"&print=pretty`;
	axios
		// .get(`${projectsUrl}.json?orderBy="name"&equalTo="${projectName}"&print=pretty`)
		.get(`${projectsUrl}.json${queryParams}`)
		.then(response => {
			const fetchedTask = Object.keys(response.data);
			const resValues = Object.values(response.data);
			const id = fetchedTask[0];
			const projectsTotalTime = resValues[0].totalTime;

			const updatedTotalTime = totalProjectTimeCalc(projectsTotalTime, totalTime);
			console.log({ updatedTotalTime });
			doUpdate(updatedTotalTime, id, token);
		})
		.catch(error => console.log(error));
};

export const createNewTask = (newTask, token) => {
	return dispatch => {
		dispatch(saveNewTaskStart());
		axios
			.post(`/tasks.json?auth=${token}`, newTask)
			.then(response => {
				updateProjectTotalTime(newTask.project, newTask.totalTime, token);
				dispatch(saveNewTaskSuccess(response.data.name, newTask));
			})
			.catch(error => dispatch(saveNewTaskFailed(error)));
	};
};

export const deleteTask = (id, token) => {
	return dispatch => {
		dispatch(deleteTaskStart());
		axios
			.delete(`${url}/${id}.json?auth=${token}`)
			.then(response => {
				dispatch(deleteTaskSuccess(id));
			})
			.catch(error => dispatch(deleteTaskFailed(error)));
	};
};
