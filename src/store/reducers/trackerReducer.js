import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
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

const saveNewTaskStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const saveNewTaskSuccess = (state, action) => {
	const newTask = updateObject(action.newTask, { id: action.id });
	return updateObject(state, {
		loading: false,
		tasks: state.tasks.concat(newTask),
	});
};

const saveNewTaskFailed = (state, action) => {
	return updateObject(state, { loading: false });
};

const deleteTaskStart = (state, action) => {
	return updateObject(state, { loading: true });
};
const deleteTaskSuccess = (state, action) => {
	const updatedTasksList = state.tasks.filter((item, id) => {
		return item.id !== action.id;
	});

	return updateObject(state, { tasks: updatedTasksList, loading: false });
};
const deleteTaskFailed = (state, action) => {
	return updateObject(state, { loading: true });
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_TASKS_START:
			return fetchTasksStart(state, action);
		case actionTypes.FETCH_TASKS_SUCCESS:
			return fetchTasksSuccess(state, action);
		case actionTypes.FETCH_TASKS_FAIL:
			return fetchTasksFail(state, action);
		case actionTypes.SAVE_NEW_TASK_START:
			return saveNewTaskStart(state, action);
		case actionTypes.SAVE_NEW_TASK_SUCCESS:
			return saveNewTaskSuccess(state, action);
		case actionTypes.SAVE_NEW_TASK_FAILED:
			return saveNewTaskFailed(state, action);
		case actionTypes.DELETE_TASK_START:
			return deleteTaskStart(state, action);
		case actionTypes.DELETE_TASK_SUCCESS:
			return deleteTaskSuccess(state, action);
		case actionTypes.DELETE_TASK_FAILED:
			return deleteTaskFailed(state, action);
		default:
			return state;
	}
};

export default tasksReducer;
