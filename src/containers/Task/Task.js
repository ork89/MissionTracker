import React, { useState } from 'react';

import Timer from '../../components/Timer/Timer';
import TimerControls from '../../components/Timer/TimerControls/TimerControls';
import TaskDescription from '../../components/Timer/TaskDescription/TaskDescription';

import classes from './Task.module.css';

let incrementor;

const Task = () => {
	const [secondsElapsed, setSecondsElapsed] = useState(0);
	const [isStarted, setIsStarted] = useState(false);

	const getSeconds = () => {
		return ('0' + Math.floor(secondsElapsed % 60)).slice(-2);
	};

	const getMinutes = () => {
		return ('0' + Math.floor(secondsElapsed / 60)).slice(-2);
	};

	const getHours = () => {
		return ('0' + Math.floor(secondsElapsed / 3600)).slice(-2);
	};

	const timerStartedHandler = () => {
		setIsStarted(true);
		console.log('Timer Started');

		incrementor = setInterval(() => {			
			setSecondsElapsed(secondsElapsed => secondsElapsed + 1);
		}, 1000);
	};

	const timerPausedHandler = () => {
		clearInterval(incrementor);
		console.log('Timer Paused');
	};
	const timerStoppedHandler = () => {
		clearInterval(incrementor);
		setSecondsElapsed(0);
		setIsStarted(false);
		console.log('Timer Stopped');
	};

	return (
		<div className={classes.Task}>
			<Timer
				minutes={getMinutes()}
				seconds={getSeconds()}
				hours={getHours()} />
			<TimerControls
				timerStarted={timerStartedHandler}
				timerPaused={timerPausedHandler}
				timerStopped={timerStoppedHandler}
				disabled={!isStarted} />
			<TaskDescription />
		</div>
	);
};

export default Task;
