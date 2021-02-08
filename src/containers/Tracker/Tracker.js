import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskItem from '../../components/TaskItem/TaskItem';
import Task from '../Task/Task';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchTasksList, deleteTask } from '../../store/actions/trackerActions';
import classes from './Tracker.module.css';

const Tracker = () => {
	const fetchedTasks = useSelector(state => state.tasks.tasks);
	const isLoading = useSelector(state => state.tasks.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTasksList());
	}, []);

	const handleDelete = id => {
		dispatch(deleteTask(id));
	};

	let tasks = <Spinner />;

	if (!isLoading) {
		tasks = fetchedTasks.map(task => (
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
