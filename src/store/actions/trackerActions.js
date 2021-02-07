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

export const startTimer = () => {
	return {
		type: actions.START_TIMER,
	};
};

export const pauseTimer = () => {
	return {
		type: actions.PAUSE_TIMER,
	};
};

export const stopTimer = () => {
	return {
		type: actions.STOP_TIMER,
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
