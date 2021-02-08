import * as actions from './actionTypes';
import axios from '../../axios';

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

export const fetchTasksList = () => {
	return dispatch => {
		dispatch(fetchTasksStart());
		axios
			.get(
				'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
			)
			.then(response => {
				const fetchedTasks = [];
				const fetchedTasksObject = Object.entries(response.data);

				fetchedTasksObject.forEach(el => fetchedTasks.push({ ...el[1], id: el[0] }));
				console.log({ fetchedTasks });
				dispatch(fetchTasksSuccess(fetchedTasks));
			})
			.catch(error => dispatch(fetchTasksFail(error)));
	};
};

export const createNewTask = newTask => {
	return dispatch => {
		dispatch(saveNewTaskStart());
		axios
			.post('/tasks.json', newTask)
			.then(response => {
				dispatch(saveNewTaskSuccess(response.data.name, newTask));
			})
			.catch(error => dispatch(saveNewTaskFailed(error)));
	};
};

const url = 'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/tasks';
export const deleteTask = id => {
	return dispatch => {
		dispatch(deleteTaskStart());
		axios
			.delete(`${url}/${id}.json`)
			.then(response => {
				dispatch(deleteTaskSuccess(id));
			})
			.catch(error => dispatch(deleteTaskFailed(error)));
	};
};
