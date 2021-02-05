import React, { useState, useEffect, Fragment } from 'react';

import TaskItem from '../../components/TaskItem/TaskItem';
import Task from '../Task/Task';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Tracker.module.css';

const Tracker = () => {
	// TODO: Replace hardcoded tasks with tasks form the DB
	const [tasksList, setTasksList] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
			)
			.then(response => {
				const entriesList = [];
				const fetchedTasksObject = Object.entries(response.data);

				fetchedTasksObject.forEach(el => entriesList.push({ id: el[0], ...el[1] }));
				setTasksList(entriesList);
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
