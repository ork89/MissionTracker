import React, { useState } from 'react';
import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';
import axios from '../../axios';

const initialState = {
	started: false,
	paused: false,
	stopped: false,
};

const fetchTasksStart = (state, action) => {
	const tasks = [];
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
