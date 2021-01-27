import * as actionTypes from './actionTypes';

// Action Creators:
export const startTimer = offset => {
	return {
		type: actionTypes.START_TIMER,
		offset,
	};
};

export const pauseTimer = () => {
	return {
		type: actionTypes.PAUSE_TIMER,
	};
};

export const stopTimer = () => {
	return {
		type: actionTypes.STOP_TIMER,
	};
};

export const tick = time => {
	return {
		type: actionTypes.TICK,
		time,
	};
};
