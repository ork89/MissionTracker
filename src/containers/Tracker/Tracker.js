import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskItem from '../../components/TaskItem/TaskItem';
import Task from '../Task/Task';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchTasksList } from '../../store/actions/trackerActions';
import classes from './Tracker.module.css';

const url = 'https://mission-time-tracker-default-rtdb.europe-west1.firebasedatabase.app/tasks';

const Tracker = () => {
	const fetchedTasks = useSelector(state => state.tasks.tasks);
	const isLoading = useSelector(state => state.tasks.loading);
	console.log(fetchedTasks);
	const [tasksList, setTasksList] = useState(fetchedTasks);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTasksList());
		setTasksList(fetchedTasks);
	}, []);

	const handleDelete = id => {
		axios
			.delete(`${url}/${id}.json`)
			.then(dispatch(fetchTasksList()))
			.catch(error => console.log(error));
	};

	let tasks = <Spinner />;

	if (!isLoading) {
		const listOfTasks = tasksList.length === 0 ? fetchedTasks : tasksList;
		tasks = listOfTasks.map(task => (
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
