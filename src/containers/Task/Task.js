import React, { useState } from 'react';

import Timer from '../../components/Timer/Timer';
import TimerControls from '../../components/Timer/TimerControls/TimerControls';
import TaskDescription from '../../components/Timer/TaskDescription/TaskDescription';
import SelectInput from '../../components/UI/Input/SelectInput';
import ProjectDialog from '../../components/UI/Dialog/ProjectDialog';
import classes from './Task.module.css';

let incrementor;

const Task = () => {
	const [secondsElapsed, setSecondsElapsed] = useState(0);
	const [isStarted, setIsStarted] = useState(false);
	const priorities = ['Non Issue', 'Low', 'Medium', 'High'];

	const getSeconds = () => {
		return `0${Math.floor(secondsElapsed % 60)}`.slice(-2);
	};

	const getMinutes = () => {
		return `0${Math.floor(secondsElapsed / 60)}`.slice(-2);
	};

	const getHours = () => {
		return `0${Math.floor(secondsElapsed / 3600)}`.slice(-2);
	};

	const timerStartedHandler = () => {
		setIsStarted(true);

		incrementor = setInterval(() => {
			setSecondsElapsed(seconds => seconds + 1);
		}, 1000);
	};

	const timerPausedHandler = () => {
		clearInterval(incrementor);
	};
	const timerStoppedHandler = () => {
		clearInterval(incrementor);
		setSecondsElapsed(0);
		setIsStarted(false);
	};

	return (
		<div className={classes.ActiveTask}>
			<Timer minutes={getMinutes()} seconds={getSeconds()} hours={getHours()} />
			<TimerControls
				timerStarted={timerStartedHandler}
				timerPaused={timerPausedHandler}
				timerStopped={timerStoppedHandler}
				disabled={!isStarted}
			/>
			<TaskDescription />
			<div className={classes.projectAndPriority}>
				<SelectInput defaultValue='Low' inputOptions={priorities} />
				<ProjectDialog />
			</div>
		</div>
	);
};

export default Task;
