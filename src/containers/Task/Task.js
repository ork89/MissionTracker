import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios';

import Timer from '../../components/Timer/Timer';
import TimerControls from '../../components/Timer/TimerControls/TimerControls';
import TaskDescription from '../../components/Timer/TaskDescription/TaskDescription';
import SelectInput from '../../components/UI/Input/SelectInput';
import ProjectDialog from '../../components/UI/Dialog/ProjectDialog';
import { startTimer, stopTimer, pauseTimer } from '../../store/actions/trackerActions';
import classes from './Task.module.css';

let incrementor;

const Task = () => {
	const [secondsElapsed, setSecondsElapsed] = useState(0);
	const [isStarted, setIsStarted] = useState(false);
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [inputSelectedValue, setInputSelectedValue] = useState();
	const [description, setDescription] = useState('');
	const [selectedProjectName, setSelectedProjectName] = useState('');
	const dispatch = useDispatch();

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

	const createNewTaskInDB = () => {
		const currentTime = `${getHours()}:${getMinutes()}:${getSeconds()}`;

		const newTask = {
			desc: description,
			startTime,
			endTime,
			totalTime: currentTime,
			date: new Date(),
			project: selectedProjectName,
			priority: inputSelectedValue,
			user: {
				name: 'Tester',
				email: 'test@test.com',
			},
		};
		axios
			.post('/tasks.json', newTask)
			.then(response => console.log(response))
			.catch(error => console.log(error));
	};

	const timerStartedHandler = () => {
		setIsStarted(true);
		const dateTime = new Date();
		const localStartTime = dateTime.toLocaleTimeString();
		setStartTime(localStartTime);
		dispatch(startTimer());

		incrementor = setInterval(() => {
			setSecondsElapsed(seconds => seconds + 1);
		}, 1000);
	};

	const timerPausedHandler = () => {
		clearInterval(incrementor);
		dispatch(pauseTimer());
	};

	const timerStoppedHandler = () => {
		clearInterval(incrementor);
		setSecondsElapsed(0);
		setIsStarted(false);
		dispatch(stopTimer());

		const dateTime = new Date();
		const localEndTime = dateTime.toLocaleTimeString();
		setEndTime(localEndTime);
		createNewTaskInDB();
	};

	const handleSelectedValue = value => {
		setInputSelectedValue(value);
	};

	const handleDescriptionChanged = input => {
		setDescription(input);
	};

	const handleProjectSelected = projectName => {
		setSelectedProjectName(projectName);
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
			<TaskDescription input={handleDescriptionChanged} />
			<div className={classes.projectAndPriority}>
				<SelectInput
					defaultValue='Low'
					inputOptions={priorities}
					selectedValue={handleSelectedValue}
				/>
				<ProjectDialog selectedProject={handleProjectSelected} />
			</div>
		</div>
	);
};

export default Task;
