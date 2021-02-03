import * as actions from './actionTypes';

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
