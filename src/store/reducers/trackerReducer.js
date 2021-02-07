import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
	started: false,
	paused: false,
	stopped: false,
	tasks: [],
	loading: false,
};

const fetchTasksStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchTasksSuccess = (state, action) => {
	return updateObject(state, {
		tasks: action.tasks,
		loading: false,
	});
};

const fetchTasksFail = (state, action) => {
	return updateObject(state, {
		loading: false,
	});
};

const startTimer = (state, action) => {
	const updatedState = {
		started: true,
	};

	return updateObject(state, updatedState);
};

const pauseTimer = (state, action) => {
	const updatedState = {
		started: false,
		paused: true,
	};

	return updateObject(state, updatedState);
};

const stopTimer = (state, action) => {
	const updatedState = {
		started: false,
		paused: false,
		stopped: true,
	};

	return updateObject(state, updatedState);
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_TASKS_START:
			return fetchTasksStart(state, action);
		case actionTypes.FETCH_TASKS_SUCCESS:
			return fetchTasksSuccess(state, action);
		case actionTypes.FETCH_TASKS_FAIL:
			return fetchTasksFail(state, action);
		case actionTypes.START_TIMER:
			return startTimer(state, action);
		case actionTypes.PAUSE_TIMER:
			return pauseTimer(state, action);
		case actionTypes.STOP_TIMER:
			return stopTimer(state, action);

		default:
			return state;
	}
};

export default tasksReducer;
