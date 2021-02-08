import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Timer from '../../components/Timer/Timer';
import TimerControls from '../../components/Timer/TimerControls/TimerControls';
import ProjectDialog from '../../components/UI/Dialog/ProjectDialog';
import { fetchTasksList, createNewTask } from '../../store/actions/trackerActions';
import classes from './Task.module.css';

const useStyles = makeStyles(() => ({
	underLine: {
		display: 'flex',
		'& .MuiInput-underline:before': {
			border: 'none',
			alignItems: 'center',
			justifyContent: 'center',
		},
		'& .MuiInputLabel-formControl': {
			marginTop: '8px',
		},
		'& label + .MuiInput-formControl': {
			marginTop: '24px',
		},
	},
}));

let incrementor;
let endTime = '00:00:00';
const priorities = ['Non Issue', 'Low', 'Medium', 'High'];

const Task = () => {
	const styles = useStyles();
	const [secondsElapsed, setSecondsElapsed] = useState(0);
	const [isStarted, setIsStarted] = useState(false);
	const [startTime, setStartTime] = useState('00:00:00');
	const [description, setDescription] = useState('');
	// TODO: get a list of projects from the DB and instantiate 'selectedProjectName' with the first one.
	const [selectedProjectName, setSelectedProjectName] = useState('MissionTracker');
	const [inputSelectedValue, setInputSelectedValue] = useState(priorities[1]);
	const dispatch = useDispatch();

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
			description,
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

		dispatch(createNewTask(newTask));
		dispatch(fetchTasksList());
	};

	const timerStartedHandler = () => {
		setIsStarted(true);
		const dateTime = new Date();
		const localStartTime = dateTime.toLocaleTimeString();
		setStartTime(localStartTime.slice(0, localStartTime.length - 2));

		incrementor = setInterval(() => {
			setSecondsElapsed(seconds => seconds + 1);
		}, 1000);
	};

	const timerPausedHandler = () => {
		clearInterval(incrementor);
	};

	const timerStoppedHandler = () => {
		setIsStarted(false);
		const dateTime = new Date();
		const localEndTime = dateTime.toLocaleTimeString();
		endTime = localEndTime.slice(0, localEndTime.length - 2);

		clearInterval(incrementor);
		setSecondsElapsed(0);
		setDescription('');

		createNewTaskInDB();
	};

	const handleSelectedValue = event => {
		setInputSelectedValue(event.target.value);
	};

	const handleDescriptionChanged = event => {
		setDescription(event.target.value);
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

			{/* ---Description--- */}
			<FormControl>
				<TextField
					label='Task description'
					disableUnderline
					className={styles.underLine}
					style={{ justifyContent: 'center' }}
					value={description}
					onChange={handleDescriptionChanged}
					inputProps={{ 'aria-label': 'naked' }}
				/>
			</FormControl>

			{/* ---Project selection dialog--- */}
			<div className={classes.projectAndPriority}>
				<FormControl>
					<Select
						value={inputSelectedValue}
						onChange={handleSelectedValue}
						disableUnderline
						inputProps={{ 'aria-label': 'Without label' }}>
						{priorities.map(p => {
							return (
								<MenuItem value={p} key={`project-select-${p}`}>
									{p}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<ProjectDialog
					selectedProject={handleProjectSelected}
					defaultValue={selectedProjectName}
				/>
			</div>
		</div>
	);
};

export default Task;
