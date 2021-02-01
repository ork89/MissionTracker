import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
	started: null,
	recordedTime: 0,
};

const startTimer = (state, action) => {
	return updateObject(state, {
		started: action.time,
	});
};

const pauseTimer = (state, action) => {
	return updateObject(state, {
		recordedTime: state.recordedTime + action.time - state.started,
		started: null,
	});
};

const stopTimer = (state, action) => {
	return updateObject(state, {
		recordedTime: state.recordedTime + action.time - state.started,
		started: null,
	});
};

// const tick = (state, action) => {
// 	return updateObject(state, {
// 		time: state.time + (action.time - state.offset),
// 		offset: action.time,
// 	});
// };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.START_TIMER:
			return startTimer(state, action);

		case actionTypes.PAUSE_TIMER:
			return pauseTimer(state, action);

		case actionTypes.STOP_TIMER:
			return stopTimer(state, action);

		// case actionTypes.TICK:
		//     return tick(state, action);

		default:
			return state;
	}
};

export default reducer;
