import React, { useState, useEffect, Fragment } from 'react';

import TaskItem from '../../components/TaskItem/TaskItem';
import Task from '../Task/Task';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Tracker.module.css';

const Tracker = () => {
	// TODO: Replace hardcoded tasks with tasks form the DB
	const [tasksList, setTasksList] = useState([
		// {
		// 	id: 'aabbcc',
		// 	description: 'This is the first task of the project',
		// 	project: 'MissionTracker',
		// 	startTime: '08:05:10',
		// 	endTime: '09:34:44',
		// 	totalTime: '01:29:34',
		// 	date: new Date('2021-01-11T00:00:00'),
		// 	priority: 'Low',
		// },
		// {
		// 	id: 'ddeeff',
		// 	description: 'Second Task',
		// 	project: 'MissionTracker',
		// 	startTime: '09:34:44',
		// 	endTime: '10:02:39',
		// 	totalTime: '00:27:55',
		// 	date: new Date('2021-01-12T00:00:00'),
		// 	priority: 'Low',
		// },
		// {
		// 	id: 'gghhii',
		// 	description: 'Third Task',
		// 	project: 'MissionTracker',
		// 	startTime: '10:02:39',
		// 	endTime: '13:04:11',
		// 	totalTime: '03:01:16',
		// 	date: new Date('2021-01-12T00:00:00'),
		// 	priority: 'Medium',
		// },
	]);

	useEffect(() => {
		axios
			.get(
				'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
			)
			.then(response => {
				const entriesList = [];
				const fetchedTasksObject = Object.entries(response.data);

				fetchedTasksObject.forEach(el =>
					entriesList.push({ ...response.data[el], id: el })
				);

				const updatedTaskList = [];
				const fetchedTasks = fetchedTasksObject[0];
				updatedTaskList.push(fetchedTasks[1]);
				setTasksList(updatedTaskList);
			})
			.catch(error => console.log(error))
			.finally();
	}, []);

	const handleDelete = id => {
		const newTasksList = tasksList.filter(item => item.id !== id);
		setTasksList(newTasksList);
	};

	let tasks = <Spinner />;

	if (tasksList) {
		tasks = tasksList.map(task => (
			<TaskItem
				key={Math.floor(Math.random() * 10000)}
				taskId={task.id}
				description={task.description}
				project={task.project}
				startTimeInput={task.startTime}
				endTimeInput={task.endTime}
				totalTimeInput={task.totalTime}
				date={task.date}
				priority={task.priority}
				deleteItem={() => handleDelete(task.id)}
			/>
		));
	}

	return (
		<>
			<Task />
			<div className={classes.TaskItemList}>{tasks}</div>
		</>
	);
};

export default Tracker;
